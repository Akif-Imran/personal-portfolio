"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { nav, profile } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";
import { Close, Menu } from "./icons";
import { buttonStyles, Container, cx } from "./ui";

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

const getScrolled = () => window.scrollY > 16;
const getScrolledOnServer = () => false;

/** Tracks which section currently sits in the reading band of the viewport. */
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = nav.map((item) => item.id);

export function SiteHeader() {
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    getScrolled,
    getScrolledOnServer,
  );
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500",
        solid
          ? "border-line bg-bg/80 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="font-serif text-[1.65rem] leading-none tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={cx(
                      "relative rounded-full px-3.5 py-2 text-[13px] transition-colors",
                      isActive ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cx(
                        "absolute inset-x-3.5 -bottom-px h-px origin-left bg-accent transition-transform duration-500",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className={cx(buttonStyles.small, "hidden sm:inline-flex")}
          >
            Résumé
          </a>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full border border-line text-fg md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <Close className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg md:hidden"
      >
        <Container className="flex h-full flex-col justify-between py-10">
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-4 py-2 font-serif text-5xl"
                  >
                    <span className="font-mono text-xs text-accent">
                      {item.index}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className={cx(buttonStyles.ghost, "w-full")}
          >
            Download résumé
          </a>
        </Container>
      </div>
    </header>
  );
}

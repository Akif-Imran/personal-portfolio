import { profile, socials } from "@/lib/content";
import { CopyEmailButton } from "../copy-email";
import { ArrowDown, ArrowUpRight } from "../icons";
import { buttonStyles, Container, cx } from "../ui";

export function Contact() {
  const links = [
    ...socials.map((s) => ({ ...s, download: false })),
    { label: "Résumé", handle: "PDF · 3 pages", href: profile.resume, download: true },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden border-t border-line py-28 md:py-40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-72 left-[-15%] size-[44rem] rounded-full bg-accent opacity-[0.08] blur-[120px]" />
      </div>

      <Container>
        <p className="eyebrow">
          <span className="text-accent">(06)</span>&ensp;Contact
        </p>
        <h2
          id="contact-title"
          className="reveal display mt-8 max-w-5xl font-serif text-[clamp(3.25rem,9vw,8rem)] leading-[0.92] tracking-[-0.02em] text-balance"
        >
          Let&rsquo;s build something <em>that holds up.</em>
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="reveal mt-12 inline-block font-serif text-[clamp(1.75rem,5vw,3.5rem)] leading-tight break-words underline decoration-line-strong decoration-1 underline-offset-[0.2em] transition-colors hover:decoration-accent md:mt-16"
        >
          {profile.email}
        </a>

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-center">
          <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted md:col-span-7">
            Open to senior React and full-stack roles, and to select freelance
            engagements. If your product needs to be fast, real-time, or both —
            I&rsquo;d like to hear about it.
          </p>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <a href={`mailto:${profile.email}`} className={buttonStyles.primary}>
              Write an email
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <CopyEmailButton email={profile.email} />
          </div>
        </div>

        <ul className="mt-20 grid border-t border-line sm:grid-cols-3 md:mt-28">
          {links.map((link, i) => (
            <li
              key={link.label}
              className="border-b border-line sm:border-b-0 sm:[&:not(:last-child)]:border-r"
            >
              <a
                href={link.href}
                target="_blank"
                rel={link.download ? "noopener" : "noopener noreferrer"}
                className={cx(
                  "group flex items-center justify-between gap-6 py-6 sm:py-8",
                  i === 0 ? "sm:pr-6" : "sm:px-6",
                )}
              >
                <span>
                  <span className="eyebrow block">{link.label}</span>
                  <span className="mt-2 block text-lg transition-colors group-hover:text-accent">
                    {link.handle}
                  </span>
                </span>
                {link.download ? (
                  <ArrowDown className="size-5 text-subtle transition-[color,transform] duration-300 group-hover:translate-y-0.5 group-hover:text-accent" />
                ) : (
                  <ArrowUpRight className="size-5 text-subtle transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

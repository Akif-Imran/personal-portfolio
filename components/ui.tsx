import type { ComponentProps, ReactNode } from "react";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cx("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}
      {...props}
    />
  );
}

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

/** Editorial section: numbered label on a 3-col rail, display heading on the 9-col body. */
export function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
  className,
}: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cx("border-t border-line py-24 md:py-36", className)}
    >
      <Container>
        <header className="grid gap-6 md:grid-cols-12 md:gap-8">
          <p className="eyebrow md:col-span-3 md:pt-4">
            <span className="text-accent">({index})</span>&ensp;{label}
          </p>
          <div className="md:col-span-9">
            <h2
              id={headingId}
              className="display font-serif text-[clamp(2.75rem,6.5vw,5.25rem)] leading-[0.98] tracking-[-0.015em] text-balance"
            >
              {title}
            </h2>
            {intro ? (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">
                {intro}
              </p>
            ) : null}
          </div>
        </header>
        <div className="mt-16 md:mt-24">{children}</div>
      </Container>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-wide text-muted">
      {children}
    </li>
  );
}

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-[background-color,color,border-color,transform] duration-300 active:scale-[0.98]";

export const buttonStyles = {
  primary: cx(
    buttonBase,
    "bg-fg px-6 py-3.5 text-bg hover:bg-accent hover:text-bg",
  ),
  ghost: cx(
    buttonBase,
    "border border-line-strong px-6 py-3.5 text-fg hover:border-fg",
  ),
  small: cx(
    buttonBase,
    "border border-line-strong px-4 py-2 text-[13px] text-fg hover:border-fg",
  ),
};

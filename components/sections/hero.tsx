import type { ReactNode } from "react";
import { profile, regions } from "@/lib/content";
import { ArrowDown } from "../icons";
import { LocalTime } from "../local-time";
import { buttonStyles, Container, cx } from "../ui";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute -top-56 right-[-18%] size-[44rem] rounded-full bg-accent opacity-[0.09] blur-[120px]" />
      </div>

      <Container>
        <p className="rise eyebrow flex items-center gap-3">
          <span className="relative flex size-2">
            <span className="breathe absolute inset-0 rounded-full bg-accent" />
          </span>
          {profile.name} — {profile.role}
        </p>

        <h1
          id="hero-title"
          className="rise display mt-8 max-w-5xl font-serif text-[clamp(3.4rem,10vw,9rem)] leading-[0.9] tracking-[-0.025em] text-balance [--delay:90ms]"
        >
          Interfaces for data that <em>never sits still.</em>
        </h1>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end">
          <p className="rise max-w-2xl text-lg leading-relaxed text-pretty text-muted md:col-span-7 md:text-xl [--delay:180ms]">
            I&rsquo;m {profile.firstName} — a senior full-stack engineer specialising in{" "}
            <span className="text-fg">React, Next.js and Node.js</span>. For four years
            I&rsquo;ve built products on live, high-volume data: IoT telemetry from
            production lines, real-time GPS fleets, and trade intelligence across
            billions of customs records.
          </p>
          <div className="rise flex flex-wrap gap-3 md:col-span-5 md:justify-end [--delay:260ms]">
            <a href="#work" className={buttonStyles.primary}>
              View selected work
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a href="#contact" className={buttonStyles.ghost}>
              Get in touch
            </a>
          </div>
        </div>

        <dl className="rise mt-20 grid border-t border-line sm:grid-cols-3 md:mt-28 [--delay:340ms]">
          <MetaItem label="Currently">{profile.availability}</MetaItem>
          <MetaItem label="Based in">
            {profile.location}
            <span className="mt-1 block font-mono text-xs text-subtle">
              <LocalTime timeZone={profile.timeZone} /> · {profile.timeZoneLabel}
            </span>
          </MetaItem>
          <MetaItem label="Previously" last>
            Vertex AI, Singapore
            <br />
            M2M Networks, Kuala Lumpur
          </MetaItem>
        </dl>

        <p className="rise mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-2 text-sm text-subtle [--delay:420ms]">
          <span className="eyebrow">Shipped for teams in</span>
          {regions.map((region, i) => (
            <span key={region} className="font-serif text-xl text-muted italic">
              {region}
              {i < regions.length - 1 ? (
                <span aria-hidden="true" className="ml-3 text-line-strong not-italic">
                  /
                </span>
              ) : null}
            </span>
          ))}
        </p>
      </Container>
    </section>
  );
}

function MetaItem({
  label,
  children,
  last,
}: {
  label: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={cx(
        "border-b border-line py-6 sm:border-b-0 sm:py-7 sm:pr-8",
        !last && "sm:border-r",
        "sm:[&:not(:first-child)]:pl-8",
      )}
    >
      <dt className="eyebrow">{label}</dt>
      <dd className="mt-3 text-[15px] leading-snug text-fg">{children}</dd>
    </div>
  );
}

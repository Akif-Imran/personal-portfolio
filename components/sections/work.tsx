import type { ReactNode } from "react";
import {
  featuredProjects,
  moreProjects,
  type MinorProject,
  type Project,
} from "@/lib/content";
import { ArrowUpRight } from "../icons";
import { ProjectArt } from "../project-art";
import { cx, Section, Tag } from "../ui";

const hostname = (href: string) => new URL(href).hostname.replace(/^www\./, "");

export function Work() {
  return (
    <Section
      id="work"
      index="02"
      label="Selected work"
      title={
        <>
          Platforms built for <em>real-world load.</em>
        </>
      }
      intro="Four products across trade, logistics, home services and regulation — each shipped to real users, under real constraints."
    >
      <div className="space-y-24 md:space-y-36">
        {featuredProjects.map((project, i) => (
          <FeaturedProject key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="mt-28 md:mt-40">
        <div className="flex items-end justify-between gap-6">
          <h3 className="font-serif text-4xl tracking-tight md:text-5xl">
            Also shipped
          </h3>
          <p className="eyebrow">2022 — 2025</p>
        </div>
        <ul className="mt-8 border-t border-line">
          {moreProjects.map((project) => (
            <MinorProjectRow key={project.name} project={project} />
          ))}
        </ul>
      </div>
    </Section>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  const titleId = `${project.slug}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="reveal grid items-center gap-10 md:grid-cols-12 md:gap-14"
    >
      <div className={cx("md:col-span-7", flip && "md:order-2")}>
        <ProjectArt kind={project.art} />
      </div>

      <div className="md:col-span-5">
        <p className="eyebrow">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          &ensp;·&ensp;{project.category}
        </p>
        <h3
          id={titleId}
          className="mt-5 font-serif text-5xl leading-none tracking-[-0.015em] md:text-6xl"
        >
          {project.name}
        </h3>
        <p className="mt-3 font-serif text-xl text-accent italic">{project.tagline}</p>
        <p className="mt-6 leading-relaxed text-pretty text-muted">{project.summary}</p>

        <ul className="mt-6 space-y-2.5">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-[15px] leading-snug">
              <span aria-hidden="true" className="mt-[0.6em] h-px w-4 shrink-0 bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 text-sm">
          <Meta label="Role">{project.role}</Meta>
          <Meta label="Timeline">{project.period}</Meta>
          <Meta label="Organisation">{project.org}</Meta>
          <Meta label="Location">{project.location}</Meta>
        </dl>

        <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies and focus areas">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>

        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-sm text-fg underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-accent"
          >
            Visit {hostname(project.href)}
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function Meta({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="eyebrow">{label}</dt>
      <dd className="mt-1.5 leading-snug">{children}</dd>
    </div>
  );
}

function MinorProjectRow({ project }: { project: MinorProject }) {
  return (
    <li className="reveal grid gap-2 border-b border-line py-7 md:grid-cols-12 md:items-baseline md:gap-8">
      <span className="font-mono text-xs text-subtle md:col-span-2">{project.period}</span>
      <h4 className="font-serif text-3xl leading-tight tracking-tight md:col-span-4">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            {project.name}
            <ArrowUpRight className="size-4 text-subtle transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            <span className="sr-only">(opens {hostname(project.href)})</span>
          </a>
        ) : (
          project.name
        )}
      </h4>
      <p className="leading-relaxed text-pretty text-muted md:col-span-4">{project.summary}</p>
      <span className="text-sm text-subtle md:col-span-2 md:text-right">{project.location}</span>
    </li>
  );
}

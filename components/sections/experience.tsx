import { experience } from "@/lib/content";
import { Section, Tag } from "../ui";

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title={
        <>
          Four years of building <em>in production.</em>
        </>
      }
      intro="From an IoT platform in Kuala Lumpur to enterprise trade intelligence in Singapore — with independent client work running alongside."
    >
      <ol className="border-t border-line">
        {experience.map((role) => (
          <li
            key={`${role.company}-${role.period}`}
            className="reveal grid gap-6 border-b border-line py-12 md:grid-cols-12 md:gap-8 md:py-16"
          >
            <div className="md:col-span-3">
              <p className="font-mono text-xs tracking-wide text-fg">{role.period}</p>
              <p className="mt-2 text-sm text-subtle">{role.location}</p>
            </div>

            <div className="md:col-span-9">
              <h3 className="font-serif text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
                {role.role}
              </h3>
              <p className="mt-2 text-lg text-accent">{role.company}</p>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-pretty text-muted">
                {role.summary}
              </p>

              <ul className="mt-6 grid max-w-3xl gap-3">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-snug">
                    <span aria-hidden="true" className="mt-[0.6em] h-px w-4 shrink-0 bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Focus areas">
                {role.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

import { coreStack, skillGroups } from "@/lib/content";
import { Spotlight } from "../spotlight";
import { cx, Section } from "../ui";

const core = new Set(coreStack.map((skill) => skill.name));

export function Expertise() {
  return (
    <Section
      id="expertise"
      index="04"
      label="Expertise"
      title={
        <>
          Deep in React. <em>Fluent across the stack.</em>
        </>
      }
      intro="My core is the modern React ecosystem. Around it sits everything a product needs to go from schema to screen — and to keep working once it gets there."
    >
      <p className="eyebrow">Core stack</p>
      <ul className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {coreStack.map((skill, i) => (
          <li key={skill.name} className="flex">
            <Spotlight className="reveal flex w-full flex-col bg-bg p-7 md:p-8">
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-12 font-serif text-4xl tracking-tight md:text-[2.75rem]">
                {skill.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-pretty text-muted">
                {skill.note}
              </p>
            </Spotlight>
          </li>
        ))}
      </ul>

      <dl className="mt-20 border-t border-line md:mt-24">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="reveal grid gap-3 border-b border-line py-6 md:grid-cols-12 md:gap-8 md:py-7"
          >
            <dt className="eyebrow md:col-span-3 md:pt-1.5">{group.title}</dt>
            <dd className="md:col-span-9">
              <ul className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-[17px] leading-relaxed">
                {group.items.map((item, i) => (
                  <li key={item} className={cx(core.has(item) ? "text-fg" : "text-muted")}>
                    {item}
                    {i < group.items.length - 1 ? (
                      <span aria-hidden="true" className="ml-2.5 text-line-strong">
                        /
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

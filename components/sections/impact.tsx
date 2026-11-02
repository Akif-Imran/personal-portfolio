import { impact } from "@/lib/content";
import { Spotlight } from "../spotlight";
import { Section } from "../ui";

export function Impact() {
  return (
    <Section
      id="impact"
      index="01"
      label="Impact"
      title={
        <>
          Outcomes, not just <em>output.</em>
        </>
      }
      intro="A few results I'm proud of — measured in records, terabytes, operating costs and the confidence to change old code."
    >
      <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2">
        {impact.map((item, i) => (
          <li key={item.metric} className="flex">
            <Spotlight className="reveal flex w-full flex-col bg-bg p-8 md:p-12">
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="eyebrow text-right">{item.context}</span>
              </div>
              <p className="mt-14 font-serif text-[clamp(3.5rem,7.5vw,6.25rem)] leading-[0.9] tracking-[-0.02em] md:mt-20">
                {item.metric}
              </p>
              <p className="mt-4 text-lg text-fg">{item.label}</p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-pretty text-muted">
                {item.detail}
              </p>
            </Spotlight>
          </li>
        ))}
      </ul>

      <p className="reveal mt-10 grid gap-2 text-[15px] leading-relaxed text-muted md:grid-cols-12 md:gap-8">
        <span className="eyebrow md:col-span-3 md:pt-1">Also built</span>
        <span className="md:col-span-9">
          A real-time resource monitoring &amp; management system and a
          facial-recognition REST API on <span className="text-fg">ASP.NET Core</span>{" "}
          with <span className="text-fg">EF Core</span>.
        </span>
      </p>
    </Section>
  );
}

import { credentials, principles, profile, socials } from "@/lib/content";
import { ArrowUpRight } from "../icons";
import { Section } from "../ui";

const leetcode = socials.find((s) => s.label === "LeetCode");

export function About() {
  return (
    <Section
      id="about"
      index="05"
      label="About"
      title={
        <>
          Engineering with <em>calm precision.</em>
        </>
      }
    >
      <div className="grid gap-14 md:grid-cols-12 md:gap-8">
        <aside className="md:col-span-3" aria-label="Credentials">
          <dl className="space-y-8">
            {credentials.map((item) => (
              <div key={item.title}>
                <dt className="eyebrow">{item.kind}</dt>
                <dd className="mt-2">
                  <p className="font-serif text-2xl leading-tight">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.detail}</p>
                  {item.period ? (
                    <p className="mt-1 font-mono text-xs text-subtle">{item.period}</p>
                  ) : null}
                </dd>
              </div>
            ))}
            {leetcode ? (
              <div>
                <dt className="eyebrow">Problem solving</dt>
                <dd className="mt-2">
                  <a
                    href={leetcode.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-serif text-2xl leading-tight transition-colors hover:text-accent"
                  >
                    LeetCode
                    <ArrowUpRight className="size-4 text-subtle transition-colors group-hover:text-accent" />
                  </a>
                  <p className="mt-1.5 text-sm text-muted">Data structures &amp; algorithms practice</p>
                </dd>
              </div>
            ) : null}
          </dl>
        </aside>

        <div className="md:col-span-9">
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-pretty text-muted md:text-xl">
            <p>
              <span className="text-fg">
                I&rsquo;m a senior full-stack engineer based in {profile.location}.
              </span>{" "}
              I began my career at M2M Networks in Kuala Lumpur, building React and
              React Native apps that streamed IoT data from production lines and
              tracked forklifts by GPS in real time. Most recently I was a Senior
              Full-Stack Developer at Vertex AI in Singapore, working on Importscan —
              trade intelligence built on billions of customs records.
            </p>
            <p>
              Alongside that, I work independently with clients in the United States,
              Canada and Mexico, owning products end-to-end across web, mobile and
              backend. My toolkit reaches beyond JavaScript into C# and ASP.NET Core
              — and into Microsoft 365 and AWS consulting.
            </p>
            <p>
              What ties it together is a bias for interfaces that feel effortless{" "}
              <span className="text-fg">
                because the hard parts underneath — sockets, queries, data contracts,
                tests — were taken seriously.
              </span>
            </p>
          </div>

          <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 md:mt-20">
            {principles.map((principle, i) => (
              <li key={principle.title} className="reveal bg-bg p-7 md:p-9">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-serif text-3xl leading-tight tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-pretty text-muted">
                  {principle.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

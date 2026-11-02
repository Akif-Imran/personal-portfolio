import { profile } from "@/lib/content";
import { ArrowUp } from "../icons";
import { Container } from "../ui";

/** Captured into the static shell and refreshed on revalidation. */
async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-4 py-10 text-sm text-subtle md:flex-row md:items-center md:justify-between">
        <p>
          © <CopyrightYear /> {profile.name}. Designed &amp; engineered in Rawalpindi.
        </p>
        <p>Built with Next.js, React &amp; Tailwind CSS.</p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 transition-colors hover:text-fg"
        >
          Back to top
          <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </a>
      </Container>
    </footer>
  );
}

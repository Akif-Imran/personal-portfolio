import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Expertise } from "@/components/sections/expertise";
import { Hero } from "@/components/sections/hero";
import { Impact } from "@/components/sections/impact";
import { Work } from "@/components/sections/work";
import { coreStack, profile, socials } from "@/lib/content";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  description: profile.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rawalpindi",
    addressCountry: "PK",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "PMAS Arid Agriculture University",
  },
  knowsAbout: [...coreStack.map((s) => s.name), "React Native", "Socket.IO", "AWS"],
  sameAs: socials.map((s) => s.href),
};

export default function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <Work />
      <Experience />
      <Expertise />
      <About />
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}

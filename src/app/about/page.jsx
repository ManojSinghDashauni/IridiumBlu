import { GsapReveal } from "@/components/GsapReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbSchema, canonical, jsonLdScript } from "@/lib/seo/structured-data";

export const metadata = {
  title: "About",
  description: "The story of Kainchi Retreat — a family-built boutique stay rooted in Kumaoni hospitality.",
  alternates: { canonical: canonical("/about") },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }])) }} />
      <section className="pt-32 pb-16 mx-auto max-w-4xl px-6 text-center">
        <GsapReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Since 2018</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-tight">Built slowly, by people who grew up in these hills.</h1>
        </GsapReveal>
      </section>
      <section className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 items-center mb-24">
        <GsapReveal><img src="https://images.unsplash.com/photo-1518737743670-2bf64a9f6a76?auto=format&fit=crop&w=1400&q=80" alt="Kumaoni hillside village" className="w-full aspect-[4/5] object-cover rounded-lg" /></GsapReveal>
        <GsapReveal><SectionHeading eyebrow="Our story" title="A pilgrimage that became a home." description="We first came to Kainchi as visitors and never quite left." /></GsapReveal>
      </section>
    </>
  );
}
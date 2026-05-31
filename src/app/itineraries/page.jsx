import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { GsapReveal } from "@/components/GsapReveal";
import { itineraries } from "@/lib/data/site";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema, canonical } from "@/lib/seo/structured-data";

export const metadata = {
  title: "Itineraries",
  description: "Suggested 2-day and 4-day itineraries.",
  alternates: { canonical: canonical("/itineraries") },
};

export default function ItinerariesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Itineraries", url: "/itineraries" }])) }} />
      <section className="pt-32 pb-16 mx-auto max-w-4xl px-6 text-center">
        <SectionHeading eyebrow="Itineraries" title="A loose plan, with room to wander." align="center" />
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-24 grid gap-16">
        {itineraries.map((it) => (
          <GsapReveal key={it.id}>
            <article className="bg-card border border-border rounded-lg p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{it.duration}</p>
              <h2 className="font-display text-4xl mt-2">{it.title}</h2>
              <p className="mt-3 text-muted-foreground">{it.summary}</p>
              <ol className="mt-8 grid gap-6">
                {it.days.map((d) => (
                  <li key={d.day} className="border-l-2 border-primary/40 pl-5">
                    <p className="font-display text-xl text-foreground">{d.day}</p>
                    <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
                      {d.activities.map((a) => <li key={a}>{a}</li>)}
                    </ul>
                  </li>
                ))}
              </ol>
              <Button asChild className="mt-8 rounded-full px-6"><Link href="/contact">Plan this stay</Link></Button>
            </article>
          </GsapReveal>
        ))}
      </section>
    </>
  );
}
import { SectionHeading } from "@/components/SectionHeading";
import { GsapReveal } from "@/components/GsapReveal";
import { eventTypes } from "@/lib/data/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { breadcrumbSchema, canonical, eventVenueSchema } from "@/lib/seo/structured-data";

export const metadata = {
  title: "Weddings & Events",
  description: "Intimate weddings, corporate offsites, and milestone celebrations at our Himalayan retreat.",
  alternates: { canonical: canonical("/events") },
};

export default function EventsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventVenueSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Events", url: "/events" }])) }} />
      <section className="pt-32 pb-16 mx-auto max-w-4xl px-6 text-center">
        <SectionHeading eyebrow="Events" title="Gather, in a place that remembers." align="center" />
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <GsapReveal className="grid gap-8 md:grid-cols-3" stagger={0.12}>
          {eventTypes.map((e) => (
            <article key={e.title} className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden"><img src={e.image} alt={e.title} loading="lazy" className="size-full object-cover" /></div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{e.title}</h3>
                <p className="mt-2 text-muted-foreground">{e.description}</p>
                <p className="mt-4 text-xs uppercase text-primary">{e.capacity}</p>
              </div>
            </article>
          ))}
        </GsapReveal>
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full px-7"><Link href="/contact">Plan with us</Link></Button>
        </div>
      </section>
    </>
  );
}
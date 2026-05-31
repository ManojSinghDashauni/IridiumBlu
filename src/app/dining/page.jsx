import { SectionHeading } from "@/components/SectionHeading";
import { GsapReveal } from "@/components/GsapReveal";
import { menu } from "@/lib/data/site";
import { breadcrumbSchema, canonical, restaurantSchema } from "@/lib/seo/structured-data";

export const metadata = {
  title: "Dining — Valley View Cafe",
  description: "Slow Kumaoni plates, single-origin coffee, and pine-honey desserts.",
  alternates: { canonical: canonical("/dining") },
};

export default function DiningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Dining", url: "/dining" }])) }} />
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=80" alt="Wooden cafe table" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />
        <GsapReveal className="relative mx-auto max-w-7xl w-full px-6 pb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">Dining</p>
          <h1 className="font-display text-5xl md:text-7xl text-white mt-3 max-w-3xl leading-tight">Valley View Cafe — open from first light.</h1>
        </GsapReveal>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading eyebrow="Menu highlights" title="From the hills, to the plate." align="center" />
        <div className="mt-16 grid gap-16">
          {menu.map((section) => (
            <GsapReveal key={section.section}>
              <h3 className="font-display text-3xl text-foreground border-b border-border pb-3 mb-6">{section.section}</h3>
              <ul className="grid gap-5">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-4">
                    <div><p className="font-display text-xl">{item.name}</p><p className="text-sm text-muted-foreground">{item.description}</p></div>
                    <p className="font-mono text-sm">{item.price}</p>
                  </li>
                ))}
              </ul>
            </GsapReveal>
          ))}
        </div>
      </section>
    </>
  );
}
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { GsapReveal } from "@/components/GsapReveal";
import { Button } from "@/components/ui/button";
import forest from "../../../public/things/forest pine.jpg"
import golu from "../../../public/things/golu.webp"
import kaichi from "../../../public/things/kaichi.jpg"
import nanital from "../../../public/things/nainital.jpg"
import naukuchiya from "../../../public/things/naukuchiya.jpg"
import tea from "../../../public/things/tea estate.jpg"
import {
  breadcrumbSchema,
  canonical,
  touristAttractionListSchema,
} from "@/lib/seo/structured-data";
import Image from "next/image";

export const metadata = {
  title: "Things to Do — Explore Kainchi & Nainital",
  description:
    "Discover local Himalayan trails, serene lakes, and the Neem Karoli Baba ashram just a short walk from our boutique retreat.",
  alternates: { canonical: canonical("/things-to-do") },
};

const attractions = [
  {
    name: "Kainchi Dham",
    distance: "1.2 km away",
    description:
      "The peaceful ashram of Neem Karoli Baba, nestled in the valley. It is a scenic 15-minute walk along the river road from our retreat.",
    image:kaichi
  },
  {
    name: "Nainital Lake",
    distance: "18 km away",
    description:
      "A stunning crescent-shaped freshwater lake. Enjoy a quiet morning boat ride before the afternoon crowds arrive.",
    image: nanital
  },
  {
    name: "Pine Forest Trails",
    distance: "0.5 km away",
    description:
      "Step right out of the property and onto ancient shepherd trails that wind through dense, fragrant deodar and pine forests.",
    image: forest
  },
  {
    name: "Golu Devta Temple (Ghorakhal)",
    distance: "12 km away",
    description:
      "Known as the temple of a million bells. Devotees write their wishes on paper and hang them alongside brass bells.",
    image: golu
  },
  {
    name: "Bhowali Tea Estate",
    distance: "8 km away",
    description:
      "Take a short drive to the terraced tea gardens of Bhowali. A perfect spot for an afternoon picnic and picking up local preserves.",
    image: tea
  },
  {
    name: "Naukuchiatal",
    distance: "22 km away",
    description:
      "The 'Lake of Nine Corners'. It is much quieter than Nainital and offers kayaking, paragliding, and peaceful lakeside walks.",
    image:naukuchiya
  },
];

export default function ThingsToDoPage() {
  return (
    <>
      {/* SEO JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            touristAttractionListSchema(
              attractions.map((a) => ({
                name: a.name,
                description: a.description,
              }))
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Things to Do", url: "/things-to-do" },
            ])
          ),
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 mx-auto max-w-4xl px-6 text-center">
        <SectionHeading
          eyebrow="Explore"
          title="Beyond the retreat."
          description="While many guests come here simply to sit still, the surrounding Kumaon hills offer quiet trails, sacred temples, and lakes untouched by time."
          align="center"
        />
      </section>

      {/* Attractions Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <GsapReveal
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.12}
        >
          {attractions.map((attraction) => (
            <article
              key={attraction.name}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary mb-3">
                  <MapPin className="size-3.5" />
                  {attraction.distance}
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {attraction.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {attraction.description}
                </p>
              </div>
            </article>
          ))}
        </GsapReveal>

        {/* CTA Section */}
        <GsapReveal className="mt-20 text-center bg-secondary/40 rounded-2xl p-10 md:p-16 border border-border">
          <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Need help planning your days?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            We can arrange guided forest walks, local taxis, and picnic baskets
            for your day trips. Just let us know what pace you are looking for.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link href="/itineraries">View Itineraries</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7"
            >
              <Link href="/contact">
                Contact us <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </GsapReveal>
      </section>
    </>
  );
}

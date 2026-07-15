import Link from "next/link";
import Image from "next/image";
import dinning from "../../../public/image/table food.jpeg"

import {
  UtensilsCrossed,
  Soup,
  Flame,
  Coffee,
  Cookie,
  Salad,
  Phone,
  MessageCircle,
  Check,
} from "lucide-react";

import ContentSection from "@/components/ContentSection";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { GsapReveal } from "@/components/GsapReveal";

import { menu, diningTimings } from "@/lib/data/site";

import {
  PROPERTY,
  breadcrumbSchema,
  canonical,
  restaurantSchema,
} from "@/lib/seo/structured-data";

export const metadata = {
  title: "Dining | Iridium Blu Hotel",
  description:
    "Enjoy 100% pure vegetarian dining at Iridium Blu Hotel At Kainchi Dham with breathtaking Himalayan views.",
  alternates: {
    canonical: canonical("/dining"),
  },
};

const cuisineIcons = {
  "North Indian": UtensilsCrossed,
  "South Indian": Soup,
  Chinese: Salad,
  Tandoor: Flame,
  Beverages: Coffee,
  Desserts: Cookie,
};

export default function DiningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantSchema()),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              {
                name: "Home",
                url: "/",
              },
              {
                name: "Dining",
                url: "/dining",
              },
            ])
          ),
        }}
      />

      <Hero />

      <IntroSection />

      <CuisineSection />

      <RooftopExperience />

      <WhyGuestsLoveDining />

      <RestaurantTimings />

      <DiningCTA />
    </>
  );
}

/* ==========================================================
                        HERO
========================================================== */

function Hero() {
  return (
    <section className="relative h-[85vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=80"
          fill
        priority
          alt="Rooftop café with Himalayan mountain views"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-black/50 to-background/30" />
        <GsapReveal className="relative mx-auto max-w-7xl w-full px-6 pb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">Dining</p>
          <h1 className="font-display text-5xl md:text-7xl text-white mt-3 max-w-3xl leading-tight">
            Pure Vegetarian Restaurant & Rooftop Café
          </h1>
          <p className="mt-6 text-white/85 text-lg max-w-2xl">
            A culinary experience in the heart of the Himalayas — where delicious flavours meet
            breathtaking mountain views.
          </p>
        </GsapReveal>
      </section>
  );
}

/* ==========================================================
                    INTRO SECTION
========================================================== */

// function IntroSection() {
//   return (
//     <section className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
//         <GsapReveal>
//           <SectionHeading
//             eyebrow="100% Pure Vegetarian"
//             title="Every meal, crafted with care and purity."
//             description="Fresh ingredients, hygienic practices, and traditional recipes — our restaurant is specially designed for pilgrims, families, senior citizens, corporate guests, and long-stay travellers."
//           />
//           <ul className="mt-6 grid gap-2 sm:grid-cols-2">
//             {[
//               "Pilgrims visiting Kainchi Dham",
//               "Families",
//               "Senior Citizens",
//               "Corporate Guests",
//               "Nature Lovers",
//               "Group Travellers",
//             ].map((t) => (
//               <li key={t} className="flex items-start gap-2 text-foreground/85">
//                 <Check className="size-5 text-primary mt-0.5 shrink-0" />
//                 <span>{t}</span>
//               </li>
//             ))}
//           </ul>
//         </GsapReveal>
//         <GsapReveal>
//         <Image
//             src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80"
//             alt="Indoor dining setup"
//             width={800}
//             height={1000}
//             className="rounded-2xl object-cover w-full aspect-[4/3]"
//           />
//         </GsapReveal>
//       </section>
//   );
// }

function IntroSection() {
  return (
    <ContentSection
      eyebrow="100% Pure Vegetarian"
      title="Every meal, crafted with care and purity."
      description="Fresh ingredients, hygienic practices, and traditional recipes — our restaurant is specially designed for pilgrims, families, senior citizens, corporate guests, and long-stay travellers."
      // image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80"
      image={dinning}
      imageAlt="Indoor dining setup"
      imagePosition="right"
      imageClassName="w-full aspect-[4/3] object-cover rounded-2xl"
      listItems={[
        "Pilgrims visiting Kainchi Dham",
        "Families",
        "Senior Citizens",
        "Corporate Guests",
        "Nature Lovers",
        "Group Travellers",
      ]}
    />
  );
}

/* ---------- PART 2 STARTS BELOW ---------- */

/* ==========================================================
                    CUISINE CATEGORIES
========================================================== */

function CuisineSection() {
  return (
    <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What we serve"
            title="A menu for every craving."
            align="center"
          />
          <GsapReveal className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {menu.map((section) => {
              const Icon = cuisineIcons[section.section] ?? UtensilsCrossed;
              return (
                <article
                  key={section.section}
                  className="p-6 bg-card border border-border rounded-lg"
                >
                  <Icon className="size-8 text-primary" />
                  <h3 className="font-display text-2xl mt-4">{section.section}</h3>
                  <ul className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <p className="text-foreground font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </GsapReveal>
        </div>
      </section>
  );
}

/* ==========================================================
                    ROOFTOP EXPERIENCE
========================================================== */

const rooftopHighlights = [
  "Panoramic Himalayan Views",
  "Fresh Mountain Air",
  "Peaceful Environment",
  "Beautiful Sunrise",
  "Magical Sunset",
  "Comfortable Family Seating",
  "Evening Ambience",
  "Perfect Photography Spot",
];

function RooftopExperience() {
  return (

    <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
          alt="Rooftop café panoramic Himalayan view"
          width={800}
            height={1000}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <GsapReveal className="relative mx-auto max-w-5xl px-6 text-center text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">Rooftop Café</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
            Dine under the stars, above the clouds.
          </h2>
          <p className="mt-6 text-white/85 text-lg max-w-2xl mx-auto">
            One of the most relaxing dining experiences near Kainchi Dham.
          </p>
          <div className="mt-10 grid gap-3 grid-cols-2 md:grid-cols-4 text-left">
            {rooftopHighlights.map((h) => (
              <div key={h} className="flex items-start gap-2 text-white/90">
                <Check className="size-5 text-white mt-0.5 shrink-0" />
                <span className="text-sm">{h}</span>
              </div>
            ))}
          </div>
        </GsapReveal>
      </section>
  );
}

/* ==========================================================
                WHY GUESTS LOVE DINING
========================================================== */

const whyLove = [
  "100% Pure Vegetarian Kitchen",
  "Freshly Prepared Food",
  "Hygienic Cooking Standards",
  "Rooftop Mountain View Dining",
  "Family-Friendly Seating",
  "Peaceful Ambience",
  "Quick & Courteous Service",
  "Fresh Seasonal Ingredients",
  "Perfect for Pilgrims & Families",
  "Delicious Home-Style Taste",
];

function WhyGuestsLoveDining() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Why guests love our restaurant"
          title="Great hospitality begins with great food."
          align="center"
        />
        <GsapReveal
          className="mt-14 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.03}
        >
          {whyLove.map((w) => (
            <div
              key={w}
              className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
            >
              <span className="text-primary">⭐</span>
              <span className="text-foreground/85">{w}</span>
            </div>
          ))}
        </GsapReveal>
      </section>
  );
}

/* ==========================================================
                    RESTAURANT TIMINGS
========================================================== */

function RestaurantTimings() {
  return (
    <section className="bg-secondary/40 py-24">
    <div className="mx-auto max-w-5xl px-6">
      <SectionHeading eyebrow="Restaurant timings" title="Open through the day." align="center" />
      <GsapReveal className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
        {diningTimings.map((t) => (
          <div
            key={t.meal}
            className="p-6 bg-card border border-border rounded-lg text-center"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{t.meal}</p>
            <p className="font-display text-xl mt-3">{t.time}</p>
          </div>
        ))}
      </GsapReveal>
    </div>
  </section>
  );
}

/* ==========================================================
                    RESERVE TABLE CTA
========================================================== */

function DiningCTA() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <GsapReveal>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Great Food. Breathtaking Views. Memorable Moments.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Experience the finest pure vegetarian dining near Kainchi Dham.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">Reserve a Table</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <a href={`tel:${PROPERTY.telephone}`}>
                <Phone className="size-4 mr-2" /> Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <a
                href={`https://wa.me/${PROPERTY.telephone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4 mr-2" /> WhatsApp
              </a>
            </Button>
          </div>
        </GsapReveal>
      </section>
  );
}

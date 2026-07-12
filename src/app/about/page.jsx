import Link from "next/link";
import Image from "next/image";

import {
  Check,
  Leaf,
  Heart,
  Sparkles,
  ShieldCheck,
  HandHeart,
} from "lucide-react";

import ContentSection from "@/components/ContentSection";
import { Button } from "@/components/ui/button";
import { GsapReveal } from "@/components/GsapReveal";
import { SectionHeading } from "@/components/SectionHeading";

import {
  breadcrumbSchema,
  canonical,
  organizationSchema,
} from "@/lib/seo/structured-data";

export const metadata = {
  title: "About | Iridium Blu Hotel",
  description:
    "Learn about Iridium Blu Hotel near Kainchi Dham. Luxury boutique accommodation surrounded by the peaceful Kumaon Hills.",
  alternates: {
    canonical: canonical("/about"),
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
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
                name: "About",
                url: "/about",
              },
            ])
          ),
        }}
      />

      <Hero />

      <Story />

      <VisionMission />

      <Differentiators />

      <Philosophy />

      <Wellness />

      <PromiseSection />

      <AboutCTA />
    </>
  );
}

/* ==========================================================
                        HERO
========================================================== */

function Hero() {
  return (
    <section className="pt-32 pb-16 mx-auto max-w-4xl px-6 text-center">
        <GsapReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">About Us</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-tight">
            Where Luxury Meets Spiritual Serenity
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            IRIDIUM BLU HOTEL (A Unit of SYDRUV LLP) is a premium boutique hotel located near the
            sacred Kainchi Dham in the beautiful Kumaon Hills of Uttarakhand — a perfect blend of
            luxury, comfort, spirituality, and authentic Indian hospitality.
          </p>
        </GsapReveal>
      </section>
  );
}

/* ==========================================================
                    OUR STORY
========================================================== */

// function Story() {
//   return (
//     <section className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 items-center mb-24">
//         <GsapReveal>
//           <Image
//             src="https://images.unsplash.com/photo-1518737743670-2bf64a9f6a76?auto=format&fit=crop&w=1400&q=80"
//             alt="Kumaon Himalayan hillside"
//             className="w-full aspect-[4/5] object-cover rounded-lg"
//             priority
//             width={800}
//             height={1000}
//           />
//         </GsapReveal>
//         <GsapReveal>
//           <SectionHeading
//             eyebrow="Our story"
//             title="Created with a simple, meaningful purpose."
//             description="IRIDIUM BLU HOTEL was founded to create a destination where guests experience the warmth of Indian hospitality with modern comforts in the peaceful Himalayas. Every detail — from spacious rooms and premium interiors to the rooftop restaurant, meditation room, spiritual library, and family-friendly facilities — has been thoughtfully designed."
//           />
//           <p className="mt-6 text-muted-foreground leading-relaxed">
//             We believe true hospitality is not just about providing accommodation — it is about
//             creating memorable experiences that guests cherish long after they leave.
//           </p>
//         </GsapReveal>
//       </section>
//   );
// }

function Story() {
  return (
    <ContentSection
      eyebrow="Our story"
      title="Created with a simple, meaningful purpose."
      description="IRIDIUM BLU HOTEL was founded to create a destination where guests experience the warmth of Indian hospitality with modern comforts in the peaceful Himalayas. Every detail — from spacious rooms and premium interiors to the rooftop restaurant, meditation room, spiritual library, and family-friendly facilities — has been thoughtfully designed."
      image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2400&q=80"
      imageAlt="Kumaon Himalayan hillside"
      priority
      sectionClassName="mb-24"
    >
      <p className="mt-6 text-muted-foreground leading-relaxed">
        We believe true hospitality is not just about providing accommodation —
        it is about creating memorable experiences that guests cherish long
        after they leave.
      </p>
    </ContentSection>
  );
}

/* ==========================================================
                    VISION & MISSION
========================================================== */

const mission = [
  "Exceptional comfort",
  "Impeccable cleanliness",
  "Personalized hospitality",
  "Safe and peaceful surroundings",
  "Fresh vegetarian dining",
  "Wellness & spiritual experiences",
  "Memorable family vacations",
  "World-class hospitality with Indian values",
];

function VisionMission() {
  return (
    <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2">
          <GsapReveal>
            <SectionHeading eyebrow="Our vision" title="The most trusted boutique stay near Kainchi Dham." />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              To become the most trusted and preferred boutique hospitality destination near
              Kainchi Dham — offering unforgettable experiences through comfort, care, and genuine
              hospitality.
            </p>
          </GsapReveal>
          <GsapReveal>
            <SectionHeading eyebrow="Our mission" title="To provide every guest with…" />
            <ul className="mt-6 grid gap-3">
              {mission.map((m) => (
                <li key={m} className="flex items-start gap-3 text-foreground/85">
                  <Check className="size-5 text-primary mt-0.5 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </GsapReveal>
        </div>
      </section>
  );
}

/* ==========================================================
                WHAT MAKES US DIFFERENT
========================================================== */

const differentiators = [
  "Luxury Boutique Accommodation",
  "Peaceful Himalayan Surroundings",
  "Pure Vegetarian Restaurant",
  "Meditation Room",
  "Spiritual Library",
  "Yoga Space",
  "Rooftop Mountain View Restaurant",
  "Large Family Rooms",
  "King Size Bunk Beds",
  "Conference Facilities",
  "Kids Play Area",
  "Free Parking",
  "High-Speed Wi-Fi",
  "Personalized Hospitality",
  "Easy Access to Kainchi Dham",
];

function Differentiators() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="What makes us different"
          title="Not just another hotel."
          description="A place where guests experience the perfect harmony of comfort, nature, and spirituality."
          align="center"
        />
        <GsapReveal className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
          {differentiators.map((d) => (
            <div
              key={d}
              className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
            >
              <Check className="size-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground/85">{d}</span>
            </div>
          ))}
        </GsapReveal>
      </section>
  );
}

/* ==========================================================
                    OUR PHILOSOPHY
========================================================== */

function Philosophy() {
  return (
    <section className="bg-primary/5 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <GsapReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Our philosophy</p>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
              “Every Guest is Family.”
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              At IRIDIUM BLU HOTEL, hospitality is not just a service — it is our culture. We
              welcome every guest with warmth, respect, and genuine care, striving to exceed your
              expectations from arrival to departure.
            </p>
          </GsapReveal>
        </div>
      </section>
  );
}


/* ==========================================================
                WELLNESS & SUSTAINABILITY
========================================================== */

const sustainability = [
  "Maintaining a clean & green environment",
  "Conserving natural resources",
  "Supporting responsible tourism",
  "Protecting the Himalayan ecosystem",
  "Promoting mindful travel experiences",
];

function Wellness() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2">
        <GsapReveal>
          <SectionHeading
            eyebrow="Wellness & Spiritual"
            title="Spaces to meditate, read, and reconnect."
            description="A visit to Kainchi Dham is often a deeply personal journey. Our dedicated Meditation Room, Spiritual Book Library, and Yoga Hall are designed to nurture your mind and soul amidst serene Himalayan surroundings."
          />
        </GsapReveal>
        <GsapReveal>
          <SectionHeading
            eyebrow="Sustainability"
            title="Luxury and responsibility, hand in hand."
          />
          <ul className="mt-6 grid gap-3">
            {sustainability.map((s) => (
              <li key={s} className="flex items-start gap-3 text-foreground/85">
                <Leaf className="size-5 text-primary mt-0.5 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </GsapReveal>
      </section>
  );
}

/* ==========================================================
                    OUR PROMISE
========================================================== */

const promises = [
  { icon: Heart, title: "Comfortable stays", body: "Spacious rooms designed for rest." },
  { icon: HandHeart, title: "Honest service", body: "Transparent pricing, no surprises." },
  { icon: Leaf, title: "Hygienic food", body: "Fresh, pure vegetarian meals." },
  { icon: ShieldCheck, title: "Safe environment", body: "24×7 security and care." },
  { icon: Sparkles, title: "Personalized care", body: "Every guest is family." },
  { icon: Check, title: "Memorable experiences", body: "Stories you'll take home." },
];

function PromiseSection() {
  return (
    <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our promise"
            title="Your comfort is our greatest priority."
            align="center"
          />
          <GsapReveal className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.08}>
            {promises.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-6 rounded-lg bg-card border border-border">
                <Icon className="size-8 text-primary" />
                <h3 className="font-display text-2xl mt-4">{title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </GsapReveal>
        </div>
      </section>
  );
}

/* ==========================================================
                        CTA
========================================================== */

function AboutCTA() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <GsapReveal>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Stay Close to the Divine. Stay Close to Nature.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you're planning a pilgrimage, a mountain getaway, a family holiday, or a
            business retreat — experience the perfect harmony of comfort, nature, and spirituality.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">Book Your Stay</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link href="/hotels">Explore Rooms</Link>
            </Button>
          </div>
        </GsapReveal>
      </section>
  );
}

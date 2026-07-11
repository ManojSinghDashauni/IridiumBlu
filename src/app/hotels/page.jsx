import Link from "next/link";
import Image from "next/image";

import {
  Bed,
  Wifi,
  Tv,
  Snowflake,
  Coffee,
  ShowerHead,
  Wind,
  Droplets,
  Shirt,
  BookOpen,
  Sparkles,
  Mountain,
  Phone,
  MessageCircle,
  MapPin,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { RoomCard } from "@/components/RoomCard";
import { GsapReveal } from "@/components/GsapReveal";

import {
  rooms,
  roomAmenities,
  hotelFacilities,
  guestServices,
} from "@/lib/data/site";

import {
  PROPERTY,
  breadcrumbSchema,
  canonical,
  hotelSchema,
} from "@/lib/seo/structured-data";

export const metadata = {
  title: "Rooms & Suites | Iridium Blu Hotel",
  description:
    "Deluxe, Premium, Executive Mountain View and Family Rooms near Kainchi Dham.",
  alternates: {
    canonical: canonical("/hotels"),
  },
};

const amenityIcons = {
  "King Size Bed": Bed,
  "Premium Mattress & Luxury Linen": Bed,
  "Smart LED Television": Tv,
  "Complimentary High-Speed Wi-Fi": Wifi,
  "Air Conditioning": Snowflake,
  "Hair Dryer": Wind,
  "Tea & Coffee Maker": Coffee,
  "Complimentary Bottled Water": Droplets,
  "Premium Bathroom": ShowerHead,
  "Premium Toiletries": Sparkles,
  "Spacious Wardrobe": Shirt,
  "Writing Desk": BookOpen,
  "Comfortable Seating Area": Bed,
  "Daily Housekeeping": Sparkles,
  "24×7 Hot & Cold Water": Droplets,
  "Mountain View (Selected Rooms)": Mountain,
};

const wellness = [
  {
    title: "Meditation Room",
    body: "A quiet, dedicated space for stillness and reflection.",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Yoga Hall",
    body: "Sunrise practice with fresh Himalayan air.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Spiritual Book Library",
    body: "A curated collection to nurture mind and soul.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HotelsClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelSchema()),
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
                name: "Rooms & Suites",
                url: "/hotels",
              },
            ])
          ),
        }}
      />

<Hero />

<IntroSection />

<RoomsSection />

<AmenitiesSection />

<FacilitiesSection />

<GuestServicesSection />

<WellnessSection />

<CheckInSection />

<BookingCTA />

      {/* PART 2 STARTS HERE */}
    </>
  );
}

/* ======================================================
                        HERO
====================================================== */

function Hero() {
  return (
    <section className="relative h-[80vh] flex items-end overflow-hidden">

      <Image
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2400&q=80"
        alt="Executive Mountain View Room"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-transparent" />

      <GsapReveal className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-20">

        <p className="uppercase tracking-[0.35em] text-xs text-white/80">
          Rooms & Suites
        </p>

        <h1 className="mt-4 font-display text-5xl md:text-7xl text-white max-w-4xl leading-tight">
          Stay in Comfort.
          <br />
          Wake Up to the Himalayas.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-white/90 leading-8">
          Luxury boutique accommodation near Kainchi Dham designed
          for pilgrims, families, couples and business travellers.
        </p>

      </GsapReveal>

    </section>
  );
}

/* ======================================================
                    INTRO SECTION
====================================================== */

function IntroSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center">

      <GsapReveal>

        <SectionHeading
          eyebrow="Choose Your Perfect Stay"
          title="Every room is thoughtfully designed."
          description="Premium interiors, modern amenities and spacious layouts ensure comfort, relaxation and unforgettable memories in the Kumaon Hills."
          align="center"
        />

      </GsapReveal>

    </section>
  );
}

/* ------------ PART 2 STARTS BELOW ------------ */

/* ======================================================
                    ROOMS GRID
====================================================== */

function RoomsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">

      <GsapReveal
        className="grid gap-6 md:grid-cols-2"
        stagger={0.08}
      >
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
          />
        ))}
      </GsapReveal>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        *Rates shown are starting prices per night and may vary
        depending on season and availability.
      </p>

    </section>
  );
}

/* ======================================================
                IN-ROOM AMENITIES
====================================================== */

function AmenitiesSection() {
  return (
    <section className="bg-secondary/40 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="In-Room Amenities"
          title="Everything you need for a comfortable stay."
          description="Every room is equipped with thoughtfully selected modern amenities."
          align="center"
        />

        <GsapReveal
          className="mt-14 grid gap-5 grid-cols-2 md:grid-cols-4"
          stagger={0.04}
        >
          {roomAmenities.map((amenity, index) => {
            const Icon =
              amenityIcons[amenity] ?? Check;

            return (
              <div
                key={`${amenity}-${index}`}
                className="rounded-xl border bg-card p-6 text-center transition hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <p className="mt-4 text-sm font-medium leading-6">
                  {amenity}
                </p>
              </div>
            );
          })}
        </GsapReveal>

      </div>

    </section>
  );
}

/* ======================================================
                HOTEL FACILITIES
====================================================== */

function FacilitiesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <SectionHeading
        eyebrow="Hotel Facilities"
        title="More than just a hotel."
        description="Designed to make every stay peaceful, comfortable and memorable."
        align="center"
      />

      <GsapReveal
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.04}
      >
        {hotelFacilities.map((facility, index) => (
          <div
            key={`${facility}-${index}`}
            className="flex items-start gap-3 rounded-xl border bg-card p-5"
          >
            <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />

            <span className="text-sm leading-6">
              {facility}
            </span>
          </div>
        ))}
      </GsapReveal>

    </section>
  );
}

/* ======================================================
                GUEST SERVICES
====================================================== */

function GuestServicesSection() {
  return (
    <section className="bg-secondary/40 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Guest Services"
          title="Hospitality that goes beyond expectations."
          description="Our team is always available to make your stay smooth and enjoyable."
          align="center"
        />

        <GsapReveal
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.04}
        >
          {guestServices.map((service, index) => (
            <div
              key={`${service}-${index}`}
              className="flex items-start gap-3 rounded-xl border bg-card p-5"
            >
              <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />

              <span className="leading-6">
                {service}
              </span>
            </div>
          ))}
        </GsapReveal>

      </div>

    </section>
  );
}


/* ======================================================
                WELLNESS & SPIRITUAL SPACES
====================================================== */

function WellnessSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <SectionHeading
        eyebrow="Wellness & Spiritual"
        title="Spaces designed for inner peace."
        description="Meditate, practice yoga and reconnect amidst the peaceful Himalayan surroundings."
        align="center"
      />

      <GsapReveal
        className="mt-14 grid gap-8 md:grid-cols-3"
        stagger={0.08}
      >
        {wellness.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="overflow-hidden rounded-2xl border bg-card group"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="font-display text-2xl">
                {item.title}
              </h3>

              <p className="mt-3 text-muted-foreground leading-7">
                {item.body}
              </p>
            </div>
          </article>
        ))}
      </GsapReveal>

    </section>
  );
}

/* ======================================================
                CHECK-IN / CHECK-OUT
====================================================== */

function CheckInSection() {
  return (
    <section className="bg-primary/5 py-16">

      <div className="mx-auto max-w-5xl px-6">

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl border bg-card p-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Check-In
            </p>

            <h3 className="mt-4 font-display text-5xl">
              01:00 PM
            </h3>
          </div>

          <div className="rounded-2xl border bg-card p-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Check-Out
            </p>

            <h3 className="mt-4 font-display text-5xl">
              11:00 AM
            </h3>
          </div>

        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Early check-in and late check-out are subject to
          availability and may incur additional charges.
        </p>

      </div>

    </section>
  );
}

/* ======================================================
                    BOOKING CTA
====================================================== */

function BookingCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      <Image
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80"
        alt="Himalayan Mountains"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <GsapReveal className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">

        <p className="uppercase tracking-[0.35em] text-sm text-white/80">
          Book Your Stay
        </p>

        <h2 className="mt-5 font-display text-4xl md:text-6xl leading-tight">
          Stay Close to the Divine.
          <br />
          Stay Close to Nature.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/85">
          Experience premium comfort, breathtaking Himalayan views
          and authentic hospitality just minutes from Kainchi Dham.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Button
            asChild
            size="lg"
            className="rounded-full px-8"
          >
            <Link href="/contact">
              Book Now
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full px-8"
          >
            <a href={`tel:${PROPERTY.telephone}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full px-8"
          >
            <a
              href={`https://wa.me/${PROPERTY.telephone.replace(
                /[^0-9]/g,
                ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full px-8"
          >
            <a
              href="https://maps.google.com/?q=Kainchi+Dham+Nainital"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Get Directions
            </a>
          </Button>

        </div>

      </GsapReveal>

    </section>
  );
}
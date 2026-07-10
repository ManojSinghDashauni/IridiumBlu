"use client";
import { useState, useMemo } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { RoomCard } from "@/components/RoomCard";
import { GsapReveal } from "@/components/GsapReveal";
import { rooms } from "@/lib/data/site";
import { cn } from "@/lib/utils";

import {
  ArrowRight,
  MapPin,
  Mountain,
  Utensils,
  Wifi,
  Tv,
  Droplets,
  Sparkles,
  BedDouble,
  ShowerHead,
  ParkingSquare,
  HeartHandshake,
  Phone,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const VIEWS = ["All", "Valley", "Forest", "Mountain", "Garden"];

export function HotelsClient() {
  const [view, setView] = useState("All");
  const filtered = useMemo(() => (view === "All" ? rooms : rooms.filter((r) => r.view === view)), [view]);

  return (
    <>
    <section>
      <IntroStory/>
    </section>
      <section className="pt-32 pb-12 mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Stay" title="Choose Your Perfect Stay" />
      </section>
      <section className="mx-auto max-w-7xl px-6 mb-8">
        <div className="flex flex-wrap gap-2">
          {VIEWS.map((v) => (
            <button key={v} onClick={() => setView(v)} className={cn("px-4 py-2 rounded-full text-sm border transition-colors", v === view ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40")}>
              {v}
            </button>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <GsapReveal key={view} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {filtered.map((r) => <RoomCard key={r.id} room={r} />)}
        </GsapReveal>
      </section>
      {/* <section>
    <RoomFeatures/>
    </section> */}
    </>
  );
}


function IntroStory() {
  return (
    <section className="bg-secondary/40">

      <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">

        <GsapReveal>

          <Image
            src="https://images.unsplash.com/photo-1545158535-c3f7168c28b6?auto=format&fit=crop&w=1400&q=80"
            width={700}
            height={900}
            alt="Kainchi Dham Temple"
            className="rounded-xl object-cover w-full aspect-[4/3/]"
          />

        </GsapReveal>

        <GsapReveal>

          <SectionHeading
            eyebrow="Stay in Comfort"
            title="Wake Up to the Himalayas"
            description="Luxury Boutique Accommodation Near Kainchi Dham"
          />

          <p className="mt-6 text-muted-foreground leading-8">
          At IRIDIUM BLU HOTEL (A Unit of SYDRUV LLP), every room is thoughtfully designed to offer the perfect blend of luxury, comfort, elegance, and warm Indian hospitality. Whether you are visiting Kainchi Dham for a spiritual journey, planning a family holiday, a romantic getaway, or a business trip, our rooms provide a peaceful retreat amidst the breathtaking Kumaon Hills.
          </p>

          <p className="mt-6 text-muted-foreground leading-8">
          Designed with premium wooden interiors, modern amenities, and spacious layouts, every stay promises comfort, relaxation, and unforgettable memories.
          </p>

        </GsapReveal>

      </div>

    </section>
  );
}


function RoomFeatures() {
  const features = [
    {
      icon: BedDouble,
      label: "King Size Beds",
    },
    {
      icon: BedDouble,
      label: "Family Bunk Beds",
    },
    {
      icon: ShowerHead,
      label: "Luxury Bathrooms",
    },
    {
      icon: Wifi,
      label: "High-Speed Wi-Fi",
    },
    {
      icon: Tv,
      label: "Smart TV",
    },
    {
      icon: Droplets,
      label: "24×7 Hot & Cold Water",
    },
    {
      icon: Sparkles,
      label: "Daily Housekeeping",
    },
    {
      icon: Mountain,
      label: "Mountain View Rooms",
    },
  ];

  return (
    <section className="bg-secondary/40">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <SectionHeading
          eyebrow="Hotel Facilities & Guest Services"
          title="Every detail designed for your comfort."
          align="center"
        />

        <GsapReveal
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-xl border bg-card p-6 flex items-center gap-4 hover:shadow-xl transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>

              <p className="font-medium">{label}</p>
            </div>
          ))}
        </GsapReveal>

      </div>

    </section>
  );
}
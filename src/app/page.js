import Link from "next/link";
import { ArrowRight, MapPin, Mountain, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingWidget } from "@/components/BookingWidget";
import { RoomCard } from "@/components/RoomCard";
import { SectionHeading } from "@/components/SectionHeading";
import { GsapReveal } from "@/components/GsapReveal";
import { rooms, testimonials } from "@/lib/data/site";
import { breadcrumbSchema, canonical, hotelSchema } from "@/lib/seo/structured-data";

export const metadata = {
  title: "Kainchi Retreat — Boutique Hotel near Kainchi Dham, Nainital",
  description: "A premium boutique stay near Kainchi Dham.",
  alternates: { canonical: canonical("/") },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }])) }} />
      <Hero />
      <BookingBar />
      <FeaturedRooms />
      <Experience />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80" alt="Himalayan ridges" className="size-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-background" />
      </div>
      <GsapReveal className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-24 pt-40" stagger={0.15}>
        <p className="text-xs uppercase tracking-[0.3em] text-white/80">Kainchi Dham · Nainital</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white max-w-4xl leading-[1.02] mt-4">A quieter way to come to the mountains.</h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-7"><Link href="/hotels">Explore stays <ArrowRight className="ml-1 size-4" /></Link></Button>
        </div>
      </GsapReveal>
    </section>
  );
}

function BookingBar() {
  return <section className="relative z-20 -mt-16 mx-auto max-w-6xl px-6"><BookingWidget /></section>;
}

function FeaturedRooms() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <SectionHeading eyebrow="Stay" title="Rooms framed by deodars and quiet." />
        <Button asChild variant="ghost" className="rounded-full"><Link href="/hotels">See all rooms <ArrowRight className="ml-1 size-4" /></Link></Button>
      </div>
      <GsapReveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
        {rooms.slice(0, 3).map((r) => <RoomCard key={r.id} room={r} />)}
      </GsapReveal>
    </section>
  );
}

function Experience() {
  const items = [
    { icon: MapPin, title: "1.2 km from Kainchi Dham", body: "An easy walk to the ashram along the river road." },
    { icon: Mountain, title: "Nanda Devi vistas", body: "Snow-line views on clear mornings from the valley deck." },
    { icon: Coffee, title: "Valley View Cafe", body: "Slow coffee, Kumaoni plates, and pine-honey desserts." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading eyebrow="What to expect" title="A property built around the place it stands in." align="center" />
      <GsapReveal className="mt-14 grid gap-8 md:grid-cols-3" stagger={0.1}>
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="text-center">
            <div className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground mb-5"><Icon className="size-6" /></div>
            <h3 className="font-display text-2xl text-foreground">{title}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed max-w-sm mx-auto">{body}</p>
          </div>
        ))}
      </GsapReveal>
    </section>
  );
}
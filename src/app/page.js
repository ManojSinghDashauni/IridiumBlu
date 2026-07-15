import Link from "next/link";
import Image from "next/image";

import building from "../../public/image/hotel building.jpeg"
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
import { BookingWidget } from "@/components/BookingWidget";
import { RoomCard } from "@/components/RoomCard";
import { SectionHeading } from "@/components/SectionHeading";
import { GsapReveal } from "@/components/GsapReveal";
import { rooms, testimonials } from "@/lib/data/site";
import {
  breadcrumbSchema,
  canonical,
  hotelSchema,
  PROPERTY,
} from "@/lib/seo/structured-data";
import ContentSection from "@/components/ContentSection";

export const metadata = {
  title: "Iridium Blu Hotel — Premium Stay near Kainchi Dham",
  description:
    "Premium family hotel near Kainchi Dham with mountain views, spacious rooms and pure vegetarian dining.",
  alternates: {
    canonical: canonical("/"),
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }])) }} />
      {/* <Hero />
      <BookingBar />
      <FeaturedRooms />
      <Experience /> */}
      <Hero />
      <BookingBar />
      <IntroStory />
      <FeaturedRooms />
      <RoomFeatures />
      <Dining />
      <WhyChooseUs />
      <NearbyAttractions />
      <DirectBookingBenefits />
      <Testimonials />
      <ContactStrip />
    </>
  );
}



/* ==========================================================
                        HERO SECTION
========================================================== */

function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-end overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80"
        alt="Himalayan ridges at sunrise near Kainchi Dham"
        className="size-full object-cover"
        width={800}
            height={1000}
      />
      <div className="absolute inset-0 bg-linear-to-b from-background/50 via-black/25 to-black" />
    </div>

    <GsapReveal as="div" className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-24 pt-40" stagger={0.15}>
      <p className="text-xs uppercase tracking-[0.3em] text-white/80">
        Kainchi Dham · Nainital · Uttarakhand
      </p>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white max-w-5xl leading-[1.02] mt-4">
        Welcome to 
        <br/>
        <span>Iridium Blu Hotel</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">
        Experience peace, comfort & luxury just 5 minutes from the sacred Kainchi Dham
        of Neem Karoli Baba. A premium family stay in the serene Kumaon Hills.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg" className="rounded-full px-7">
          <Link href="/hotels">
            Explore rooms <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full px-7 bg-background/10 text-white border-white/40 hover:bg-background/20 hover:text-white"
        >
          <Link href="/contact">Reserve direct</Link>
        </Button>
      </div>
    </GsapReveal>
  </section>
  );
}

/* ==========================================================
                    BOOKING BAR
========================================================== */

function BookingBar() {
  return (
    <section className="relative z-20 -mt-16 mx-auto max-w-6xl px-6">
      <BookingWidget />
    </section>
  );
}

/* ==========================================================
                    INTRO STORY
========================================================== */

// function IntroStory() {
//   return (
//     <section className="bg-secondary/40">
//       <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
//         <GsapReveal>
//           <Image
//             src="https://images.unsplash.com/photo-1545158535-c3f7168c28b6?auto=format&fit=crop&w=1400&q=80"
//             alt="Kainchi Dham temple by the Kosi river"
//             width={800}
//             height={1000}
//             className="w-full aspect-[4/5] object-cover rounded-lg"
//           />
//         </GsapReveal>
//         <GsapReveal>
//           <SectionHeading
//             eyebrow="A Unit of SYDRUV LLP"
//             title="Peace, comfort & luxury near Kainchi Dham."
//             description="Nestled in the serene Kumaon Hills of Uttarakhand, Iridium Blu Hotel offers a perfect blend of modern comfort, warm Indian hospitality, and peaceful mountain surroundings — ideal for pilgrims, families, couples, corporate travellers, and nature lovers."
//           />
//           <p className="mt-5 text-base text-muted-foreground leading-relaxed">
//             Whether you are visiting to seek blessings, explore the beauty of Kumaon, or simply
//             relax amidst the Himalayas, we promise a memorable stay with thoughtfully designed
//             rooms, premium amenities, delicious pure vegetarian dining, and personalized service.
//           </p>
//           <Button asChild className="mt-7 rounded-full px-6">
//             <Link href="/about">Our story</Link>
//           </Button>
//         </GsapReveal>
//       </div>
//     </section>
//   );
// }

function IntroStory() {
  return (
    <ContentSection
      eyebrow="A Unit of SYDRUV LLP"
      title="Peace, comfort & luxury near Kainchi Dham."
      description="Nestled in the serene Kumaon Hills of Uttarakhand, Iridium Blu Hotel offers a perfect blend of modern comfort, warm Indian hospitality, and peaceful mountain surroundings — ideal for pilgrims, families, couples, corporate travellers, and nature lovers."
      image={building}
      imageClassName="w-full  object-cover rounded-lg"
      imageAlt="iridium blu hotel building"
      background="bg-secondary/40 "
      buttonText="Our Story"
      buttonLink="/about"
    >
      <p className="mt-5 text-base text-muted-foreground leading-relaxed">
        Whether you are visiting to seek blessings, explore the beauty of
        Kumaon, or simply relax amidst the Himalayas, we promise a memorable
        stay with thoughtfully designed rooms, premium amenities, delicious
        pure vegetarian dining, and personalized service.
      </p>
    </ContentSection>
  );
}

/* ==========================================================
                    FEATURED ROOMS
========================================================== */

function FeaturedRooms() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <SectionHeading
          eyebrow="Stay"
          title="Wake up to the Himalayas."
          description="Spacious rooms combining modern elegance with mountain charm. Selected family rooms feature a King-Size Bed with a spacious upper King-Size Bunk Bed — perfect for families and small groups."
        />
        <Button asChild variant="ghost" className="rounded-full">
          <Link href="/hotels">
            See all rooms <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
      </div>
      <GsapReveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
        {rooms.slice(0, 3).map((r) => (
          <RoomCard key={r.id} room={r} />
        ))}
      </GsapReveal>
    </section>
  );
}


/* ==========================================================
                    ROOM FEATURES
========================================================== */

function RoomFeatures() {
  const features = [
    { icon: BedDouble, label: "Comfortable King-Size Beds" },
    { icon: BedDouble, label: "Family Rooms with Large Bunk Beds" },
    { icon: ShowerHead, label: "Premium Bathrooms" },
    { icon: Wifi, label: "High-Speed Wi-Fi" },
    { icon: Tv, label: "Smart Television" },
    { icon: Droplets, label: "24×7 Hot & Cold Water" },
    { icon: Sparkles, label: "Daily Housekeeping" },
    { icon: Mountain, label: "Mountain Views (Selected Rooms)" },
  ];
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Room features"
          title="Thoughtful details in every room."
          align="center"
        />
        <GsapReveal className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 bg-card border border-border rounded-lg p-5"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                <Icon className="size-5" />
              </span>
              <p className="text-sm font-medium text-foreground leading-snug">{label}</p>
            </div>
          ))}
        </GsapReveal>
      </div>
    </section>
  );
}

/* ==========================================================
                        DINING
========================================================== */

// function Dining() {
//   return (
//     <section className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
//       <GsapReveal className="order-2 md:order-1">
//         <SectionHeading
//           eyebrow="Pure Vegetarian Restaurant"
//           title="Fresh, hygienic, made with care."
//           description="From wholesome breakfasts to authentic Indian favourites and regional Kumaoni flavours — every meal is prepared with quality ingredients. Whether you're beginning your pilgrimage or returning after a day of sightseeing, our restaurant offers a warm and relaxing dining experience for the entire family."
//         />
//         <Button asChild className="mt-7 rounded-full px-6">
//           <Link href="/dining">Explore dining</Link>
//         </Button>
//       </GsapReveal>
//       <GsapReveal className="order-1 md:order-2">
//         <Image
//           src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1400&q=80"
//           alt="Freshly prepared vegetarian Indian meal"
//           className="w-full aspect-[4/5] object-cover rounded-lg"
//           width={800}
//             height={1000}
//         />
//       </GsapReveal>
//     </section>
//   );
// }
function Dining() {
  return (
    <ContentSection
      eyebrow="Pure Vegetarian Restaurant"
      title="Fresh, hygienic, made with care."
      description="From wholesome breakfasts to authentic Indian favourites and regional Kumaoni flavours — every meal is prepared with quality ingredients. Whether you're beginning your pilgrimage or returning after a day of sightseeing, our restaurant offers a warm and relaxing dining experience for the entire family."
      image="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Freshly prepared vegetarian Indian meal"
      imagePosition="right"
      buttonText="Explore Dining"
      buttonLink="/dining"
    />
  );
}

/* ==========================================================
                    WHY CHOOSE US
========================================================== */

function WhyChooseUs() {
  const items = [
    { icon: MapPin, title: "5 minutes from Kainchi Dham", body: "Of Neem Karoli Baba — walk-in-and-out convenience for darshan." },
    { icon: BedDouble, title: "Premium family accommodation", body: "Spacious family rooms with large bunk beds for children." },
    { icon: Utensils, title: "Pure vegetarian restaurant", body: "Wholesome Indian and Kumaoni cuisine, freshly prepared daily." },
    { icon: Mountain, title: "Peaceful Himalayan location", body: "Serene Kumaon setting, away from the city noise." },
    { icon: HeartHandshake, title: "Personalized service", body: "Warm Indian hospitality — attentive, never intrusive." },
    { icon: ParkingSquare, title: "Free parking & Wi-Fi", body: "Comfortable, hassle-free stays for every guest." },
  ];
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70 text-center">
          Why choose us
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-center mt-3 max-w-3xl mx-auto leading-tight">
          A property built around the place — and the people — it welcomes.
        </h2>
        <GsapReveal className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-left">
              <div className="inline-flex size-12 items-center justify-center rounded-full bg-primary-foreground/10 mb-4">
                <Icon className="size-5" />
              </div>
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-2 text-primary-foreground/80 leading-relaxed">{body}</p>
            </div>
          ))}
        </GsapReveal>
        <p className="mt-12 text-center text-sm text-primary-foreground/70">
          Easy access to Nainital, Bhimtal, Sattal, Naukuchiatal, Mukteshwar, Almora & Jageshwar Dham.
        </p>
      </div>
    </section>
  );
}

/* ==========================================================
                    NEARBY ATTRACTIONS
========================================================== */

const NEARBY = [
  { name: "Kainchi Dham", note: "Neem Karoli Baba", distance: "5 minutes" },
  { name: "Bhowali", note: "Market town", distance: "Nearby" },
  { name: "Ghorakhal Golu Devta Temple", note: "Temple", distance: "Nearby" },
  { name: "Nainital", note: "Lake town", distance: "Short drive" },
  { name: "Bhimtal", note: "Lake", distance: "Short drive" },
  { name: "Sattal", note: "Seven lakes", distance: "Short drive" },
  { name: "Naukuchiatal", note: "Nine-cornered lake", distance: "Short drive" },
  { name: "Mukteshwar", note: "Ridge village", distance: "Scenic drive" },
  { name: "Ramgarh", note: "Fruit orchards", distance: "Scenic drive" },
  { name: "Pangot", note: "Bird country", distance: "Scenic drive" },
  { name: "Kilbury Bird Sanctuary", note: "Wildlife", distance: "Scenic drive" },
  { name: "Almora", note: "Heritage town", distance: "Day trip" },
  { name: "Jageshwar Dham", note: "Ancient temples", distance: "Day trip" },
];

function NearbyAttractions() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Discover the beauty around you"
        title="Perfectly placed for the most loved destinations of Kumaon."
        description="Enjoy paragliding, boating, kayaking, nature walks, bird watching, photography, local sightseeing, and scenic Himalayan drives — all within easy reach."
        align="center"
      />
      <GsapReveal className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
        {NEARBY.map((n) => (
          <div
            key={n.name}
            className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <MapPin className="size-4 text-primary mt-1 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{n.name}</p>
              <p className="text-xs text-muted-foreground">
                {n.note} · <span className="text-primary">{n.distance}</span>
              </p>
            </div>
          </div>
        ))}
      </GsapReveal>
      <div className="mt-10 text-center">
        <Button asChild variant="outline" className="rounded-full px-6">
          <Link href="/things-to-do">
            See things to do <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}


/* ==========================================================
                DIRECT BOOKING BENEFITS
========================================================== */

function DirectBookingBenefits() {
  const perks = [
    "Best Available Rates*",
    "Personalized Reservation Assistance",
    "Flexible Support",
    "Priority Room Preference (Subject to Availability)",
    "Exclusive Direct Booking Offers",
  ];
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24 grid gap-10 md:grid-cols-[1.2fr_1fr] items-center">
        <GsapReveal>
          <SectionHeading
            eyebrow="Direct booking benefits"
            title="Book direct. Stay better."
            description="Book directly with us for a smooth and personalized experience."
          />
          <ul className="mt-8 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-base text-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">*Terms & Conditions Apply.</p>
        </GsapReveal>
        <GsapReveal className="bg-card border border-border rounded-lg p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Reservations</p>
          <h3 className="font-display text-3xl mt-2">Talk to our team</h3>
          <div className="mt-6 space-y-4 text-sm">
            <a href={`tel:${PROPERTY.telephone}`} className="flex items-center gap-3 hover:text-primary transition-colors">
              <Phone className="size-4 text-primary" /> {PROPERTY.telephone}
            </a>
            <a href={`tel:${PROPERTY.telephoneAlt}`} className="flex items-center gap-3 hover:text-primary transition-colors">
              <Phone className="size-4 text-primary" /> {PROPERTY.telephoneAlt}
            </a>
            <a href={`mailto:${PROPERTY.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
              <Mail className="size-4 text-primary" /> {PROPERTY.email}
            </a>
          </div>
          <Button asChild className="mt-8 w-full rounded-full">
            <Link href="/contact">Reserve now</Link>
          </Button>
        </GsapReveal>
      </div>
    </section>
  );
}

/* ==========================================================
                    TESTIMONIALS
========================================================== */

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.3em] text-primary text-center">Guests</p>
      <GsapReveal className="mt-10 grid gap-10 md:grid-cols-3" stagger={0.12}>
        {testimonials.map((t) => (
          <figure key={t.author} className="text-center">
            <blockquote className="font-display text-2xl leading-snug text-foreground">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 text-sm text-muted-foreground">
              {t.author} · {t.location}
            </figcaption>
          </figure>
        ))}
      </GsapReveal>
    </section>
  );
}

/* ==========================================================
                    CONTACT CTA
========================================================== */

function ContactStrip() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
          Your peaceful stay begins here
        </p>
        <h2 className="font-display text-4xl md:text-5xl mt-3 leading-tight">
          Stay close to the divine. Stay close to nature.
        </h2>
        <p className="mt-4 text-primary-foreground/80">
          Near Kainchi Dham, District Nainital, Uttarakhand, India
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="secondary" className="rounded-full px-7">
            <Link href="/contact">Reserve at Iridium Blu</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-7 bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href={`tel:${PROPERTY.telephone}`}>Call {PROPERTY.telephone}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
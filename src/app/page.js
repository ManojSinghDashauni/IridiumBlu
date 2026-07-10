import Link from "next/link";
import Image from "next/image";
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

// function Hero() {
//   return (
//     <section className="relative min-h-[95vh] flex items-end overflow-hidden">
//       <div className="absolute inset-0">
//         <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80" alt="Himalayan ridges" className="size-full object-cover" />
//         <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-background" />
//       </div>
//       <GsapReveal className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-24 pt-40" stagger={0.15}>
//         <p className="text-xs uppercase tracking-[0.3em] text-white/80">Kainchi Dham · Nainital</p>
//         <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white max-w-4xl leading-[1.02] mt-4">A quieter way to come to the mountains.</h1>
//         <div className="mt-8 flex flex-wrap gap-3">
//           <Button asChild size="lg" className="rounded-full px-7"><Link href="/hotels">Explore stays <ArrowRight className="ml-1 size-4" /></Link></Button>
//         </div>
//       </GsapReveal>
//     </section>
//   );
// }

// function BookingBar() {
//   return <section className="relative z-20 -mt-16 mx-auto max-w-6xl px-6"><BookingWidget /></section>;
// }

// function FeaturedRooms() {
//   return (
//     <section className="mx-auto max-w-7xl px-6 py-24">
//       <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
//         <SectionHeading eyebrow="Stay" title="Rooms framed by deodars and quiet." />
//         <Button asChild variant="ghost" className="rounded-full"><Link href="/hotels">See all rooms <ArrowRight className="ml-1 size-4" /></Link></Button>
//       </div>
//       <GsapReveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
//         {rooms.slice(0, 3).map((r) => <RoomCard key={r.id} room={r} />)}
//       </GsapReveal>
//     </section>
//   );
// }

// function Experience() {
//   const items = [
//     { icon: MapPin, title: "1.2 km from Kainchi Dham", body: "An easy walk to the ashram along the river road." },
//     { icon: Mountain, title: "Nanda Devi vistas", body: "Snow-line views on clear mornings from the valley deck." },
//     { icon: Coffee, title: "Valley View Cafe", body: "Slow coffee, Kumaoni plates, and pine-honey desserts." },
//   ];
//   return (
//     <section className="mx-auto max-w-7xl px-6 py-24">
//       <SectionHeading eyebrow="What to expect" title="A property built around the place it stands in." align="center" />
//       <GsapReveal className="mt-14 grid gap-8 md:grid-cols-3" stagger={0.1}>
//         {items.map(({ icon: Icon, title, body }) => (
//           <div key={title} className="text-center">
//             <div className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground mb-5"><Icon className="size-6" /></div>
//             <h3 className="font-display text-2xl text-foreground">{title}</h3>
//             <p className="mt-2 text-muted-foreground leading-relaxed max-w-sm mx-auto">{body}</p>
//           </div>
//         ))}
//       </GsapReveal>
//     </section>
//   );
// }

/* ==========================================================
                        HERO SECTION
========================================================== */

function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-end overflow-hidden">

      <div className="absolute inset-0">

        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80"
          alt="Himalayan mountains near Kainchi Dham"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-background" />

      </div>

      <GsapReveal
        className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-24 pt-40"
        stagger={0.15}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/80">
          Near Kainchi Dham · Nainital · Uttarakhand
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white max-w-5xl leading-[1.02] mt-4">
          Welcome to Iridium Blu Hotel
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
          Experience peace, comfort & luxury just five minutes from the
          sacred Kainchi Dham of Neem Karoli Baba.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <Button asChild size="lg" className="rounded-full px-7">
            <Link href="/hotels">
              Explore Rooms
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-7 border-white text-white bg-white/10 hover:bg-white/20"
          >
            <Link href="/contact">
              Reserve Direct
            </Link>
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
            className="rounded-xl object-cover w-full aspect-[4/5]"
          />

        </GsapReveal>

        <GsapReveal>

          <SectionHeading
            eyebrow="A Unit of SYDRUV LLP"
            title="Peace, comfort & luxury near Kainchi Dham."
            description="Nestled in the serene Kumaon Hills of Uttarakhand, Iridium Blu Hotel offers modern comfort, peaceful surroundings and warm hospitality."
          />

          <p className="mt-6 text-muted-foreground leading-8">
            Whether you're visiting Kainchi Dham for blessings,
            exploring the beauty of Nainital,
            or simply escaping into the mountains,
            our thoughtfully designed rooms,
            premium amenities and delicious vegetarian cuisine
            create an unforgettable stay.
          </p>

          <Button asChild className="mt-8 rounded-full px-7">
            <Link href="/about">
              Our Story
            </Link>
          </Button>

        </GsapReveal>

      </div>

    </section>
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
          description="Premium rooms combining mountain charm with modern luxury."
        />

        <Button
          asChild
          variant="ghost"
          className="rounded-full"
        >
          <Link href="/hotels">
            See All Rooms
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

      </div>

      <GsapReveal
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        stagger={0.12}
      >
        {rooms.slice(0, 3).map((room) => (
          <RoomCard
            key={room.id}
            room={room}
          />
        ))}
      </GsapReveal>

    </section>
  );
}

/* ---------- PART 2 STARTS BELOW ---------- */


/* ==========================================================
                    ROOM FEATURES
========================================================== */

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
          eyebrow="Room Features"
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

/* ==========================================================
                        DINING
========================================================== */

function Dining() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 grid gap-16 lg:grid-cols-2 items-center">

      <GsapReveal>

        <SectionHeading
          eyebrow="Pure Vegetarian Restaurant"
          title="Fresh food with Himalayan hospitality."
          description="Enjoy freshly prepared vegetarian cuisine, authentic Kumaoni dishes, Indian favorites, delicious breakfasts and warm family dining."
        />

        <p className="mt-6 text-muted-foreground leading-8">
          Every meal is prepared using quality ingredients and traditional
          recipes. Whether you are beginning your pilgrimage or returning
          after sightseeing, our restaurant offers comfort, freshness,
          and unforgettable flavors.
        </p>

        <Button
          asChild
          className="mt-8 rounded-full px-7"
        >
          <Link href="/dining">
            Explore Dining
          </Link>
        </Button>

      </GsapReveal>

      <GsapReveal>

        <Image
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1400&q=80"
          alt="Pure Vegetarian Restaurant"
          width={800}
          height={900}
          className="rounded-xl object-cover w-full aspect-[4/5]"
        />

      </GsapReveal>

    </section>
  );
}

/* ==========================================================
                    WHY CHOOSE US
========================================================== */

function WhyChooseUs() {

  const items = [
    {
      icon: MapPin,
      title: "5 Minutes from Kainchi Dham",
      body: "Quick access to Neem Karoli Baba Ashram."
    },
    {
      icon: BedDouble,
      title: "Luxury Family Rooms",
      body: "Large spacious rooms with premium comfort."
    },
    {
      icon: Utensils,
      title: "Pure Vegetarian Restaurant",
      body: "Fresh Indian & Kumaoni cuisine."
    },
    {
      icon: Mountain,
      title: "Beautiful Himalayan Views",
      body: "Wake up to peaceful mountain scenery."
    },
    {
      icon: HeartHandshake,
      title: "Warm Hospitality",
      body: "Professional staff with personalized service."
    },
    {
      icon: ParkingSquare,
      title: "Free Parking & Wi-Fi",
      body: "Convenient stay with modern amenities."
    },
  ];

  return (
    <section className="bg-primary text-primary-foreground">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <p className="text-center uppercase tracking-[0.3em] text-sm opacity-70">
          Why Choose Us
        </p>

        <h2 className="font-display text-center text-4xl md:text-5xl mt-4 max-w-3xl mx-auto">
          Everything you need for a peaceful Himalayan stay.
        </h2>

        <GsapReveal
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title}>

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="font-display text-2xl">
                {title}
              </h3>

              <p className="mt-3 text-primary-foreground/80 leading-7">
                {body}
              </p>

            </div>
          ))}
        </GsapReveal>

      </div>

    </section>
  );
}

/* ==========================================================
                    NEARBY ATTRACTIONS
========================================================== */

const NEARBY = [
  {
    name: "Kainchi Dham",
    note: "Neem Karoli Baba",
    distance: "5 min",
  },
  {
    name: "Nainital",
    note: "Lake City",
    distance: "25 min",
  },
  {
    name: "Bhimtal",
    note: "Lake",
    distance: "30 min",
  },
  {
    name: "Sattal",
    note: "Seven Lakes",
    distance: "35 min",
  },
  {
    name: "Naukuchiatal",
    note: "Adventure",
    distance: "40 min",
  },
  {
    name: "Mukteshwar",
    note: "Hill Station",
    distance: "1 Hour",
  },
  {
    name: "Ramgarh",
    note: "Fruit Orchards",
    distance: "50 min",
  },
  {
    name: "Almora",
    note: "Heritage Town",
    distance: "2 Hours",
  },
  {
    name: "Jageshwar Dham",
    note: "Ancient Temple",
    distance: "3 Hours",
  },
];

function NearbyAttractions() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <SectionHeading
        eyebrow="Nearby Attractions"
        title="Discover the beauty of Kumaon."
        description="Explore temples, lakes, mountains and beautiful destinations located just a short drive from our hotel."
        align="center"
      />

      <GsapReveal
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.05}
      >
        {NEARBY.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border bg-card p-5 hover:shadow-lg transition"
          >

            <div className="flex gap-4">

              <MapPin className="mt-1 h-5 w-5 text-primary" />

              <div>

                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-muted-foreground">
                  {item.note}
                </p>

                <p className="mt-2 text-primary font-medium">
                  {item.distance}
                </p>

              </div>

            </div>

          </div>
        ))}
      </GsapReveal>

      <div className="mt-12 text-center">

        <Button
          asChild
          variant="outline"
          className="rounded-full px-8"
        >
          <Link href="/things-to-do">
            Explore Nearby Places
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

      </div>

    </section>
  );
}

/* ---------- PART 3 CONTINUES FROM HERE ---------- */


/* ==========================================================
                DIRECT BOOKING BENEFITS
========================================================== */

function DirectBookingBenefits() {
  const benefits = [
    "Best Available Rates",
    "Exclusive Direct Booking Offers",
    "Priority Room Preference (Subject to Availability)",
    "Personalized Reservation Assistance",
    "Flexible Cancellation Support",
    "24×7 Customer Assistance",
  ];

  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 lg:grid-cols-2 items-center">
        <GsapReveal>
          <SectionHeading
            eyebrow="Book Direct"
            title="Enjoy exclusive benefits when you reserve directly."
            description="Skip third-party booking fees and enjoy a better experience with personalized service."
          />

          <ul className="mt-8 space-y-4">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-muted-foreground">
            * Terms & Conditions Apply
          </p>
        </GsapReveal>

        <GsapReveal>
          <div className="rounded-2xl border bg-card p-8 shadow-lg">

            <p className="text-sm uppercase tracking-widest text-primary">
              Reservations
            </p>

            <h3 className="mt-3 font-display text-3xl">
              Speak with our team
            </h3>

            <div className="mt-8 space-y-5">

              <a
                href={`tel:${PROPERTY.telephone}`}
                className="flex items-center gap-4 hover:text-primary transition"
              >
                <Phone className="h-5 w-5 text-primary" />
                {PROPERTY.telephone}
              </a>

              {PROPERTY.telephoneAlt && (
                <a
                  href={`tel:${PROPERTY.telephoneAlt}`}
                  className="flex items-center gap-4 hover:text-primary transition"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  {PROPERTY.telephoneAlt}
                </a>
              )}

              <a
                href={`mailto:${PROPERTY.email}`}
                className="flex items-center gap-4 hover:text-primary transition"
              >
                <Mail className="h-5 w-5 text-primary" />
                {PROPERTY.email}
              </a>
            </div>

            <Button asChild className="mt-10 w-full rounded-full">
              <Link href="/contact">
                Reserve Now
              </Link>
            </Button>
          </div>
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

      <SectionHeading
        eyebrow="Guest Reviews"
        title="Loved by travellers from across India."
        align="center"
      />

      <GsapReveal
        className="mt-14 grid gap-10 md:grid-cols-3"
        stagger={0.12}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.author}
            className="rounded-2xl border bg-card p-8 shadow-sm"
          >
            <div className="mb-5 text-4xl text-primary">★★★★★</div>

            <p className="italic leading-8">
              "{testimonial.quote}"
            </p>

            <div className="mt-8">
              <h4 className="font-semibold">
                {testimonial.author}
              </h4>

              <p className="text-sm text-muted-foreground">
                {testimonial.location}
              </p>
            </div>
          </div>
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

      <div className="mx-auto max-w-5xl px-6 py-24 text-center">

        <p className="uppercase tracking-[0.35em] text-sm opacity-70">
          Your Peaceful Stay Begins Here
        </p>

        <h2 className="mt-5 font-display text-4xl md:text-6xl leading-tight">
          Stay close to nature.
          <br />
          Stay close to Kainchi Dham.
        </h2>

        <p className="mt-6 text-primary-foreground/80 max-w-2xl mx-auto">
          Experience luxury, comfort and warm hospitality in the
          beautiful Kumaon Hills of Uttarakhand.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full px-8    hover:bg-secondary/70"
          >
            <Link href="/contact">
              Reserve Your Stay
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="ghost"
            className="rounded-full border-white text-white  hover:bg-white/20 hover:text-white"
          >
            <a href={`tel:${PROPERTY.telephone}`}>
              Call Now +91-77788-83561
            </a>
          </Button>

        </div>

      </div>
    </section>
  );
}
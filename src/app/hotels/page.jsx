
import { canonical, hotelSchema, breadcrumbSchema } from "@/lib/seo/structured-data";
import { HotelsClient } from "./client";

export const metadata = {
  title: "Rooms & Suites",
  description: "Six boutique rooms, cottages, and villas at Kainchi Retreat.",
  alternates: { canonical: canonical("/hotels") },
};

export default function HotelsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Rooms", url: "/hotels" }])) }} />
      <HotelsClient />
    </>
  );
}
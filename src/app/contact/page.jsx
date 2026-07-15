
import { breadcrumbSchema, canonical, faqSchema } from "@/lib/seo/structured-data";
import { faqs } from "@/lib/data/site";
import { ContactClient } from "./client";

export const metadata = {
  title: "Contact & Reservations",
  description: "Get in touch for reservations, transfers, and event enquiries at Iridium Blu Hotel.",
  alternates: { canonical: canonical("/contact") },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }])) }} />
      <ContactClient />
    </>
  );
}
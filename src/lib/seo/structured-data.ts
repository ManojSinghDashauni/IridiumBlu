const SITE_URL = "https://iridiumblu.com";
export const PROPERTY = {
  name: "Kainchi Retreat",
  legalName: "Kainchi Retreat Boutique Hotel",
  description: "A premium boutique hotel near Kainchi Dham.",
  url: SITE_URL, logo: `${SITE_URL}/logo.png`, image: `${SITE_URL}/og-cover.jpg`, telephone: "+91-99999-99999", priceRange: "₹₹₹", email: "stay@kainchiretreat.com",
  address: { streetAddress: "Kainchi Dham Road", addressLocality: "Nainital", addressRegion: "Uttarakhand", postalCode: "263132", addressCountry: "IN" },
  geo: { latitude: 29.5731, longitude: 79.6731 },
  amenities: ["Free Wi-Fi", "Mountain View"], starRating: 4, sameAs: [],
};

type JsonLd = Record<string, unknown>;
export function jsonLdScript(data: JsonLd) { return { type: "application/ld+json", children: JSON.stringify(data) }; }
const address = () => ({ "@type": "PostalAddress", ...PROPERTY.address });
const geo = () => ({ "@type": "GeoCoordinates", latitude: PROPERTY.geo.latitude, longitude: PROPERTY.geo.longitude });

export function hotelSchema(overrides: Partial<JsonLd> = {}): JsonLd {
  return { "@context": "https://schema.org", "@type": "Hotel", "@id": `${PROPERTY.url}#hotel`, name: PROPERTY.name, description: PROPERTY.description, url: PROPERTY.url, image: PROPERTY.image, telephone: PROPERTY.telephone, priceRange: PROPERTY.priceRange, starRating: { "@type": "Rating", ratingValue: PROPERTY.starRating }, address: address(), geo: geo(), amenityFeature: PROPERTY.amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })), ...overrides };
}
export function localBusinessSchema(overrides: Partial<JsonLd> = {}): JsonLd {
  return { "@context": "https://schema.org", "@type": "LodgingBusiness", "@id": `${PROPERTY.url}#business`, name: PROPERTY.name, description: PROPERTY.description, url: PROPERTY.url, logo: PROPERTY.logo, image: PROPERTY.image, telephone: PROPERTY.telephone, email: PROPERTY.email, priceRange: PROPERTY.priceRange, address: address(), geo: geo(), sameAs: PROPERTY.sameAs, ...overrides };
}
export function organizationSchema(): JsonLd {
  return { "@context": "https://schema.org", "@type": "Organization", name: PROPERTY.legalName, url: PROPERTY.url, logo: PROPERTY.logo, contactPoint: { "@type": "ContactPoint", telephone: PROPERTY.telephone, email: PROPERTY.email, contactType: "Reservations", areaServed: "IN", availableLanguage: ["en", "hi"] } };
}
export function breadcrumbSchema(items: { name: string; url: string }[]): JsonLd {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${SITE_URL}${item.url}` })) };
}
export function restaurantSchema(): JsonLd { return { "@context": "https://schema.org", "@type": "Restaurant", name: `${PROPERTY.name} — Valley View Cafe`, image: PROPERTY.image, address: address(), geo: geo(), priceRange: PROPERTY.priceRange, telephone: PROPERTY.telephone, url: `${SITE_URL}/dining` }; }
export function eventVenueSchema(): JsonLd { return { "@context": "https://schema.org", "@type": "EventVenue", name: `${PROPERTY.name} — Events`, address: address(), url: `${SITE_URL}/events` }; }
export function faqSchema(qa: { question: string; answer: string }[]): JsonLd { return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: qa.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }; }
export function canonical(path: string) { return `${SITE_URL}${path}`; }
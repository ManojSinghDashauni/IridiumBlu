const SITE_URL = "https://iridiumblu.com";

export const PROPERTY = {
  name: "iridiumblu",
  legalName: "iridiumblu Hotel",
  description: "A Unit Of Sydruv LLP",
  url: SITE_URL,
  logo: `${SITE_URL}/SVG/circle b.svg`,
  image: `${SITE_URL}/og-cover.jpg`,
  telephone: "+91-77788-83561",
  telephone2: "+91-77788-83563",
  priceRange: "₹₹₹",
  email: "resv@iridiumblue.com",
  address: {
    streetAddress: "Kainchi Dham Road",
    addressLocality: "Nainital",
    addressRegion: "Uttarakhand",
    postalCode: "263132",
    addressCountry: "IN",
  },
  geo: {
    latitude: 29.4328125,
    longitude: 79.5086875,
  },
  amenities: ["Free Wi-Fi", "Mountain View"],
  starRating: 4,
  sameAs: [],
};

export function jsonLdScript(data) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}

const address = () => ({
  "@type": "PostalAddress",
  ...PROPERTY.address,
});

const geo = () => ({
  "@type": "GeoCoordinates",
  latitude: PROPERTY.geo.latitude,
  longitude: PROPERTY.geo.longitude,
});

export function hotelSchema(overrides = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${PROPERTY.url}#hotel`,
    name: PROPERTY.name,
    description: PROPERTY.description,
    url: PROPERTY.url,
    image: PROPERTY.image,
    telephone: PROPERTY.telephone,
    priceRange: PROPERTY.priceRange,
    starRating: {
      "@type": "Rating",
      ratingValue: PROPERTY.starRating,
    },
    address: address(),
    geo: geo(),
    amenityFeature: PROPERTY.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    ...overrides,
  };
}

export function localBusinessSchema(overrides = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${PROPERTY.url}#business`,
    name: PROPERTY.name,
    description: PROPERTY.description,
    url: PROPERTY.url,
    logo: PROPERTY.logo,
    image: PROPERTY.image,
    telephone: PROPERTY.telephone,
    email: PROPERTY.email,
    priceRange: PROPERTY.priceRange,
    address: address(),
    geo: geo(),
    sameAs: PROPERTY.sameAs,
    ...overrides,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: PROPERTY.legalName,
    url: PROPERTY.url,
    logo: PROPERTY.logo,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PROPERTY.telephone,
      email: PROPERTY.email,
      contactType: "Reservations",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };
}

export function touristAttractionListSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristAttraction",
        name: it.name,
        description: it.description,
      },
    })),
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function restaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: `${PROPERTY.name} — Valley View Cafe`,
    image: PROPERTY.image,
    address: address(),
    geo: geo(),
    priceRange: PROPERTY.priceRange,
    telephone: PROPERTY.telephone,
    url: `${SITE_URL}/dining`,
  };
}

export function eventVenueSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: `${PROPERTY.name} — Events`,
    address: address(),
    url: `${SITE_URL}/events`,
  };
}

export function faqSchema(qa) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function canonical(path) {
  return `${SITE_URL}${path}`;
}
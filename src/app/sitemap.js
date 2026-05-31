import { MetadataRoute } from 'next';

const BASE_URL = "https://earthy-glow-next.lovable.app";

export default function sitemap() {
  return [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/hotels`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/dining`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/events`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/things-to-do`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/itineraries`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];
}
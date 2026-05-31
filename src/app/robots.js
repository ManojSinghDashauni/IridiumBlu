import { MetadataRoute } from "next";

const BASE_URL = "https://earthy-glow-next.lovable.app";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
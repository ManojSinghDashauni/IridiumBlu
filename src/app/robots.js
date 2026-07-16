const BASE_URL = "https://iridiumblu.com/sitemap.xml";
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

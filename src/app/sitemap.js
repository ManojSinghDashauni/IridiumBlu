export default function sitemap(){
  const baseUrl = "https://iridiumblu.com";

  const routes = [
    "",
    "/about",
    "/contact",
    "/hotels",
    "/dining",
    "/events",
    "/things-to-do",
    "/itineraries",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
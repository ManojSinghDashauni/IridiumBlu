import { PROPERTY, localBusinessSchema, organizationSchema } from "@/lib/seo/structured-data";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Toaster } from "sonner";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata = {
  title: {
    template: `%s | ${PROPERTY.name}`,
    default: PROPERTY.name,
  },
  description: PROPERTY.description,
  authors: [{ name: PROPERTY.legalName }],
  themeColor: "#5a4438",
  openGraph: { siteName: PROPERTY.name, type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      </head>
      <body>
        <Providers>
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
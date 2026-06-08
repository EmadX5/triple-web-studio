import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { seoKeywords, siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "Triple Web Design | Websites for Canadian Businesses",
    template: "%s | Triple Web Design"
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    title: "Triple Web Design | Websites for Canadian Businesses",
    description: siteConfig.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Canadian business team reviewing a professional website"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Triple Web Design | Websites for Canadian Businesses",
    description: siteConfig.description
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.baseUrl,
  email: siteConfig.email,
  ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    addressCountry: "CA"
  },
  areaServed: {
    "@type": "Country",
    name: "Canada"
  },
  priceRange: "$$",
  paymentAccepted: "Stripe, credit card",
  sameAs: []
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body>
        <JsonLd data={localBusinessSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

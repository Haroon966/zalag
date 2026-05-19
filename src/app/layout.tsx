import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI development",
    "generative AI",
    "machine learning consultants",
    "LLM integration",
    "AI automation",
    "production AI",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_US",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — AI systems for production`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/og-cover.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#090e19",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/og-cover.svg`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: siteConfig.address.country,
  },
  sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.x],
  areaServed: "Global",
  serviceType: siteConfig.services,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className={`${geistSans.className} antialiased bg-background text-foreground`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="grid-overlay" aria-hidden="true" />
          <div className="glow-ring -left-48 -top-32" aria-hidden="true" />
          <div className="glow-ring right-[-160px] top-1/3" aria-hidden="true" />
          <SiteChrome>
            <>
              <main id="main-content">{children}</main>
              <Footer />
            </>
          </SiteChrome>
        </div>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");var d=t||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",d);}catch(e){}})();`}
        </Script>
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>
      </body>
    </html>
  );
}

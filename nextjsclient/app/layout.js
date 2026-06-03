import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import BackgroundGradient from "@/components/public/BackgroundGradient";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

// ── CHANGED: full SEO metadata ────────────────────────────────────────────────
export const metadata = {
  title: "Vooklu — Web Design & Development Studio",
  description:
    "Vooklu builds fast, SEO-optimised websites and business management systems for businesses worldwide. Professional web design, Google-ready from day one.",
  keywords: [
    "web design",
    "website development",
    "SEO optimised website",
    "business website design",
    "web development studio",
    "website design India",
    "small business website",
  ],
  icons: {
    icon: "/images/logo2.jpg",
    shortcut: "/images/logo2.jpg",
    apple: "/images/logo2.jpg",
  },
  openGraph: {
    title: "Vooklu — Web Design & Development Studio",
    description:
      "Fast, Google-ready websites and business systems built to win customers. No templates. No outsourcing. Built right, from day one.",
    url: "https://vooklu.com",
    siteName: "Vooklu",
    images: [
      {
        url: "https://vooklu.com/images/og-image.avif",
        width: 1200,
        height: 630,
        alt: "Vooklu Web Design & Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vooklu — Web Design & Development Studio",
    description:
      "Fast, Google-ready websites built to win customers.",
    images: ["https://vooklu.com/images/og-image.avif"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vooklu.com",
  },
};
// ─────────────────────────────────────────────────────────────────────────────

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// ── JSON-LD structured data for Google rich results ───────────────────────────
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vooklu",
  url: "https://vooklu.com",
  logo: "https://vooklu.com/images/logo2.jpg",
  telephone: "+91 8375955258",
  priceRange: "₹8,000 - ₹40,000+",
  image: "https://vooklu.com/images/og-image.avif",
  description:
    "Vooklu is a web design and development studio based in New Delhi, India, building fast, SEO-optimised websites and business management systems for businesses worldwide.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rzc-1/128b",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110045",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    url: "https://vooklu.com/contact",
  },
  sameAs: [
    // Add your real social links here when ready
    "https://instagram.com/vooklu",
    "https://www.linkedin.com/in/vooklu/",
    "https://twitter.com/vooklu",
    "https://youtube.com/@vooklu",

  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Professional Static Website",
          description:
            "Custom designed, SEO-optimised static websites built to rank on Google and convert visitors into customers.",
          price: "8000",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Management System",
          description:
            "Full business platform with customer booking portal, admin dashboard, staff and history management.",
          price: "25000",
          priceCurrency: "INR",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Product",
          description:
            "Fully custom web solutions built around your specific business problems, with data ownership and analytics.",
          price: "40000",
          priceCurrency: "INR",
        },
      },
    ],
  },
  // ── Uncomment and update when you have real reviews ──
  // aggregateRating: {
  //   "@type": "AggregateRating",
  //   ratingValue: "5",
  //   reviewCount: "20",
  // },
};
// ─────────────────────────────────────────────────────────────────────────────

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-591J653E26"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-591J653E26');
          `}
        </Script>
        {/* JSON-LD — sitewide structured data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        <BackgroundGradient />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
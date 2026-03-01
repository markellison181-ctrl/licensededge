import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LicensedEdge — Cannabis Regulation Intelligence",
  description:
    "Weekly intelligence on cannabis licensing, regulatory changes, and market entry strategies across all legal states. Built for operators, compliance officers, and investors.",
  keywords: [
    "cannabis licensing",
    "cannabis regulation",
    "cannabis compliance",
    "cannabis license applications",
    "cannabis regulatory intelligence",
    "cannabis market entry",
    "cannabis operators",
    "cannabis newsletter"
  ],
  authors: [{ name: "SignalStack Media" }],
  creator: "SignalStack Media",
  publisher: "SignalStack Media",
  metadataBase: new URL("https://licensededge.com"),
  alternates: {
    canonical: "https://licensededge.com",
  },
  openGraph: {
    title: "LicensedEdge — Stay Ahead in Cannabis Regulation",
    description:
      "Weekly intelligence on cannabis licensing, regulatory changes, and market entry strategies across all legal states. Free weekly digest + Pro daily alerts.",
    type: "website",
    url: "https://licensededge.com",
    siteName: "LicensedEdge",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LicensedEdge - Cannabis Regulation Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LicensedEdge — Stay Ahead in Cannabis Regulation",
    description:
      "Weekly intelligence on cannabis licensing, regulatory changes, and market entry strategies across all legal states. Free weekly digest + Pro daily alerts.",
    images: ["/og-image.png"],
    creator: "@SignalStackHQ",
    site: "@SignalStackHQ",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function Header() {
  return (
    <header className="border-b border-forest-50/20 bg-forest/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
            <span className="text-forest font-bold text-sm">LE</span>
          </div>
          <span className="text-white font-semibold text-xl tracking-tight">
            Licensed<span className="text-gold">Edge</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/archive" className="text-gray-200 hover:text-gold transition-colors text-sm">
            Archive
          </Link>
          <Link href="/pricing" className="text-gray-200 hover:text-gold transition-colors text-sm">
            Pricing
          </Link>
          <Link href="/blog" className="text-gray-200 hover:text-gold transition-colors text-sm">
            Blog
          </Link>
          <Link
            href="/#subscribe"
            className="bg-gold text-forest px-5 py-2 rounded text-sm font-semibold hover:bg-gold-300 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
          >
            Subscribe Free
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-forest-50/20 bg-forest-500">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-forest font-bold text-xs">LE</span>
              </div>
              <span className="text-white font-semibold">
                Licensed<span className="text-gold">Edge</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Cannabis regulation intelligence, delivered weekly.
            </p>
            <p className="text-gray-400 text-xs mt-4">
              A <a href="https://signalstackmedia.com" className="text-gold hover:text-gold-300 transition-colors">SignalStack</a> newsletter.
            </p>
          </div>
          <div>
            <h4 className="text-gold/80 font-semibold mb-4 label-uppercase">Content</h4>
            <ul className="space-y-2">
              <li><Link href="/archive" className="text-gray-300 hover:text-gold transition-colors text-sm">Newsletter Archive</Link></li>
              <li><Link href="/archive/sample" className="text-gray-300 hover:text-gold transition-colors text-sm">Sample Issue</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-gold transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold/80 font-semibold mb-4 label-uppercase">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="text-gray-300 hover:text-gold transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/#subscribe" className="text-gray-300 hover:text-gold transition-colors text-sm">Subscribe</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold/80 font-semibold mb-4 label-uppercase">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-gray-300 hover:text-gold transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-gold transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-forest-50/20 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SignalStack Media Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://licensededge.com/#organization",
      name: "SignalStack Media LLC",
      url: "https://signalstackmedia.com",
      logo: "https://licensededge.com/og-image.png",
      sameAs: ["https://x.com/SignalStackHQ"],
    },
    {
      "@type": "WebSite",
      "@id": "https://licensededge.com/#website",
      url: "https://licensededge.com",
      name: "LicensedEdge",
      publisher: { "@id": "https://licensededge.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://licensededge.com/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Periodical",
      name: "LicensedEdge Newsletter",
      url: "https://licensededge.com",
      publisher: { "@id": "https://licensededge.com/#organization" },
      description: "Weekly intelligence on cannabis licensing, regulatory changes, and market entry strategies across all legal states.",
      isAccessibleForFree: true,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://js.stripe.com" />
        <link rel="dns-prefetch" href="https://signalstackmedia.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-forest text-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

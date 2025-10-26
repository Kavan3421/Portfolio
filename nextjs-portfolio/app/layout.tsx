import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kavan Patel - Full Stack Developer",
    template: "%s | Kavan Patel",
  },
  description: "Passionate Full Stack Developer specializing in MERN stack development.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "TypeScript",
    "Three.js",
    "Portfolio",
  ],
  authors: [{ name: "Kavan Patel" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kavan Patel - Full Stack Developer",
    description:
      "Passionate Full Stack Developer specializing in MERN stack development.",
    url: "/",
    siteName: "Kavan Patel Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        // dedicated OG image (generated)
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Kavan Patel - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Kavanpatel51",
    creator: "@Kavanpatel51",
    title: "Kavan Patel - Full Stack Developer",
    description:
      "Passionate Full Stack Developer specializing in MERN stack development.",
  images: ["/images/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Server-rendered JSON-LD structured data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kavan Patel",
              url: siteUrl + '/',
              jobTitle: "Full Stack Developer",
              worksFor: { "@type": "Organization", name: "Independent" },
              sameAs: [
                "https://www.linkedin.com/in/kavan-patel-763319251/",
                "https://github.com/kavan3421",
                "https://x.com/Kavanpatel51",
                "https://www.instagram.com/kavan._patel_"
              ]
            })
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

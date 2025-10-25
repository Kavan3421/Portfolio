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
        url: "/images/og-cover.jpg",
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
    images: ["/images/og-cover.jpg"],
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kavan Patel - Full Stack Developer | MERN Stack Expert",
    template: "%s | Kavan Patel - Full Stack Developer",
  },
  description:
    "Kavan Patel - Passionate Full Stack Developer specializing in MERN stack development. Expert in React, Node.js, MongoDB, Express, TypeScript, and modern web technologies. View my portfolio of innovative web applications.",
  keywords: [
    "Kavan Patel",
    "Kavan Patel Full Stack Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React.js",
    "Next.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Three.js",
    "Tailwind CSS",
    "REST API",
    "GraphQL",
    "Git",
    "Portfolio",
    "Web Development",
    "Software Development",
  ],
  authors: [{ name: "Kavan Patel" }],
  creator: "Kavan Patel",
  publisher: "Kavan Patel",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kavan Patel - Full Stack Developer | MERN Stack Expert",
    description:
      "Kavan Patel - Passionate Full Stack Developer specializing in MERN stack development. Expert in React, Node.js, MongoDB, Express, and modern web technologies.",
    url: "/",
    siteName: "Kavan Patel - Full Stack Developer Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Kavan Patel - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Kavanpatel51",
    creator: "@Kavanpatel51",
    title: "Kavan Patel - Full Stack Developer | MERN Stack Expert",
    description:
      "Kavan Patel - Passionate Full Stack Developer specializing in MERN stack development. Expert in React, Node.js, MongoDB, Express, and modern web technologies.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Kavan Patel",
        url: siteUrl,
        image: `${siteUrl}/profile.jpg`,
        sameAs: [
          "https://github.com/kavanpatel",
          "https://linkedin.com/in/kavanpatel",
        ],
        jobTitle: "Full Stack Developer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance",
        },
        knowsAbout: [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "MERN Stack",
          "Full Stack Development",
          "Web Development",
          "Software Engineering",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Full Stack Developer",
          occupationLocation: {
            "@type": "Country",
            name: "Worldwide",
          },
          description:
            "Expert in MERN stack development, creating scalable web applications",
          skills: "JavaScript, React, Node.js, MongoDB, Express.js, Next.js",
        },
        description:
          "Kavan Patel is a passionate Full Stack Developer specializing in MERN stack development. Expert in building modern, scalable web applications using React, Node.js, MongoDB, and Express.js.",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Kavan Patel - Full Stack Development Services",
        url: siteUrl,
        description:
          "Professional full stack web development services specializing in MERN stack applications",
        provider: {
          "@id": `${siteUrl}/#person`,
        },
        areaServed: "Worldwide",
        serviceType: "Web Development",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressRegion: "Gujarat",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Kavan Patel - Full Stack Developer Portfolio",
        description:
          "Portfolio of Kavan Patel, a Full Stack Developer specializing in MERN stack development",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* ✅ Valid structured data for Person + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

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
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: `${siteUrl}/`,
      name: "Kavan Patel Portfolio",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Kavan Patel",
      url: `${siteUrl}/`,
      jobTitle: "Full Stack Developer",
      description: "Passionate Full Stack Developer specializing in MERN stack development with expertise in React, Node.js, MongoDB, Express, TypeScript, and modern web technologies.",
      knowsAbout: [
        "Full Stack Development",
        "MERN Stack",
        "React.js",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "MongoDB",
        "Express.js",
        "Next.js",
        "Web Development",
        "Software Engineering",
        "Frontend Development",
        "Backend Development",
        "Three.js",
        "Tailwind CSS",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Independent",
      },
      sameAs: [
        "https://www.linkedin.com/in/kavan-patel-763319251/",
        "https://github.com/kavan3421",
        "https://x.com/Kavanpatel51",
        "https://www.instagram.com/kavan._patel_/",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Educational Institution",
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
        occupationalCategory: "15-1252.00",
        skills: "JavaScript, TypeScript, React, Node.js, MongoDB, Express, Next.js, REST API, GraphQL, Git, Docker, AWS",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Kavan Patel - Full Stack Development Services",
      url: `${siteUrl}/`,
      description: "Professional full stack web development services specializing in MERN stack applications",
      provider: {
        "@type": "Person",
        name: "Kavan Patel",
      },
      areaServed: "Worldwide",
      serviceType: "Web Development",
    },
  ];

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

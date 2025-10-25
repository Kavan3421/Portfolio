import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kavan Patel - Full Stack Developer",
  description: "Passionate Full Stack Developer specializing in MERN stack development",
  keywords: ["Full Stack Developer", "MERN Stack", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Kavan Patel" }],
  openGraph: {
    title: "Kavan Patel - Full Stack Developer",
    description: "Passionate Full Stack Developer specializing in MERN stack development",
    url: "https://kavanpatel.me",
    siteName: "Kavan Patel Portfolio",
    locale: "en_US",
    type: "website",
  },
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

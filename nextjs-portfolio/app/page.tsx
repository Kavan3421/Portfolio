'use client';

import dynamic from 'next/dynamic';
import Script from 'next/script';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

// Dynamic imports for performance
const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* JSON-LD: Person/Organization structured data */}
      <Script
        id="jsonld-person"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Kavan Patel',
            url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com') + '/',
            jobTitle: 'Full Stack Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Independent',
            },
            sameAs: [
              'https://www.linkedin.com/in/kavan-patel-763319251/',
              'https://github.com/kavan3421',
              'https://x.com/Kavanpatel51',
              'https://www.instagram.com/kavan._patel_',
            ],
          }),
        }}
      />
      <ParticlesBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

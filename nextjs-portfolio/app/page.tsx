"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Dynamic imports for performance
const ParticlesBackground = dynamic(
  () => import("@/components/ParticlesBackground"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      {/* Hidden SEO content for search engines */}
      <div className="sr-only">
        <h1>Kavan Patel - Full Stack Developer</h1>
        <h2>Expert MERN Stack Developer | React | Node.js | MongoDB | Express</h2>
        <p>
          Kavan Patel is a passionate Full Stack Developer specializing in MERN stack development.
          With expertise in React, Node.js, MongoDB, Express, TypeScript, and modern web technologies,
          Kavan creates innovative web applications that solve real-world problems. Portfolio showcasing
          full stack development projects, web development skills, and software engineering expertise.
        </p>
        <p>
          Skills: JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, 
          MySQL, PostgreSQL, REST APIs, GraphQL, Git, Docker, AWS, Three.js, Tailwind CSS,
          Frontend Development, Backend Development, Database Design, Web Development
        </p>
      </div>
      
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

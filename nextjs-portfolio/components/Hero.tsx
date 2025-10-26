'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaCode, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiHand } from 'react-icons/hi';
import Scene3D from './Scene3D';

const titles = [
  'Full Stack Developer',
  'React Developer',
  'MERN Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
          if (displayText === currentTitle) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
          if (displayText === '') {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 w-full">
      
      <div className="container-custom relative z-10 w-full">
  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left relative"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-primary mb-4 justify-center lg:justify-start">
              <HiHand className="animate-wave text-2xl" />
              <span className="text-lg font-medium">Hello, I&apos;m</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-responsive-xl font-bold mb-4"
            >
              <span className="gradient-text">Kavan Patel</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-responsive-md text-gray-600 dark:text-gray-400 mb-6 h-16 flex items-center justify-center lg:justify-start"
            >
              <span className="font-mono">{displayText}</span>
              <span className="animate-pulse ml-1 text-primary">|</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              A passionate Full Stack Developer with expertise in MERN stack, creating innovative web
              applications that solve real-world problems. I love turning complex ideas into beautiful,
              functional digital experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 text-sm sm:text-base"
              >
                <FaEnvelope />
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2 text-sm sm:text-base"
              >
                <FaCode />
                View My Work
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kavan-patel-763319251/', color: 'hover:text-blue-600' },
                { icon: FaGithub, href: 'https://github.com/kavan3421', color: 'hover:text-gray-900 dark:hover:text-white' },
                { icon: FaTwitter, href: 'https://x.com/Kavanpatel51', color: 'hover:text-blue-400' },
                { icon: FaInstagram, href: 'https://www.instagram.com/kavan._patel_', color: 'hover:text-pink-500' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ${social.color} transition-colors duration-300`}
                >
                  <social.icon size={18} className="sm:hidden" />
                  <social.icon size={20} className="hidden sm:block" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - 3D Canvas next to text */}
          <div className="relative w-full h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[520px] order-first lg:order-last">
            <Scene3D />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400"
          >
            <span className="text-xs sm:text-sm uppercase tracking-wider">Scroll Down</span>
            <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

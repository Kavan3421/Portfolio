'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import Image from 'next/image';

const stats = [
  { number: 6, label: 'Projects Completed', suffix: '' },
  { number: 10, label: 'Achievements', suffix: '' },
  { number: 100, label: 'Satisfaction', suffix: '%' },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold gradient-text mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Get to know me better</p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 sm:p-8 shadow-xl"
            >
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2, type: 'spring' }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                      {stat.number}{stat.suffix}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="aspect-square relative bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/Me.png"
                    alt="Kavan Patel"
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <motion.div
                className="absolute bottom-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <FaUser className="inline mr-2" />
                2+ Years Experience
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <FaUser className="text-2xl sm:text-3xl text-primary" />
                <h3 className="text-xl sm:text-2xl font-bold">Who I Am</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                A passionate and self-driven software developer with expertise in full-stack development
                using the MERN stack. With experience in building robust web applications, I am adept at
                solving complex technical challenges and delivering high-quality solutions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-2xl sm:text-3xl text-primary" />
                <h3 className="text-xl sm:text-2xl font-bold">Education</h3>
              </div>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li>
                  <strong className="text-gray-900 dark:text-white">Bachelor of Engineering</strong>
                  <br />
                  The Charutar Vidya Mandal University (2022-2026)
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Higher Secondary</strong>
                  <br />
                  Jawahar Navodaya Vidyalaya, Kheda (79.6%)
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <FaMapMarkerAlt className="text-2xl sm:text-3xl text-primary" />
                <h3 className="text-xl sm:text-2xl font-bold">Personal Info</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><strong className="text-gray-900 dark:text-white">Location:</strong> Mahemdabad, Kheda, Gujarat, India</li>
                <li><strong className="text-gray-900 dark:text-white">Languages:</strong> English, Hindi, Gujarati</li>
                <li><strong className="text-gray-900 dark:text-white">Interests:</strong> Traveling, Watching Movies, Technology</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.a
                href="https://drive.google.com/file/d/1iyWHGiyk5FCMNgTQtag3f0oEGiC8211y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <FaDownload />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

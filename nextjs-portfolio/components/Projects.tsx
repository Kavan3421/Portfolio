'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: 'SurveilEye - RFID Surveillance System',
    description: 'Advanced RFID-based vehicle surveillance and security system with real-time monitoring capabilities and CCTV integration.',
    image: '/images/proj_1.jpg',
    tags: ['RFID', 'IoT', 'Real-time', 'Security'],
    liveLink: 'https://surveileye.netlify.app',
    githubLink: 'https://github.com/Kavan3421/RFID-based-gatepass-system',
    category: ['fullstack', 'web'],
  },
  {
    title: 'TalentForged - AI powered Resume Builder',
    description: 'I built an AI-powered resume builder that streamlines the resume creation process using natural language processing and machine learning.',
    image: '/images/proj_7.jpg',
    tags: ['Next.js', 'AI', 'Tailwind CSS'],
    liveLink: 'https://talentforged.com',
    category: ['fullstack', 'web'],
  },
  {
    title: 'LionsFit - Fitness Tracker',
    description: 'Comprehensive fitness tracking web application with workout logging, progress visualization, and interactive charts.',
    image: '/images/proj_2.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    liveLink: 'https://lionsfit.netlify.app/',
    githubLink: 'https://github.com/kavan3421/lionsfit',
    category: ['fullstack', 'web'],
  },
  {
    title: 'InsightIQ – Business Analytics Dashboard',
    description: 'Full-featured analytics dashboard with role-based access, KPI metrics, charts, trends, and export functionality.',
    image: '/images/proj_3.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Recharts'],
    liveLink: 'https://iqinsight.netlify.app',
    githubLink: 'https://github.com/Kavan3421/Insightiq',
    category: ['fullstack', 'web'],
  },
  {
    title: 'TechForge Club Website',
    description: 'A dynamic and responsive club management portal built using the MERN stack. Features include event management, announcements, admin panel, and member showcase.',
    image: '/images/proj_4.jpg',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    liveLink: 'https://techforgeclub.netlify.app',
    category: ['fullstack', 'web'],
  },
  {
    title: 'AstraSoft Innovations – Frontend Website',
    description: 'Responsive, animated landing page for AstraSoft Innovation with smooth scroll, modern UI, service sections, and contact form — built using React and AOS.',
    image: '/images/proj_5.jpg',
    tags: ['React.js', 'HTML', 'CSS', 'JavaScript', 'AOS'],
    liveLink: 'https://astrasoftinnovations.dev',
    category: ['frontend', 'web'],
  },
  {
    title: 'Amazon Clone',
    description: 'Full-featured e-commerce platform replicating Amazon\'s core functionalities with product management and shopping cart.',
    image: '/images/proj_6.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    githubLink: 'https://github.com/Kavan3421/amazon',
    category: ['frontend'],
  },
];

const filters = ['all', 'web', 'fullstack', 'frontend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter((project) =>
    activeFilter === 'all' ? true : project.category.includes(activeFilter)
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Some of my recent work</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)} {filter === 'all' && 'Projects'}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden shadow-xl group"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg"
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg"
                      >
                        <FaGithub />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/kavan3421"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <FaGithub />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

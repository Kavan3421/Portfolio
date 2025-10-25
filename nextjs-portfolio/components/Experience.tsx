'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaSchool } from 'react-icons/fa';

const experiences = [
  {
    period: '2022 - 2026',
    title: 'Bachelor of Engineering',
    organization: 'The Charutar Vidya Mandal University',
    description: 'Currently pursuing B.E. with first class distinction, focusing on software development and engineering principles.',
    icon: FaGraduationCap,
    tags: ['Software Engineering', 'Data Structures', 'Algorithms'],
  },
  {
    period: '2023 - Present',
    title: 'Full Stack Developer',
    organization: 'Personal Projects & Freelance',
    description: 'Developed multiple web applications using MERN stack, including fitness trackers, e-commerce platforms, and surveillance systems.',
    icon: FaCode,
    tags: ['MERN Stack', 'React.js', 'Node.js', 'MongoDB'],
  },
  {
    period: '2019 - 2022',
    title: 'Higher Secondary School',
    organization: 'Jawahar Navodaya Vidyalaya, Kheda',
    description: 'Completed higher secondary education with 79.6%, building strong foundation in mathematics and science.',
    icon: FaSchool,
    tags: ['Mathematics', 'Physics', 'Chemistry'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold gradient-text mb-4">Experience & Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">My journey so far</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary rounded-full hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:mb-20 ${
                  index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:ml-auto md:text-left'
                } md:w-1/2`}
              >
                {/* Timeline Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute top-0 ${
                    index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
                  } left-1/2 md:left-auto transform -translate-x-1/2 md:transform-none w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl z-10`}
                >
                  <exp.icon className="text-2xl text-white" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass rounded-2xl p-6 md:p-8 shadow-xl mt-20 md:mt-0"
                >
                  <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                    {exp.period}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <h4 className="text-lg text-primary font-medium mb-3">{exp.organization}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNode, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiTailwindcss } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    skills: [
      { name: 'React JS', icon: FaReact, level: 95, color: '#61DAFB' },
      { name: 'JavaScript', icon: FaJs, level: 90, color: '#F7DF1E' },
      { name: 'HTML5', icon: FaHtml5, level: 85, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, level: 85, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend Development',
    icon: FaNode,
    skills: [
      { name: 'Node.js', icon: FaNode, level: 80, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, level: 75, color: '#000000' },
      { name: 'MongoDB', icon: SiMongodb, level: 75, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, level: 70, color: '#4479A1' },
    ],
  },
  {
    title: 'Tools & Others',
    icon: FaGitAlt,
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 85, color: '#F05032' },
      { name: 'REST APIs', icon: FaDatabase, level: 80, color: '#6366f1' },
      { name: 'C++', icon: FaPython, level: 70, color: '#00599C' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-3xl sm:text-4xl text-primary" />
                <h3 className="text-lg sm:text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon style={{ color: skill.color }} className="text-xl" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Skill Orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[FaReact, FaNode, FaJs, SiMongodb].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotateY: 180 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="flex justify-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
                <Icon className="text-4xl text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

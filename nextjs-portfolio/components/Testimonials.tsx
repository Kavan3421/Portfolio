'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Gunj Patel',
    position: 'CEO, AstraSoft Innovations',
    image: '/images/Gunj.jpg',
    text: 'Kavan is an exceptional developer with a keen eye for detail. His ability to solve complex problems and deliver high-quality solutions is impressive.',
  },
  {
    name: 'Darshni Mistry',
    position: 'Project Collaborator',
    image: '/images/Darshni.jpeg',
    text: 'Working with Kavan on the fitness tracker project was amazing. His technical skills and dedication to quality are outstanding.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-lg font-bold gradient-text mb-4">What People Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Testimonials from colleagues and mentors</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 md:p-12 shadow-xl text-center"
          >
            <FaQuoteLeft className="text-5xl text-primary mx-auto mb-6 opacity-20" />
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 italic">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary relative">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                <p className="text-gray-600 dark:text-gray-400">{testimonials[current].position}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center shadow-lg"
            >
              <FaChevronLeft />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-primary w-8' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center shadow-lg"
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

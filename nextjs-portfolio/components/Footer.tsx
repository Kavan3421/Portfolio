'use client';

import { FaHeart, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center md:text-left"
          >
            © 2024 Kavan Patel. All rights reserved. Made with{' '}
            <FaHeart className="inline text-red-500 animate-pulse" /> and lots of coffee.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {[
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kavan-patel-763319251/' },
              { icon: FaGithub, href: 'https://github.com/kavan3421' },
              { icon: FaTwitter, href: 'https://x.com/Kavanpatel51' },
              { icon: FaInstagram, href: 'https://www.instagram.com/kavan._patel_' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-all duration-300"
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

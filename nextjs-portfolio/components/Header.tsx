'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';

// Add error boundary for theme
const useThemeWithFallback = () => {
  try {
    return useTheme();
  } catch (error) {
    // Fallback to light theme if ThemeProvider is not available
    return {
      theme: 'light' as const,
      toggleTheme: () => {},
    };
  }
};

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useThemeWithFallback();
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const firstMenuItemRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const header = document.getElementById('site-header');
      const headerOffset = header?.offsetHeight ?? 80;
      const scrollPosition = window.scrollY + headerOffset + 20;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    const targetId = href.startsWith('#') ? href.substring(1) : href;
    const element = document.getElementById(targetId);
    const header = document.getElementById('site-header');
    const headerOffset = header?.offsetHeight ?? 80;

    setActiveSection(targetId);
    closeMenu();

    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const top = Math.max(elementTop - headerOffset - 16, 0);

      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [closeMenu]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('touch-action');
      // Return focus to the toggle button when menu closes
      toggleBtnRef.current?.focus({ preventScroll: true });
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;

    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleEscape);

    // Move focus to first menu item when opened
    const to = window.setTimeout(() => {
      firstMenuItemRef.current?.focus({ preventScroll: true });
    }, 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
      window.removeEventListener('keydown', handleEscape);
      window.clearTimeout(to);
    };
  }, [isOpen, closeMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [closeMenu]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
      style={{ maxWidth: '100vw' }}
    >
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="text-lg xs:text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kavan <span className="text-primary">Patel</span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative font-medium transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex-shrink-0"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun size={18} className="sm:w-5 sm:h-5" /> : <FaMoon size={18} className="sm:w-5 sm:h-5" />}
            </motion.button>

            <button
                onClick={() => setIsOpen(prev => !prev)}
              className="md:hidden p-1.5 sm:p-2 text-gray-700 dark:text-gray-300 flex-shrink-0"
              aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
              ref={toggleBtnRef}
            >
              {isOpen ? <FaTimes size={22} className="sm:w-6 sm:h-6" /> : <FaBars size={22} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                key="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-16 md:top-20 bg-black/40 backdrop-blur-sm md:hidden"
                onClick={closeMenu}
              />
              <motion.nav
                key="mobile-nav"
                id="mobile-nav"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.25 }}
                className="fixed top-16 md:top-20 right-0 bottom-0 left-0 md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/60 dark:border-gray-800/60 overscroll-contain"
                role="dialog"
                aria-modal="true"
                style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
              >
                <ul className="flex flex-col gap-2 px-4 sm:px-6 pt-4 sm:pt-6 pb-10 overflow-y-auto">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        ref={index === 0 ? firstMenuItemRef : undefined}
                        className={`w-full text-left py-3 px-4 rounded-xl font-medium tracking-wide transition-colors duration-200 ${
                          activeSection === item.href.substring(1)
                            ? 'bg-primary text-white shadow-lg shadow-primary/30'
                            : 'text-gray-800 dark:text-gray-200 bg-gray-100/80 dark:bg-gray-800/60 hover:bg-primary/10 dark:hover:bg-primary/15'
                        }`}
                      >
                        {item.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

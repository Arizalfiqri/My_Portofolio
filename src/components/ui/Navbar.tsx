'use client';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 md:px-12"
      >
        {/* Glassmorphism backdrop for entire header */}
        <div className="absolute inset-0 bg-white/40 dark:bg-dark-surface/60 backdrop-blur-xl border-b border-foreground/[0.04] dark:border-dark-text/[0.06]" />

        <div className="max-w-6xl mx-auto flex items-center justify-between relative">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold font-outfit text-foreground dark:text-dark-text flex items-center gap-2 cursor-hover relative z-[60]"
          >
            <span className="text-primary">&lt;</span>
            Arizal Fiqri
            <span className="text-primary">/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 glass rounded-full px-8 py-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-foreground/70 dark:text-dark-text/70 hover:text-primary transition-colors cursor-hover relative group font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-10 h-10 rounded-full glass flex items-center justify-center cursor-hover overflow-hidden hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <motion.div
                initial={false}
                animate={{ 
                  rotate: theme === 'dark' ? 360 : 0,
                  scale: 1 
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {theme === 'dark' ? (
                  <Sun size={18} className="text-accent" />
                ) : (
                  <Moon size={18} className="text-foreground/70" />
                )}
              </motion.div>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 glass rounded-full cursor-hover"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block w-5 h-[2px] bg-foreground dark:bg-dark-text rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-[4px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-foreground dark:bg-dark-text rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-foreground dark:bg-dark-text rounded-full transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay + Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-foreground/20 dark:bg-black/40 backdrop-blur-sm z-[45] md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-[72px] left-4 right-4 z-[55] md:hidden glass rounded-2xl border border-foreground/[0.06] dark:border-dark-text/[0.06] overflow-hidden"
            >
              <div className="flex flex-col py-4">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center px-6 py-4 text-base text-foreground/70 dark:text-dark-text/70 hover:text-primary hover:bg-primary/5 transition-colors active:bg-primary/10 font-medium"
                    >
                      <span className="text-primary mr-3 text-sm">0{idx + 1}.</span>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

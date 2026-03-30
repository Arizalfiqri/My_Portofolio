/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/ui/AnimatedText';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowRight, FileText } from 'lucide-react';

const floatingIcons = [
  { label: 'PHP', x: '8%', y: '18%', delay: 0, className: 'float-icon' },
  { label: 'JS', x: '85%', y: '22%', delay: -1.5, className: 'float-icon float-icon-delayed' },
  { label: 'KT', x: '12%', y: '72%', delay: -3, className: 'float-icon float-icon-slow' },
  { label: 'PY', x: '88%', y: '68%', delay: -2, className: 'float-icon float-icon-reverse' },
  { label: '{ }', x: '5%', y: '45%', delay: -4, className: 'float-icon float-icon-slow float-icon-delayed' },
  { label: 'DB', x: '92%', y: '45%', delay: -1, className: 'float-icon float-icon-reverse float-icon-delayed' },
];

export default function Hero() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-6 overflow-hidden">
      {/* Floating Tech Icons */}
      {floatingIcons.map((icon) => (
        <motion.div
          key={icon.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 + Math.abs(icon.delay) * 0.3, duration: 0.8 }}
          className={`absolute hidden md:flex items-center justify-center w-12 h-12 rounded-xl border border-foreground/[0.06] dark:border-dark-text/[0.06] bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm text-xs font-mono font-bold text-foreground/30 dark:text-dark-text/25 select-none ${icon.className}`}
          style={{ left: icon.x, top: icon.y }}
        >
          {icon.label}
        </motion.div>
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <span className="px-5 py-2 rounded-full border border-primary/20 bg-primary/5 dark:bg-primary/10 text-sm font-medium tracking-widest uppercase text-primary">
            Arizal Fiqri
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold font-outfit mb-6 leading-tight text-foreground dark:text-dark-text">
          Building <span className="text-primary">Robust</span> Systems,<br />
          Exploring <span className="text-secondary dark:text-secondary-light">Intelligent</span> Solutions
        </motion.h1>

        <motion.div variants={itemVariants} className="text-xl md:text-2xl text-foreground/60 dark:text-dark-text/60 mb-12 flex flex-col md:flex-row items-center justify-center gap-2 font-light">
          <span>IT Student & System Developer focused on</span>
          <AnimatedText />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <MagneticButton>
            <a href="#projects" className="group relative px-8 py-4 gradient-btn text-white rounded-full font-semibold overflow-hidden flex items-center justify-center gap-2 btn-interactive hover:shadow-warm-lg hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a href="/resume.pdf" target="_blank" className="group px-8 py-4 rounded-full font-semibold border-2 border-foreground/15 dark:border-dark-text/15 hover:border-primary/40 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all flex items-center justify-center gap-2 text-foreground/80 dark:text-dark-text/80 hover:text-primary btn-interactive">
              Download Resume <FileText size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-foreground/40 dark:text-dark-text/40">Scroll</span>
        <div
          className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent scroll-indicator-line"
        />
      </motion.div>
    </section>
  );
}

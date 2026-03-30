/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/ui/AnimatedText';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowRight, FileText } from 'lucide-react';

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
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <span className="px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium tracking-widest uppercase text-primary">
            Arizal Fiqri
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold font-outfit mb-6 leading-tight text-foreground">
          Building <span className="text-primary">Robust</span> Systems,<br />
          Exploring <span className="text-secondary">Intelligent</span> Solutions
        </motion.h1>

        <motion.div variants={itemVariants} className="text-xl md:text-2xl text-foreground/60 mb-12 flex flex-col md:flex-row items-center justify-center gap-2 font-light">
          <span>IT Student & System Developer focused on</span>
          <AnimatedText />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <MagneticButton>
            <a href="#projects" className="group relative px-8 py-4 bg-primary text-white rounded-full font-semibold overflow-hidden flex items-center justify-center gap-2 transition-all hover:shadow-warm hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a href="/resume.pdf" target="_blank" className="group px-8 py-4 rounded-full font-semibold border-2 border-foreground/15 hover:border-primary/40 hover:bg-primary/5 transition-all flex items-center justify-center gap-2 text-foreground/80 hover:text-primary">
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
        <span className="text-xs uppercase tracking-[0.2em] text-foreground/40">Scroll</span>
        <div
          className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent scroll-indicator-line"
        />
      </motion.div>
    </section>
  );
}

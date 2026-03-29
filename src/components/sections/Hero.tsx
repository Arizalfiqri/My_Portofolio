/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/ui/AnimatedText';
import MagneticButton from '@/components/ui/MagneticButton';
import { Download, ArrowRight } from 'lucide-react';

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
        <motion.div variants={itemVariants} className="inline-block mb-4 relative group">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all duration-500"></div>
          <span className="relative px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium tracking-widest uppercase text-foreground/80">
            Arizal Fiqri
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold font-outfit mb-6 leading-tight">
          System Developer<br />
          <span className="text-white/40">&amp;</span> AI Enthusiast
        </motion.h1>

        <motion.div variants={itemVariants} className="text-xl md:text-2xl text-foreground/70 mb-12 flex flex-col md:flex-row items-center justify-center gap-2 font-light">
          <span>Problem Solver focused on</span>
          <AnimatedText />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <MagneticButton>
            <a href="#projects" className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2 font-semibold">
                Explore Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a href="/resume.pdf" target="_blank" className="group px-8 py-4 rounded-full font-medium border border-white/20 hover:bg-white/5 transition-all flex items-center justify-center gap-2 backdrop-blur-md hover:border-white/40">
              Download Resume <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
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
        <span className="text-xs uppercase tracking-[0.2em] text-foreground/50">Scroll</span>
        <div
          className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent scroll-indicator-line"
        />
      </motion.div>
    </section>
  );
}

'use client';
import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, className = '' }: { title: string, subtitle?: string, className?: string }) {
  return (
    <div className={`text-center max-w-2xl mx-auto mb-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-foreground dark:text-dark-text relative inline-block">
          {title}
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />
        </h2>
        {subtitle && (
          <p className="text-foreground/50 dark:text-dark-text/50 text-lg mt-8">{subtitle}</p>
        )}
      </motion.div>
    </div>
  );
}

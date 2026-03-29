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
        <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4 relative inline-block">
          {title}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full" />
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary/30 rounded-full blur-md" />
        </h2>
        {subtitle && (
          <p className="text-foreground/60 text-lg mt-8">{subtitle}</p>
        )}
      </motion.div>
    </div>
  );
}

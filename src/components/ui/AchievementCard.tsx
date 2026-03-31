'use client';
import { motion } from 'framer-motion';
import { Trophy, Calendar } from 'lucide-react';

interface AchievementProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export default function AchievementCard({ title, issuer, date, description }: AchievementProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="warm-card p-5 md:p-6 h-full flex flex-col cursor-hover group"
    >
      <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
        <Trophy className="w-5 h-5 text-primary" />
      </div>
      
      <h4 className="text-base md:text-lg font-bold font-outfit text-foreground dark:text-dark-text mb-2 leading-tight">{title}</h4>
      
      <div className="text-secondary-dark dark:text-secondary-light font-semibold text-sm mb-3">{issuer}</div>
      
      <p className="text-foreground/55 dark:text-dark-text/55 text-sm leading-relaxed mb-5 flex-grow">{description}</p>
      
      <div className="flex items-center text-xs text-foreground/40 dark:text-dark-text/40 gap-2 pt-4 border-t border-foreground/[0.06] dark:border-dark-text/[0.06]">
        <Calendar className="w-4 h-4" />
        {date}
      </div>
    </motion.div>
  );
}

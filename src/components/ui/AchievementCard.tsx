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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="warm-card p-6 h-full flex flex-col cursor-hover"
    >
      <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-5">
        <Trophy className="w-5 h-5 text-primary" />
      </div>
      
      <h4 className="text-lg font-bold font-outfit text-foreground mb-2">{title}</h4>
      
      <div className="text-secondary-dark font-semibold text-sm mb-3">{issuer}</div>
      
      <p className="text-foreground/55 text-sm leading-relaxed mb-5 flex-grow">{description}</p>
      
      <div className="flex items-center text-xs text-foreground/40 gap-2 pt-4 border-t border-foreground/[0.06]">
        <Calendar className="w-4 h-4" />
        {date}
      </div>
    </motion.div>
  );
}

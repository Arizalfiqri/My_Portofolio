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
      whileHover={{ scale: 1.02 }}
      className="relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent group cursor-hover"
    >
      <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      
      <div className="relative h-full bg-[#0a0a14] rounded-2xl p-6 border border-white/5 group-hover:border-primary/30 transition-colors">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Trophy className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
        </div>
        
        <h4 className="text-xl font-bold font-outfit text-white mb-2">{title}</h4>
        
        <div className="text-secondary font-medium text-sm mb-4">{issuer}</div>
        
        <p className="text-foreground/70 text-sm leading-relaxed mb-6">{description}</p>
        
        <div className="flex items-center text-xs text-foreground/50 gap-2">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
      </div>
    </motion.div>
  );
}

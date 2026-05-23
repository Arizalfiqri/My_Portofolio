'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Calendar, X, Award } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

interface AchievementProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
}

function truncate(text: string, wordLimit: number): string {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
}

export default function AchievementCard({ title, issuer, date, description, image }: AchievementProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => setIsOpen(false), []);

  // Close modal on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  return (
    <>
      {/* Card — click opens modal */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={() => setIsOpen(true)}
        className="warm-card h-full flex flex-col cursor-pointer group overflow-hidden"
      >
        {/* Certificate Image — compact */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={`${title} — certificate from ${issuer}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
          {/* Shadow gradient overlay at bottom of image — Dark mode */}
          <div className="absolute inset-x-0 bottom-0 z-10 h-[45%] pointer-events-none hidden dark:block" style={{
            background: 'linear-gradient(to top, rgba(31,41,55,0.95) 0%, rgba(31,41,55,0.5) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)'
          }} />
          {/* Shadow gradient overlay at bottom of image — Light mode */}
          <div className="absolute inset-x-0 bottom-0 z-10 h-[45%] pointer-events-none dark:hidden" style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.4) 40%, rgba(0,0,0,0.03) 70%, transparent 100%)'
          }} />
          {/* Date badge */}
          <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[11px] font-medium">
            <Calendar className="w-3 h-3" />
            {date}
          </div>
        </div>

        {/* Content — very compact */}
        <div className="p-4 flex flex-col flex-grow">
          <h4 className="text-sm md:text-[15px] font-bold font-outfit text-foreground dark:text-dark-text leading-snug mb-1">
            {title}
          </h4>
          <p className="text-xs text-primary font-semibold mb-2">{issuer}</p>
          <p className="text-foreground/45 dark:text-dark-text/45 text-[12px] leading-relaxed flex-grow">
            {truncate(description, 10)}
          </p>
        </div>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} certificate detail`}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden bg-white dark:bg-dark-surface shadow-2xl"
              style={{ maxHeight: 'calc(100vh - 8rem)', marginTop: '2rem' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-foreground/10 dark:bg-dark-text/15 hover:bg-foreground/20 dark:hover:bg-dark-text/25 flex items-center justify-center transition-colors"
                aria-label="Close certificate detail"
              >
                <X size={16} className="text-foreground dark:text-dark-text" />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 8rem)' }}>
                {/* Header — above image */}
                <div className="p-5 md:p-6 pb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold font-outfit text-foreground dark:text-dark-text leading-tight">
                        {title}
                      </h3>
                      <p className="text-sm text-primary font-semibold mt-0.5">{issuer}</p>
                    </div>
                  </div>
                </div>

                {/* Certificate Image — no background */}
                <div className="relative w-full px-5 md:px-6">
                  <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '3/2' }}>
                    <Image
                      src={image}
                      alt={`${title} — certificate from ${issuer}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 672px"
                    />
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-5 md:p-6 pt-4">
                  {/* Divider */}
                  <div className="h-px bg-foreground/[0.08] dark:bg-dark-text/[0.08] mb-4" />

                  {/* Full Description */}
                  <div className="mb-4">
                    <h4 className="text-[11px] uppercase tracking-wider text-foreground/40 dark:text-dark-text/40 font-semibold mb-1.5">
                      Deskripsi
                    </h4>
                    <p className="text-sm text-foreground/65 dark:text-dark-text/65 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-5 text-xs text-foreground/40 dark:text-dark-text/40 pt-3 border-t border-foreground/[0.06] dark:border-dark-text/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{issuer}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

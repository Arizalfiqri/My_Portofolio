/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AchievementCard from '@/components/ui/AchievementCard';

const achievements = [
  {
    title: "Juara 1 Web Development",
    issuer: "Universitas Muhammadiyah Kotabumi",
    date: "Okt 2025",
    description: "Meraih Juara 1 dalam Lomba Web Development pada acara Pekan Cangget ke-2 tahun 2025 yang diselenggarakan oleh Universitas Muhammadiyah Kotabumi.",
    image: "https://hdvcltkiaidceinruxja.supabase.co/storage/v1/object/public/image_porto/sertifikat/juara1_web.jpeg",
  },
  {
    title: "Juara 1 Project Terfavorit",
    issuer: "Universitas Muhammadiyah Kotabumi",
    date: "Agt 2025",
    description: "Meraih Juara 1 kategori Lomba Project Terfavorit pada Lomba Karya Teknologi Mahasiswa di Universitas Muhammadiyah Kotabumi.",
    image: "https://hdvcltkiaidceinruxja.supabase.co/storage/v1/object/public/image_porto/sertifikat/juara1_terfavorit.jpeg",
  },
  {
    title: "Agen Analisis Statistik Terbaik",
    issuer: "BPS Kab. Lampung Utara",
    date: "Feb 2026",
    description: "Penghargaan sebagai Agen Tim Analisis Statistik Terbaik dalam Program Pojok Statistik (Potik) di Universitas Muhammadiyah Kotabumi.",
    image: "https://hdvcltkiaidceinruxja.supabase.co/storage/v1/object/public/image_porto/sertifikat/agen_potik.jpeg",
  },
  {
    title: "Peserta Game Prototype Dev.",
    issuer: "APSI-PTMA",
    date: "Apr 2026",
    description: "Berpartisipasi dalam lomba Game Prototype Development pada Musyawarah Nasional APSI-PTMA 2026 di Sukabumi.",
    image: "https://hdvcltkiaidceinruxja.supabase.co/storage/v1/object/public/image_porto/sertifikat/peserta_lomba_game_dev.png",
  }
];

const INITIAL_COUNT = 3;

export default function Achievements() {
  const [showAll, setShowAll] = useState(false);
  const hasMore = achievements.length > INITIAL_COUNT;
  const containerVars: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVars: any = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
  };

  return (
    <section id="achievements" className="py-8 md:py-24 px-4 sm:px-6 md:px-12 relative z-10 w-full max-w-6xl mx-auto">
      <SectionHeading title="Milestones & Awards" subtitle="Recognition of continuous learning and competitive excellence." />

      {/* Always-visible first row */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-16"
      >
        {achievements.slice(0, INITIAL_COUNT).map((item, idx) => (
          <motion.div variants={itemVars} key={idx}>
            <AchievementCard {...item} />
          </motion.div>
        ))}
      </motion.div>

      {/* Expandable additional achievements */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
              {achievements.slice(INITIAL_COUNT).map((item, i) => (
                <motion.div
                  key={i + INITIAL_COUNT}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                >
                  <AchievementCard {...item} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      {hasMore && (
        <div className="mt-8 md:mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-foreground/10 dark:border-dark-text/10 text-foreground/70 dark:text-dark-text/70 hover:text-primary rounded-full font-semibold hover:border-primary/30 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all text-sm tracking-wide"
          >
            {showAll ? 'Show Less' : 'View All Awards'}
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex"
            >
              <ChevronDown size={16} />
            </motion.span>
          </button>
        </div>
      )}
    </section>
  );
}

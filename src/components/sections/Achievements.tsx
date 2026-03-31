/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import AchievementCard from '@/components/ui/AchievementCard';

const achievements = [
  {
    title: "National App Innovation Finalist",
    issuer: "Ministry of Communication and Informatics",
    date: "2024",
    description: "Reached the final stage of the national university competition by presenting a smart learning application predicting student performance."
  },
  {
    title: "Certified Web Developer",
    issuer: "Tech Indonesia Academy",
    date: "2023",
    description: "Completed an intensive 3-month bootcamp focusing on modern React, Node.js, and architectural system design patterns."
  },
  {
    title: "Best UI/UX Design Award",
    issuer: "Campus Tech Week",
    date: "2023",
    description: "Awarded first place for designing an intuitive, highly interactive dashboard for a mock health tracking mobile application."
  }
];

export default function Achievements() {
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
    <section id="achievements" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 relative z-10 w-full max-w-6xl mx-auto">
      <SectionHeading title="Milestones & Awards" subtitle="Recognition of continuous learning and competitive excellence." />

      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16"
      >
        {achievements.map((item, idx) => (
          <motion.div variants={itemVars} key={idx}>
            <AchievementCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

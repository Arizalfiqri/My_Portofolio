'use client';
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { projectsData } from '@/data/projectsData';

const INITIAL_COUNT = 3;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const hasMore = projectsData.length > INITIAL_COUNT;

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-8 md:py-24 px-4 sm:px-6 md:px-12 relative z-10 w-full max-w-7xl mx-auto">
      <SectionHeading title="Selected Works" subtitle="Featured projects showcasing problem-solving across Web, Mobile, and Game." />

      {/* Always-visible first row */}
      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-6 md:mt-16"
      >
        {projectsData.slice(0, INITIAL_COUNT).map((project, index) => (
          <motion.div variants={itemVars} key={project.slug}>
            <ProjectCard {...project} priority={index < 2} />
          </motion.div>
        ))}
      </motion.div>

      {/* Expandable additional projects */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-5 md:mt-6">
              {projectsData.slice(INITIAL_COUNT).map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                >
                  <ProjectCard {...project} />
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
            {showAll ? 'Show Less' : 'View All Projects'}
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

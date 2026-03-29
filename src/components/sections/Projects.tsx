/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    category: 'Web App',
    description: 'A robust PHP & MySQL based store system utilizing CodeIgniter. Integrated payment gateways with stock management capabilities.',
    techStack: ['CodeIgniter', 'PHP', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Smart Learning Assistant',
    category: 'AI-Related',
    description: 'A study helper analyzing user query inputs and suggesting automated learning pathways. Built with Django and NLP basics.',
    techStack: ['Django', 'Python', 'NLP', 'Tailwind CSS'],
  },
  {
    title: 'Health Tracking Dashboard',
    category: 'Mobile App',
    description: 'Native Android application for real-time tracking of personal fitness. Synchronized with wearable health device APIs.',
    techStack: ['Kotlin', 'Android SDK', 'Firebase'],
  },
  {
    title: 'Digital Literacy Explorer',
    category: 'AI-Related',
    description: 'Interactive data visualization module built to study AI impact on current digital literacy rates across various demographics.',
    techStack: ['JavaScript', 'D3.js', 'Stats'],
  }
];

export default function Projects() {
  const containerVars: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVars: any = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-7xl mx-auto">
      <SectionHeading title="Selected Works" subtitle="Highlighting featured projects across Web, Mobile, and AI exploration." />

      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 mt-16"
      >
        {projectsData.map((project) => (
          <motion.div variants={itemVars} key={project.title}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20 text-center">
        <a href="#" className="inline-block px-8 py-4 border border-white/20 text-foreground/80 hover:text-white rounded-full font-medium hover:border-primary/50 transition-all cursor-hover glass-card">
          View All on GitHub
        </a>
      </div>
    </section>
  );
}

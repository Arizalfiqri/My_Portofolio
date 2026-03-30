/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    category: 'Web App',
    problem: 'Small businesses need a simple, reliable online store to manage products and process orders without complex setup.',
    solution: 'Built a full-stack e-commerce system with integrated payment gateway (Midtrans) and real-time stock management dashboard.',
    techStack: ['CodeIgniter', 'PHP', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Smart Learning Assistant',
    category: 'Web App',
    problem: 'Students struggle to find structured, personalized learning paths from scattered online resources.',
    solution: 'Developed a study helper that analyzes query inputs and suggests automated learning pathways using Django backend.',
    techStack: ['Django', 'Python', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Health Tracking App',
    category: 'Mobile App',
    problem: 'Users need a simple way to track personal fitness data and sync with wearable health devices.',
    solution: 'Created a native Android application for real-time health tracking with wearable device API synchronization.',
    techStack: ['Kotlin', 'Android SDK', 'Firebase'],
  },
  {
    title: 'Digital Literacy Research',
    category: 'Research',
    problem: 'Limited data on how AI tools affect digital literacy rates across different demographics.',
    solution: 'Built an interactive data visualization module to study and present AI impact on digital literacy rates.',
    techStack: ['JavaScript', 'D3.js', 'Data Analysis'],
  }
];

export default function Projects() {
  const containerVars: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars: any = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-7xl mx-auto">
      <SectionHeading title="Selected Works" subtitle="Featured projects showcasing problem-solving across Web, Mobile, and Research." />

      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-8 mt-16"
      >
        {projectsData.map((project) => (
          <motion.div variants={itemVars} key={project.title}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-block px-8 py-4 border-2 border-foreground/10 text-foreground/70 hover:text-primary rounded-full font-semibold hover:border-primary/30 hover:bg-primary/5 transition-all warm-card">
          View All on GitHub
        </a>
      </div>
    </section>
  );
}

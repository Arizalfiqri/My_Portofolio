/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  Code2, Database, Globe, Smartphone,
  Palette, Film, Layout, BrainCircuit,
  BarChart3, FileCode2, Server, PenTool
} from 'lucide-react';

const skillGroups = [
  {
    title: "Core Stack",
    description: "Technologies I build with daily",
    accent: "primary",
    skills: [
      { name: "PHP", icon: <FileCode2 className="w-5 h-5" /> },
      { name: "MySQL", icon: <Database className="w-5 h-5" /> },
      { name: "JavaScript", icon: <Code2 className="w-5 h-5" /> },
      { name: "CodeIgniter", icon: <Server className="w-5 h-5" /> },
      { name: "Django", icon: <Globe className="w-5 h-5" /> },
      { name: "Kotlin", icon: <Smartphone className="w-5 h-5" /> },
    ],
  },
  {
    title: "Tools & Design",
    description: "Supporting skills & creativity",
    accent: "secondary",
    skills: [
      { name: "UI/UX Design", icon: <PenTool className="w-5 h-5" /> },
      { name: "Graphic Design", icon: <Palette className="w-5 h-5" /> },
      { name: "Video Editing", icon: <Film className="w-5 h-5" /> },
      { name: "Responsive Layout", icon: <Layout className="w-5 h-5" /> },
    ],
  },
  {
    title: "Exploring",
    description: "Currently learning & experimenting",
    accent: "accent",
    skills: [
      { name: "Machine Learning", icon: <BrainCircuit className="w-5 h-5" /> },
      { name: "Data Analysis", icon: <BarChart3 className="w-5 h-5" /> },
    ],
  },
];

const accentMap: Record<string, { border: string; bg: string; text: string; hoverBg: string; tagBg: string }> = {
  primary: {
    border: 'border-primary/15',
    bg: 'bg-primary/5',
    text: 'text-primary',
    hoverBg: 'hover:bg-primary/8',
    tagBg: 'bg-primary/8',
  },
  secondary: {
    border: 'border-secondary/15',
    bg: 'bg-secondary/5',
    text: 'text-secondary-dark',
    hoverBg: 'hover:bg-secondary/8',
    tagBg: 'bg-secondary/10',
  },
  accent: {
    border: 'border-accent/20',
    bg: 'bg-accent/5',
    text: 'text-accent-dark',
    hoverBg: 'hover:bg-accent/10',
    tagBg: 'bg-accent/10',
  },
};

export default function Skills() {
  const containerVars: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-7xl mx-auto">
      <SectionHeading title="Technical Skills" subtitle="A visual breakdown of my technical proficiency and interests." />

      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 gap-6"
      >
        {skillGroups.map((group) => {
          const colors = accentMap[group.accent];
          return (
            <motion.div
              key={group.title}
              variants={itemVars}
              className={`warm-card p-6 ${group.accent === 'accent' ? 'border-dashed' : ''}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${colors.tagBg} ${colors.text}`}>
                  {group.title}
                </div>
              </div>
              <p className="text-sm text-foreground/50 mb-5">{group.description}</p>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border ${colors.border} ${colors.bg} ${colors.hoverBg} transition-colors cursor-default`}
                  >
                    <span className={`${colors.text} shrink-0`}>{skill.icon}</span>
                    <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

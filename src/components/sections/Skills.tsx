/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const skillCategories = [
  {
    title: "Web & System Development",
    skills: ["PHP (Native)", "MySQL", "JavaScript", "CodeIgniter 4", "Django"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "Mobile Development",
    skills: ["Kotlin (Android)"],
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning concepts",
      "Data collection & preprocessing",
      "AI tools usage & evaluation",
      "AI impact on digital literacy"
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    title: "Creative & Supporting",
    skills: ["UI/UX Design", "Graphic Design", "Video Editing"],
    color: "from-orange-500/20 to-amber-500/20",
    border: "group-hover:border-orange-500/50"
  }
];

export default function Skills() {
  const containerVars: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars: any = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-7xl mx-auto">
      <SectionHeading title="Technical Proficiency" subtitle="A categorized breakdown of my technical and supportive skills." />

      <motion.div
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVars}
            className={`group relative glass-card p-6 border border-white/5 transition-all duration-500 ${category.border} hover:bg-white/5`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
            
            <h3 className="text-xl font-outfit font-bold mb-4 text-white relative z-10">{category.title}</h3>
            
            <ul className="space-y-3 relative z-10">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-start text-foreground/80 text-sm">
                  <span className="text-primary mr-2 mt-1 shrink-0">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

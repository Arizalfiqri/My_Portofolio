'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { GraduationCap, Globe, FlaskConical, Rocket, Code2, Smartphone } from 'lucide-react';

const highlights = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    label: "IT Student",
    detail: "Semester 5",
    color: "text-primary",
    bgColor: "bg-primary/8",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    label: "Focus",
    detail: "Web & Mobile Systems",
    color: "text-secondary",
    bgColor: "bg-secondary/8",
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    label: "Currently Learning",
    detail: "AI Integration",
    color: "text-accent-dark dark:text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    label: "Passion",
    detail: "Building scalable apps",
    color: "text-primary",
    bgColor: "bg-primary/8",
  },
];

const expertise = [
  { icon: <Code2 className="w-5 h-5" />, text: "Full-Stack Web Development" },
  { icon: <Smartphone className="w-5 h-5" />, text: "Native Android Development" },
  { icon: <Globe className="w-5 h-5" />, text: "System Design & Architecture" },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 relative z-10 w-full max-w-6xl mx-auto">
      <SectionHeading title="About Me" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-10"
      >
        {highlights.map((item) => (
          <motion.div
            key={item.label}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="warm-card p-4 md:p-5 flex flex-col items-start gap-3"
          >
            <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl ${item.bgColor} flex items-center justify-center ${item.color} transition-transform duration-300`}>
              {item.icon}
            </div>
            <div>
              <p className="text-[11px] md:text-xs uppercase tracking-wider text-foreground/50 dark:text-dark-text/50 font-medium mb-1">{item.label}</p>
              <p className="text-sm md:text-base font-semibold text-foreground dark:text-dark-text font-outfit leading-snug">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="warm-card p-5 md:p-8"
      >
        <h3 className="text-lg font-bold font-outfit mb-5 text-foreground dark:text-dark-text leading-tight">Core Expertise</h3>
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          {expertise.map((item) => (
            <div key={item.text} className="flex items-center gap-3 py-3 px-4 rounded-xl bg-background/80 dark:bg-dark-bg/50 border border-foreground/[0.04] dark:border-dark-text/[0.04] hover:border-primary/20 transition-all duration-300 group">
              <span className="text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
              <span className="text-sm font-medium text-foreground/80 dark:text-dark-text/80 leading-relaxed">{item.text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

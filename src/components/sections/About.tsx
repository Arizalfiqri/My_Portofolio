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
    color: "text-accent-dark",
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
    <section id="about" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-7xl mx-auto">
      <SectionHeading title="About Me" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-10"
      >
        {highlights.map((item) => (
          <motion.div
            key={item.label}
            variants={itemVariants}
            className="warm-card p-5 flex flex-col items-start gap-3"
          >
            <div className={`w-11 h-11 rounded-xl ${item.bgColor} flex items-center justify-center ${item.color}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-foreground/50 font-medium mb-1">{item.label}</p>
              <p className="text-base font-semibold text-foreground font-outfit">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="warm-card p-6 md:p-8"
      >
        <h3 className="text-lg font-bold font-outfit mb-5 text-foreground">Core Expertise</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {expertise.map((item) => (
            <div key={item.text} className="flex items-center gap-3 py-3 px-4 rounded-xl bg-background/80 border border-foreground/[0.04]">
              <span className="text-primary shrink-0">{item.icon}</span>
              <span className="text-sm font-medium text-foreground/80">{item.text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

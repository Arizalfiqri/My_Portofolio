'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { BrainCircuit, Beaker, Library } from 'lucide-react';

const steps = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    title: "Learning Foundations",
    description: "Deepening understanding of Machine Learning concepts and exploring how AI models process data.",
  },
  {
    icon: <Beaker className="w-6 h-6 text-secondary" />,
    title: "Practical Implementation",
    description: "Focusing on integrating AI APIs and tools into web applications, moving beyond mere theory.",
  },
  {
    icon: <Library className="w-6 h-6 text-accent" />,
    title: "Research Case Study",
    description: "Investigated how AI tools impact digital literacy, demonstrating basic data collection & analysis.",
  }
];

export default function AIExploration() {
  return (
    <section id="ai" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-5xl mx-auto">
      <SectionHeading title="Exploring AI & Intelligent Systems" subtitle="Bridging the gap between software engineering and artificial intelligence." />

      <div className="relative mt-16">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

        <div className="space-y-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`flex flex-col md:flex-row items-center justify-between group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content Box */}
              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="glass-card p-6 border border-white/5 group-hover:border-primary/30 transition-colors shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                  <h4 className="text-xl font-bold text-white font-outfit mb-3">{step.title}</h4>
                  <p className="text-foreground/70 text-sm">{step.description}</p>
                </div>
              </div>

              {/* Center Dot */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="absolute left-[-2px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-[#05050A] border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                {step.icon}
              </motion.div>

              {/* Empty Space for layout */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

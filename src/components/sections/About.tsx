'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

export default function About() {
  const tags = ["Web Development", "Mobile Development", "AI Enthusiast", "System Design"];

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

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 text-foreground/80 font-inter text-lg leading-relaxed"
        >
          <motion.p variants={itemVariants}>
            I am an Information Technology Systems student passionate about building digital systems through web and mobile technologies. I have experience in developing dynamic applications using <span className="text-white font-medium">PHP, MySQL, JavaScript, Django, and CodeIgniter</span>.
          </motion.p>
          <motion.p variants={itemVariants}>
            In addition to system development, I have a growing interest in <span className="text-white font-medium">Artificial Intelligence and Machine Learning</span>. I have worked on basic-level AI-related cases, including data collection, simple analysis, and understanding how AI tools impact digital literacy.
          </motion.p>
          <motion.p variants={itemVariants}>
            My goal is to become a system-oriented developer who can integrate intelligent features into applications, combining software engineering with AI-driven solutions.
          </motion.p>
          <motion.p variants={itemVariants}>
            I am continuously learning new technologies and improving my skills to build scalable, impactful, and intelligent systems.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group p-8 glass-card"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl pointer-events-none" />
          
          <h3 className="text-2xl font-bold font-outfit mb-6 text-white">Core Focus Areas</h3>
          
          <div className="flex flex-wrap gap-3 relative z-10">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/90 hover:bg-white/10 hover:border-primary/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <div className="mt-12">
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse-glow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

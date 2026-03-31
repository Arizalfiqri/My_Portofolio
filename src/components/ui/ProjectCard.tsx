'use client';
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion';
import { ExternalLink, Code2 as Github, Lightbulb, Wrench } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ProjectCardProps {
  title: string;
  problem: string;
  solution: string;
  category: string;
  techStack: string[];
  link?: string;
  github?: string;
}

export default function ProjectCard({
  title, problem, solution, category, techStack, link, github
}: ProjectCardProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  useEffect(() => {
    setIsTouchDevice(
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(max-width: 767px)').matches
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isTouchDevice) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const categoryColors: Record<string, string> = {
    'Web App': 'bg-primary/10 text-primary border-primary/20',
    'Mobile App': 'bg-secondary/10 text-secondary-dark dark:text-secondary-light border-secondary/20',
    'Research': 'bg-accent/10 text-accent-dark dark:text-accent border-accent/20',
  };

  return (
    <motion.div
      ref={cardRef}
      style={
        isTouchDevice
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full cursor-pointer group h-full"
    >
      <div className="warm-card flex flex-col h-full overflow-hidden">
        {/* Header */}
        <div className="p-5 md:p-6 pb-0">
          <div className="flex items-start justify-between mb-4 gap-3">
            <h3 className="text-lg md:text-xl font-bold font-outfit text-foreground dark:text-dark-text leading-tight">{title}</h3>
            <span className={`px-2.5 py-1 rounded-full text-[10px] md:text-[11px] font-semibold uppercase tracking-wider border whitespace-nowrap shrink-0 ${categoryColors[category] || 'bg-foreground/5 text-foreground/60 border-foreground/10'}`}>
              {category}
            </span>
          </div>
        </div>

        {/* Problem / Solution */}
        <div className="px-5 md:px-6 space-y-4 flex-grow">
          <div className="flex gap-3">
            <div className="shrink-0 mt-0.5">
              <div className="w-7 h-7 rounded-lg bg-primary/8 flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-primary" />
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">Problem</p>
              <p className="text-sm text-foreground/60 dark:text-dark-text/60 leading-relaxed">{problem}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="shrink-0 mt-0.5">
              <div className="w-7 h-7 rounded-lg bg-secondary/8 flex items-center justify-center">
                <Wrench className="w-4 h-4 text-secondary" />
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-secondary dark:text-secondary-light font-semibold mb-1">Solution</p>
              <p className="text-sm text-foreground/60 dark:text-dark-text/60 leading-relaxed">{solution}</p>
            </div>
          </div>
        </div>

        {/* Tech Stack + Links */}
        <div className="p-5 md:p-6 pt-5 mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {techStack.map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-[10px] md:text-[11px] uppercase tracking-wider font-medium rounded-lg bg-foreground/[0.04] dark:bg-dark-text/[0.06] text-foreground/50 dark:text-dark-text/50 border border-foreground/[0.06] dark:border-dark-text/[0.06] hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 pt-4 border-t border-foreground/[0.06] dark:border-dark-text/[0.06]">
            {link && (
              <a href={link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors cursor-hover font-medium btn-interactive">
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-foreground/50 dark:text-dark-text/50 hover:text-foreground dark:hover:text-dark-text transition-colors cursor-hover font-medium btn-interactive">
                <Github size={15} /> Source Code
              </a>
            )}
            {!link && !github && (
              <span className="flex items-center gap-2 text-sm text-foreground/35 dark:text-dark-text/35 italic font-medium">
                Internal Project
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

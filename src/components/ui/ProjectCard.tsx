'use client';
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion';
import { ExternalLink, Code2 as Github } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  techStack: string[];
  link?: string;
  github?: string;
  imageUrl?: string;
}

export default function ProjectCard({
  title, description, category, techStack, link, github, imageUrl
}: ProjectCardProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
      className="relative w-full rounded-2xl cursor-pointer group h-full"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
      />
      
      <div className="glass-card flex flex-col h-full overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
        
        {/* Project Image Placeholder */}
        <div className="relative w-full h-48 bg-white/5 overflow-hidden">
          {imageUrl ? (
            <Image src={imageUrl} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-foreground/30 font-medium font-outfit text-sm tracking-widest uppercase">
              Project Preview
            </div>
          )}
          <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-primary uppercase border border-primary/20">
            {category}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold font-outfit text-white mb-2">{title}</h3>
          <p className="text-foreground/70 text-sm mb-6 flex-grow leading-relaxed">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech) => (
              <span key={tech} className="px-2 py-1 text-[10px] uppercase tracking-wider rounded-md bg-white/5 text-foreground/60 border border-white/10">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
            {link && (
              <a href={link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-primary hover:text-white transition-colors cursor-hover">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-white transition-colors cursor-hover">
                <Github size={16} /> Source Code
              </a>
            )}
            {!link && !github && (
              <span className="flex items-center gap-2 text-sm text-foreground/40 italic">
                Internal Project
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

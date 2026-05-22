'use client';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Code2, Lightbulb, Wrench, BookOpen, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { useState, useCallback } from 'react';

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = projectsData.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = useCallback(() => {
    if (!project) return;
    setActiveImage((prev) => (prev + 1) % project.images.length);
  }, [project]);

  const prevImage = useCallback(() => {
    if (!project) return;
    setActiveImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  }, [project]);

  if (!project) {
    return (
      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden pt-20">
        <Navbar />
        <div className="text-center py-40">
          <h1 className="text-4xl font-bold font-outfit text-foreground dark:text-dark-text mb-4">Project Not Found</h1>
          <p className="text-foreground/60 dark:text-dark-text/60 mb-8">The project you are looking for does not exist.</p>
          <button onClick={() => router.push('/#projects')} className="px-6 py-3 rounded-full gradient-btn text-white font-semibold btn-interactive">
            ← Back to Projects
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  const categoryColors: Record<string, string> = {
    'Web App': 'bg-primary/10 text-primary border-primary/20',
    'Mobile App': 'bg-secondary/10 text-secondary-dark dark:text-secondary-light border-secondary/20',
    'Game': 'bg-accent/10 text-accent-dark dark:text-accent border-accent/20',
  };

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const containerVars: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVars: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-x-hidden pt-20">
      <Navbar />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-16 relative z-10"
      >
        {/* Back Button */}
        <motion.div variants={itemVars} className="mb-8">
          <button
            onClick={() => router.push('/#projects')}
            className="flex items-center gap-2 text-sm text-foreground/60 dark:text-dark-text/60 hover:text-primary transition-colors cursor-hover group font-medium"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Kembali ke Projects
          </button>
        </motion.div>

        {/* Project Header */}
        <motion.div variants={itemVars} className="mb-10 md:mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${categoryColors[project.category] || 'bg-foreground/5 text-foreground/60 border-foreground/10'}`}>
              {project.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-outfit text-foreground dark:text-dark-text mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-body text-foreground/60 dark:text-dark-text/60 max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Image Gallery — clean, borderless */}
        <motion.div variants={itemVars} className="mb-12 md:mb-16">
          {project.imageType === 'portrait' ? (
            /* Portrait (Mobile) Gallery — phone mockup on gradient bg */
            <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
              {/* Decorative glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
              <div className="flex items-center justify-center py-8 px-4 min-h-[420px] md:min-h-[540px]">
                <div className="relative w-[220px] md:w-[280px] h-[440px] md:h-[560px] rounded-[1.6rem] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.08]">
                  <Image
                    src={project.images[activeImage]}
                    alt={`${project.title} screenshot ${activeImage + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 220px, 280px"
                    priority
                  />
                </div>
              </div>

              {/* Gallery Navigation */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium z-10">
                    {activeImage + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>
          ) : (
            /* Landscape Gallery — borderless, image floats directly */
            <div className="relative w-full rounded-2xl overflow-hidden">
              <div className="relative w-full flex items-center justify-center min-h-[280px] md:min-h-[400px] max-h-[75vh]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.images[activeImage]}
                  alt={`${project.title} screenshot ${activeImage + 1}`}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-2xl"
                  style={{ display: 'block' }}
                />
              </div>

              {/* Gallery Navigation */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium z-10">
                    {activeImage + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Thumbnail Strip — no hover transform */}
          {project.images.length > 1 && (
            <div className="flex gap-3 mt-4 justify-center flex-wrap">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative rounded-lg overflow-hidden transition-opacity duration-300 ${
                    project.imageType === 'portrait'
                      ? 'w-12 h-20 md:w-14 md:h-24'
                      : 'w-20 h-14 md:w-24 md:h-16'
                  } ${
                    idx === activeImage
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-background opacity-100'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className={`${project.imageType === 'portrait' ? 'object-cover object-top' : 'object-cover'}`} sizes="96px" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Main Content (Left 2/3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Latar Belakang */}
            <motion.div variants={itemVars} className="warm-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-bold font-outfit text-foreground dark:text-dark-text">Latar Belakang</h2>
              </div>
              <p className="text-body text-foreground/65 dark:text-dark-text/65 leading-relaxed">
                {project.background}
              </p>
            </motion.div>

            {/* Problem */}
            <motion.div variants={itemVars} className="warm-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold font-outfit text-foreground dark:text-dark-text">Problem</h2>
              </div>
              <p className="text-body text-foreground/65 dark:text-dark-text/65 leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div variants={itemVars} className="warm-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-secondary" />
                </div>
                <h2 className="text-xl font-bold font-outfit text-foreground dark:text-dark-text">Solution</h2>
              </div>
              <p className="text-body text-foreground/65 dark:text-dark-text/65 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>

          {/* Sidebar (Right 1/3) */}
          <div className="space-y-6">
            {/* Features */}
            <motion.div variants={itemVars} className="warm-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-outfit text-foreground dark:text-dark-text">Fitur Utama</h3>
              </div>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm text-foreground/65 dark:text-dark-text/65 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVars} className="warm-card p-6 md:p-8">
              <h3 className="text-lg font-bold font-outfit text-foreground dark:text-dark-text mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-[11px] uppercase tracking-wider font-medium rounded-lg bg-foreground/[0.04] dark:bg-dark-text/[0.06] text-foreground/60 dark:text-dark-text/60 border border-foreground/[0.06] dark:border-dark-text/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div variants={itemVars} className="warm-card p-6 md:p-8">
              <h3 className="text-lg font-bold font-outfit text-foreground dark:text-dark-text mb-4">Links</h3>
              <div className="space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-foreground/[0.03] dark:bg-dark-text/[0.05] hover:bg-primary/5 dark:hover:bg-primary/10 text-foreground/70 dark:text-dark-text/70 hover:text-primary transition-all group font-medium text-sm border border-foreground/[0.06] dark:border-dark-text/[0.06]"
                  >
                    <Code2 size={18} className="group-hover:scale-110 transition-transform" />
                    Source Code
                    <ExternalLink size={14} className="ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl gradient-btn text-white font-medium text-sm btn-interactive"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </main>
  );
}

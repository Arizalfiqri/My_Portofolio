'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  images: string[];
  description: string;
  imageType?: 'landscape' | 'portrait';
  // These exist in data but aren't rendered on the card
  techStack?: string[];
  link?: string;
  github?: string;
  problem?: string;
  solution?: string;
  background?: string;
  features?: string[];
}

export default function ProjectCard({
  slug, title, category, images, description, imageType = 'landscape'
}: ProjectCardProps) {

  const categoryColors: Record<string, string> = {
    'Web App': 'bg-primary/10 text-primary dark:text border-primary/20',
    'Mobile App': 'bg-secondary/10 text-secondary-dark dark:text-secondary-light border-secondary/20',
    'Game': 'bg-accent/10 text-accent-dark dark:text-accent border-accent/20',
  };

  const isPortrait = imageType === 'portrait';

  return (
    <div className="relative w-full cursor-pointer group h-full project-card-hover">
      <Link href={`/projects/${slug}`} className="block h-full">
        <div className="warm-card flex flex-col h-full overflow-hidden project-card-inner">
          {/* Preview Image */}
          {images && images.length > 0 && (
            <div className={`relative w-full overflow-hidden ${
              isPortrait 
                ? 'aspect-[16/9]' 
                : 'aspect-[16/9]'
            }`}>
              {isPortrait ? (
                /* Portrait: single elegant phone mockup centered on dark bg */
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
                  {/* Decorative subtle glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary/8 blur-3xl" />
                  {/* Phone mockup */}
                  <div className="absolute inset-0 flex items-center justify-center py-4 px-4">
                    <div className="relative h-[92%] aspect-[9/19] rounded-[1.2rem] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.08]">
                      <Image
                        src={images[0]}
                        alt={`${title} preview`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* Landscape: cover image with object-top to show the important part */
                <Image
                  src={images[0]}
                  alt={`${title} preview`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}
              {/* Category badge on image */}
              <div className="absolute top-3 left-3 z-20">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border backdrop-blur-md ${categoryColors[category] || 'bg-foreground/5 text-foreground/60 border-foreground/10'}`}>
                  {category}
                </span>
              </div>
              {/* Shadow gradient overlay at bottom of image — Dark mode */}
              <div className={`absolute inset-x-0 bottom-0 z-10 h-[45%] pointer-events-none hidden dark:block ${
                isPortrait ? 'dark:!block' : ''
              }`} style={{
                background: isPortrait
                  ? 'linear-gradient(to top, #1a1a2e 0%, rgba(26,26,46,0.6) 40%, transparent 100%)'
                  : 'linear-gradient(to top, rgba(31,41,55,0.95) 0%, rgba(31,41,55,0.5) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)'
              }} />
              {/* Shadow gradient overlay at bottom of image — Light mode */}
              <div className={`absolute inset-x-0 bottom-0 z-10 h-[45%] pointer-events-none dark:hidden ${
                isPortrait ? '!hidden' : ''
              }`} style={{
                background: 'linear-gradient(to top, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.4) 40%, rgba(0,0,0,0.03) 70%, transparent 100%)'
              }} />
            </div>
          )}

          {/* Content — compact */}
          <div className="p-4 md:p-5 flex flex-col flex-grow">
            <h3 className="text-base md:text-lg font-bold font-outfit text-foreground dark:text-dark-text leading-snug mb-1.5">
              {title}
            </h3>
            <p className="text-[13px] text-foreground/50 dark:text-dark-text/50 leading-relaxed line-clamp-2 mb-4">
              {description}
            </p>

            {/* Read More — anchored to bottom */}
            <div className="mt-auto pt-3 flex items-center justify-between">
              <span className="text-[12px] text-foreground/35 dark:text-dark-text/35 font-medium uppercase tracking-wider">
                {category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark font-semibold group/link btn-interactive">
                Read More
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

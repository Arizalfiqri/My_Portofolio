'use client';
import { useEffect, useRef, useCallback, useState } from 'react';

export default function CustomCursor() {
  const [hasMoved, setHasMoved] = useState(false);
  const hasMovedRef = useRef(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const isHovering = useRef(false);

  const animate = useCallback(() => {
    outerPos.current.x += (mousePos.current.x - outerPos.current.x) * 0.15;
    outerPos.current.y += (mousePos.current.y - outerPos.current.y) * 0.15;

    dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.35;
    dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.35;

    const isDark = document.documentElement.classList.contains('dark');

    if (outerRef.current) {
      outerRef.current.style.transform = `translate3d(${outerPos.current.x - 16}px, ${outerPos.current.y - 16}px, 0) scale(${isHovering.current ? 1.5 : 1})`;
      outerRef.current.style.borderColor = isHovering.current
        ? 'rgba(200, 75, 49, 0.6)'
        : isDark ? 'rgba(226, 232, 240, 0.2)' : 'rgba(45, 49, 66, 0.25)';
      outerRef.current.style.backgroundColor = isHovering.current
        ? 'rgba(200, 75, 49, 0.06)'
        : 'transparent';
    }

    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px, 0) scale(${isHovering.current ? 0 : 1})`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const isNarrow = window.matchMedia('(max-width: 767px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchDevice || isNarrow || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        setHasMoved(true);
      }

      if (outerRef.current && dotRef.current) {
        outerRef.current.style.opacity = '1';
        dotRef.current.style.opacity = '1';
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHovering.current =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        target.classList.contains('cursor-hover');
    };

    const handleMouseLeave = () => {
      if (outerRef.current) outerRef.current.style.opacity = '0';
      if (dotRef.current) dotRef.current.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    // Pause rAF when tab is not visible to save CPU
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId.current);
      } else {
        rafId.current = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  return (
    <>
      <div
        ref={outerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[100] hidden md:block"
        style={{
          opacity: hasMoved ? 1 : 0,
          willChange: 'transform',
          transition: 'border-color 0.2s, background-color 0.2s, opacity 0.3s',
          borderColor: 'rgba(45, 49, 66, 0.25)',
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[100] hidden md:block"
        style={{
          opacity: hasMoved ? 1 : 0,
          willChange: 'transform',
          transition: 'opacity 0.3s',
        }}
      />
    </>
  );
}

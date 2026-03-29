'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticButton({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 350, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 350, damping: 15, mass: 0.5 });

  useEffect(() => {
    setIsTouchDevice(
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(max-width: 767px)').matches
    );
  }, []);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{
        x: isTouchDevice ? 0 : springX,
        y: isTouchDevice ? 0 : springY,
        willChange: isTouchDevice ? 'auto' : 'transform',
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

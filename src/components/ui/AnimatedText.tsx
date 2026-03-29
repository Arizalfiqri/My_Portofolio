'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const words = ["Web Systems", "Mobile Apps", "AI Integration"];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inline-block w-[180px] md:w-[240px] text-left h-[1.2em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0, filter: 'blur(5px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -20, opacity: 0, filter: 'blur(5px)' }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-0 top-0 text-gradient font-bold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

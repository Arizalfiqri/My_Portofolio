'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  const dismiss = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setProgress(100);
    // Allow exit animation to play
    setTimeout(() => setIsVisible(false), 600);
  }, [isExiting]);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = 'hidden';

    // Progress animation — accelerating curve
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const remaining = 100 - prev;
        const increment = Math.max(0.5, remaining * 0.04);
        return Math.min(99, prev + increment);
      });
    }, 40);

    // Minimum display time to let animation play (1.8s),
    // then wait for page load before dismissing
    const minTime = 1800;
    const startTime = Date.now();

    const tryDismiss = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= minTime) {
        dismiss();
      } else {
        setTimeout(dismiss, minTime - elapsed);
      }
    };

    if (document.readyState === 'complete') {
      // Already loaded — wait for minimum display time
      setTimeout(dismiss, minTime);
    } else {
      window.addEventListener('load', tryDismiss);
    }

    // Safety timeout — always dismiss after 4s
    const safetyTimeout = setTimeout(dismiss, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
      window.removeEventListener('load', tryDismiss);
      document.body.style.overflow = '';
    };
  }, [dismiss]);

  // Restore scroll when hiding
  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = '';
    }
  }, [isVisible]);

  const brandText = '< Arizal Fiqri />';
  const letters = brandText.split('');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Background */}
          <div className="loading-bg" />

          {/* Content */}
          <div className="loading-content">
            {/* Logo with staggered letter reveal */}
            <div className="loading-logo" aria-hidden="true">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + i * 0.035,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={
                    letter === '<' || letter === '/' || letter === '>'
                      ? 'loading-logo-accent'
                      : letter === ' '
                      ? 'loading-logo-space'
                      : ''
                  }
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              className="loading-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              System Developer
            </motion.p>

            {/* Minimal progress bar */}
            <div className="loading-progress-track">
              <motion.div
                className="loading-progress-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.15, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

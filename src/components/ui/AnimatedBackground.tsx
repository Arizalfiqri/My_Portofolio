'use client';

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* Background base — transitions for dark mode */}
      <div className="absolute inset-0 bg-background dark:bg-dark-bg" style={{ transition: 'background-color 0.3s ease' }} />

      {/* Blob 1 — Terracotta — visible on ALL devices */}
      <div
        className="absolute rounded-full blob-1"
        style={{
          width: 'clamp(300px, 50vw, 700px)',
          height: 'clamp(300px, 50vw, 700px)',
          top: '-10%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(200,75,49,0.35) 0%, rgba(200,75,49,0.1) 50%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.4,
        }}
      />

      {/* Blob 2 — Sage — visible on ALL devices */}
      <div
        className="absolute rounded-full blob-2"
        style={{
          width: 'clamp(280px, 45vw, 650px)',
          height: 'clamp(280px, 45vw, 650px)',
          top: '25%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(124,152,133,0.35) 0%, rgba(124,152,133,0.12) 50%, transparent 70%)',
          filter: 'blur(120px)',
          opacity: 0.4,
        }}
      />

      {/* Blob 3 — Warm Gold — visible on ALL devices */}
      <div
        className="absolute rounded-full blob-3"
        style={{
          width: 'clamp(320px, 55vw, 750px)',
          height: 'clamp(320px, 55vw, 750px)',
          bottom: '-15%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(212,165,116,0.3) 0%, rgba(212,165,116,0.08) 50%, transparent 70%)',
          filter: 'blur(140px)',
          opacity: 0.35,
        }}
      />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

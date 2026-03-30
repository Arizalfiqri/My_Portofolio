'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background dark:bg-dark-bg pointer-events-none transition-colors duration-500">
      {/* Blob 1 — Terracotta */}
      <div
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blob-1"
        style={{
          top: '-10%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(200,75,49,0.25) 0%, rgba(200,75,49,0.08) 50%, transparent 70%)',
          filter: 'blur(120px)',
        }}
      />

      {/* Blob 2 — Sage */}
      <div
        className="absolute w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full blob-2"
        style={{
          top: '25%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(124,152,133,0.3) 0%, rgba(124,152,133,0.1) 50%, transparent 70%)',
          filter: 'blur(130px)',
        }}
      />

      {/* Blob 3 — Warm Gold */}
      <div
        className="absolute w-[550px] h-[550px] md:w-[750px] md:h-[750px] rounded-full blob-3"
        style={{
          bottom: '-15%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(212,165,116,0.22) 0%, rgba(212,165,116,0.06) 50%, transparent 70%)',
          filter: 'blur(140px)',
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

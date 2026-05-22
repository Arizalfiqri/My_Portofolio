'use client';

export default function AnimatedBackground() {
  // Coordinate map for distant twinkling stars across outer space
  const stars = [
    { top: '12%', left: '15%', size: 3, delay: '0s', duration: '3s' },
    { top: '8%', left: '75%', size: 2, delay: '1.2s', duration: '4s' },
    { top: '25%', left: '85%', size: 4, delay: '0.5s', duration: '3.5s' },
    { top: '35%', left: '22%', size: 2, delay: '2.1s', duration: '4.5s' },
    { top: '45%', left: '62%', size: 3, delay: '1.8s', duration: '3.2s' },
    { top: '55%', left: '10%', size: 2, delay: '0.3s', duration: '5s' },
    { top: '68%', left: '80%', size: 3, delay: '2.5s', duration: '3.8s' },
    { top: '75%', left: '35%', size: 4, delay: '0.9s', duration: '4.1s' },
    { top: '85%', left: '15%', size: 2, delay: '1.5s', duration: '3.6s' },
    { top: '88%', left: '68%', size: 3, delay: '0.7s', duration: '4.8s' },
    { top: '50%', left: '92%', size: 2, delay: '3.0s', duration: '4.0s' },
    { top: '20%', left: '45%', size: 3, delay: '2.2s', duration: '3.4s' },
    { top: '60%', left: '48%', size: 2, delay: '1.1s', duration: '4.2s' },
    { top: '82%', left: '90%', size: 4, delay: '0.4s', duration: '3.1s' },
    { top: '5%', left: '40%', size: 2, delay: '2.8s', duration: '4.7s' },
  ];

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* Background base — transitions smoothly between themes */}
      <div className="absolute inset-0 bg-background dark:bg-dark-bg" style={{ transition: 'background-color 0.3s ease' }} />

      {/* Cosmic Starfield Layer (Twinkling space particles) */}
      <div className="absolute inset-0 opacity-40 dark:opacity-85 transition-opacity">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-foreground dark:bg-accent animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              animationDuration: star.duration,
              boxShadow: star.size > 2 ? '0 0 8px rgb(var(--accent))' : 'none',
            }}
          />
        ))}
      </div>

      {/* Cosmic Shooting Star / Meteor Tail */}
      <div className="absolute inset-0 overflow-hidden opacity-80">
        <div className="shooting-star" />
      </div>

      {/* Nebula Blob 1 — Orbiting Path + Breathing Glow */}
      <div className="absolute blob-1" style={{ top: '-10%', left: '-5%' }}>
        <div
          className="rounded-full animate-glow-pulse"
          style={{
            width: 'clamp(300px, 50vw, 700px)',
            height: 'clamp(300px, 50vw, 700px)',
            background: 'radial-gradient(circle, rgb(var(--primary) / 0.6) 0%, rgb(var(--primary) / 0.2) 50%, transparent 70%)',
          }}
        />
      </div>

      {/* Nebula Blob 2 — Orbiting Path + Breathing Glow */}
      <div className="absolute blob-2" style={{ top: '25%', right: '-10%' }}>
        <div
          className="rounded-full animate-glow-pulse-slow"
          style={{
            width: 'clamp(280px, 45vw, 650px)',
            height: 'clamp(280px, 45vw, 650px)',
            background: 'radial-gradient(circle, rgb(var(--secondary) / 0.6) 0%, rgb(var(--secondary) / 0.2) 50%, transparent 70%)',
          }}
        />
      </div>

      {/* Nebula Blob 3 — Orbiting Path + Breathing Glow */}
      <div className="absolute blob-3" style={{ bottom: '-15%', left: '10%' }}>
        <div
          className="rounded-full animate-glow-pulse"
          style={{
            width: 'clamp(320px, 55vw, 750px)',
            height: 'clamp(320px, 55vw, 750px)',
            background: 'radial-gradient(circle, rgb(var(--accent) / 0.55) 0%, rgb(var(--accent) / 0.15) 50%, transparent 70%)',
          }}
        />
      </div>

      {/* Subtle cosmic dust/grain texture */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

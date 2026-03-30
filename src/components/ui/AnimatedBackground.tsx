export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      {/* Subtle warm blobs */}
      <div
        className="absolute top-[-15%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/[0.04] blur-[80px] bg-shape-1"
      />
      <div
        className="absolute top-[30%] right-[-15%] w-[45%] h-[45%] rounded-full bg-secondary/[0.05] blur-[100px] bg-shape-2"
      />
      <div
        className="absolute bottom-[-10%] left-[15%] w-[50%] h-[50%] rounded-full bg-accent/[0.04] blur-[90px] bg-shape-3"
      />
      
      {/* Subtle grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

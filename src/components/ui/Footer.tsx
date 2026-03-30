export default function Footer() {
  return (
    <footer className="w-full border-t border-foreground/[0.06] mt-32 py-10 relative z-10 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center md:flex md:justify-between items-center text-foreground/45 text-sm">
        <p>&copy; {new Date().getFullYear()} Arizal Fiqri. All rights reserved.</p>
        <p className="mt-4 md:mt-0">
          Built with <span className="text-primary font-medium">Next.js</span>, Framer Motion & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

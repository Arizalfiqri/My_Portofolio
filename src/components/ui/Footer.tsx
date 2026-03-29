export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-32 py-10 relative z-10 glass">
      <div className="max-w-7xl mx-auto px-6 text-center md:flex md:justify-between items-center text-foreground/60 text-sm">
        <p>&copy; {new Date().getFullYear()} Arizal Fiqri. All rights reserved.</p>
        <p className="mt-4 md:mt-0 italic">
          Built with Next.js, Framer Motion & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

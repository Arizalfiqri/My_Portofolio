export default function Footer() {
  return (
    <footer className="w-full border-t border-foreground/[0.06] dark:border-dark-text/[0.06] mt-20 md:mt-32 py-8 md:py-10 relative z-10 bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center md:flex md:justify-between items-center text-foreground/45 dark:text-dark-text/45 text-sm">
        <p>&copy; {new Date().getFullYear()} Arizal Fiqri. All rights reserved.</p>
        <p className="mt-3 md:mt-0">
          Built with <span className="text-primary font-medium">Next.js</span>, Framer Motion & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

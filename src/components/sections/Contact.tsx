'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';
import { Send, Code2 as Github, Mail } from 'lucide-react';

const Instagram = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending message...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "d15e5a90-f257-46cd-93a9-7183008fbad8");
    formData.append("subject", `Pesan dari ${formData.get("name")} - Arfi Portofolio`);
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setResult("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setResult(data.message || "Failed to send message.");
      }
    } catch (error) {
      setStatus("error");
      setResult("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="py-8 md:py-24 px-4 sm:px-6 md:px-12 relative z-10 w-full max-w-5xl mx-auto">
      <SectionHeading title="Let&apos;s Connect" subtitle="Interested in working together or discussing web & mobile development?" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-6 md:mt-16 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="warm-card p-6 md:p-8"
        >
          <form onSubmit={onSubmit} className="space-y-5" aria-label="Contact form">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-foreground/70 dark:text-dark-text/70">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                aria-required="true"
                className="w-full px-4 py-3 bg-background/80 dark:bg-dark-bg/80 border border-foreground/[0.08] dark:border-dark-text/[0.08] rounded-xl text-foreground dark:text-dark-text focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-foreground/30 dark:placeholder:text-dark-text/30"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-foreground/70 dark:text-dark-text/70">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                aria-required="true"
                className="w-full px-4 py-3 bg-background/80 dark:bg-dark-bg/80 border border-foreground/[0.08] dark:border-dark-text/[0.08] rounded-xl text-foreground dark:text-dark-text focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-foreground/30 dark:placeholder:text-dark-text/30"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-foreground/70 dark:text-dark-text/70">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="How can I help you?"
                required
                aria-required="true"
                className="w-full px-4 py-3 bg-background/80 dark:bg-dark-bg/80 border border-foreground/[0.08] dark:border-dark-text/[0.08] rounded-xl text-foreground dark:text-dark-text focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-foreground/30 dark:placeholder:text-dark-text/30 resize-none"
              ></textarea>
            </div>

            <MagneticButton className="w-full">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 group gradient-btn rounded-xl text-white font-bold flex items-center justify-center gap-2 btn-interactive shadow-warm hover:shadow-warm-lg active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticButton>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm text-center font-medium p-3 rounded-lg ${status === "success" ? "bg-green-500/10 text-green-600 dark:text-green-400" : "bg-red-500/10 text-red-600 dark:text-red-400"}`}
              >
                {result}
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Social Links & Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-8"
        >
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-bold font-outfit text-foreground dark:text-dark-text leading-tight">Direct Contacts</h3>
            <p className="text-foreground/55 dark:text-dark-text/55 leading-relaxed text-sm md:text-base">
              Feel free to reach out via email or connect with me on professional platforms.
            </p>
          </div>

          <div className="space-y-4">
            <a href="mailto:arizalfikri59@gmail.com" aria-label="Send email to arizalfikri59@gmail.com" className="flex items-center gap-4 text-foreground/70 dark:text-dark-text/70 hover:text-primary group cursor-hover transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <Mail size={20} className="text-primary" />
              </div>
              <span className="font-medium text-sm md:text-base">arizalfikri59@gmail.com</span>
            </a>

            <a href="https://www.linkedin.com/in/arizal-fiqri-6a65ab281" target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile (opens in new tab)" className="flex items-center gap-4 text-foreground/70 dark:text-dark-text/70 hover:text-secondary-dark dark:hover:text-secondary-light group cursor-hover transition-colors">
              <div className="w-12 h-12 rounded-xl bg-secondary/8 border border-secondary/10 flex items-center justify-center group-hover:bg-secondary/15 group-hover:scale-110 transition-all duration-300">
                <Linkedin size={20} className="text-secondary" />
              </div>
              <span className="font-medium text-sm md:text-base">LinkedIn Profile</span>
            </a>

            <a href="https://github.com/Arizalfiqri" target="_blank" rel="noreferrer" aria-label="Visit GitHub repository (opens in new tab)" className="flex items-center gap-4 text-foreground/70 dark:text-dark-text/70 hover:text-foreground dark:hover:text-dark-text group cursor-hover transition-colors">
              <div className="w-12 h-12 rounded-xl bg-foreground/5 dark:bg-dark-text/5 border border-foreground/[0.06] dark:border-dark-text/[0.06] flex items-center justify-center group-hover:bg-foreground/10 dark:group-hover:bg-dark-text/10 group-hover:scale-110 transition-all duration-300">
                <Github size={20} className="text-foreground/70 dark:text-dark-text/70" />
              </div>
              <span className="font-medium text-sm md:text-base">GitHub Repository</span>
            </a>

            <a href="https://instagram.com/arizalfq_" target="_blank" rel="noreferrer" aria-label="Visit Instagram profile (opens in new tab)" className="flex items-center gap-4 text-foreground/70 dark:text-dark-text/70 hover:text-accent-dark dark:hover:text-accent group cursor-hover transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent/8 border border-accent/10 flex items-center justify-center group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-300">
                <Instagram size={20} className="text-accent-dark dark:text-accent" />
              </div>
              <span className="font-medium text-sm md:text-base">Instagram</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';
import { Send, Code2 as Github, Briefcase as Linkedin, Mail, MessageSquare as Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 relative z-10 w-full max-w-5xl mx-auto">
      <SectionHeading title="Let&apos;s Connect" subtitle="Interested in working together or discussing web & mobile development?" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-12 md:mt-16 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="warm-card p-6 md:p-8"
        >
          <form className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-foreground/70 dark:text-dark-text/70">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
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
                className="w-full px-4 py-3 bg-background/80 dark:bg-dark-bg/80 border border-foreground/[0.08] dark:border-dark-text/[0.08] rounded-xl text-foreground dark:text-dark-text focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-foreground/30 dark:placeholder:text-dark-text/30 resize-none"
              ></textarea>
            </div>

            <MagneticButton className="w-full">
              <button
                type="submit"
                className="w-full py-4 group gradient-btn rounded-xl text-white font-bold flex items-center justify-center gap-2 btn-interactive shadow-warm hover:shadow-warm-lg active:scale-[0.97]"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticButton>
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
            <a href="mailto:hello@arizalfiqri.com" className="flex items-center gap-4 text-foreground/70 dark:text-dark-text/70 hover:text-primary group cursor-hover transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <Mail size={20} className="text-primary" />
              </div>
              <span className="font-medium text-sm md:text-base">hello@arizalfiqri.com</span>
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/70 dark:text-dark-text/70 hover:text-secondary-dark dark:hover:text-secondary-light group cursor-hover transition-colors">
              <div className="w-12 h-12 rounded-xl bg-secondary/8 border border-secondary/10 flex items-center justify-center group-hover:bg-secondary/15 group-hover:scale-110 transition-all duration-300">
                <Linkedin size={20} className="text-secondary" />
              </div>
              <span className="font-medium text-sm md:text-base">LinkedIn Profile</span>
            </a>
            
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/70 dark:text-dark-text/70 hover:text-foreground dark:hover:text-dark-text group cursor-hover transition-colors">
              <div className="w-12 h-12 rounded-xl bg-foreground/5 dark:bg-dark-text/5 border border-foreground/[0.06] dark:border-dark-text/[0.06] flex items-center justify-center group-hover:bg-foreground/10 dark:group-hover:bg-dark-text/10 group-hover:scale-110 transition-all duration-300">
                <Github size={20} className="text-foreground/70 dark:text-dark-text/70" />
              </div>
              <span className="font-medium text-sm md:text-base">GitHub Repository</span>
            </a>
            
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/70 dark:text-dark-text/70 hover:text-accent-dark dark:hover:text-accent group cursor-hover transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent/8 border border-accent/10 flex items-center justify-center group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-300">
                <Twitter size={20} className="text-accent-dark dark:text-accent" />
              </div>
              <span className="font-medium text-sm md:text-base">Twitter / X</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

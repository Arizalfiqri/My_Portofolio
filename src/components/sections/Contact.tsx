'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import MagneticButton from '@/components/ui/MagneticButton';
import { Send, Code2 as Github, Briefcase as Linkedin, Mail, MessageSquare as Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-5xl mx-auto">
      <SectionHeading title="Let&apos;s Connect" subtitle="Interested in working together or discussing AI and system development?" />

      <div className="grid md:grid-cols-2 gap-12 mt-16 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8"
        >
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-foreground/30"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-foreground/30"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="How can I help you?"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-foreground/30 resize-none"
              ></textarea>
            </div>

            <MagneticButton className="w-full">
              <button
                type="submit"
                className="w-full py-4 group bg-gradient-to-r from-primary via-secondary to-accent rounded-lg text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticButton>
          </form>
        </motion.div>

        {/* Social Links & Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-outfit text-white">Direct Contacts</h3>
            <p className="text-foreground/70 leading-relaxed">
              Feel free to reach out via email or connect with me on professional platforms. Let&apos;s create something intelligent and impactful.
            </p>
          </div>

          <div className="space-y-6">
            <a href="mailto:hello@arizalfiqri.com" className="flex items-center gap-4 text-foreground/80 hover:text-white group cursor-hover transition-colors">
              <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={20} className="text-primary" />
              </div>
              <span className="text-lg">hello@arizalfiqri.com</span>
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-white group cursor-hover transition-colors">
              <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Linkedin size={20} className="text-secondary" />
              </div>
              <span className="text-lg">LinkedIn Profile</span>
            </a>
            
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-white group cursor-hover transition-colors">
              <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Github size={20} className="text-white" />
              </div>
              <span className="text-lg">GitHub Repository</span>
            </a>
            
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-white group cursor-hover transition-colors">
              <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Twitter size={20} className="text-accent" />
              </div>
              <span className="text-lg">Twitter / X</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

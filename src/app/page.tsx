'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between overflow-x-hidden pt-20 dark:bg-dark-bg transition-colors duration-500">
      <Navbar />
      
      <div className="w-full flex-grow flex flex-col items-center gap-10 lg:gap-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

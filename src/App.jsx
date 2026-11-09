import React, { useEffect } from 'react';
import { ScrollTrigger } from './lib/animation';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import SelectedWork from './components/sections/SelectedWork';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  useEffect(() => {
    ScrollTrigger.clearScrollMemory('manual');
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => window.scrollTo(0, 0);
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />

      <main id="main-content">
        <Hero />
        <SelectedWork />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

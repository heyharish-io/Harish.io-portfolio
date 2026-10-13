import React from 'react';
import FuturisticBackground from './components/FuturisticBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-surface-900 text-slate-100 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Interactive 3D/Spatial Background Canvas & HUD Grid */}
      <FuturisticBackground />

      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Futuristic Immersive Footer */}
      <Footer />
    </div>
  );
}

export default App;

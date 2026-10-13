import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/profile';

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-surface-900/90 backdrop-blur-md border-b border-surface-700 py-3 shadow-lg shadow-black/30' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-3 text-white cursor-pointer select-none"
        >
          {/* Refined Minimalist Developer Icon */}
          <div className="w-8 h-8 rounded-lg bg-surface-800 border border-surface-700 flex items-center justify-center transition-all duration-200 group-hover:border-blue-500/60 group-hover:bg-surface-750 shadow-xs">
            <span className="font-mono text-xs font-bold text-blue-400 group-hover:text-white transition-colors">H</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-sans text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 bg-surface-800 text-blue-400 border border-surface-700 rounded-md font-medium">
              XR Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-xl bg-surface-850/90 border border-surface-700 backdrop-blur-md shadow-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-all duration-150 rounded-lg ${
                  isActive
                    ? 'text-white bg-surface-800 border border-surface-600 shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-surface-800/40'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop High-Contrast CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs lg:text-sm text-slate-950 bg-white hover:bg-slate-100 transition-all duration-150 shadow-sm cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-white"
          >
            Contact
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-surface-800 border border-surface-700 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Navigation Drawer */}
      <div
        className={`fixed inset-x-0 top-[64px] p-4 transition-all duration-200 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
      >
        <div className="rounded-2xl bg-surface-850 border border-surface-700 backdrop-blur-xl p-5 shadow-2xl">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-surface-700 text-xs font-mono text-slate-400">
            <span>NAVIGATION</span>
            <span className="flex items-center gap-1.5 text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              ONLINE
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-surface-800 text-white border border-surface-600'
                      : 'text-slate-300 hover:text-white hover:bg-surface-800/40'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
                    {item.label}
                  </span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-surface-700">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm text-slate-950 bg-white hover:bg-slate-100 transition-colors shadow-sm"
            >
              <span>Initialize Contact</span>
              <ArrowUpRight className="w-4 h-4 text-slate-700" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

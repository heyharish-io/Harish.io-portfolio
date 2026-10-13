import React from 'react';
import { personalInfo } from '../data/profile';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

// Gmail compose URL with prefilled recipient
const GMAIL_COMPOSE_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=heyharish.io%40gmail.com';

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: Mail
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get email social entry and override with Gmail compose URL
  const emailSocial = personalInfo.socials.find(s => s.name === 'Email');
  const emailUrl = emailSocial ? GMAIL_COMPOSE_URL : GMAIL_COMPOSE_URL;

  return (
    <footer className="relative bg-surface-950 border-t border-surface-700 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Banner */}
        <div className="mb-14 p-8 sm:p-10 rounded-2xl bg-surface-900 border border-surface-700 shadow-card flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 mb-2 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>LET'S CONNECT</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-2">
              Ready to Build Something{' '}
              <span className="text-blue-400">
                Immersive?
              </span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-sans font-normal">
              Have an idea for a Vuforia AR app, Quest VR training, or Unity WebGL configurator? Let's discuss your roadmap.
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-950 bg-white hover:bg-slate-100 transition-colors shadow-xs flex-shrink-0 cursor-pointer"
          >
            Start A Project
          </a>

        </div>

        {/* Middle Row: Brand, Nav & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-surface-700/80 items-center">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-5 text-center md:text-left">
            <div className="font-sans text-xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
              <span>{personalInfo.name}</span>
              <span className="text-blue-400 text-xs font-mono px-2 py-0.5 bg-surface-800 border border-surface-700 rounded font-medium">
                XR Dev
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans mt-2 max-w-sm mx-auto md:mx-0">
              Pioneering augmented reality, virtual reality, and spatial web systems with precision code and tactile UI.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs sm:text-sm font-sans text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 flex justify-center md:justify-end items-center gap-2.5">
            {personalInfo.socials.map((social) => {
              const IconComp = socialIcons[social.name] || Mail;
              // Use Gmail compose URL for email, otherwise use the social URL
              const href = social.name === 'Email' ? emailUrl : social.url;
              const isEmail = social.name === 'Email';
              return (
                <a
                  key={social.name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-surface-900 border border-surface-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-surface-600 hover:bg-surface-800 shadow-xs transition-colors"
                  aria-label={social.name}
                >
                  <IconComp className="w-4 h-4" />
                </a>
              );
            })}

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-surface-900 border border-surface-700 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-surface-600 shadow-xs transition-colors cursor-pointer ml-1"
              title="Return to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Row: Copyright & Status Banner */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div>
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>SYSTEM OPERATIONAL // BENGALURU, IN</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
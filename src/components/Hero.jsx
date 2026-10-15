import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { personalInfo } from '../data/profile';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden bg-surface-900"
    >
      {/* XR Pattern Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/assets/backgrounds/hero-xr-pattern.svg"
          alt=""
          className="w-full h-full object-cover opacity-40"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">

          {/* LEFT SIDE CONTENT (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">

            {/* Status Pill Badge */}
            {/* <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-800 border border-surface-700 text-slate-200 text-xs font-mono mb-6 w-fit shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-semibold tracking-wide text-white">
                {personalInfo.role}
              </span>
              <span className="text-slate-600">//</span>
              <span className="text-blue-400 font-medium">Available for Projects</span>
            </div> */}

            {/* Main Headline - Exact from brief */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.08] mb-6">
              Building{' '}
              <span className="text-blue-400">
                Immersive
              </span>{' '}
              <br className="hidden sm:inline" />
              Worlds Through XR.
            </h1>

            {/* Professional Description - Exact from brief */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl mb-8 font-normal">
              {personalInfo.shortDescription}
            </p>

            {/* High-Contrast CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-4 mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-950 bg-white hover:bg-slate-100 transition-all duration-150 shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm sm:text-base text-white bg-surface-800 hover:bg-surface-750 border border-surface-700 hover:border-surface-600 transition-all duration-150 shadow-xs cursor-pointer"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Competency Badges */}
            <div className="pt-6 border-t border-surface-700">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-blue-400" />
                <span>Core Competencies:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.heroBadges.map((badge) => (
                  <div
                    key={badge}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-800 border border-surface-700 text-xs sm:text-sm font-medium text-slate-200 hover:text-white hover:border-surface-600 transition-colors shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Professional Placeholder with HKP Initials */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center">

              {/* Soft Ambient Radial Glow Behind Placeholder */}
              <div className="absolute inset-4 rounded-3xl bg-blue-900/15 blur-xl pointer-events-none" />

              {/* Main Professional Container */}
              <div className="relative w-[88%] h-[88%] rounded-2xl p-2 bg-surface-800 border border-surface-700 shadow-2xl group">

                {/* Inner Placeholder Frame */}
                <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-surface-950 flex items-center justify-center">

                  {/* HKP Initials Placeholder */}
                  <div className="flex flex-col items-center justify-center text-center px-6">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-700/30 border border-blue-500/30 flex items-center justify-center mb-4">
                      <span className="font-display text-3xl sm:text-4xl font-bold text-blue-400 tracking-wider">HKP</span>
                    </div>
                    <p className="font-sans text-sm sm:text-base text-slate-400 font-medium">
                      XR Developer
                    </p>
                    <p className="font-mono text-xs text-slate-500 mt-1">
                      Unity • Vuforia • Quest
                    </p>
                  </div>

                  {/* Gradient shadow for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Spec Badge 1: Top Left */}
              <div className="absolute -top-2 -left-2 sm:-left-4 px-3.5 py-2 rounded-xl bg-surface-800 border border-surface-700 shadow-xl hidden sm:flex items-center gap-2.5 text-xs">
                <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><polyline points="2 15.5 12 22 22 15.5"></polyline><polyline points="2 8.5 12 2 22 8.5"></polyline></svg>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Specialization</div>
                  <div className="font-medium text-white">Unity XR & Vuforia AR</div>
                </div>
              </div>

              {/* Floating Spec Badge 2: Bottom Right */}
              <div className="absolute -bottom-2 -right-2 sm:-right-4 px-3.5 py-2 rounded-xl bg-surface-800 border border-surface-700 shadow-xl hidden sm:flex items-center gap-2.5 text-xs">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Target Platforms</div>
                  <div className="font-medium text-white">Quest • Android • iOS</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      {/* <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => scrollTo('about')}
      >
        <span className="font-mono text-[11px] tracking-wider text-slate-400 uppercase">Scroll to Explore</span>
        <div className="w-4 h-7 rounded-full border border-surface-700 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-blue-400"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
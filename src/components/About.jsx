import React from 'react';
import SectionTitle from './SectionTitle';
import { personalInfo } from '../data/profile';
import { Cpu, Radio } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-surface-850 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <SectionTitle

          code="ABOUT"
          title="About"
          highlight="Me"
          subtitle="Engineering immersive AR/VR experiences with Unity, C#, and Vuforia — bridging digital content with physical reality."
        />

        {/* Two-Column Modern Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Professional Placeholder with HKP Initials */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Clean Card Frame */}
              <div className="relative rounded-2xl p-1 bg-surface-800 border border-slate-700/80 shadow-xl">

                {/* Professional Placeholder Frame */}
                <div className="relative rounded-[14px] overflow-hidden bg-surface-950 aspect-square group flex items-center justify-center">

                  {/* HKP Initials Placeholder */}
                  <div className="flex flex-col items-center justify-center text-center px-6">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-700/30 border border-blue-500/30 flex items-center justify-center mb-4">
                      <span className="font-display text-3xl font-bold text-blue-400 tracking-wider">HKP</span>
                    </div>
                    <p className="font-sans text-sm text-slate-400 font-medium">
                      XR Developer
                    </p>
                    <p className="font-mono text-xs text-slate-500 mt-1">
                      Unity • Vuforia • Quest
                    </p>
                  </div>

                  {/* Gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-950/85 via-transparent to-transparent opacity-80" />

                  {/* Diagnostic Readout Bar at bottom */}
                  <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-surface-900/90 border border-slate-800 backdrop-blur-md">
                    <div className="flex items-center justify-between font-mono text-xs text-slate-200 mb-1">
                      <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Unity XR Runtime
                      </span>
                      <span className="text-slate-400">90 FPS Target</span>
                    </div>
                    <div className="font-mono text-[11px] text-slate-400">
                      Vuforia Image Targets • OpenXR • URP
                    </div>
                  </div>
                </div>
              </div>

              {/* Refined Floating Tag 1 */}
              <div className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-xl bg-surface-800/95 border border-slate-700/80 font-mono text-xs text-sky-400 backdrop-blur-md shadow-lg hidden sm:flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                <span>Android & iOS Builds</span>
              </div>

              {/* Refined Floating Tag 2 */}
              <div className="absolute -bottom-3 -left-3 px-3.5 py-1.5 rounded-xl bg-surface-800/95 border border-slate-700/80 font-mono text-xs text-slate-300 backdrop-blur-md shadow-lg hidden sm:flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><polyline points="2 15.5 12 22 22 15.5"></polyline><polyline points="2 8.5 12 2 22 8.5"></polyline></svg>
                <span>Addressables + CCD</span>
              </div>

            </div>
          </div>

          {/* Right Column: Engaging Professional Introduction & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Lead Narrative */}
            <div className="mb-8 space-y-4 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
              <p className="text-white font-medium text-lg sm:text-xl leading-relaxed border-l-2 border-sky-400 pl-4 py-1">
                {personalInfo.aboutDetails.primaryText}
              </p>
              <p className="text-slate-300 font-normal">
                {personalInfo.aboutDetails.secondaryText}
              </p>
            </div>

            {/* Core Domain Areas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {personalInfo.aboutDetails.focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="p-4 rounded-xl bg-surface-800 border border-slate-700/80 hover:border-slate-600 hover:bg-surface-750 transition-all duration-200 shadow-xs"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <h4 className="font-sans font-semibold text-white text-base tracking-normal">
                      {area.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {personalInfo.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-surface-800 border border-slate-700/80 hover:border-slate-600 hover:bg-surface-750 transition-all duration-200 text-center sm:text-left shadow-xs"
                >
                  <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="font-sans font-semibold text-xs sm:text-sm text-slate-200 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="font-mono text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
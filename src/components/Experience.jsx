import React from 'react';
import SectionTitle from './SectionTitle';
import { experiences } from '../data/experience';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden bg-surface-900 border-t border-surface-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <SectionTitle

          code="EXPERIENCE"
          title="Professional"
          highlight="Experience"
          subtitle="Building production Unity XR applications: Vuforia AR for industrial clients, Quest VR training simulators, and independent AR/VR/AI portfolio projects."
        />

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto mt-8 space-y-6">
          {experiences.map((exp, index) => (
            <article
              key={exp.id}
              className="group relative p-6 sm:p-7 rounded-2xl bg-surface-800 border border-surface-700 shadow-card hover:border-surface-600 hover:bg-surface-750 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top Row: Badge & Duration */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-900 border border-surface-700 font-mono text-xs text-blue-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  {exp.badge}
                </span>

                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-slate-300">{exp.duration}</span>
                </div>
              </div>

              {/* Role & Company */}
              <div className="mb-4">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {exp.position}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300 mt-1">
                  <span className="font-semibold text-blue-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.company}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1 text-slate-400 font-mono text-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-invert prose-sm max-w-none mb-6">
                <ul className="space-y-2.5">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-sans leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Tags */}
              <div className="pt-4 border-t border-surface-700/60">
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-surface-900 border border-surface-700 text-xs font-mono text-slate-300 font-medium hover:border-blue-500/50 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
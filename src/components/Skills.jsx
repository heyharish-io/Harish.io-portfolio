import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { skills, skillCategories } from '../data/skills';

// Branded tech icons - served from public/assets/icons
const techIcons = {
  Unity: '/assets/icons/unity.svg',
  Vuforia: '/assets/icons/vuforia.svg',
  Unreal: '/assets/icons/unreal.svg',
  Blender: '/assets/icons/blender.svg',
  Maya: '/assets/icons/maya.svg',
  Git: '/assets/icons/git.svg',
  GitHub: '/assets/icons/github.svg',
  Figma: '/assets/icons/figma.svg',
  Android: '/assets/icons/android.svg',
  CSharp: '/assets/icons/csharp.svg',
  Addressables: '/assets/icons/addressables.svg',
  Fork: '/assets/icons/fork.svg',
  OpenXR: '/assets/icons/openxr.svg',
  Gemini: '/assets/icons/gemini.svg',
  VSCode: '/assets/icons/vscode.svg',
  // Fallback Lucide icons for skills without branded icons
};

const fallbackIcons = {
  'Augmented Reality': 'Glasses',
  'Virtual Reality': 'Headset',
  'XR Development': 'Cpu',
  'Spatial Interaction Design': 'Box',
  'AI Integration in Unity': 'Bot',
  'Unity Engine': 'Cpu',
  'C#': 'FileCode',
  'Unity Addressables & CCD': 'Box',
  'URP & Shader Graph': 'Palette',
  'Android Build & Deploy': 'Smartphone',
  'Animation & VFX': 'Zap',
  'Video & Audio Integration': 'Music',
  'Blender': 'Box',
  'Maya': 'Cpu',
  '3D Asset Integration': 'Package',
  'Figma': 'PenTool',
  'Git & Git LFS': 'GitBranch',
  'GitHub Actions': 'GitBranch',
  'Visual Studio / VS Code': 'Terminal',
  'Unreal Engine 5': 'Cpu',
  'Fork (Git Client)': 'GitBranch',
};

import { 
  Glasses, 
  Headset, 
  Cpu, 
  Box, 
  MousePointerClick, 
  Layers, 
  Code, 
  Move3D, 
  Atom, 
  FileCode, 
  Globe, 
  Palette, 
  Hash, 
  GitBranch, 
  PenTool, 
  Terminal,
  Bot,
  Smartphone,
  Zap,
  Music,
  Package
} from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills = selectedCategory === "all"
    ? skills
    : skills.filter(item => item.category === selectedCategory);

  // Map skills to branded icons
  const brandedIconMap = {
    'Augmented Reality': techIcons.Vuforia,
    'Virtual Reality': techIcons.OpenXR,
    'XR Development': techIcons.OpenXR,
    'Spatial Interaction Design': techIcons.OpenXR,
    'AI Integration in Unity': techIcons.Gemini,
    'Unity Engine': techIcons.Unity,
    'C#': techIcons.CSharp,
    'Unity Addressables & CCD': techIcons.Addressables,
    'URP & Shader Graph': techIcons.Unity,
    'Android Build & Deploy': techIcons.Android,
    'Animation & VFX': techIcons.Unity,
    'Video & Audio Integration': techIcons.Unity,
    'Blender': techIcons.Blender,
    'Maya': techIcons.Maya,
    '3D Asset Integration': techIcons.Blender,
    'Figma': techIcons.Figma,
    'Git & Git LFS': techIcons.Git,
    'GitHub Actions': techIcons.GitHub,
    'Visual Studio / VS Code': techIcons.VSCode,
    'Unreal Engine 5': techIcons.Unreal,
    'Fork (Git Client)': techIcons.Fork,
  };

  const fallbackIconComponents = {
    Glasses, Headset, Cpu, Box, MousePointerClick, Layers, Code, Move3D, Atom, FileCode, Globe, Palette, Hash, GitBranch, PenTool, Terminal, Bot, Smartphone, Zap, Music, Package
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden bg-surface-900 border-t border-surface-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <SectionTitle
          tag="STACK ARCHITECTURE"
          code="SKILLS"
          title="Skills &"
          highlight="Technologies"
          subtitle="Specialized toolkits and frameworks engineered for real-time spatial computing, XR pipelines, and high-performance Unity applications."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {skillCategories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative px-4 py-2 rounded-lg font-medium text-xs sm:text-sm tracking-wide transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-slate-950 font-semibold shadow-xs'
                    : 'bg-surface-800 text-slate-300 border border-surface-700 hover:border-surface-600 hover:text-white hover:bg-surface-750'
                }`}
              >
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => {
            const brandedIconSrc = brandedIconMap[skill.name];
            const fallbackIconName = fallbackIcons[skill.name] || 'Code';
            const FallbackIcon = fallbackIconComponents[fallbackIconName] || Code;

            return (
              <div
                key={skill.name}
                className="group relative p-5 rounded-xl bg-surface-800 border border-surface-700 shadow-card hover:border-surface-600 hover:bg-surface-750 hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1"
              >
                {/* Header: Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-surface-900 border border-surface-700 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:border-blue-500/50 transition-all duration-200">
                    {brandedIconSrc ? (
                      <img
                        src={brandedIconSrc}
                        alt={`${skill.name} logo`}
                        className="w-6 h-6 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <FallbackIcon className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* Skill Name & Tag */}
                <h3 className="font-sans text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  {skill.name}
                </h3>
                <div className="font-mono text-xs text-blue-400 mb-2 font-medium">
                  {skill.tag}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 font-sans leading-relaxed min-h-[36px]">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Standards Telemetry Strip */}
        <div className="mt-12 p-4 rounded-xl bg-surface-800 border border-surface-700 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-300 shadow-xs">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-white font-semibold">STANDARDS COMPLIANCE:</span>
            <span className="text-blue-400 font-medium">OpenXR 1.0</span>
            <span className="text-slate-600">//</span>
            <span className="text-blue-400 font-medium">Khronos glTF 2.0</span>
          </div>
          <div className="text-slate-400 text-[11px]">
            COMPATIBLE WITH: META QUEST 2/3/PRO, APPLE VISION PRO, ARKIT, ARCORE, ANDROID XR
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
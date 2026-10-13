import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { projects, projectCategories } from '../data/projects';
import { 
  ExternalLink, 
  Eye, 
  Maximize2, 
  X, 
  CheckCircle2,
  Code2,
  PlayCircle
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import VideoModal from './VideoModal';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [videoProject, setVideoProject] = useState(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const openVideoModal = (project) => {
    if (project.videoUrl) {
      setVideoProject(project);
    }
  };

  const closeVideoModal = () => {
    setVideoProject(null);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden bg-surface-850 border-t border-surface-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <SectionTitle
          tag="PORTFOLIO WORK"
          code="PROJECTS"
          title="Featured"
          highlight="Projects"
          subtitle="Production Unity XR applications: Vuforia AR, Quest VR, WebGL configurators, and Addressables-driven content pipelines."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {projectCategories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-lg font-medium text-xs sm:text-sm tracking-wide transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-slate-950 font-semibold shadow-xs'
                    : 'bg-surface-800 text-slate-300 border border-surface-700 hover:border-surface-600 hover:text-white hover:bg-surface-750'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid: 2 columns on tablet/desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => {
            const hasVideo = project.videoUrl && project.videoUrl.trim() !== '';
            const isCompanyProject = project.id === 'ar-story-experiences';
            
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-surface-800 border border-surface-700 overflow-hidden transition-all duration-300 hover:border-surface-600 hover:bg-surface-750 hover:shadow-card-hover hover:-translate-y-1.5 flex flex-col justify-between shadow-card"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-video w-full overflow-hidden bg-surface-950 border-b border-surface-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-103 group-hover:brightness-100 transition-all duration-500"
                    loading="lazy"
                  />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-surface-900/90 border border-surface-700 font-mono text-[11px] text-blue-400 backdrop-blur-md shadow-xs font-medium">
                    {project.categoryLabel}
                  </div>

                  {/* Telemetry Tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-surface-900/90 border border-surface-700 font-mono text-[10px] text-slate-300 backdrop-blur-md hidden sm:block shadow-xs">
                    {project.metrics ? Object.values(project.metrics)[0] : "60 FPS"}
                  </div>

                  {/* Quick Expand Button on Image */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-surface-900/90 border border-surface-700 text-slate-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white hover:text-slate-950 hover:border-transparent cursor-pointer shadow-xs"
                    title="View Technical Details"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Subtitle / Short Title */}
                    <div className="flex items-center gap-2 font-mono text-xs text-blue-400 mb-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      <span>{project.shortTitle}</span>
                    </div>

                    {/* Project Title with Status */}
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-surface-900 border border-surface-700 text-xs font-mono text-slate-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Buttons */}
                  <div className="pt-5 border-t border-surface-700/60 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      {/* Live Demo CTA - only show if liveUrl exists */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm text-slate-950 bg-white hover:bg-slate-100 transition-colors shadow-xs"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}

                      {/* View Code CTA - only show if githubUrl exists */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs sm:text-sm text-slate-200 bg-surface-900 border border-surface-700 hover:bg-surface-750 hover:border-surface-600 transition-colors shadow-xs"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>View Code</span>
                        </a>
                      )}

                      {/* Watch Demo CTA - only show for eligible personal projects with videoUrl */}
                      {hasVideo && !isCompanyProject && (
                        <button
                          onClick={() => openVideoModal(project)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm text-slate-950 bg-blue-500 hover:bg-blue-400 hover:text-white transition-colors shadow-xs"
                        >
                          <PlayCircle className="w-3.5 h-3.5" />
                          <span>Watch Demo</span>
                        </button>
                      )}

                      {/* No repository indicator for projects without GitHub */}
                      {!project.githubUrl && !project.liveUrl && !hasVideo && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-900 border border-surface-700 text-xs font-mono text-slate-400">
                          <Code2 className="w-3 h-3" />
                          <span>Private Repository</span>
                        </span>
                      )}
                    </div>

                    {/* Detail Inspector Trigger */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="font-mono text-xs text-slate-400 hover:text-blue-400 flex items-center gap-1.5 transition-colors cursor-pointer font-medium"
                    >
                      <Eye className="w-3.5 h-3.5 text-blue-400" />
                      <span>Details & Specs</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Project Technical Inspection */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl rounded-2xl bg-surface-850 border border-surface-700 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-surface-900 border border-surface-700 text-slate-300 hover:text-white hover:border-surface-600 cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 font-mono text-xs text-blue-400 mb-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>PROJECT SPEC // {selectedProject.id.toUpperCase()}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              {/* Modal Preview Image */}
              <div className="rounded-xl overflow-hidden border border-surface-700 mb-6 aspect-video bg-surface-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Full Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans mb-6">
                {selectedProject.fullDescription}
              </p>

              {/* Highlights List */}
              <div className="mb-6">
                <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Key Technical Architecture
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6 p-3.5 rounded-xl bg-surface-900 border border-surface-700">
                {Object.entries(selectedProject.metrics).map(([key, val]) => (
                  <div key={key} className="text-center">
                    <div className="font-mono text-[10px] text-slate-400 uppercase">{key}</div>
                    <div className="font-sans text-base font-bold text-white">{val}</div>
                  </div>
                ))}
              </div>

              {/* Modal CTAs */}
              <div className="flex items-center gap-4 flex-wrap">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] text-center py-3 rounded-lg font-semibold text-sm text-slate-950 bg-white hover:bg-slate-100 transition-colors shadow-xs"
                  >
                    Launch Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] text-center py-3 rounded-lg font-medium text-sm text-white bg-surface-900 border border-surface-700 hover:bg-surface-750 transition-colors shadow-xs"
                  >
                    Inspect Source Code
                  </a>
                )}
                {!selectedProject.githubUrl && !selectedProject.liveUrl && (
                  <span className="flex-1 min-w-[140px] text-center py-3 rounded-lg font-medium text-sm text-slate-400 bg-surface-900 border border-surface-700">
                    Private Repository
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Video Modal */}
        {videoProject && (
          <VideoModal
            isOpen={!!videoProject}
            onClose={closeVideoModal}
            videoUrl={videoProject.videoUrl}
            projectTitle={videoProject.title}
          />
        )}

      </div>
    </section>
  );
};

export default Projects;
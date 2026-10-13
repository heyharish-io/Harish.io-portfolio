import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { personalInfo } from '../data/profile';
import { Mail, MapPin, Send, CheckCircle2, Sparkles, Terminal, Copy, Check } from 'lucide-react';

// Gmail compose URL with prefilled recipient
const GMAIL_COMPOSE_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=heyharish.io%40gmail.com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AR Experience',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypes = [
    "AR Experience",
    "VR Simulation",
    "Interactive 3D Web",
    "Spatial UI / UX",
    "Technical Consultation"
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'AR Experience',
        message: ''
      });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-surface-850 border-t border-surface-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <SectionTitle
          tag="COMMUNICATION"
          code="CONTACT"
          title="Get In"
          highlight="Touch"
          subtitle="Planning an AR maintenance app, VR training simulator, or interactive 3D product configurator? Let's discuss your Unity XR roadmap."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info & Details */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Contact Details Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-surface-800 border border-surface-700 shadow-card">
              <div className="flex items-center gap-2 font-mono text-xs text-blue-400 mb-4 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>COMMS CHANNEL // ACTIVE</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Let's Build Something Immersive
              </h3>
              <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                Available for freelance contracts, full-time XR roles, and innovative spatial computing collaborations worldwide.
              </p>

              {/* Direct Email with Gmail Compose Action */}
              <div className="p-4 rounded-xl bg-surface-900 border border-surface-700 mb-4 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-800 border border-surface-700 flex items-center justify-center text-blue-400 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-slate-400 uppercase">DIRECT EMAIL</div>
                      <a 
                        href={GMAIL_COMPOSE_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-mono text-xs sm:text-sm text-white hover:text-blue-400 transition-colors font-medium"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-surface-800 border border-surface-700 text-slate-300 hover:text-white cursor-pointer transition-colors shadow-xs"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location Badge */}
              <div className="p-4 rounded-xl bg-surface-900 border border-surface-700 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-800 border border-surface-700 flex items-center justify-center text-blue-400 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">BASE OF OPERATIONS</div>
                  <div className="font-mono text-xs sm:text-sm text-slate-200">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Response Time SLA */}
              <div className="mt-6 pt-4 border-t border-surface-700/60 flex items-center justify-between font-mono text-xs text-slate-400">
                <span>ESTIMATED RESPONSE:</span>
                <span className="text-white font-semibold">{"< 24 HOURS"}</span>
              </div>
            </div>

            {/* Quick Status Terminal Card */}
            <div className="p-4 rounded-xl bg-surface-900 border border-surface-700 font-mono text-xs text-slate-400 space-y-1">
              <div className="text-white font-medium flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>ENVIRONMENT STATUS</span>
              </div>
              <div className="text-[11px] text-slate-300">
                Network Gateway: <span className="text-emerald-400 font-semibold">Online (200 OK)</span>
              </div>
              <div className="text-[11px] text-slate-300">
                Spatial Engine: <span className="text-blue-400 font-medium">Unity 6 / XR Interaction Toolkit</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-800 border border-surface-700 shadow-card">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-surface-700/60 font-mono text-xs text-slate-400">
                <span className="flex items-center gap-2 text-white font-semibold">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  SEND A MESSAGE
                </span>
                <span className="text-slate-400">ENCRYPTED // DIRECT</span>
              </div>

              {isSuccess ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white">
                    Message Dispatched
                  </h4>
                  <p className="text-slate-300 font-sans text-sm max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-slate-300 uppercase mb-2 font-medium">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-surface-900 border border-surface-700 text-white placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-300 uppercase mb-2 font-medium">
                        Email Address <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface-900 border border-surface-700 text-white placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div>
                    <label className="block font-mono text-xs text-slate-300 uppercase mb-2 font-medium">
                      Experience Archetype
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-900 border border-surface-700 text-white font-sans text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all shadow-xs"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-surface-900 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block font-mono text-xs text-slate-300 uppercase mb-2 font-medium">
                      Project Specification / Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your vision, target hardware (WebAR, Quest 3, Vision Pro), or desired timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-900 border border-surface-700 text-white placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none shadow-xs"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-950 bg-white hover:bg-slate-100 transition-all duration-150 shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
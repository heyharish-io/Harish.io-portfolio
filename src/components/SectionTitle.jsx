import React from 'react';

const SectionTitle = ({ 
  tag, 
  title, 
  highlight, 
  subtitle, 
  align = "center",
  code 
}) => {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'}`}>
      {/* Category Pill Tag */}
      {tag && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md bg-surface-800 border border-surface-700 text-blue-400 text-xs font-mono uppercase tracking-wider ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          <span>{tag}</span>
          {code && (
            <>
              <span className="text-slate-600">//</span>
              <span className="text-slate-400">{code}</span>
            </>
          )}
        </div>
      )}

      {/* Main Heading with Crisp High Contrast */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
        {title}{' '}
        {highlight && (
          <span className="text-blue-400">
            {highlight}
          </span>
        )}
      </h2>

      {/* Subtle Restrained Accent Divider */}
      <div className={`my-4 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-10 h-[2px] bg-blue-500 rounded-full"></div>
        <div className="w-2 h-[2px] bg-surface-700 rounded-full"></div>
      </div>

      {/* Subtitle with High Readability */}
      {subtitle && (
        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

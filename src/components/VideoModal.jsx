import React, { useEffect, useRef } from 'react';
import { X, AlertTriangle } from 'lucide-react';

/**
 * VideoModal - Reusable Cloudinary video popup component
 * 
 * Features:
 * - Embeds Cloudinary videos via video element
 * - Responsive 16:9 video container
 * - Accessible dialog semantics with keyboard navigation
 * - Close on backdrop click, Escape key, or close button
 * - Prevents background scrolling while open
 * - Cleans up event listeners on unmount
 * - Fallback UI for blocked/unavailable videos
 * - Validates Cloudinary URLs before embedding
 */

const CLOUDINARY_VIDEO_REGEX = /^https:\/\/res\.cloudinary\.com\/[^/]+\/video\/upload\/.*\.(mp4|webm|mov|ogg)(\?.*)?$/i;
const CLOUDINARY_DELIVERY_REGEX = /^https:\/\/res\.cloudinary\.com\/[^/]+\/(video\/upload|image\/upload)\/.*(\.(mp4|webm|mov|ogg)|\/.*\/)(?:\?.*)?$/i;

const isValidCloudinaryUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  return CLOUDINARY_VIDEO_REGEX.test(url) || CLOUDINARY_DELIVERY_REGEX.test(url);
};

const VideoModal = ({ 
  isOpen, 
  onClose, 
  videoUrl, 
  projectTitle 
}) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);
  const videoRef = useRef(null);
  const [showFallback, setShowFallback] = React.useState(false);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
      // Focus the close button for accessibility
      setTimeout(() => {
        const closeBtn = modalRef.current?.querySelector('[data-close-button]');
        closeBtn?.focus();
      }, 0);
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      previousActiveElement.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      // Trap focus within modal
      if (e.key === 'Tab' && isOpen && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle video load/error
  const handleVideoLoad = () => {
    setShowFallback(false);
  };

  const handleVideoError = () => {
    setShowFallback(true);
  };

  // Reset fallback state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setShowFallback(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isValidUrl = isValidCloudinaryUrl(videoUrl);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      aria-describedby="video-modal-desc"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl rounded-2xl bg-surface-850 border border-surface-700 shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          ref={(el) => { if (el) el.setAttribute('data-close-button', 'true'); }}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-surface-900/90 border border-surface-700 text-slate-300 hover:text-white hover:border-surface-600 hover:bg-surface-800/90 cursor-pointer transition-colors shadow-xs"
          aria-label="Close video modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Container */}
        <div className="relative aspect-video w-full bg-surface-950">
          {isValidUrl && !showFallback ? (
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-contain"
              controls
              controlsList="nodownload"
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              preload="metadata"
              title={`Video demo: ${projectTitle}`}
            />
          ) : (
            // Fallback UI
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="font-sans text-lg font-semibold text-white mb-2">
                Video Unavailable
              </h4>
              <p className="text-sm text-slate-400 mb-4 max-w-md">
                Unable to load the video demo. This may be due to:
              </p>
              <ul className="text-xs text-slate-500 mb-4 space-y-1 text-left max-w-xs">
                <li>• Invalid or unsupported Cloudinary video URL</li>
                <li>• Video not found or access denied</li>
                <li>• Network or CORS restrictions</li>
                <li>• Browser format compatibility</li>
              </ul>
              <p className="text-xs text-slate-500 font-mono">
                Verify the Cloudinary video URL and delivery settings.
              </p>
            </div>
          )}
        </div>

        {/* Project Title Bar */}
        <div className="px-6 py-4 border-t border-surface-700 bg-surface-800/50 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-blue-400 min-w-0">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
              <span id="video-modal-title" className="truncate">VIDEO DEMO</span>
              <span className="text-slate-600">//</span>
              <span id="video-modal-desc" className="truncate text-white font-medium">{projectTitle}</span>
            </div>
            <span className="text-xs text-slate-500 font-mono hidden sm:block">
              Cloudinary Video
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
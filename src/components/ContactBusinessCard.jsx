import React, { useState, useEffect } from 'react';
import { CreditCard, Maximize2, Download, X, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const ContactBusinessCard = ({
  imagePath = siteConfig.businessCardImage || '/images/business-card.jpg',
  downloadPath = siteConfig.businessCardDownload || '/images/business-card.png',
  label = "OUR BUSINESS CARD",
  subtitle = "Keep our contact details handy.",
  darkMode = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Small Label Above Image */}
      <div className="w-full flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
          <CreditCard className="w-3.5 h-3.5 text-brand-gold" />
          <span>{label}</span>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="text-[11px] font-semibold text-brand-gold/80 hover:text-brand-gold hover:underline flex items-center gap-1 transition-colors"
          aria-label="Expand business card"
        >
          <Maximize2 className="w-3 h-3" />
          <span>Expand</span>
        </button>
      </div>

      {/* Interactive Business Card Box */}
      <div
        onClick={() => setIsOpen(true)}
        className="group relative w-full rounded-2xl p-2.5 border cursor-pointer overflow-hidden transition-all duration-300 transform hover:-translate-y-1 bg-white border-brand-gold/30 hover:border-brand-gold shadow-md hover:shadow-xl"
        title="Click to view full size business card"
      >
        {/* Card Frame & Image with Instant Preload & Aspect Ratio */}
        <div className="relative w-full aspect-[1670/942] rounded-xl overflow-hidden bg-brand-gold/5 flex items-center justify-center">
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cream/80 via-white to-brand-cream/80 animate-pulse flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-brand-gold/40" />
            </div>
          )}

          <img
            src={imagePath}
            alt="Munna Dyeing Printing Official Business Card"
            width={1670}
            height={942}
            className={`w-full h-auto object-contain max-h-[360px] rounded-xl transition-all duration-300 ease-out group-hover:scale-[1.02] ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
          />

          {/* Hover Overlay with Action Pill */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <span className="px-4 py-2 rounded-full bg-brand-gold text-brand-dark font-bold text-xs shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Click to View Full Card</span>
            </span>
          </div>
        </div>
      </div>

      {/* Secondary Text Below Image */}
      <p className={`text-xs text-center mt-3 font-medium tracking-wide ${
        darkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>
        {subtitle}
      </p>

      {/* Fullscreen Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Business Card Lightbox"
        >
          {/* Backdrop Click Listener */}
          <div
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal Container */}
          <div
            className={`relative z-10 w-full max-w-4xl rounded-3xl border p-5 sm:p-8 shadow-2xl overflow-hidden transition-all my-auto max-h-[90vh] flex flex-col justify-between ${
              darkMode
                ? 'bg-brand-card border-brand-gold/50 text-white'
                : 'bg-white border-brand-gold/50 text-gray-900'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-brand-gold hover:text-brand-dark transition-all border border-brand-gold/30 z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>Munna Dyeing Printing — Official Business Card</span>
            </div>

            {/* High Res Image Display */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-brand-gold/30 bg-black flex items-center justify-center p-2 my-auto max-h-[65vh]">
              <img
                src={imagePath}
                alt="Munna Dyeing Printing Business Card Full Resolution"
                className="w-full h-full object-contain max-h-[60vh] rounded-xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-4 border-t border-brand-surface text-xs">
              <div className="text-gray-400">
                <span className="font-semibold text-brand-gold">{siteConfig.businessName}</span>
                <span className="hidden sm:inline"> • {siteConfig.area}</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={downloadPath}
                  download="Munna_Dyeing_Printing_Business_Card.png"
                  className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-gold-gradient text-brand-dark font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:scale-105 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Save Card Image</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactBusinessCard;

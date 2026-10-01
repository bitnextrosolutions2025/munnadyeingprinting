import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/heroData';

const AUTOPLAY_DURATION = 4000; // 4.0 seconds per slide

const Hero = ({ darkMode = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDocHidden, setIsDocHidden] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const transitionTimeout = useRef(null);

  const totalSlides = heroSlides.length;

  // Transition to a specific slide with smooth dual-layer crossfade
  const goToSlide = useCallback((newIndex) => {
    if (newIndex === currentSlide) return;
    setPrevSlide(currentSlide);
    setCurrentSlide(newIndex);
    setProgressKey((k) => k + 1);

    if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    transitionTimeout.current = setTimeout(() => {
      setPrevSlide(null);
    }, 900);
  }, [currentSlide]);

  const handleNext = useCallback(() => {
    const nextIndex = (currentSlide + 1) % totalSlides;
    goToSlide(nextIndex);
  }, [currentSlide, totalSlides, goToSlide]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prevIndex);
  }, [currentSlide, totalSlides, goToSlide]);

  // Autoplay management
  useEffect(() => {
    // Only pause if desktop is hovering or browser tab is hidden
    if (isHovered || isDocHidden) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      handleNext();
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, [isHovered, isDocHidden, handleNext]);

  // Tab visibility listener
  useEffect(() => {
    const handleVisibility = () => {
      setIsDocHidden(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch Swipe for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      id="hero"
      aria-label="Hero Carousel Showcase"
      className="relative pt-[62px] sm:pt-[70px] overflow-hidden select-none bg-brand-dark"
    >
      {/* Full-Width Cinematic Viewport (Edge-to-Edge) */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[320px] min-[380px]:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[490px] xl:h-[530px] overflow-hidden bg-brand-dark"
      >
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          const isExiting = index === prevSlide;

          let zIndex = 'z-0';
          let opacityClass = 'opacity-0 pointer-events-none';

          if (isActive) {
            zIndex = 'z-20';
            opacityClass = 'opacity-100';
          } else if (isExiting) {
            zIndex = 'z-10';
            opacityClass = 'opacity-100';
          }

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-900 ease-in-out ${zIndex} ${opacityClass}`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                loading={index === 0 ? 'eager' : 'lazy'}
                className={`w-full h-full object-cover object-[center_35%] sm:object-center ${isActive ? 'animate-ken-burns' : ''
                  }`}
              />

              {/* Luxury Cinematic Gradient Overlays: Top navbar transition + Bottom control contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />
            </div>
          );
        })}

        {/* Bottom Floating Bar: Slide Indicator, Minimal Separate CTA, and Chevrons */}
        <div className="absolute inset-x-0 bottom-0 z-30 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-4 flex flex-wrap items-center justify-between gap-3">

            {/* Left: Slide Counter & Dynamic Progress Bar */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 pointer-events-auto bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-md">
              {/* Clickable Slide Pills */}
              <div className="flex items-center gap-1.5">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide
                        ? 'w-5 sm:w-7 bg-brand-gold'
                        : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* 01 / 05 Counter & Progress Bar */}
              <div className="flex flex-col gap-0.5 pl-1">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-brand-gold">
                  0{currentSlide + 1} <span className="text-white/40">/</span> 0{totalSlides}
                </span>
                {/* Animated Progress Bar */}
                <div className="w-12 sm:w-16 h-0.5 bg-white/25 rounded-full overflow-hidden">
                  <div
                    key={progressKey}
                    className={`h-full bg-brand-gold rounded-full animate-hero-progress ${isHovered ? 'paused-animation' : ''
                      }`}
                  />
                </div>
              </div>
            </div>

            {/* Center / Action: Minimal Standalone CTA */}
            <div className="pointer-events-auto">
              <a
                href="#sales"
                className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-gold-gradient text-brand-dark font-bold text-xs uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-brand-gold/40 border border-brand-gold/30"
              >
                <span>Explore Fabrics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right: Minimal Circular Chevron Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/25 bg-black/50 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/25 bg-black/50 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import businessService from '../services/businessService';
import { Eye } from 'lucide-react';

const Gallery = ({ darkMode = true, onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems = businessService.getGalleryItems();
  const categories = ['All', 'Dyeing', 'Screen Printing', 'Shibori', 'Block Print', 'Kalamkari', 'Batik'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className={`py-20 relative transition-colors duration-500 border-t ${darkMode ? 'bg-brand-dark border-brand-surface' : 'bg-brand-cream border-brand-cream-dark'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          badge="Sample Portfolio"
          title="Our Work & Fabric Craft"
          subtitle="Explore sample craftsmanship across fabric dyeing, screen printing, Shibori, block print, Kalamkari, and Batik."
          darkMode={darkMode}
        />

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${activeFilter === cat
                  ? 'bg-gold-gradient text-brand-dark shadow-md scale-105'
                  : darkMode
                    ? 'bg-brand-surface text-gray-300 border border-brand-gold/20 hover:border-brand-gold hover:text-brand-gold'
                    : 'bg-white text-gray-700 border border-brand-gold/30 hover:border-brand-gold-dark hover:text-brand-gold-dark shadow-sm'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Cards Container: Mobile Sticky Stacking Deck + Desktop Responsive Grid */}
        <div className="relative flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              style={{
                zIndex: index + 1,
              }}
              className={`group relative rounded-3xl overflow-hidden border cursor-pointer hover:border-brand-gold hover:shadow-2xl transition-all duration-500
                sticky md:static top-[74px] sm:top-[82px] md:top-auto mb-10 sm:mb-14 md:mb-0
                shadow-2xl md:shadow-sm
                ${darkMode ? 'border-brand-gold/30 bg-brand-card shadow-black/80' : 'border-brand-gold/40 bg-white shadow-gray-400/30'}
              `}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] overflow-hidden bg-brand-surface">
                <img
                  src={item.image}
                  alt={item.title}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Top Bar: Category Badge (Left) + Mobile Stack Index Counter (Right) */}
                <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 z-10 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-brand-dark/90 border border-brand-gold/40 text-brand-gold text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md shadow-md">
                    {item.category}
                  </span>

                  {/* Mobile Stacking Card Counter */}
                  <span className="md:hidden px-2.5 py-1 rounded-full bg-black/60 border border-white/20 text-white/90 text-[10px] font-mono font-bold tracking-widest backdrop-blur-md">
                    {String(index + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
                  </span>
                </div>

                {/* Center Expand Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/90 text-brand-dark flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Bottom Title Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-brand-gold transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-2 font-light">
                    {item.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default Gallery;

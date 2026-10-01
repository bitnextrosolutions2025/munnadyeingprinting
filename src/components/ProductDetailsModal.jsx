import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Phone, CheckCircle, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { generateProductWhatsAppLink } from '../utils/whatsapp';
import SpecificationGrid from './common/SpecificationGrid';

const ProductDetailsModal = ({ product, onClose, darkMode = true }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Prevent underlying body scroll while modal is active
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  // Reset active image index when product changes
  useEffect(() => {
    setActiveImgIndex(0);
  }, [product]);

  if (!product) return null;

  const productImages = (product.images && product.images.length > 0) 
    ? product.images 
    : [product.image || '/images/gallery_dyeing.jpg'];

  const whatsappUrl = generateProductWhatsAppLink(siteConfig.whatsappPhone, product);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-hidden">
      
      {/* Backdrop click listener */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Centered Modal Card Box (Flex column on mobile, Flex row on desktop with pinned action bar) */}
      <div className={`relative z-10 w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden flex flex-col md:flex-row my-auto h-[92dvh] max-h-[640px] md:h-[84vh] md:max-h-[600px] ${
        darkMode ? 'bg-brand-card border-brand-gold/40 text-gray-200' : 'bg-white border-brand-gold/40 text-gray-900'
      }`}>
        
        {/* Prominent High Z-Index Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 sm:top-4 sm:right-4 z-40 p-2.5 rounded-full shadow-xl transition-transform hover:scale-110 ${
            darkMode ? 'bg-brand-dark/90 text-brand-gold border border-brand-gold/40 hover:bg-brand-surface' : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
          }`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Left Side: Product Image & Gallery Thumbnails */}
        <div className="w-full md:w-1/2 h-[220px] sm:h-[260px] md:h-full shrink-0 bg-black flex flex-col justify-between relative overflow-hidden group">
          <div className="relative w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden">
            <img
              src={productImages[activeImgIndex]}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />
            
            {/* Image Navigation Controls if multi-image */}
            {productImages.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImgIndex((prev) => (prev > 0 ? prev - 1 : productImages.length - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-dark/80 text-white border border-brand-gold/30 opacity-80 hover:opacity-100 transition-opacity z-20"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveImgIndex((prev) => (prev < productImages.length - 1 ? prev + 1 : 0))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-dark/80 text-white border border-brand-gold/30 opacity-80 hover:opacity-100 transition-opacity z-20"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
              <span className="px-2.5 py-1 rounded-full bg-brand-dark/90 border border-brand-gold/40 text-brand-gold text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                {product.badge || product.category}
              </span>
            </div>
          </div>

          {/* Multiple Image Thumbnails Bar */}
          {productImages.length > 1 && (
            <div className="p-2 sm:p-2.5 bg-brand-dark/90 border-t border-brand-gold/20 flex items-center justify-center gap-2 z-10 shrink-0">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImgIndex === idx ? 'border-brand-gold scale-105 shadow-md' : 'border-gray-700 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Product Details & Pinned Bottom Action Buttons */}
        <div className="w-full md:w-1/2 flex-1 min-h-0 h-full flex flex-col bg-inherit">
          
          {/* Scrollable details body */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
            {/* Category & Status */}
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-brand-gold pr-10">
              <span>{product.category}</span>
              <span className="flex items-center gap-1 text-emerald-500 font-bold shrink-0">
                <CheckCircle className="w-3.5 h-3.5" />
                In Stock
              </span>
            </div>

            {/* Title */}
            <h3 className={`font-heading text-lg sm:text-xl md:text-2xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {product.name}
            </h3>

            {/* Pricing Tag */}
            <div>
              {product.showPrice ? (
                <div className="inline-flex items-baseline gap-1 px-3 py-1.5 rounded-xl bg-gold-gradient text-brand-dark font-heading font-extrabold text-lg sm:text-xl shadow-md">
                  <span>₹{product.price}</span>
                  <span className="text-xs font-semibold font-body lowercase">/ {product.priceUnit || 'meter'}</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-bold text-xs sm:text-sm">
                  <span>Contact for Wholesale Pricing</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className={`text-xs sm:text-sm leading-relaxed font-light ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {product.description}
            </p>

            {/* Clean Specification Grid */}
            <SpecificationGrid product={product} darkMode={darkMode} />

            {/* In-House Guarantee Line */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-400 pt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span>Direct Manufacturing & Color Fastness Assured</span>
            </div>
          </div>

          {/* Pinned Bottom CTA Action Buttons Container - Always 100% visible */}
          <div className={`p-3 sm:p-4 md:px-6 md:py-3.5 border-t shrink-0 space-y-2 z-10 ${
            darkMode ? 'bg-brand-card/95 border-brand-gold/20' : 'bg-white/95 border-brand-gold/30'
          }`}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>ORDER ON WHATSAPP</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${siteConfig.primaryPhone.replace(/\s+/g, '')}`}
              className={`w-full py-2 px-4 rounded-xl border font-semibold text-xs text-center flex items-center justify-center gap-2 transition-all ${
                darkMode ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-brand-gold' : 'bg-gray-100 border-gray-300 text-gray-800 hover:text-gray-900'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Owner (+91 {siteConfig.primaryPhone})</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailsModal;

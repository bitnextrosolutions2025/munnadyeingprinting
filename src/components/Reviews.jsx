import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, Heart, MessageSquare, ThumbsUp } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { googleReviews, googleReviewsSummary, reviewCategories } from '../data/reviewsData';

// Official Google G Icon SVG
const GoogleGIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

const Reviews = ({ darkMode = true }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredReviews = activeCategory === 'all'
    ? googleReviews
    : googleReviews.filter(r => r.category === activeCategory);

  const visibleReviews = showAll ? filteredReviews : filteredReviews.slice(0, 6);

  return (
    <section id="reviews" className={`py-20 relative overflow-hidden transition-colors duration-500 ${
      darkMode ? 'bg-brand-dark/95' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    }`}>
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Google Badge */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border shadow-sm backdrop-blur-md transition-colors bg-white/80 dark:bg-brand-card/90 border-brand-gold/30 text-brand-gold">
            <GoogleGIcon className="w-4 h-4" />
            <span>Verified Google Reviews</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Loved by 148+ Happy Customers
          </h2>

          <p className={`max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Real, authentic experiences shared by boutique designers, saree lovers, and fabric clients on Google Maps.
          </p>
        </div>

        {/* Google Scorecard Banner */}
        <div className={`mb-12 p-6 sm:p-8 rounded-3xl border shadow-xl backdrop-blur-md max-w-4xl mx-auto ${
          darkMode
            ? 'bg-brand-card/70 border-brand-gold/25 shadow-black/40'
            : 'bg-white border-brand-gold/30 shadow-brand-gold/10'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left Score Block */}
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center p-3 shrink-0">
                <GoogleGIcon className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className={`font-heading text-4xl sm:text-5xl font-extrabold tracking-tight ${
                    darkMode ? 'text-brand-gold' : 'text-gray-900'
                  }`}>
                    {googleReviewsSummary.rating}
                  </span>
                  <div className="flex flex-col">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold mt-0.5 text-gray-600">
                      Based on {googleReviewsSummary.totalReviews} Google Ratings & {googleReviewsSummary.webReviewsCount} Web Reviews
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-medium mt-1 flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>100% Genuine, Verified Business Profile</span>
                </p>
              </div>
            </div>

            {/* Right Action Button (Write a Review only) */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href={googleReviewsSummary.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold text-brand-dark hover:shadow-brand-gold/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Star className="w-4 h-4 fill-brand-dark" />
                <span>Write a Review on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Review Filter Chips (Google Topics) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {reviewCategories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-brand-gold text-brand-dark border-brand-gold font-bold shadow-md shadow-brand-gold/20'
                    : darkMode
                      ? 'bg-brand-card/60 text-gray-300 border-white/10 hover:border-brand-gold/40 hover:text-white'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-brand-gold/60 hover:text-gray-900 shadow-sm'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                  isSelected
                    ? 'bg-brand-dark/20 text-brand-dark font-bold'
                    : darkMode
                      ? 'bg-white/10 text-gray-400'
                      : 'bg-gray-100 text-gray-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 ${
                darkMode
                  ? 'bg-brand-card/80 border-brand-gold/20 hover:border-brand-gold/50 shadow-black/30'
                  : 'bg-white border-gray-200/90 hover:border-brand-gold/40 shadow-sm'
              }`}
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    {/* User Avatar Circle */}
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-inner shrink-0`}>
                      {review.initials}
                    </div>

                    {/* Name and Guide Badge */}
                    <div>
                      <h4 className={`font-semibold text-sm sm:text-base leading-snug line-clamp-1 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {review.userType === 'Local Guide' ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                            ★ Local Guide
                          </span>
                        ) : (
                          <span className={`text-[11px] font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {review.badgeDetails || 'Verified Customer'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Google Logo Watermark */}
                  <div className="shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                    <GoogleGIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Stars and Relative Time */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {review.date}
                  </span>
                </div>

                {/* Tag Pill */}
                {review.tag && (
                  <div className="mb-3">
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-lg border ${
                      darkMode
                        ? 'bg-brand-gold/10 text-brand-gold border-brand-gold/30'
                        : 'bg-amber-50 text-amber-900 border-amber-200'
                    }`}>
                      {review.tag}
                    </span>
                  </div>
                )}

                {/* Review Comment Quote */}
                <p className={`text-sm leading-relaxed font-light mb-4 italic ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  "{review.comment}"
                </p>
              </div>

              {/* Card Footer: Verified Badge & Likes */}
              <div className={`pt-3 border-t flex items-center justify-between text-xs ${
                darkMode ? 'border-white/10 text-gray-400' : 'border-gray-100 text-gray-500'
              }`}>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Google Verified</span>
                </div>

                {review.likes > 0 && (
                  <div className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    <span>{review.likes} helpful</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredReviews.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border shadow-sm ${
                darkMode
                  ? 'bg-brand-card hover:bg-brand-gold/10 border-brand-gold/40 text-brand-gold hover:border-brand-gold'
                  : 'bg-white hover:bg-gray-50 border-gray-300 text-gray-800 hover:border-brand-gold'
              }`}
            >
              {showAll ? 'Show Less Reviews' : `View All ${filteredReviews.length} Reviews`}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Reviews;

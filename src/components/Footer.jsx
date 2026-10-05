import React from 'react';
import { siteConfig } from '../config/siteConfig';
import Logo from './Logo';
import { Phone, MapPin, MessageSquare, ExternalLink } from 'lucide-react';

const Footer = ({ darkMode = true }) => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Fabric Store', href: '#category=All' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`border-t transition-colors duration-500 ${
      darkMode ? 'bg-brand-dark border-brand-surface text-gray-400' : 'bg-brand-cream-dark/40 border-brand-gold/30 text-gray-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo darkMode={darkMode} size="sm" showText={false} />
            
            <p className="text-xs sm:text-sm leading-relaxed max-w-md font-light">
              "{siteConfig.tagline}" — Providing expert fabric dyeing, screen printing, Shibori, block print, Kalamkari, and Batik craftsmanship in Pragathi Nagar, Nizampet, Hyderabad.
            </p>

            {/* Social Media Icon Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Follow us on Instagram"
                className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md ${
                  darkMode
                    ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-pink-400 hover:border-pink-400/50 hover:shadow-pink-500/10'
                    : 'bg-white border-brand-gold/40 text-gray-800 hover:text-pink-600 hover:border-pink-500 shadow-sm'
                }`}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="Watch us on YouTube"
                className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md ${
                  darkMode
                    ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-red-400 hover:border-red-400/50 hover:shadow-red-500/10'
                    : 'bg-white border-brand-gold/40 text-gray-800 hover:text-red-600 hover:border-red-500 shadow-sm'
                }`}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href={siteConfig.socials.maps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Location"
                title="Find Workshop on Google Maps"
                className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md ${
                  darkMode
                    ? 'bg-brand-surface border-brand-gold/30 text-gray-200 hover:text-brand-gold hover:border-brand-gold hover:shadow-brand-gold/10'
                    : 'bg-white border-brand-gold/40 text-gray-800 hover:text-brand-gold-dark hover:border-brand-gold shadow-sm'
                }`}
              >
                <svg className="w-5 h-5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className={`font-heading text-lg font-bold tracking-wider ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Navigation Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors ${
                      darkMode ? 'hover:text-brand-gold' : 'hover:text-brand-gold-dark'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Workshop Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className={`font-heading text-lg font-bold tracking-wider ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Workshop Contact
            </h4>
            
            <div className="space-y-2.5 text-xs font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span>{siteConfig.address}</span>
                  <div className="mt-1">
                    <a
                      href={siteConfig.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-brand-gold hover:underline"
                    >
                      <span>View in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <div className="flex gap-2">
                  {siteConfig.phones.map((p, i) => (
                    <a key={i} href={`tel:${p.replace(/\s+/g, '')}`} className="hover:underline font-semibold text-brand-gold">
                      +91 {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsappPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-green-500 font-semibold"
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] block font-semibold text-brand-gold uppercase tracking-wider">Contact Person</span>
              <span className={`text-sm font-heading font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{siteConfig.owner}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          darkMode ? 'border-brand-surface text-gray-500' : 'border-brand-gold/20 text-gray-600'
        }`}>
          <p>© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
          <p className="text-brand-gold font-medium">{siteConfig.tagline}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

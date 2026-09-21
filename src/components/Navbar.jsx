import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Sun, Moon } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import Logo from './Logo';

const Navbar = ({ darkMode, onToggleTheme, onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Store', href: '#sales' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Why Us', href: '#why-us' },
  ];

  const handleHomeClick = (e, href) => {
    if (href === '#hero' || href === '#sales') {
      if (onNavigateHome) onNavigateHome();
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode
        ? (isScrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-brand-dark/80 backdrop-blur-sm py-4 border-b border-brand-gold/10')
        : (isScrolled ? 'glass-nav-light py-3 shadow-md' : 'bg-brand-cream/90 backdrop-blur-sm py-4 border-b border-brand-gold/20')
    }`}>
      <div className="max-w-7xl mx-auto px-3 min-[380px]:px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Official Brand Identity: Locked MDP Emblem + Master Approved Wordmark */}
          <a href="#hero" onClick={(e) => handleHomeClick(e, '#hero')} className="focus:outline-none shrink min-w-0">
            <Logo darkMode={darkMode} size="md" showLogo={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleHomeClick(e, link.href)}
                className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                  darkMode ? 'text-gray-300 hover:text-brand-gold' : 'text-gray-700 hover:text-brand-gold-dark'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </nav>

          {/* Action CTAs & Theme Toggle (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
                darkMode
                  ? 'bg-brand-surface border-brand-gold/30 text-brand-gold hover:bg-brand-gold/20'
                  : 'bg-white border-brand-gold/40 text-brand-gold-dark hover:bg-brand-gold/10 shadow-sm'
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-5 h-5 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* WhatsApp Quick Link */}
            <a
              href={`https://wa.me/${siteConfig.whatsappPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl transition-all ${
                darkMode ? 'text-gray-400 hover:text-green-400 hover:bg-white/5' : 'text-gray-600 hover:text-green-600 hover:bg-black/5'
              }`}
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            {/* Single Prominent Contact Button */}
            <a
              href="#contact"
              onClick={(e) => handleHomeClick(e, '#contact')}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-medium text-sm text-brand-dark bg-gold-gradient shadow-md hover:shadow-brand-gold/20 hover:shadow-lg transition-all duration-300 transform active:scale-95 flex items-center justify-center"
            >
              <span className="relative z-10 font-bold tracking-wide">Contact Us</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>

          </div>

          {/* Mobile Menu Header: Clean, Uncongested (Hamburger Only) */}
          <div className="flex md:hidden items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border focus:outline-none transition-all flex items-center justify-center ${
                darkMode
                  ? 'bg-brand-surface/80 border-brand-gold/30 text-brand-gold hover:bg-brand-gold/20 active:scale-95'
                  : 'bg-white/90 border-brand-gold/40 text-brand-gold-dark shadow-sm hover:bg-brand-gold/10 active:scale-95'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Clean Mobile Drawer Menu with Contact CTA & Theme Switcher */}
      {mobileMenuOpen && (
        <div className={`md:hidden animate-fadeIn border-t ${
          darkMode ? 'glass-nav border-brand-gold/20 shadow-2xl' : 'glass-nav-light border-brand-gold/30 shadow-xl'
        }`}>
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleHomeClick(e, link.href);
                }}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  darkMode
                    ? 'text-gray-200 hover:text-brand-gold hover:bg-brand-surface'
                    : 'text-gray-800 hover:text-brand-gold-dark hover:bg-white/80'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Contact & WhatsApp CTAs */}
            <div className="pt-2 space-y-2">
              <a
                href="#contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleHomeClick(e, '#contact');
                }}
                className="block w-full py-2.5 text-center rounded-xl font-bold text-sm text-brand-dark bg-gold-gradient shadow-md active:scale-95 transition-transform"
              >
                Contact Us
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-2.5 text-center rounded-xl font-medium text-sm border transition-colors ${
                  darkMode
                    ? 'border-green-500/40 text-green-400 bg-green-500/10 hover:bg-green-500/20'
                    : 'border-green-600/40 text-green-700 bg-green-50 hover:bg-green-100'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Theme Switcher inside Hamburger Drawer */}
            <div className={`pt-3 mt-2 border-t flex items-center justify-between px-2 py-2 ${
              darkMode ? 'border-white/10' : 'border-brand-gold/20'
            }`}>
              <div className="flex items-center gap-2 text-sm font-medium">
                {darkMode ? (
                  <Moon className="w-4 h-4 text-brand-gold" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-500" />
                )}
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {darkMode ? 'Dark Mode' : 'Light Mode'}
                </span>
              </div>

              <button
                onClick={onToggleTheme}
                className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                  darkMode
                    ? 'bg-brand-surface border-brand-gold/30 text-brand-gold hover:bg-brand-gold/20'
                    : 'bg-white border-brand-gold/40 text-brand-gold-dark shadow-sm hover:bg-brand-gold/10'
                }`}
              >
                <span>Switch to {darkMode ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

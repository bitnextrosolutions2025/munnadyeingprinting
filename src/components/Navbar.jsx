import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import Logo from './Logo';

const Navbar = ({ darkMode = false, onNavigateHome, onSelectCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 20);

          // Calculate scroll progress percentage (0 - 100)
          const winHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (winHeight > 0) {
            const progress = Math.min(100, Math.max(0, (currentScrollY / winHeight) * 100));
            setScrollProgress(progress);
          } else {
            setScrollProgress(0);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Store', href: '#category=All' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Why Us', href: '#why-us' },
  ];

  const handleNavLinkClick = (e, link) => {
    if (link.name === 'Store' || link.href === '#category=All') {
      e.preventDefault();
      if (onSelectCategory) {
        onSelectCategory('All');
      } else {
        window.location.hash = '#category=All';
      }
      return;
    }

    if (onNavigateHome) {
      onNavigateHome(link.href);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome('#hero');
    } else {
      window.location.hash = '#hero';
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-[#fbf9f5]/92 backdrop-blur-xl py-2 sm:py-2.5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08),0_4px_12px_rgba(180,130,20,0.12)] border-b border-brand-gold/35' 
        : 'bg-[#fbf9f5]/80 backdrop-blur-md py-3.5 sm:py-4 border-b border-brand-gold/20 shadow-none'
    }`}>
      <div className="max-w-7xl mx-auto px-3 min-[380px]:px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Official Brand Identity: Logo emblem on Left with smooth scale transition */}
          <a 
            href="#hero" 
            onClick={handleLogoClick} 
            className={`focus:outline-none shrink-0 origin-left transition-all duration-300 ${
              isScrolled ? 'scale-[0.92] sm:scale-90' : 'scale-100'
            }`}
          >
            <Logo darkMode={false} size="md" showLogo={true} />
          </a>

          {/* Right Side Unified Group: Navigation Links shifted right + Action CTAs */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3.5">
            
            {/* Desktop Navigation Links with compact spacing */}
            <nav className="flex items-center gap-0.5 lg:gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className="px-2 lg:px-2.5 py-1.5 text-xs lg:text-sm font-medium transition-colors relative group whitespace-nowrap text-gray-700 hover:text-brand-gold-dark cursor-pointer"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
            </nav>

            {/* WhatsApp Quick Link */}
            <a
              href={`https://wa.me/${siteConfig.whatsappPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-gray-600 hover:text-green-600 hover:bg-black/5 transition-all"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            {/* Single Prominent Contact Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavLinkClick(e, { name: 'Contact', href: '#contact' })}
              className={`relative group overflow-hidden rounded-xl font-medium text-brand-dark bg-gold-gradient shadow-md hover:shadow-brand-gold/30 hover:shadow-lg transition-all duration-300 transform active:scale-95 flex items-center justify-center whitespace-nowrap ${
                isScrolled ? 'px-3.5 lg:px-4.5 py-1.5 lg:py-2 text-xs lg:text-sm' : 'px-4 lg:px-5 py-2 text-xs lg:text-sm'
              }`}
            >
              <span className="relative z-10 font-bold tracking-wide">Contact Us</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>

          </div>

          {/* Mobile Menu Header: Hamburger Only */}
          <div className="flex md:hidden items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border focus:outline-none transition-all flex items-center justify-center bg-white/90 border-brand-gold/40 text-brand-gold-dark shadow-sm hover:bg-brand-gold/10 active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Luxury Golden Scroll Progress Indicator Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-gold/15 overflow-hidden pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 via-brand-gold to-amber-600 shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Clean Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-fadeIn border-t glass-nav-light border-brand-gold/30 shadow-xl">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavLinkClick(e, link);
                }}
                className="block px-4 py-2.5 rounded-xl text-base font-medium transition-colors text-gray-800 hover:text-brand-gold-dark hover:bg-white/80 cursor-pointer"
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
                  handleNavLinkClick(e, { name: 'Contact', href: '#contact' });
                }}
                className="block w-full py-2.5 text-center rounded-xl font-bold text-sm text-brand-dark bg-gold-gradient shadow-md active:scale-95 transition-transform"
              >
                Contact Us
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-center rounded-xl font-medium text-sm border border-green-600/40 text-green-700 bg-green-50 hover:bg-green-100 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

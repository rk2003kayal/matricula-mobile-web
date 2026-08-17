import React, { useState } from 'react';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import './Header.css';

export default function Header({ onOpenEnquire, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About Matricula', href: '#about' },
    { label: 'JEE / NEET Coaching', href: '#jee-neet' },
    { label: 'MANTRA 2026 Exam', href: '/mantra', isRoute: true },
    { label: 'Student Voices', href: '#testimonials' },
    { label: 'Matricula Mock Test', href: '#mock-test' },
    { label: 'Founders & Vision', href: '#visionaries' },
    { label: 'Our Teachers & Mentors', href: '/mentors', isRoute: true },
    { label: 'FAQs', href: '#faq' },
  ];

  const handleNavClick = (link) => {
    setMenuOpen(false);
    if (link.isRoute) {
      if (onNavigate) {
        onNavigate(link.href);
      }
    } else {
      if (window.location.pathname !== '/') {
        if (onNavigate) {
          onNavigate('/');
        }
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/');
    }
  };

  return (
    <>
      <header className="mobile-header sticky-top">
        <div className="header-container">
          <a 
            href="/" 
            className="header-logo-link" 
            aria-label="Matricula Education Home"
            onClick={handleLogoClick}
          >
            <img 
              src="/matricula-logo.png" 
              alt="Matricula Education - no talent lies latent" 
              className="brand-logo-img"
            />
          </a>

          <div className="header-actions">
            <button 
              className="btn-primary-red header-cta-btn"
              onClick={onOpenEnquire}
            >
              <span>Enquire Now</span>
              <ArrowRight size={16} />
            </button>

            <button 
              className="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={24} color="#17375E" /> : <Menu size={24} color="#17375E" />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-down Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-nav-content" onClick={(e) => e.stopPropagation()}>
            <div className="nav-brand-header">
              <img src="/matricula-logo.png" alt="Matricula Logo" className="nav-logo" />
              <button className="close-nav-btn" onClick={() => setMenuOpen(false)}>
                <X size={22} color="#17375E" />
              </button>
            </div>

            <nav className="nav-menu-list">
              {navLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  className="nav-menu-item"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link);
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} className="nav-item-arrow" />
                </a>
              ))}
            </nav>

            <div className="nav-footer-cta">
              <button 
                className="btn-primary-red w-full"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenEnquire();
                }}
              >
                <span>Enquire Now →</span>
              </button>

              <div className="contact-quick-info">
                <PhoneCall size={16} color="#D7473B" />
                <span>Call Us: +91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

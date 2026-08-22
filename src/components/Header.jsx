import React, { useState } from 'react';
import { Menu, X, ArrowRight, PhoneCall, ChevronDown } from 'lucide-react';
import './Header.css';

export default function Header({ onOpenEnquire, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedParents, setExpandedParents] = useState({});

  const navLinks = [
    { 
      id: 'home', 
      label: 'HOME', 
      href: '/' 
    },
    { 
      id: 'about', 
      label: 'ABOUT US', 
      href: '/about-us' 
    },
    { 
      id: 'batches', 
      label: 'BATCHES',
      subItems: [
        { label: 'Class 9' },
        { label: 'Class 10' },
        { label: 'Class 11' },
        { label: 'Class 12' },
        { label: 'JEE/NEET' },
        { label: 'Spoken English' }
      ] 
    },
    { 
      id: 'offline-centre', 
      label: 'OFFLINE CENTRE', 
      href: '#jee-neet' 
    },
    { 
      id: 'products', 
      label: 'PRODUCTS',
      subItems: [
        { label: 'MANTRA' },
        { label: 'MTS' }
      ] 
    },
    { 
      id: 'study-resources', 
      label: 'STUDY RESOURCES',
      subItems: [
        { label: 'Class VI' },
        { label: 'Class VII' },
        { label: 'Class VIII' },
        { label: 'Class IX' },
        { label: 'Class X' },
        { label: 'Class XI' },
        { label: 'Class XII' }
      ] 
    },
    { 
      id: 'career', 
      label: 'CAREER',
      subItems: [
        { label: 'Career Compass' },
        { label: 'Opportunities' }
      ] 
    },
    { 
      id: 'work-with-us', 
      label: 'WORK WITH US',
      subItems: [
        { label: 'Affiliate' },
        { label: 'Teacher' },
        { label: 'Presentation Maker' },
        { label: 'BDE' },
        { label: 'More Opportunities' }
      ] 
    },
    { 
      id: 'faq', 
      label: 'FAQ', 
      href: '#faq' 
    },
  ];

  const toggleParent = (id) => {
    setExpandedParents(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleNavClick = (link) => {
    setMenuOpen(false);
    if (!link.href) return;

    if (link.href.startsWith('/')) {
      if (onNavigate) {
        onNavigate(link.href);
      }
    } else if (link.href.startsWith('#')) {
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
              {navLinks.map((link) => {
                const hasSubItems = link.subItems && link.subItems.length > 0;
                const isExpanded = !!expandedParents[link.id];

                if (hasSubItems) {
                  return (
                    <div key={link.id} className="nav-dropdown-group">
                      <button 
                        type="button"
                        className={`nav-menu-parent-item ${isExpanded ? 'open' : ''}`}
                        onClick={() => toggleParent(link.id)}
                      >
                        <span>{link.label}</span>
                        <ChevronDown 
                          size={18} 
                          className={`chevron-toggle-icon ${isExpanded ? 'rotate-180' : ''}`}
                          color={isExpanded ? "#D7473B" : "#17375E"}
                        />
                      </button>

                      {isExpanded && (
                        <div className="nav-dropdown-submenu">
                          {link.subItems.map((sub, sIdx) => (
                            <div key={sIdx} className="nav-sub-item">
                              <span>{sub.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a 
                    key={link.id} 
                    href={link.href || '#'} 
                    className="nav-menu-item"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link);
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={16} className="nav-item-arrow" />
                  </a>
                );
              })}
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
                <span>Call Us: +91 81004 82638</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

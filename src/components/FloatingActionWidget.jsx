import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Home } from 'lucide-react';
import './FloatingActionWidget.css';

export default function FloatingActionWidget({ currentPath, onNavigate }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const isLandingPage = currentPath === '/';

  useEffect(() => {
    if (!isLandingPage) return;

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLandingPage]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    if (onNavigate) {
      onNavigate('/');
    }
  };

  // On Landing Page: Show upward angular arrow scroll-to-top button at bottom right (above enquiry bar)
  if (isLandingPage) {
    if (!showScrollTop) return null;
    return (
      <button 
        className="floating-action-circle-btn landing-scroll-top"
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUpRight size={22} color="#FFFFFF" />
      </button>
    );
  }

  // On Sub-Pages: Show floating Home circle button at exact same bottom-right position
  return (
    <button 
      className="floating-action-circle-btn subpage-home-btn"
      onClick={handleGoHome}
      aria-label="Go to Home"
      title="Home"
    >
      <Home size={22} color="#FFFFFF" />
    </button>
  );
}

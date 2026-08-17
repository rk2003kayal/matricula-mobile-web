import React, { useState, useEffect } from 'react';
import { ArrowRight, PhoneCall, ArrowUpRight } from 'lucide-react';
import './StickyCta.css';

export default function StickyCta({ onOpenEnquire }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="sticky-bottom-bar">
      <a href="tel:+918100482638" className="sticky-call-btn" aria-label="Call Matricula">
        <PhoneCall size={20} color="#17375E" />
      </a>

      <button className="btn-primary-red sticky-enquire-btn" onClick={onOpenEnquire}>
        <span>Enquire Now for Admissions</span>
        <ArrowRight size={18} />
      </button>

      {/* Upward Angular Arrow Scroll-to-Top Button */}
      {showScrollTop && (
        <button 
          className="sticky-scroll-top-btn" 
          onClick={handleScrollToTop}
          aria-label="Scroll to top section"
          title="Scroll to top"
        >
          <ArrowUpRight size={20} color="#FFFFFF" />
        </button>
      )}
    </div>
  );
}

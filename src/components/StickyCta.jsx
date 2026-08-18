import React, { useState, useEffect } from 'react';
import { ArrowRight, PhoneCall, ChevronUp } from 'lucide-react';
import './StickyCta.css';

export default function StickyCta({ onOpenEnquire }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
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
      {/* Small Gold Floating Scroll-to-Top Button above the right corner */}
      {showScrollTop && (
        <button 
          className="float-scroll-top-gold-btn" 
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ChevronUp size={22} color="#FFFFFF" strokeWidth={3.5} />
        </button>
      )}

      <a href="tel:+918100482638" className="sticky-call-btn" aria-label="Call Matricula">
        <PhoneCall size={20} color="#17375E" />
      </a>

      <button className="btn-primary-red sticky-enquire-btn" onClick={onOpenEnquire}>
        <span>Enquire Now for Admissions</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

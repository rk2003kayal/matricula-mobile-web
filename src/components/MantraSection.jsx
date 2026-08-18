import React from 'react';
import { Trophy, Gift, Target, Award, Rocket, Star, Sparkles, ArrowRight } from 'lucide-react';
import './MantraSection.css';

export default function MantraSection({ onOpenEnquire, onNavigate }) {
  // 4 Features with Icons & Titles
  const mantraFeatures = [
    {
      icon: <Trophy size={26} color="#F59E0B" />,
      title: 'Upto 100% Scholarship',
    },
    {
      icon: <Gift size={26} color="#F59E0B" />,
      title: 'Cash Prize & Gadgets',
    },
    {
      icon: <Target size={26} color="#F59E0B" />,
      title: 'Prepare for Competitive Exams',
    },
    {
      icon: <Award size={26} color="#F59E0B" />,
      title: 'Set your Benchmark',
    },
  ];

  const handleExploreMantra = () => {
    if (onNavigate) {
      onNavigate('/mantra');
    } else if (onOpenEnquire) {
      onOpenEnquire();
    }
  };

  return (
    <section id="mantra" className="section-wrapper bg-navy mantra-section">
      {/* Background Gold Glow Effect */}
      <div className="mantra-gold-glow"></div>

      <div className="section-header-block">
        <div className="pill-label dark-theme">
          <Star size={12} color="#F59E0B" fill="#F59E0B" />
          OUR FLAGSHIP EXAM
        </div>

        {/* Sub-brand Title: MAN in White, TRA in Red */}
        <h2 className="mantra-brand-title">
          <span className="mantra-man">MAN</span>
          <span className="mantra-tra">TRA</span>
          <span className="mantra-year">2026</span>
        </h2>

        <h3 className="mantra-headline">
          Unlocking Potential.<br />
          <span className="text-gold">Rewarding Excellence.</span>
        </h3>

        <p className="section-subtitle text-slate mt-12">
          Matricula National Talent Recognition & Analysis Exam
        </p>
      </div>

      {/* 2x2 Feature Cards Grid */}
      <div className="mantra-features-grid">
        {mantraFeatures.map((item, idx) => (
          <div key={idx} className="mantra-feature-card">
            <div className="mantra-card-icon-box">
              {item.icon}
            </div>
            <h4 className="mantra-feature-title">{item.title}</h4>
          </div>
        ))}

        {/* Highly Aspirational ISRO Expedition Feature Card */}
        <div className="isro-aspirational-card" onClick={handleExploreMantra} style={{ cursor: 'pointer' }}>
          <div className="isro-badge-tag">
            <Sparkles size={13} color="#38BDF8" />
            <span>NATIONAL SPACE EXPEDITION</span>
          </div>

          <div className="isro-card-content">
            <div className="isro-rocket-icon-glow">
              <Rocket size={32} color="#38BDF8" />
            </div>
            <div className="isro-card-text">
              <h4 className="isro-title">Opportunity to Visit ISRO</h4>
              <p className="isro-subtext">Experience rocket science live at India's premier space center.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Registrations Opening Soon Box */}
      <div className="mantra-cta-box">
        <div className="mantra-badge-gold">
          <span>REGISTRATIONS OPENING SOON</span>
        </div>

        <button 
          onClick={handleExploreMantra}
          className="btn-primary-red w-full mt-14 btn-gold-shadow mantra-app-btn"
        >
          <span>Click to visit MANTRA</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

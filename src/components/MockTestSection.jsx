import React from 'react';
import { FileText, ArrowRight, BarChart2, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import './MockTestSection.css';

export default function MockTestSection({ onOpenEnquire }) {
  const mockFeatures = [
    {
      icon: <FileText size={20} color="#D7473B" />,
      title: 'Exam-like Test Papers',
      desc: 'Real exam environment modeled for WBBSE, WBCHSE, JEE & NEET standards.',
    },
    {
      icon: <BarChart2 size={20} color="#17375E" />,
      title: 'Detailed Performance Analytics',
      desc: 'Instant score reports, accuracy tracking, and topic-wise strength analysis.',
    },
    {
      icon: <ShieldCheck size={20} color="#D7473B" />,
      title: 'All-Bengal Rank Benchmark',
      desc: 'Evaluate your preparation level against thousands of top performing peers.',
    },
  ];

  return (
    <section id="mock-test" className="section-wrapper bg-white mock-test-section">
      <div className="mock-test-container">
        {/* Section Header Block */}
        <div className="section-header-block">
          <div className="pill-label">
            <span className="dot-red"></span>
            MATRICULA MOCK TEST
            <span className="dot-red"></span>
          </div>

          <h2 className="section-heading-large">
            Your Rehearsal<br />
            <span className="text-red">Before the Big Win!</span>
          </h2>

          <p className="section-subtitle">
            Practice with exam-like tests, analyse your performance and improve before the real examination.
          </p>
        </div>

        {/* Mock Test Feature Highlight Card */}
        <div className="mock-card-hero card-base">
          <div className="mock-badge-strip">
            <span className="mock-status-pill">
              <Clock size={12} />
              UPCOMING BATCHES OPEN
            </span>
            <span className="mock-classes-pill">Classes 9-12 | JEE & NEET</span>
          </div>

          {/* 3 Core Benefits */}
          <div className="mock-features-grid">
            {mockFeatures.map((feat, idx) => (
              <div key={idx} className="mock-feature-item">
                <div className="mock-icon-wrapper">
                  {feat.icon}
                </div>
                <div className="mock-feature-text">
                  <h3 className="mock-feature-title">{feat.title}</h3>
                  <p className="mock-feature-desc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Deliverables Checkmarks */}
          <div className="mock-check-list">
            <div className="mock-check-item">
              <CheckCircle2 size={16} color="#17375E" />
              <span>Chapter-wise & Full Length Tests</span>
            </div>
            <div className="mock-check-item">
              <CheckCircle2 size={16} color="#17375E" />
              <span>Verified Answer Keys & Video Solutions</span>
            </div>
          </div>

          {/* Action Button: Click to Know More */}
          <div className="mock-cta-wrapper">
            <button 
              className="btn-primary-red w-full mock-cta-btn"
              onClick={onOpenEnquire}
            >
              <span>Click to Know More</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

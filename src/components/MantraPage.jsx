import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, Trophy, Gift, Calendar, CheckCircle2, ChevronRight, Rocket, Star, Sparkles, Flame, ShieldAlert, Award
} from 'lucide-react';
import Footer from './Footer';
import SubpageHomeWidget from './SubpageHomeWidget';
import './MantraPage.css';

export default function MantraPage({ onBack, onGoHome, onOpenEnquire }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [chartVisible, setChartVisible] = useState(false);
  const chartRef = useRef(null);

  // Student Participation Growth Data (2017 to 2024 with compact K/L values for mobile fit)
  const growthData = [
    { year: '2017', students: 12000, displayVal: '12K' },
    { year: '2018', students: 34000, displayVal: '34K' },
    { year: '2019', students: 120000, displayVal: '1.2L' },
    { year: '2020', students: 185000, displayVal: '1.85L' },
    { year: '2021', students: 250000, displayVal: '2.5L' },
    { year: '2022', students: 410000, displayVal: '4.1L' },
    { year: '2023', students: 535000, displayVal: '5.35L' },
    { year: '2024', students: 627456, displayVal: '6.27L' },
  ];

  const maxVal = 627456;

  // Intersection observer for chart scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setChartVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: 'Upto 100% Scholarships',
      desc: 'Top rankers win full tuition waivers for JEE, NEET & WBBSE Foundation courses.',
      icon: <Trophy size={26} color="#F59E0B" />,
    },
    {
      title: 'ISRO Space Expedition',
      desc: 'State Toppers get an all-expense-paid educational visit to ISRO Satellite Centre!',
      icon: <Rocket size={26} color="#38BDF8" />,
      spotlight: true,
    },
    {
      title: 'Cash Rewards & Medals',
      desc: 'Recognizing academic excellence with cash prizes, trophies & certificates.',
      icon: <Gift size={26} color="#D7473B" />,
    },
    {
      title: 'Statewide Benchmark Rank',
      desc: 'Compare your performance among 6,00,000+ students across West Bengal.',
      icon: <Star size={26} color="#F59E0B" />,
    },
  ];

  const eligibilityList = [
    'Students studying from Class 1 to Class 12',
    'Boards: WBBSE, WBCHSE, CBSE & ICSE Boards',
  ];

  const faqs = [
    {
      q: 'What is MANTRA 2026 Exam?',
      a: 'MANTRA is West Bengal\'s largest premier scholarship & talent search exam organized by Matricula Education to identify, reward, and guide meritorious students with up to 100% scholarships, cash prizes, and ISRO Space Expedition tours.',
    },
    {
      q: 'Who can apply for MANTRA 2026?',
      a: 'Students studying in Class 1 to 12 across WBBSE, WBCHSE, CBSE, and ICSE boards are eligible to register.',
    },
    {
      q: 'What is the syllabus for the exam?',
      a: 'The syllabus covers Science, Mathematics, Mental Ability, and Logical Reasoning based on the candidate\'s current class curriculum.',
    },
    {
      q: 'How will top rankers be selected for the ISRO Tour?',
      a: 'State top rankers across categories are evaluated based on total score, speed, and final interview by Matricula Academic Board.',
    },
  ];

  return (
    <div className="mantra-page-view animate-fadeIn">
      {/* Top Header Navigation */}
      <header className="mantra-header sticky-top">
        <div className="mantra-header-container">
          <div className="header-left-actions">
            <button className="back-arrow-icon-btn" onClick={onBack} aria-label="Back">
              <ArrowLeft size={20} color="#FFFFFF" />
            </button>
          </div>
          
          <img 
            src="/matricula-logo.png" 
            alt="Matricula Logo" 
            className="mantra-header-logo" 
            onClick={onGoHome}
            style={{ cursor: 'pointer' }}
          />

          <div className="header-spacer-right"></div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="section-wrapper bg-navy mantra-hero-section">
        <div className="mantra-hero-content text-center reveal-on-scroll">
          <div className="mantra-badge-gold animate-bounce-subtle">
            <Flame size={14} color="#17375E" fill="#17375E" />
            <span>MANTRA 2026 — REGISTRATIONS OPENING SOON</span>
          </div>

          <h1 className="mantra-main-title text-white mt-12">
            Matricula National Talent<br />
            <span className="text-gold">Recognition & Analysis Exam</span>
          </h1>

          <p className="mantra-tagline text-slate mt-12">
            "no talent lies latent" — Unlock Up to 100% Scholarships, Cash Awards, & an exclusive Educational Visit to ISRO Satellite Centre!
          </p>

          {/* Quick Stat Pill Grid */}
          <div className="mantra-hero-stats-grid mt-20">
            <div className="mantra-stat-pill">
              <span className="pill-val">6.27L+</span>
              <span className="pill-lbl">Aspirants</span>
            </div>
            <div className="mantra-stat-pill">
              <span className="pill-val">100%</span>
              <span className="pill-lbl">Scholarships</span>
            </div>
            <div className="mantra-stat-pill">
              <span className="pill-val">ISRO</span>
              <span className="pill-lbl">Space Tour</span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mantra-hero-cta-block mt-24">
            <a 
              href="https://play.google.com/store/apps/details?id=co.barney.qiilc&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-gold-mantra hero-register-btn"
            >
              <span>Download our App</span>
              <ChevronRight size={18} />
            </a>
            <p className="cta-subtext-note mt-8 text-slate">Get prioritized notification on our App</p>
          </div>
        </div>
      </section>

      {/* Features Grid Section (Grouped 4 Cards Seamlessly) */}
      <section className="section-wrapper bg-white mantra-features-section">
        <div className="section-header-block text-center reveal-on-scroll">
          <div className="pill-label">
            <Trophy size={12} color="#D7473B" />
            EXAM HIGHLIGHTS
          </div>

          <h2 className="section-heading-large">
            Why Every Student Must<br />
            <span className="text-red">Appear for MANTRA 2026</span>
          </h2>
        </div>

        {/* 2-Column Responsive Grid without vertical gaps */}
        <div className="mantra-grid-container mt-20 reveal-on-scroll">
          {features.map((feat, idx) => (
            <div 
              key={idx} 
              className={`mantra-feature-card card-base ${feat.spotlight ? 'spotlight-cyan-card' : ''}`}
            >
              <div className="feat-icon-badge">
                {feat.icon}
              </div>
              <h3 className="feat-title">{feat.title}</h3>
              <p className="feat-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="section-wrapper bg-light mantra-eligibility-section">
        <div className="section-header-block reveal-on-scroll">
          <div className="pill-label">
            <CheckCircle2 size={12} color="#D7473B" />
            WHO CAN APPLY?
          </div>

          <h2 className="section-heading-large">
            Eligibility Criteria
          </h2>
        </div>

        <div className="eligibility-card card-base reveal-on-scroll">
          <ul className="eligibility-list">
            {eligibilityList.map((item, idx) => (
              <li key={idx}>
                <CheckCircle2 size={18} color="#D7473B" className="check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Numerical Insights — Scroll-Triggered Bar Chart */}
      <section className="section-wrapper bg-navy mantra-chart-section" ref={chartRef}>
        <div className="section-header-block text-center reveal-on-scroll">
          <div className="pill-label dark-theme">
            <Sparkles size={12} color="#F59E0B" fill="#F59E0B" />
            NUMERICAL INSIGHTS
          </div>

          <h2 className="section-heading-large text-white">
            MANTRA Participation Growth<br />
            <span className="text-gold">2017 to 2024</span>
          </h2>

          <p className="section-subtitle text-slate mt-8">
            Empowering students across West Bengal with consistent 50x growth over 7 years.
          </p>
        </div>

        {/* Animated Bar Chart Container */}
        <div className="chart-stage-container card-base mt-24 reveal-on-scroll">
          <div className="chart-bars-flex">
            {growthData.map((item, idx) => {
              const heightPercent = (item.students / maxVal) * 100;
              const isHighlight = item.year === '2024';

              return (
                <div key={idx} className="chart-bar-column">
                  <div className="bar-val-label">{item.displayVal}</div>
                  
                  <div className="bar-track">
                    <div 
                      className={`bar-fill ${isHighlight ? 'fill-gold-active' : ''}`}
                      style={{ 
                        height: chartVisible ? `${heightPercent}%` : '0%' 
                      }}
                    >
                    </div>
                  </div>

                  <div className="bar-year-tag">{item.year}</div>
                </div>
              );
            })}
          </div>

          <div className="chart-footer-note mt-16 text-center">
            <p className="text-slate">
              ⚡ Over <strong>6,27,456 students</strong> appeared in MANTRA 2024 making it West Bengal's largest talent search examination.
            </p>
          </div>
        </div>
      </section>

      {/* MANTRA FAQ Section */}
      <section className="section-wrapper bg-light mantra-faq-section">
        <div className="section-header-block text-center reveal-on-scroll">
          <h2 className="section-heading-large">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mantra-faq-list mt-20 reveal-on-scroll">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`mantra-faq-card card-base ${activeFaq === idx ? 'open' : ''}`}
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
            >
              <div className="faq-q-row">
                <h3>{faq.q}</h3>
                <ChevronRight size={18} className="faq-arrow" />
              </div>
              {activeFaq === idx && (
                <p className="faq-a-text mt-8">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA App Download Link */}
      <section className="section-wrapper bg-navy text-center mantra-bottom-cta">
        <h2 className="text-white text-2xl font-bold">Ready to Excel in MANTRA 2026?</h2>
        <p className="text-slate mt-8">Download the App to get more updates on MANTRA</p>
        
        <div className="mt-20">
          <a 
            href="https://play.google.com/store/apps/details?id=co.barney.qiilc&pcampaignid=web_share" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-gold-mantra inline-flex"
          >
            <span>Download our App</span>
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

      {/* Global CTA Footer */}
      <Footer />

      {/* Floating Bottom Right Home Widget */}
      <SubpageHomeWidget onGoHome={onGoHome} />
    </div>
  );
}

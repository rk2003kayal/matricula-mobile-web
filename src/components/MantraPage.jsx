import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Trophy, Gift, Target, Award, Rocket, Sparkles, CheckCircle2, ArrowRight, BookOpen, Calendar, ExternalLink, TrendingUp, Users } from 'lucide-react';
import Footer from './Footer';
import './MantraPage.css';

export default function MantraPage({ onBack, onOpenEnquire }) {
  const appLink = "https://play.google.com/store/apps/details?id=co.barney.qiilc&pcampaignid=web_share";
  const [animateChart, setAnimateChart] = useState(false);
  const chartRef = useRef(null);

  const rewards = [
    {
      icon: <Trophy size={32} color="#F59E0B" />,
      title: 'Upto 100% Scholarship',
      desc: 'Get full tuition waivers on WBBSE, WBCHSE, JEE & NEET coaching programs.',
    },
    {
      icon: <Gift size={32} color="#F59E0B" />,
      title: 'Cash Prizes & Laptops/Tablets',
      desc: 'Top rankers win cash awards, tablets, and academic gadgets.',
    },
    {
      icon: <Rocket size={32} color="#38BDF8" />,
      title: 'Opportunity to Visit ISRO',
      desc: 'All-expenses-paid educational expedition to India’s premier ISRO Space Center.',
    },
    {
      icon: <Target size={32} color="#F59E0B" />,
      title: 'Competitive Exam Foundation',
      desc: 'Early benchmarking for Olympiads, NTSE, Board exams, JEE & NEET.',
    },
  ];

  const eligibilityClasses = [
    { level: 'Classes 4 – 5', focus: 'Primary Logic & Mathematics' },
    { level: 'Classes 6 – 8', focus: 'Foundation Science & Reasoning' },
    { level: 'Classes 9 – 10', focus: 'WBBSE / CBSE Science & Math' },
    { level: 'Class 11 – 12', focus: 'WBCHSE / JEE / NEET Specialization' },
  ];

  // Numerical Insights Data (2017 to 2024)
  const chartData = [
    { year: '2017', val: 12000, label: '12,000', shortVal: '12K', heightPct: 18 },
    { year: '2018', val: 34000, label: '34,000', shortVal: '34K', heightPct: 26 },
    { year: '2019', val: 40987, label: '40,987', shortVal: '41K', heightPct: 32 },
    { year: '2020', val: 45321, label: '45,321', shortVal: '45K', heightPct: 38 },
    { year: '2021', val: 57632, label: '57,632', shortVal: '58K', heightPct: 48 },
    { year: '2022', val: 112561, label: '1,12,561', shortVal: '1.12L', heightPct: 62 },
    { year: '2023', val: 278960, label: '2,78,960', shortVal: '2.78L', heightPct: 80 },
    { year: '2024', val: 627456, label: '6,27,456', shortVal: '6.27L', heightPct: 100 },
  ];

  // Trigger bar growth animation when scrolled into chart section
  useEffect(() => {
    const handleScroll = () => {
      if (!chartRef.current) return;
      const rect = chartRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.8) {
        setAnimateChart(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mantra-page-view animate-fadeIn">
      {/* Top Header Matching Website UI */}
      <header className="mantra-header sticky-top">
        <div className="mantra-header-container">
          <button className="back-arrow-icon-btn" onClick={onBack} aria-label="Back to Home">
            <ArrowLeft size={22} color="#17375E" />
          </button>
          
          <img 
            src="/matricula-logo.png" 
            alt="Matricula Logo" 
            className="mantra-header-logo" 
            onClick={onBack}
            style={{ cursor: 'pointer' }}
          />

          <button 
            className="btn-primary-red header-cta-btn"
            onClick={onOpenEnquire}
          >
            <span>Register Now</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="section-wrapper bg-navy mantra-page-hero">
        <div className="mantra-hero-gold-glow"></div>
        <div className="section-header-block">
          <div className="pill-label dark-theme">
            <Sparkles size={12} color="#F59E0B" fill="#F59E0B" />
            MATRICULA ACADEMIC TALENT SEARCH EXAM 2026
          </div>

          <h1 className="mantra-brand-title">
            <span className="mantra-man">MAN</span>
            <span className="mantra-tra">TRA</span>
            <span className="mantra-year">2026</span>
          </h1>

          <h2 className="mantra-page-tagline">
            Unlocking Potential.<br />
            <span className="text-gold">Rewarding Excellence.</span>
          </h2>

          <p className="section-subtitle text-slate mt-14">
            The premier talent recognition exam for students from <strong className="text-white">Classes 4 to 12</strong> across West Bengal.
          </p>

          <div className="mantra-hero-cta">
            <button 
              className="btn-primary-red btn-gold-shadow"
              onClick={onOpenEnquire}
            >
              <span>Register for MANTRA 2026</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Appear for MANTRA 2026 Rewards Section */}
      <section className="section-wrapper bg-light mantra-rewards-section">
        <div className="section-header-block">
          <div className="pill-label">
            <span className="dot-red"></span>
            BENEFITS & REWARDS
          </div>
          <h2 className="section-heading-large">
            Why Take the<br />
            <span className="text-red">MANTRA Challenge?</span>
          </h2>
        </div>

        <div className="mantra-rewards-grid">
          {rewards.map((r, idx) => (
            <div key={idx} className="mantra-reward-card card-base">
              <div className="reward-icon-box">
                {r.icon}
              </div>
              <h3 className="reward-title">{r.title}</h3>
              <p className="reward-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ISRO National Expedition Featured Banner */}
      <section className="section-wrapper bg-white isro-spotlight-section">
        <div className="isro-spotlight-card">
          <div className="isro-spotlight-badge">
            <Rocket size={16} color="#38BDF8" />
            <span>NATIONAL SPACE EXPEDITION</span>
          </div>

          <h2 className="isro-spotlight-title">
            Opportunity to Visit ISRO Space Center
          </h2>

          <p className="isro-spotlight-desc">
            Top rankers of MANTRA 2026 will be selected for an exclusive educational trip to witness India’s space technologies live at ISRO.
          </p>

          <div className="isro-highlights-list">
            <div className="isro-hl-item">
              <CheckCircle2 size={16} color="#38BDF8" />
              <span>Full Travel & Stay Sponsored by Matricula</span>
            </div>
            <div className="isro-hl-item">
              <CheckCircle2 size={16} color="#38BDF8" />
              <span>Guided Tour by Space Scientists & Engineers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Class-Wise Eligibility & Syllabus Focus */}
      <section className="section-wrapper bg-light mantra-eligibility-section">
        <div className="section-header-block">
          <div className="pill-label">
            <span className="dot-red"></span>
            ELIGIBILITY
          </div>
          <h2 className="section-heading-large">
            Classes 4 to 12<br />
            <span className="text-navy">Streamlined Papers.</span>
          </h2>
        </div>

        <div className="eligibility-grid">
          {eligibilityClasses.map((item, idx) => (
            <div key={idx} className="eligibility-card card-base">
              <div className="eligibility-level-pill">
                <BookOpen size={14} color="#D7473B" />
                <span>{item.level}</span>
              </div>
              <p className="eligibility-focus">{item.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Numerical Insights (Animated Bar Chart 2017 to 2024 - White Cap Line Removed) */}
      <section className="section-wrapper bg-navy mantra-insights-section" ref={chartRef}>
        <div className="section-header-block text-center">
          <div className="pill-label dark-theme">
            <TrendingUp size={12} color="#F59E0B" />
            NUMERICAL INSIGHTS
          </div>

          <h2 className="section-heading-large text-white">
            Student Participation<br />
            <span className="text-gold">Growth Over Years</span>
          </h2>

          <p className="section-subtitle text-slate mt-12">
            Over 6.27 Lakh students have appeared for MANTRA from 2017 to 2024.
          </p>
        </div>

        {/* Animated Bar Chart Container */}
        <div className="chart-card-container">
          <div className="chart-bars-stage">
            {chartData.map((item, idx) => (
              <div key={idx} className="chart-bar-column">
                {/* Number Badge above bar */}
                <div className="chart-val-tag">
                  <span>{item.shortVal}</span>
                </div>

                {/* Animated Growing Bar Pill */}
                <div className="chart-bar-track">
                  <div 
                    className={`chart-bar-fill ${animateChart ? 'bar-animated' : ''}`}
                    style={{ 
                      height: animateChart ? `${item.heightPct}%` : '0%',
                      transitionDelay: `${idx * 0.12}s`,
                    }}
                  />
                </div>

                {/* Year Label below bar */}
                <span className="chart-year-label">{item.year}</span>
              </div>
            ))}
          </div>

          {/* Growth Highlight Callout Footer */}
          <div className="chart-insight-footer">
            <div className="insight-stat-badge">
              <Users size={18} color="#F59E0B" />
              <span><strong>6,27,456+</strong> Students in 2024 (50x Growth Since 2017)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Registration CTA Card with App Link */}
      <section className="section-wrapper bg-navy mantra-bottom-cta-section">
        <div className="mantra-bottom-card">
          <div className="mantra-badge-gold">
            <Calendar size={14} />
            <span>REGISTRATIONS OPENING SOON</span>
          </div>

          <h3>Ready to Test Your Skill & Win Scholarships?</h3>
          <p className="mantra-cta-desc">Download the App to get more updates on MANTRA</p>

          <a 
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-red w-full btn-gold-shadow mt-14 mantra-app-btn"
          >
            <span>Download our App</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </section>

      {/* Dedicated Page Footer */}
      <Footer />
    </div>
  );
}

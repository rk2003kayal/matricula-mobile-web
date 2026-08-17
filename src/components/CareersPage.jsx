import React from 'react';
import { ArrowLeft, Home, Briefcase, Mail, Phone, Sparkles } from 'lucide-react';
import Footer from './Footer';
import './CareersPage.css';

export default function CareersPage({ onBack, onGoHome }) {
  const positions = [
    {
      title: 'Presentation Maker',
      type: 'Full-Time / Hybrid',
      dept: 'Content & Visual Design',
      desc: 'Craft engaging academic decks, visual learning frameworks, and high-impact presentations for JEE/NEET & WBBSE courses.',
    },
    {
      title: 'Business Development Associate',
      type: 'Full-Time / On-Site',
      dept: 'Growth & Student Relations',
      desc: 'Drive student outreach, counsel parents, and expand Matricula’s footprint across Siliguri & Kolkata learning centers.',
    },
    {
      title: 'Performance Marketer',
      type: 'Full-Time / Hybrid',
      dept: 'Digital Marketing & Acquisition',
      desc: 'Manage high-ROI Meta & Google Ad campaigns, analyze conversion funnels, and scale student enrollments for MANTRA 2026.',
    },
  ];

  return (
    <div className="careers-page-view animate-fadeIn">
      {/* Top Header with Centered Logo, Back Arrow & Circular Home Button */}
      <header className="careers-header sticky-top">
        <div className="careers-header-container">
          <div className="header-left-actions">
            <button className="back-arrow-icon-btn" onClick={onBack} aria-label="Back">
              <ArrowLeft size={20} color="#17375E" />
            </button>
            <button className="home-circle-btn" onClick={onGoHome} aria-label="Go to Home" title="Home">
              <Home size={18} color="#17375E" />
            </button>
          </div>
          
          <img 
            src="/matricula-logo.png" 
            alt="Matricula Logo" 
            className="careers-header-logo" 
            onClick={onGoHome}
            style={{ cursor: 'pointer' }}
          />

          <div className="header-spacer-right"></div>
        </div>
      </header>

      {/* Compact Hero Banner */}
      <section className="section-wrapper bg-navy careers-hero-section">
        <div className="section-header-block text-center">
          <h1 className="careers-page-title text-white">
            Work With Us
          </h1>

          <p className="section-subtitle text-slate mt-8">
            Build the Future of Education with Matricula. Join our mission to empower students across West Bengal.
          </p>
        </div>
      </section>

      {/* Open Positions Grid Section */}
      <main className="section-wrapper bg-light careers-content-section">
        <div className="careers-container">
          
          <div className="careers-section-header">
            <div className="pill-label">
              <Briefcase size={12} color="#D7473B" />
              WE ARE HIRING
            </div>
            <h2 className="section-heading-large">
              Current Open Positions
            </h2>
          </div>

          {/* Position Cards */}
          <div className="positions-grid mt-20">
            {positions.map((pos, idx) => (
              <div key={idx} className="position-card card-base">
                <div className="position-card-header">
                  <div className="position-badge">{pos.dept}</div>
                  <span className="position-type">{pos.type}</span>
                </div>

                <h3 className="position-title">{pos.title}</h3>
                <p className="position-desc">{pos.desc}</p>
              </div>
            ))}
          </div>

          {/* Application Submission Instructions Box */}
          <div className="careers-apply-box card-base mt-28">
            <div className="apply-box-header">
              <Sparkles size={22} color="#F59E0B" />
              <p className="apply-subtitle">Send your resume & portfolio directly to our HR team:</p>
            </div>

            <div className="apply-contact-list mt-16">
              <a href="mailto:hr@matricula.co.in" className="apply-item-card">
                <div className="apply-icon-box red-icon-box">
                  <Mail size={18} color="#D7473B" />
                </div>
                <strong className="apply-item-val">hr@matricula.co.in</strong>
              </a>

              <a href="tel:+917439709486" className="apply-item-card">
                <div className="apply-icon-box blue-icon-box">
                  <Phone size={18} color="#17375E" />
                </div>
                <strong className="apply-item-val">+91 74397 09486</strong>
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Global CTA Footer */}
      <Footer />
    </div>
  );
}

import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import Footer from './Footer';
import SubpageHomeWidget from './SubpageHomeWidget';
import './TermsPage.css';

export default function TermsPage({ onBack, onGoHome }) {
  return (
    <div className="terms-page-view animate-fadeIn">
      {/* Top Header with Centered Logo & Back Arrow */}
      <header className="terms-header sticky-top">
        <div className="terms-header-container">
          <div className="header-left-actions">
            <button className="back-arrow-icon-btn" onClick={onBack} aria-label="Back">
              <ArrowLeft size={20} color="#FFFFFF" />
            </button>
          </div>
          
          <img 
            src="/matricula-logo.png" 
            alt="Matricula Logo" 
            className="terms-header-logo" 
            onClick={onGoHome}
            style={{ cursor: 'pointer' }}
          />

          <div className="header-spacer-right"></div>
        </div>
      </header>

      {/* Compact Hero Banner */}
      <section className="section-wrapper bg-navy terms-hero-section">
        <div className="section-header-block text-center reveal-on-scroll">
          <h1 className="terms-page-title text-white">
            Terms & Conditions
          </h1>

          <p className="section-subtitle text-slate mt-8">
            Please read these terms carefully before accessing or using Matricula Education platform.
          </p>
        </div>
      </section>

      {/* Main Document Content Wrapper */}
      <main className="section-wrapper bg-light terms-content-section">
        <div className="terms-card-container card-base reveal-on-scroll">

          <div className="terms-intro-box">
            <p>
              Welcome to <strong>Matricula Education</strong>, a brand under <strong>Roasted Sage Private Limited</strong>. By accessing our website, subscribing to our courses, appearing for MANTRA scholarship examinations, or using any of our services, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </div>

          <div className="terms-body-text mt-20">

            {/* 1. Acceptance of Terms */}
            <section className="terms-block">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By enrolling in any course or registering for any examination (including MANTRA 2026), you acknowledge that you have read, understood, and agreed to these Terms and Conditions in full. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </section>

            {/* 2. Educational & Course Content */}
            <section className="terms-block">
              <h2>2. Educational Services & Content Usage</h2>
              <p>
                All study materials, video lectures, test series questions, and digital content provided by Matricula are protected under copyright and intellectual property laws. Content is solely for personal, non-commercial educational use by enrolled students. Unauthorized distribution, copying, or sharing of course materials is strictly prohibited.
              </p>
            </section>

            {/* 3. Student Registration & Accuracy */}
            <section className="terms-block">
              <h2>3. Student Accounts & Accuracy of Information</h2>
              <p>
                Students and guardians must provide accurate, complete information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted under your account.
              </p>
            </section>

            {/* 4. MANTRA Scholarship Examination Terms */}
            <section className="terms-block highlight-terms-block">
              <h2>4. MANTRA Scholarship Exam Rules</h2>
              <p>
                Scholarships, cash prizes, and ISRO Space Expedition tours awarded through MANTRA are non-transferable and subject to verification of candidate credentials, age proof, and academic records. Matricula Academic Board reserves the right to disqualify any candidate found engaging in unfair practices.
              </p>
            </section>

            {/* 5. Limitation of Liability */}
            <section className="terms-block">
              <h2>5. Limitation of Liability</h2>
              <p>
                Matricula Education strives to maintain uninterrupted, error-free platform operation, but does not guarantee continuous uptime during scheduled maintenance or third-party network outages.
              </p>
            </section>

            {/* 6. Modifications to Terms */}
            <section className="terms-block">
              <h2>6. Revisions to Terms</h2>
              <p>
                We reserve the right to modify these Terms & Conditions at any time. Updated terms will be posted on this page with the updated revision date.
              </p>
            </section>

            {/* 7. Contact Support */}
            <section className="terms-block contact-support-block">
              <h2>7. Contact Information</h2>
              <p>
                For any questions regarding our Terms & Conditions, please write to us at:
              </p>
              <div className="contact-methods-grid">
                <a href="mailto:hey@matricula.co.in" className="contact-item-card">
                  <Mail size={18} color="#D7473B" />
                  <span>hey@matricula.co.in</span>
                </a>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Global CTA Footer */}
      <Footer />

      {/* Floating Bottom Right Home Widget */}
      <SubpageHomeWidget onGoHome={onGoHome} />
    </div>
  );
}

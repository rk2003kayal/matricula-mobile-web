import React from 'react';
import { ArrowLeft, Mail, AlertCircle } from 'lucide-react';
import Footer from './Footer';
import SubpageHomeWidget from './SubpageHomeWidget';
import './RefundPage.css';

export default function RefundPage({ onBack, onGoHome }) {
  return (
    <div className="refund-page-view animate-fadeIn">
      {/* Top Header with Centered Logo & Back Arrow */}
      <header className="refund-header sticky-top">
        <div className="refund-header-container">
          <div className="header-left-actions">
            <button className="back-arrow-icon-btn" onClick={onBack} aria-label="Back">
              <ArrowLeft size={20} color="#FFFFFF" />
            </button>
          </div>
          
          <img 
            src="/matricula-logo.png" 
            alt="Matricula Logo" 
            className="refund-header-logo" 
            onClick={onGoHome}
            style={{ cursor: 'pointer' }}
          />

          <div className="header-spacer-right"></div>
        </div>
      </header>

      {/* Compact Hero Banner */}
      <section className="section-wrapper bg-navy refund-hero-section">
        <div className="section-header-block text-center reveal-on-scroll">
          <h1 className="refund-page-title text-white">
            Refund & Cancellation Policy
          </h1>

          <p className="section-subtitle text-slate mt-8">
            Detailed information regarding our fee structure, cancellations, and refund eligibility.
          </p>
        </div>
      </section>

      {/* Main Document Content Wrapper */}
      <main className="section-wrapper bg-light refund-content-section">
        <div className="refund-card-container card-base reveal-on-scroll">

          <div className="refund-intro-box">
            <p>
              At <strong>Matricula Education</strong> (Roasted Sage Private Limited), we aim to maintain complete transparency in our course admissions, test series registrations, and fee policies. Please read our refund guidelines below carefully.
            </p>
          </div>

          <div className="refund-body-text mt-20">

            {/* 1. General Fee Policy */}
            <section className="refund-block">
              <h2>1. General Fee Policy</h2>
              <p>
                Fees paid for classroom batches, online courses, test series, or MANTRA exam registrations are non-refundable once the course content has been accessed or after 7 days from the date of enrollment.
              </p>
            </section>

            {/* 2. Refund Eligibility Window */}
            <section className="refund-block highlight-refund-block">
              <h2>2. Refund Request Window</h2>
              <p>
                A refund request will only be entertained if submitted within <strong>7 days of registration</strong> and prior to attending more than 2 live classes or downloading printed study modules.
              </p>
            </section>

            {/* 3. Non-Refundable Items */}
            <section className="refund-block">
              <h2>3. Non-Refundable Components</h2>
              <ul className="refund-list">
                <li>Registration fees for MANTRA Scholarship Exam.</li>
                <li>Printed study books and dispatched physical modules.</li>
                <li>Processing fees & bank gateway charges (typically 2-3%).</li>
              </ul>
            </section>

            {/* 4. Process for Requesting Refund */}
            <section className="refund-block">
              <h2>4. How to Apply for a Refund</h2>
              <p>
                To request a refund, please send an official email with your payment receipt, student registration ID, and reason for cancellation to:
              </p>
              <div className="contact-methods-grid mt-12">
                <a href="mailto:hey@matricula.co.in" className="contact-item-card">
                  <Mail size={18} color="#D7473B" />
                  <span>hey@matricula.co.in</span>
                </a>
              </div>
            </section>

            {/* 5. Refund Processing Timeline */}
            <section className="refund-block">
              <h2>5. Refund Timeline</h2>
              <p>
                Once approved, refunds are processed within <strong>7 to 10 working days</strong> back to the original source bank account or payment method used during registration.
              </p>
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

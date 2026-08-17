import React from 'react';
import { ArrowLeft, Mail, Phone, Clock } from 'lucide-react';
import Footer from './Footer';
import './RefundPage.css';

export default function RefundPage({ onBack }) {
  return (
    <div className="refund-page-view animate-fadeIn">
      {/* Top Header with Centered Logo & No Enquire Button */}
      <header className="refund-header sticky-top">
        <div className="refund-header-container">
          <button className="back-arrow-icon-btn" onClick={onBack} aria-label="Back to Home">
            <ArrowLeft size={22} color="#17375E" />
          </button>
          
          <img 
            src="/matricula-logo.png" 
            alt="Matricula Logo" 
            className="refund-header-logo" 
            onClick={onBack}
            style={{ cursor: 'pointer' }}
          />

          <div className="header-spacer-right"></div>
        </div>
      </header>

      {/* Compact Hero Banner */}
      <section className="section-wrapper bg-navy refund-hero-section">
        <div className="section-header-block text-center">
          <h1 className="refund-page-title text-white">
            Refund Policy
          </h1>

          <p className="section-subtitle text-slate mt-8">
            Please review our refund and cancellation guidelines carefully.
          </p>
        </div>
      </section>

      {/* Main Document Content Wrapper */}
      <main className="section-wrapper bg-light refund-content-section">
        <div className="refund-card-container card-base">

          <div className="refund-intro-box">
            <p>
              At <strong>Matricula Education</strong>, we understand that situations can change, and we aim to provide a fair and transparent refund policy to our valued users. Please review our return policy carefully.
            </p>
          </div>

          <div className="refund-body-text mt-20">

            {/* 1. Refund Eligibility */}
            <section className="refund-block highlight-policy-block">
              <h2>1. Refund Eligibility</h2>
              <p>To be eligible for a refund, you must meet the following criteria:</p>
              <div className="eligibility-callout">
                <Clock size={18} color="#D7473B" />
                <span>
                  Your refund request must be submitted via email to <a href="mailto:hey@matricula.co.in" className="policy-link">hey@matricula.co.in</a> or by calling us at <a href="tel:+917439709486" className="policy-link">+91 7439709486</a> or <a href="tel:+918100482638" className="policy-link">+91 81004 82638</a> within <strong>3 days</strong> of placing the order.
                </span>
              </div>
            </section>

            {/* 2. Valid Reason for Return */}
            <section className="refund-block">
              <h2>2. Valid Reason for Return</h2>
              <p>We will consider refund requests for the following reasons:</p>
              <ul className="refund-list">
                <li>
                  <strong>Changing Circumstances:</strong> If your circumstances change, preventing you from accessing our educational services.
                </li>
                <li>
                  <strong>Technical Problems:</strong> In case of technical problems or issues with our services that cannot be resolved.
                </li>
              </ul>
            </section>

            {/* 3. Refund Process */}
            <section className="refund-block">
              <h2>3. Refund Process</h2>
              <p>Upon receipt of a valid refund request, we will process your refund as follows:</p>
              <ul className="refund-list">
                <li>We will review your request and, if eligible, initiate the refund process.</li>
                <li>Refunds will be made to the bank account provided by you during the purchase process.</li>
                <li>Please allow <strong>10 to 15 business days</strong> for the refund to be processed and credited to your bank account.</li>
              </ul>
            </section>

            {/* 4. Non-Returnable Items */}
            <section className="refund-block">
              <h2>4. Non-Returnable Items</h2>
              <p>Please note that some items may not be eligible for a refund:</p>
              <ul className="refund-list warning-list">
                <li>Any promotional or discounted offer that clearly states “Non-Refundable”.</li>
                <li>Services that are substantially used or accessed.</li>
              </ul>
            </section>

            {/* 5. Contact */}
            <section className="refund-block contact-support-block">
              <h2>5. Contact Support</h2>
              <p>
                If you have any queries or need assistance regarding the return process, please contact us at:
              </p>
              <div className="contact-methods-grid">
                <a href="mailto:hey@matricula.co.in" className="contact-item-card">
                  <Mail size={18} color="#D7473B" />
                  <span>hey@matricula.co.in</span>
                </a>
                <a href="tel:+917439709486" className="contact-item-card">
                  <Phone size={18} color="#17375E" />
                  <span>+91 7439709486</span>
                </a>
                <a href="tel:+918100482638" className="contact-item-card">
                  <Phone size={18} color="#17375E" />
                  <span>+91 81004 82638</span>
                </a>
              </div>
            </section>

            {/* Closing Note */}
            <div className="refund-closing-note">
              <p>
                At Matricula Education, we value your trust and strive to provide the best educational experience possible. We appreciate your understanding and cooperation with our return policy.
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* Global CTA Footer */}
      <Footer />
    </div>
  );
}

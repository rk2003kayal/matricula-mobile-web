import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import Footer from './Footer';
import './PrivacyPage.css';

export default function PrivacyPage({ onBack }) {
  return (
    <div className="privacy-page-view animate-fadeIn">
      {/* Top Header with Centered Logo & No Enquire Button */}
      <header className="privacy-header sticky-top">
        <div className="privacy-header-container">
          <button className="back-arrow-icon-btn" onClick={onBack} aria-label="Back to Home">
            <ArrowLeft size={22} color="#17375E" />
          </button>
          
          <img 
            src="/matricula-logo.png" 
            alt="Matricula Logo" 
            className="privacy-header-logo" 
            onClick={onBack}
            style={{ cursor: 'pointer' }}
          />

          <div className="header-spacer-right"></div>
        </div>
      </header>

      {/* Compact Hero Banner */}
      <section className="section-wrapper bg-navy privacy-hero-section">
        <div className="section-header-block text-center">
          <h1 className="privacy-page-title text-white">
            Privacy Policy
          </h1>

          <p className="section-subtitle text-slate mt-8">
            Please review how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Main Document Content Wrapper */}
      <main className="section-wrapper bg-light privacy-content-section">
        <div className="privacy-card-container card-base">

          <div className="privacy-intro-box">
            <p>
              Welcome to <strong>Matricula Education</strong>, a brand under <strong>Roasted Sage Private Limited</strong>. We are committed to protecting your privacy and ensuring the security of your personal information. This privacy policy explains how we collect, use and protect your data when you visit our website or use our educational services. By accessing our website or using our services, you consent to the practices described in this privacy policy.
            </p>
          </div>

          <div className="privacy-body-text mt-20">

            {/* 1. Introduction */}
            <section className="privacy-block">
              <h2>1. Introduction</h2>
              <p>
                Matricula Education (“Company”, “We”, “Us”) operates the learning platform and services. We respect your data privacy and are dedicated to maintaining transparent practices regarding your personal data.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section className="privacy-block">
              <h2>2. Information We Collect</h2>
              <p>We may collect a variety of information from our users, including:</p>
              <ul className="privacy-list">
                <li>
                  <strong>Personal Information:</strong> This includes your name, contact information (email, phone number), and any other information you voluntarily provide when you sign up for our services or interact with our website.
                </li>
                <li>
                  <strong>Student Information:</strong> If you are a student, we may collect information about your educational background and preferences to tailor our services to your needs.
                </li>
                <li>
                  <strong>Usage Information:</strong> We collect data about how you use our website and services, such as pages visited, duration of viewing and the device and browser you use.
                </li>
              </ul>
            </section>

            {/* 3. How We Use Your Information */}
            <section className="privacy-block">
              <h2>3. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul className="privacy-list">
                <li>
                  <strong>Providing Educational Services:</strong> We use your information to provide educational content, personalized recommendations and updates about our courses.
                </li>
                <li>
                  <strong>Contact & Updates:</strong> We may contact you with information about our services, newsletters and promotional offers. You can opt out of these communications at any time.
                </li>
                <li>
                  <strong>Improving Our Services:</strong> Your data helps our website and services better serve your educational needs.
                </li>
              </ul>
            </section>

            {/* 4. Information Security */}
            <section className="privacy-block highlight-privacy-block">
              <h2>4. Information Security</h2>
              <p>
                We take the security of your data seriously. We employ industry-standard security measures to protect your information from unauthorized access, disclosure, alteration or destruction.
              </p>
            </section>

            {/* 5. Sharing Your Information */}
            <section className="privacy-block">
              <h2>5. Sharing Your Information</h2>
              <p>
                We do not sell, trade or rent your personal information to third parties. However, we may share your information in the following circumstances:
              </p>
              <ul className="privacy-list">
                <li>With trusted service providers who help us deliver educational services.</li>
                <li>If required by law or to protect our rights, privacy, safety, or property.</li>
              </ul>
            </section>

            {/* 6. Cookies and Tracking Technologies */}
            <section className="privacy-block">
              <h2>6. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website and collect information about your interactions. You can manage your cookie preferences through your browser settings.
              </p>
            </section>

            {/* 7. Children’s Privacy */}
            <section className="privacy-block">
              <h2>7. Children’s Privacy</h2>
              <p>
                Our Website and Services are intended for persons 13 years of age or older. We do not knowingly collect personal information from children under the age of 13. If you believe we have inadvertently collected information from a child, please contact us to have the data removed.
              </p>
            </section>

            {/* 8. Changes to this Privacy Policy */}
            <section className="privacy-block">
              <h2>8. Changes to this Privacy Policy</h2>
              <p>
                We may periodically update this Privacy Policy. Any changes will be posted on our website with the revised effective date. By continuing to use our website and services, you agree to the updated Privacy Policy.
              </p>
            </section>

            {/* 9. Contact */}
            <section className="privacy-block contact-support-block">
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="contact-methods-grid">
                <a href="mailto:hey@matricula.co.in" className="contact-item-card">
                  <Mail size={18} color="#D7473B" />
                  <span>hey@matricula.co.in</span>
                </a>
              </div>
            </section>

            {/* Closing Note */}
            <div className="privacy-closing-note">
              <p>
                Thank you for choosing Matricula Education. We are dedicated to providing you with the best educational experience while respecting your privacy.
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

import React from 'react';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section bg-navy">
      <div className="footer-container">
        {/* Brand Header */}
        <div className="footer-brand-block">
          <img 
            src="/matricula-logo.png" 
            alt="Matricula Education" 
            className="footer-logo-img"
          />
          <p className="footer-tagline font-serif-tagline">
            "no talent lies latent"
          </p>
          <p className="footer-about-text">
            Guiding WBBSE & WBCHSE students from Classes 9 to 12 and JEE / NEET aspirants to discover, develop, and demonstrate their full potential.
          </p>
        </div>

        <div className="footer-divider"></div>

        {/* Branch Info */}
        <div className="footer-info-block">
          <h4 className="footer-col-title">Siliguri Offline Branch</h4>
          
          <div className="footer-info-item">
            <MapPin size={18} color="#D7473B" className="info-icon" />
            <span>Matricula Campus, Ashram Para, Main Road, Siliguri, West Bengal</span>
          </div>

          <div className="footer-info-item">
            <Phone size={18} color="#D7473B" className="info-icon" />
            <span>+91 98765 43210 / +91 98765 43211</span>
          </div>

          <div className="footer-info-item">
            <Mail size={18} color="#D7473B" className="info-icon" />
            <span>info@matriculaeducation.com</span>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Quick Links */}
        <div className="footer-links-grid">
          <a href="#about">About Us</a>
          <a href="#jee-neet">JEE / NEET Coaching</a>
          <a href="#mantra">MANTRA Talent Exam</a>
          <a href="#testimonials">Student Results</a>
          <a href="#visionaries">Founding Vision</a>
          <a href="#faq">FAQs</a>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} MATRICULA EDUCATION™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

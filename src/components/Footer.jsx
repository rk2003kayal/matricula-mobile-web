import React from 'react';
import { MapPin, Phone, Mail, Youtube, Instagram, Facebook, Send } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section bg-navy">
      <div className="footer-container">
        
        {/* 5-Column Grid Layout */}
        <div className="footer-5col-grid reveal-on-scroll">

          {/* Column 1 — Matricula Branding */}
          <div className="footer-col col-brand">
            <img 
              src="/footer-logo.png" 
              alt="Matricula Education" 
              className="footer-logo-img"
            />

            <div className="footer-social-bar">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon-btn yt">
                <Youtube size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn ig">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-btn fb">
                <Facebook size={18} />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="social-icon-btn tg">
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 — Important Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Important Links</h4>
            <ul className="footer-links-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="#jee-neet">Offline Centre</a></li>
              <li><a href="#mock-test">Matricula Mock Test</a></li>
              <li><a href="#visionaries">Team Behind the Success</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3 — Our Programs */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Programs</h4>
            <ul className="footer-links-list">
              <li><a href="/online-batches">Online Batches</a></li>
              <li><a href="#about">Topper's Cheat Sheet</a></li>
              <li><a href="/mantra">MANTRA 2026</a></li>
              <li><a href="#mock-test">Matricula Test Series</a></li>
              <li><a href="/spoken-english">Spoken English</a></li>
            </ul>
          </div>

          {/* Column 4 — Company */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/refund-policy">Refund Policy</a></li>
              <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
              <li><a href="/careers">Work with us</a></li>
            </ul>
          </div>

          {/* Column 5 — Contact Us */}
          <div className="footer-col col-contact">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} color="#D7473B" className="contact-icon" />
                <span>21, Raja Subodh Chandra Mallick Road, Jadavpur, Kolkata - 700032</span>
              </li>
              <li>
                <Mail size={16} color="#D7473B" className="contact-icon" />
                <a href="mailto:hey@matricula.co.in">hey@matricula.co.in</a>
              </li>
              <li>
                <Phone size={16} color="#D7473B" className="contact-icon" />
                <a href="tel:+918100482638">+91 81004 82638</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {currentYear} MATRICULA EDUCATION™. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

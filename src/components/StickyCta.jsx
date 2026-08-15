import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import './StickyCta.css';

export default function StickyCta({ onOpenEnquire }) {
  return (
    <div className="sticky-bottom-bar">
      <a href="tel:+919876543210" className="sticky-call-btn" aria-label="Call Matricula">
        <PhoneCall size={20} color="#17375E" />
      </a>
      <button className="btn-primary-red sticky-enquire-btn" onClick={onOpenEnquire}>
        <span>Enquire Now for Admissions</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

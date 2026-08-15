import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './EnquireModal.css';

export default function EnquireModal({ isOpen, onClose, initialIntent }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    classLevel: 'Class 10',
    course: initialIntent || 'WBBSE / WBCHSE Boards',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="enquire-modal-backdrop" onClick={onClose}>
      <div className="enquire-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-logo-title">
            <img src="/matricula-logo.png" alt="Matricula Logo" className="modal-brand-logo" />
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} color="#17375E" />
          </button>
        </div>

        {submitted ? (
          <div className="modal-success-state">
            <CheckCircle2 size={56} color="#D7473B" />
            <h3>Inquiry Received!</h3>
            <p>Thank you for expressing interest in <strong>Matricula Education</strong>. Our counselor will call you shortly at <strong>{formData.phone}</strong>.</p>
            <button className="btn-primary-red w-full mt-14" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="enquire-form">
            <h3 className="enquire-form-heading">Quick Inquiry</h3>
            <p className="enquire-form-sub">Speak with our academic mentors today.</p>

            <div className="form-group">
              <label className="input-label">Full Name</label>
              <input 
                type="text" 
                className="form-input no-icon" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required 
              />
            </div>

            <div className="form-group">
              <label className="input-label">Phone Number</label>
              <input 
                type="tel" 
                className="form-input no-icon" 
                placeholder="10-digit mobile number" 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required 
              />
            </div>

            <div className="form-group">
              <label className="input-label">Target Course / Goal</label>
              <select 
                className="form-select no-icon"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              >
                <option value="WBBSE / WBCHSE Boards">WBBSE / WBCHSE Boards (Class 9-12)</option>
                <option value="JEE Coaching (Siliguri)">JEE Coaching (Siliguri Branch)</option>
                <option value="NEET Coaching (Siliguri)">NEET Coaching (Siliguri Branch)</option>
                <option value="MANTRA Scholarship Exam">MANTRA Scholarship Exam</option>
                <option value="General Guidance">General Career Guidance</option>
              </select>
            </div>

            <button type="submit" className="btn-primary-red w-full mt-12">
              <span>Submit Inquiry →</span>
            </button>

            <div className="form-trust-footer">
              <ShieldCheck size={14} color="#D7473B" />
              <span>No spam. 100% confidential.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

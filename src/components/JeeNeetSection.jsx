import React, { useState } from 'react';
import { MapPin, User, GraduationCap, Phone, ShieldCheck, ArrowRight, ClipboardList } from 'lucide-react';
import './JeeNeetSection.css';

export default function JeeNeetSection() {
  const [formData, setFormData] = useState({
    name: '',
    classLevel: '',
    exam: 'JEE',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="jee-neet" className="section-wrapper bg-light jee-neet-section">
      <div className="section-header-block text-left">
        <div className="pill-label">
          <MapPin size={14} color="#D7473B" />
          OFFLINE CLASSES
        </div>

        <h2 className="section-heading-large">
          JEE / NEET<br />
          <span className="text-red">Coaching</span> Made Easy.
        </h2>

        <p className="branch-announcement">
          Now at our <span className="text-red font-bold">Siliguri Branch</span>
        </p>

        <p className="branch-desc mt-4">
          Expert faculty. Focused preparation. Better practice. Stronger results.
        </p>
      </div>

      {/* Building Vector Illustration matching Reference Image 3 */}
      <div className="building-illustration-container">
        <svg viewBox="0 0 380 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="building-svg">
          {/* Sky background / grid */}
          <rect width="380" height="220" rx="16" fill="#E2E8F0" opacity="0.4" />
          
          {/* Main Building Structure */}
          <path d="M 120 40 L 340 10 L 340 180 L 120 200 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
          <path d="M 120 40 L 120 200 L 40 170 L 40 60 Z" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />

          {/* Building Facade Header (Dark Navy with Matricula Logo) */}
          <path d="M 115 35 L 345 5 L 345 45 L 115 70 Z" fill="#17375E" />
          
          {/* Matricula Logo on Building */}
          <g transform="translate(140, 18) scale(0.65)">
            <rect x="0" y="0" width="14" height="14" fill="#17375E" stroke="#FFFFFF" />
            <rect x="14" y="0" width="14" height="14" fill="#D7473B" />
            <text x="36" y="14" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="Montserrat">MATRICULA</text>
          </g>

          {/* Glass Windows */}
          <rect x="140" y="75" width="55" height="40" rx="3" fill="#17375E" opacity="0.85" />
          <rect x="210" y="65" width="55" height="40" rx="3" fill="#17375E" opacity="0.85" />
          <rect x="275" y="55" width="50" height="40" rx="3" fill="#17375E" opacity="0.85" />

          <rect x="140" y="125" width="55" height="45" rx="3" fill="#17375E" opacity="0.85" />
          <rect x="210" y="115" width="55" height="45" rx="3" fill="#17375E" opacity="0.85" />
          <rect x="275" y="105" width="50" height="45" rx="3" fill="#17375E" opacity="0.85" />

          {/* Red Entrance Canopy */}
          <path d="M 110 150 L 220 135 L 220 160 L 110 175 Z" fill="#D7473B" />
          
          {/* Stairs */}
          <path d="M 100 190 L 230 175 L 250 205 L 80 205 Z" fill="#94A3B8" />
        </svg>
      </div>

      {/* Integrated Interactive Inquiry Form Card */}
      <div className="inquiry-form-card card-base">
        <div className="form-badge-icon">
          <ClipboardList size={22} color="#D7473B" />
        </div>

        <h3 className="form-title">Interested in Joining?</h3>
        <p className="form-subtitle">Fill in your details and we'll get in touch with you.</p>

        {submitted ? (
          <div className="form-success-message">
            <ShieldCheck size={48} color="#D7473B" />
            <h4>Thank You, {formData.name}!</h4>
            <p>Our academic counselor from the <strong>Siliguri Branch</strong> will contact you at <strong>{formData.phone}</strong> shortly.</p>
            <button className="btn-secondary-navy mt-12" onClick={() => setSubmitted(false)}>
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="jee-form">
            {/* Name Field */}
            <div className="form-group">
              <label className="input-label">Name</label>
              <div className="input-with-icon">
                <User size={18} className="field-icon" color="#718198" />
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Enter your full name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Class & Preparing For Row */}
            <div className="form-row-2col">
              <div className="form-group">
                <label className="input-label">Class</label>
                <div className="input-with-icon">
                  <GraduationCap size={18} className="field-icon" color="#718198" />
                  <select 
                    className="form-select"
                    value={formData.classLevel}
                    onChange={(e) => setFormData({ ...formData, classLevel: e.target.value })}
                  >
                    <option value="">Select class</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                    <option value="Dropper">Dropper</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="input-label">Preparing For</label>
                <div className="exam-toggle-pills">
                  <button 
                    type="button" 
                    className={`exam-pill ${formData.exam === 'JEE' ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, exam: 'JEE' })}
                  >
                    <span className="radio-circle"></span>
                    JEE
                  </button>
                  <button 
                    type="button" 
                    className={`exam-pill ${formData.exam === 'NEET' ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, exam: 'NEET' })}
                  >
                    <span className="radio-circle"></span>
                    NEET
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="form-group">
              <label className="input-label">Phone Number</label>
              <div className="input-with-icon">
                <Phone size={18} className="field-icon" color="#718198" />
                <input 
                  type="tel" 
                  className="form-input" 
                  placeholder="Enter your phone number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-primary-red w-full mt-14">
              <span>I'm Interested</span>
              <ArrowRight size={18} />
            </button>

            {/* Trust Footer */}
            <div className="form-trust-footer">
              <ShieldCheck size={16} color="#D7473B" />
              <span>Your information is safe with us.</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

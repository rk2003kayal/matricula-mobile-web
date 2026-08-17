import React from 'react';
import { X, ArrowLeft, ArrowRight, Award, GraduationCap, CheckCircle2, PhoneCall } from 'lucide-react';
import './TeachersModal.css';

export default function TeachersModal({ isOpen, onClose, onOpenEnquire }) {
  if (!isOpen) return null;

  const teachersList = [
    {
      name: 'Anirban Chakraborty',
      subject: 'Physics & JEE Advanced Lead',
      exp: '15+ Years Experience',
      highlight: 'Mentored 500+ JEE & NEET Rankers',
      initials: 'AC',
      bgColor: '#17375E',
    },
    {
      name: 'Purbali Chatterjee',
      subject: 'Mathematics & Foundation Lead',
      exp: '12+ Years Experience',
      highlight: 'Board Exam Strategy & Olympiad Coach',
      initials: 'PC',
      bgColor: '#D7473B',
    },
    {
      name: 'Dr. S. K. Mukherjee',
      subject: 'Chemistry & NEET Specialist',
      exp: '18+ Years Experience',
      highlight: 'Ph.D. in Organic Chemistry',
      initials: 'SM',
      bgColor: '#17375E',
    },
    {
      name: 'Ms. Ritu Roy',
      subject: 'Botany & Life Sciences Senior Faculty',
      exp: '10+ Years Experience',
      highlight: 'WBCHSE & NEET Top Scorer Mentor',
      initials: 'RR',
      bgColor: '#718198',
    },
    {
      name: 'Prof. Arindam Das',
      subject: 'Advanced Mathematics & Calculus Expert',
      exp: '14+ Years Experience',
      highlight: 'WBJEE & JEE Main Math Master',
      initials: 'AD',
      bgColor: '#17375E',
    },
    {
      name: 'Mr. Sourav Ghosh',
      subject: 'Physical Science & Foundation (Class 9-10)',
      exp: '9+ Years Experience',
      highlight: 'WBBSE Board Toppers Educator',
      initials: 'SG',
      bgColor: '#D7473B',
    },
  ];

  return (
    <div className="teachers-page-overlay animate-fadeIn">
      <div className="teachers-page-content">
        {/* Top Header Matching Website UI */}
        <div className="teachers-header sticky-top">
          <button className="back-home-btn" onClick={onClose}>
            <ArrowLeft size={20} color="#17375E" />
            <span>Back to Home</span>
          </button>
          <img 
            src="/matricula-logo.png" 
            alt="Matricula Logo" 
            className="teachers-logo" 
            onClick={onClose}
            style={{ cursor: 'pointer' }}
          />
          <button className="close-modal-btn" onClick={onClose} aria-label="Close">
            <X size={20} color="#17375E" />
          </button>
        </div>

        {/* Hero Banner inside Teachers View */}
        <div className="section-wrapper bg-light teachers-hero">
          <div className="section-header-block">
            <div className="pill-label">
              <span className="dot-red"></span>
              OUR FACULTY & MENTORS
              <span className="dot-red"></span>
            </div>

            <h2 className="section-heading-large">
              Guided by the<br />
              <span className="text-red">Best Minds</span> in Bengal.
            </h2>

            <p className="section-subtitle">
              Meet our team of dedicated educators who transform concepts into top ranks and board excellence.
            </p>
          </div>

          {/* Grid of Dedicated Teachers */}
          <div className="teachers-grid">
            {teachersList.map((teacher, idx) => (
              <div key={idx} className="teacher-card card-base">
                <div className="teacher-avatar-badge" style={{ backgroundColor: teacher.bgColor }}>
                  <span>{teacher.initials}</span>
                </div>
                
                <div className="teacher-info">
                  <h3 className="teacher-name">{teacher.name}</h3>
                  <p className="teacher-subject">{teacher.subject}</p>
                  
                  <div className="teacher-exp-tag">
                    <GraduationCap size={14} color="#D7473B" />
                    <span>{teacher.exp}</span>
                  </div>

                  <div className="teacher-highlight-box">
                    <CheckCircle2 size={14} color="#17375E" />
                    <span>{teacher.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Enquire Banner */}
          <div className="teachers-footer-banner">
            <h3>Want to Learn from Our Master Faculty?</h3>
            <p>Enroll in our WBBSE, WBCHSE, JEE & NEET batches at the Siliguri Branch.</p>
            <button 
              className="btn-primary-red mt-12 w-full"
              onClick={() => {
                onClose();
                onOpenEnquire();
              }}
            >
              <span>Enquire for Admissions →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

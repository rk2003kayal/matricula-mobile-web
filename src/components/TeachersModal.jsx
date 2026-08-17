import React, { useState } from 'react';
import { ArrowLeft, Home, Award, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import Footer from './Footer';
import './TeachersModal.css';

export default function TeachersModal({ isOpen, onClose, onGoHome, onOpenEnquire }) {
  const [activeSubject, setActiveSubject] = useState('ALL');

  if (!isOpen) return null;

  const subjects = ['ALL', 'JEE & NEET', 'PHYSICS', 'CHEMISTRY', 'MATHEMATICS', 'BIOLOGY'];

  const teachersList = [
    {
      name: 'Dr. S. K. Roy',
      subject: 'PHYSICS',
      tag: 'JEE & NEET',
      exp: '18+ Years Experience',
      edu: 'Ph.D in Physics, ex-IITian Faculty',
      desc: 'Specialist in Mechanics, Electrodynamics & Advanced Problem Solving for JEE Advanced top rankers.',
      badgeColor: '#D7473B',
    },
    {
      name: 'Prof. Anirban Sengupta',
      subject: 'CHEMISTRY',
      tag: 'JEE & NEET',
      exp: '15+ Years Experience',
      edu: 'M.Sc. Organic Chemistry (CU)',
      desc: 'Master of Organic Mechanisms and Reaction Kinetics with proven track record of 100% board toppers.',
    },
    {
      name: 'Subhadip Banerjee',
      subject: 'MATHEMATICS',
      tag: 'JEE & NEET',
      exp: '12+ Years Experience',
      edu: 'B.Tech (JU), Math Olympiad Mentor',
      desc: 'Simplifies Calculus, Trigonometry & Coordinate Geometry with speed shortcuts for competitive exams.',
    },
    {
      name: 'Dr. Debarati Mukherjee',
      subject: 'BIOLOGY',
      tag: 'JEE & NEET',
      exp: '14+ Years Experience',
      edu: 'Ph.D in Botany, NEET Specialist',
      desc: 'Expert in Human Physiology, Genetics & Plant Anatomy with 95%+ score rate in NEET Biology.',
    },
    {
      name: 'Sourav Chakraborty',
      subject: 'PHYSICS',
      tag: 'WBBSE & WBCHSE',
      exp: '10+ Years Experience',
      edu: 'M.Sc. Applied Physics (Rajabazar)',
      desc: 'Concept-first teaching for Madhyamik & Higher Secondary board aspirants with diagrammatic notes.',
    },
    {
      name: 'Paramita Das',
      subject: 'CHEMISTRY',
      tag: 'WBBSE & WBCHSE',
      exp: '9+ Years Experience',
      edu: 'M.Sc. Inorganic Chemistry',
      desc: 'Simplifies Periodic Tables, Chemical Bonding & Numerical Physical Chemistry for board excellence.',
    },
  ];

  const filteredTeachers = activeSubject === 'ALL'
    ? teachersList
    : activeSubject === 'JEE & NEET'
      ? teachersList.filter((t) => t.tag === 'JEE & NEET')
      : teachersList.filter((t) => t.subject === activeSubject);

  return (
    <div className="teachers-full-page animate-fadeIn">
      {/* Top Sticky Bar */}
      <div className="teachers-top-bar">
        <div className="top-bar-left">
          <button className="back-arrow-btn" onClick={onClose} aria-label="Back">
            <ArrowLeft size={20} color="#17375E" />
          </button>
          <button className="home-circle-btn" onClick={onGoHome} aria-label="Go to Home" title="Home">
            <Home size={18} color="#17375E" />
          </button>
        </div>

        <img 
          src="/matricula-logo.png" 
          alt="Matricula Logo" 
          className="teachers-header-logo" 
          onClick={onGoHome}
          style={{ cursor: 'pointer' }}
        />

        <button className="btn-primary-red header-cta-btn" onClick={onOpenEnquire}>
          <span>Enquire</span>
        </button>
      </div>

      {/* Main Container */}
      <div className="teachers-page-content">
        
        {/* Hero Header */}
        <section className="section-wrapper bg-navy teachers-hero">
          <div className="section-header-block text-center">
            <div className="pill-label dark-theme">
              <Award size={12} color="#F59E0B" fill="#F59E0B" />
              EXPERT FACULTY
            </div>

            <h1 className="text-white text-3xl font-bold mt-8">
              Our Star Mentors &<br />
              <span className="text-gold">Subject Experts</span>
            </h1>

            <p className="section-subtitle text-slate mt-8">
              Learn from Bengal’s finest educators with decades of proven rank-producing excellence in JEE, NEET & Board exams.
            </p>
          </div>

          {/* Subject Filter Pills */}
          <div className="subject-filter-scroll mt-16">
            {subjects.map((sub, idx) => (
              <button
                key={idx}
                className={`filter-pill-btn ${activeSubject === sub ? 'active' : ''}`}
                onClick={() => setActiveSubject(sub)}
              >
                {sub}
              </button>
            ))}
          </div>
        </section>

        {/* Teachers Profile Grid */}
        <section className="section-wrapper bg-light teachers-grid-section">
          <div className="teachers-grid">
            {filteredTeachers.map((teacher, idx) => (
              <div key={idx} className="teacher-card card-base">
                <div className="teacher-card-top">
                  <div className="teacher-avatar">
                    <span>{teacher.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>

                  <div className="teacher-header-info">
                    <div className="teacher-tag-row">
                      <span className="subject-badge">{teacher.subject}</span>
                      <span className="exam-tag">{teacher.tag}</span>
                    </div>
                    <h3 className="teacher-name">{teacher.name}</h3>
                    <p className="teacher-exp">{teacher.exp}</p>
                  </div>
                </div>

                <div className="teacher-body mt-12">
                  <div className="edu-row">
                    <GraduationCap size={16} color="#17375E" />
                    <span>{teacher.edu}</span>
                  </div>
                  <p className="teacher-desc mt-8">{teacher.desc}</p>
                </div>

                <button 
                  className="btn-secondary-outline w-full mt-16"
                  onClick={onOpenEnquire}
                >
                  <span>Book Demo Class with {teacher.name.split(' ')[0]}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Global CTA Footer */}
        <Footer />

      </div>
    </div>
  );
}

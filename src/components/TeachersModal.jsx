import React from 'react';
import { ArrowLeft, Award, ArrowRight } from 'lucide-react';
import Footer from './Footer';
import SubpageHomeWidget from './SubpageHomeWidget';
import './TeachersModal.css';

export default function TeachersModal({ isOpen, onClose, onGoHome }) {
  if (!isOpen) return null;

  const teachersList = [
    {
      name: 'Dr. S. K. Roy',
      subject: 'PHYSICS',
    },
    {
      name: 'Prof. Anirban Sengupta',
      subject: 'CHEMISTRY',
    },
    {
      name: 'Subhadip Banerjee',
      subject: 'MATHEMATICS',
    },
    {
      name: 'Dr. Debarati Mukherjee',
      subject: 'BIOLOGY',
    },
    {
      name: 'Sourav Chakraborty',
      subject: 'PHYSICS',
    },
    {
      name: 'Paramita Das',
      subject: 'CHEMISTRY',
    },
  ];

  return (
    <div className="teachers-full-page animate-fadeIn">
      {/* Top Sticky Bar */}
      <div className="teachers-top-bar">
        <div className="top-bar-left">
          <button className="back-arrow-btn" onClick={onClose} aria-label="Back">
            <ArrowLeft size={20} color="#FFFFFF" />
          </button>
        </div>

        <img 
          src="/matricula-logo.png" 
          alt="Matricula Logo" 
          className="teachers-header-logo" 
          onClick={onGoHome}
          style={{ cursor: 'pointer' }}
        />

        <div className="header-spacer-right"></div>
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
              Learn from Bengal's finest educators with decades of proven rank-producing excellence in Board Exams
            </p>
          </div>
        </section>

        {/* Teachers Profile Grid */}
        <section className="section-wrapper bg-light teachers-grid-section">
          <div className="teachers-grid">
            {teachersList.map((teacher, idx) => (
              <div key={idx} className="teacher-card card-base">
                <div className="teacher-card-top">
                  <div className="teacher-avatar">
                    <span>{teacher.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>

                  <div className="teacher-header-info">
                    <h3 className="teacher-name">{teacher.name}</h3>
                    <p className="teacher-faculty-subtitle">{teacher.subject} Faculty</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Demo Class Section */}
        <section className="section-wrapper bg-navy text-center demo-class-section">
          <h2 className="text-white text-2xl font-bold">
            Attend a DEMO CLASS on our APP
          </h2>
          <p className="text-slate mt-8">
            Experience live interactive lectures and doubt clearing with our expert mentors.
          </p>
          <div className="mt-20">
            <a 
              href="https://play.google.com/store/apps/details?id=co.barney.qiilc&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary-red inline-flex demo-app-btn"
            >
              <span>Download the App</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Global CTA Footer */}
        <Footer />

        {/* Floating Bottom Right Home Widget */}
        <SubpageHomeWidget onGoHome={onGoHome} />

      </div>
    </div>
  );
}

import React from 'react';
import { BookOpen, Target, BookMarked, GraduationCap, Play } from 'lucide-react';
import './AboutSection.css';

export default function AboutSection({ onOpenEnquire }) {
  const classCards = [
    {
      classNum: '9',
      icon: <BookOpen size={28} color="#17375E" />,
      desc: 'Build Strong Foundations',
    },
    {
      classNum: '10',
      icon: <Target size={28} color="#D7473B" />,
      desc: 'Excel in Boards',
    },
    {
      classNum: '11',
      icon: <BookMarked size={28} color="#17375E" />,
      desc: 'Prepare for Competitive Exams',
    },
    {
      classNum: '12',
      icon: <GraduationCap size={28} color="#17375E" />,
      desc: 'Achieve More, Dream Bigger',
    },
  ];

  return (
    <section id="about" className="section-wrapper bg-white about-section">
      <div className="section-header-block">
        <div className="pill-label">
          <span className="dot-red"></span>
          ABOUT MATRICULA
          <span className="dot-red"></span>
        </div>

        <h2 className="section-heading-large">
          Learning Today,<br />
          <span className="text-red">Leading Tomorrow.</span>
        </h2>

        <div className="red-navy-underline"></div>

        <p className="section-subtitle mt-8">
          We teach <span className="text-red font-bold">WBBSE & WBCHSE</span><br />
          Classes 9 to 12.
        </p>
      </div>

      {/* 4 Cards Grid - Equal Width, Equi-Spaced, Level Dashes */}
      <div className="class-cards-grid">
        {classCards.map((card, idx) => (
          <div key={idx} className="class-card">
            <div className="class-card-header">
              <span className="class-tag">CLASS</span>
              <h3 className="class-number">{card.classNum}</h3>
            </div>
            <div className="class-divider"></div>
            <div className="class-card-body">
              <div className="class-card-icon">{card.icon}</div>
              <p className="class-card-desc">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Banner Box: Logo Removed, "Join Your Class" + Red Triangle Play Arrow */}
      <div className="philosophy-callout-box" onClick={onOpenEnquire}>
        <span className="join-class-label">
          Join Your Class
        </span>
        <button className="callout-play-btn" aria-label="Join Your Class">
          <Play size={16} fill="#D7473B" color="#D7473B" />
        </button>
      </div>
    </section>
  );
}

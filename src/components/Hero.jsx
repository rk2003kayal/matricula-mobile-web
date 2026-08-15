import React from 'react';
import { Search, ArrowRight, Trophy, Target, BarChart2, Lightbulb } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenIntent }) {
  // Exactly 4 result-driven floating bubbles
  const thoughtBubbles = [
    {
      icon: <Trophy size={18} color="#D7473B" />,
      text: 'I got',
      highlight: '89/100',
      suffix: 'marks!',
      className: 'bubble-1 animate-float-1',
    },
    {
      icon: <Target size={18} color="#D7473B" />,
      text: 'I want to crack',
      highlight: 'JEE!',
      suffix: '',
      className: 'bubble-2 animate-float-2',
    },
    {
      icon: <BarChart2 size={18} color="#17375E" />,
      text: 'Targeting',
      highlight: '95%+',
      suffix: 'in Boards',
      className: 'bubble-3 animate-float-3',
    },
    {
      icon: <Lightbulb size={18} color="#D7473B" />,
      text: 'I scored',
      highlight: '98/100 in Maths!',
      suffix: '',
      className: 'bubble-4 animate-float-1',
    },
  ];

  return (
    <section className="hero-section bg-light">
      {/* Subtle Background Dots Pattern */}
      <div className="bg-dots-pattern"></div>
      
      <div className="hero-container">
        {/* Headline with Selective Color Emphasis */}
        <div className="hero-typography">
          <h1 className="hero-title">
            <span className="title-navy">Every Student.</span><br />
            <span className="title-red">Every Dream.</span><br />
            <span className="title-navy">Every Step Forward.</span>
          </h1>
          <p className="hero-subtitle">
            Guiding you to learn better, score higher and achieve more.
          </p>
        </div>

        {/* Hero Visual Area: Student Photo + 4 Floating Result Bubbles */}
        <div className="hero-visual-stage">
          {/* 4 Result-Driven Thought Bubbles */}
          {thoughtBubbles.map((bubble, idx) => (
            <div key={idx} className={`thought-bubble ${bubble.className}`}>
              <div className="bubble-icon">{bubble.icon}</div>
              <div className="bubble-text">
                {bubble.text} <span className="bubble-highlight">{bubble.highlight}</span> {bubble.suffix}
              </div>
            </div>
          ))}

          {/* Real Student Image Container */}
          <div className="student-photo-box">
            <img 
              src="/hero-students.png" 
              alt="Matricula Empowered Students" 
              className="hero-student-photo" 
            />
          </div>
        </div>

        {/* Search Bar (Clean Light Background - Dark Navy Block Removed) */}
        <div className="search-bar-wrapper">
          <button className="intent-search-bar" onClick={onOpenIntent}>
            <div className="search-left">
              <Search size={22} className="search-icon" color="#17375E" />
              <span className="search-placeholder-container">
                <span className="placeholder-text-muted">What made you come here?</span>
                <span className="blinking-color-cursor">|</span>
              </span>
            </div>
            <div className="search-action-btn">
              <ArrowRight size={20} color="#FFFFFF" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Quote, Users, ArrowRight } from 'lucide-react';
import './VisionariesSection.css';

export default function VisionariesSection({ onOpenTeachers }) {
  const [isActivated, setIsActivated] = useState(false);
  const capsuleRef = useRef(null);

  const visionaries = [
    {
      name: 'Anirban Chakraborty',
      role: 'Founder & Academic Director',
      quote: 'Education must empower every student to discover their true latent potential.',
      initials: 'AC',
      bgColor: '#17375E',
    },
    {
      name: 'Purbali Chatterjee',
      role: 'Co-Founder & Director of Pedagogy',
      quote: 'Conceptual clarity combined with continuous care transforms every young learner.',
      initials: 'PC',
      bgColor: '#D7473B',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!capsuleRef.current) return;
      const rect = capsuleRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Activate capsule when scrolled into upper-middle viewport
      if (rect.top < windowHeight * 0.72) {
        setIsActivated(true);
      } else {
        setIsActivated(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="visionaries" className="section-wrapper bg-light visionaries-section">
      <div className="section-header-block reveal-on-scroll">
        {/* Animated Capsule: turns Deep Navy Blue with White Text on Activation */}
        <div 
          ref={capsuleRef}
          className={`pill-label visionary-capsule ${isActivated ? 'activated-capsule' : ''}`}
        >
          <span className="dot-red"></span>
          FOUNDING VISIONARIES
          <span className="dot-red"></span>
        </div>

        <h2 className="section-heading-large">
          The Vision Behind<br />
          <span className="text-red">Matricula.</span>
        </h2>

        <p className="section-subtitle">
          Guided by seasoned academicians and visionaries devoted to student success.
        </p>
      </div>

      {/* 2 Side-by-Side Visionaries Cards */}
      <div className="visionaries-2col-grid reveal-on-scroll">
        {visionaries.map((v, idx) => (
          <div key={idx} className="visionary-card card-base">
            <div className="visionary-portrait-badge" style={{ backgroundColor: v.bgColor }}>
              <span>{v.initials}</span>
            </div>

            <div className="visionary-details">
              <h3 className="visionary-name">{v.name}</h3>
              <p className="visionary-role">{v.role}</p>

              <div className="quote-box">
                <Quote size={16} color="#D7473B" className="quote-icon" />
                <p className="visionary-quote">"{v.quote}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tagline Callout */}
      <div className="vision-tagline-bar reveal-on-scroll">
        <span className="font-serif-tagline">"no talent lies latent"</span>
      </div>

      {/* Button to Open Dedicated Teachers Webpage View */}
      <div className="see-teachers-cta-wrapper reveal-on-scroll">
        <button className="btn-primary-red w-full see-teachers-btn" onClick={onOpenTeachers}>
          <Users size={18} />
          <span>See our Most Dedicated Teachers</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

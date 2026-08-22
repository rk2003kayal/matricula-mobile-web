import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, TrendingUp, Trophy, Sparkles } from 'lucide-react';
import './StatsSection.css';

export default function StatsSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNodes, setActiveNodes] = useState([false, false, false, false]);
  const timelineRef = useRef(null);

  const timelineStats = [
    {
      numVal: '16,000+',
      label: 'Students Enrolled',
      icon: <Users size={24} color="#D7473B" />,
      tag: 'ACADEMIC REACH',
      desc: 'Empowering thousands of ambitious students across WBBSE, WBCHSE & Competitive streams.',
    },
    {
      numVal: '1,400',
      label: 'Meritorious Students',
      icon: <Award size={24} color="#F59E0B" />,
      tag: 'SCHOLARSHIP & DISTINCTION',
      desc: 'Recognized with high distinction, state talent honors, and tuition fee waivers.',
    },
    {
      numVal: '94%',
      label: 'Passing Rate',
      icon: <TrendingUp size={24} color="#17375E" />,
      tag: 'CONSISTENT RECORD',
      desc: 'Sustained high passing rate across board examinations with first division scores.',
    },
    {
      numVal: '345',
      label: 'Rankers',
      icon: <Trophy size={24} color="#D7473B" />,
      tag: 'STATE & ENTRANCE TOPPERS',
      desc: 'Securing top ranks in WBCHSE boards, JEE Main/Advanced, and NEET entrance exams.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate timeline scroll fill progress (0% to 100%)
      const totalHeight = rect.height;
      const currentScroll = windowHeight - rect.top;
      const progress = Math.min(Math.max((currentScroll / (totalHeight + windowHeight * 0.1)) * 100, 0), 100);
      
      setScrollProgress(progress);

      // Light up milestone nodes based on scroll position
      const nodeElements = timelineRef.current.querySelectorAll('.timeline-item');
      const newActive = [];
      nodeElements.forEach((el) => {
        const itemRect = el.getBoundingClientRect();
        newActive.push(itemRect.top < windowHeight * 0.75);
      });
      setActiveNodes(newActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-wrapper bg-light stats-timeline-section">
      <div className="section-header-block reveal-on-scroll">
        <div className="pill-label">
          <Sparkles size={12} color="#D7473B" />
          OUR TRACK RECORD
        </div>

        <h2 className="section-heading-large">
          Numbers That Speak<br />
          <span className="text-red">Our Excellence.</span>
        </h2>

        <p className="section-subtitle">
          Scroll down to explore Matricula's benchmark milestones and student achievements.
        </p>
      </div>

      {/* Scroll-Driven Animated Timeline Stage */}
      <div className="timeline-stage-wrapper" ref={timelineRef}>
        {/* Background Rail Line */}
        <div className="timeline-rail">
          {/* Animated Scroll Progress Line Fill */}
          <div 
            className="timeline-progress-fill" 
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Timeline Milestones List */}
        <div className="timeline-items-list">
          {timelineStats.map((item, idx) => {
            const isActive = activeNodes[idx];
            return (
              <div key={idx} className={`timeline-item ${isActive ? 'in-view' : ''}`}>
                {/* Node Circle Indicator */}
                <div className={`timeline-node ${isActive ? 'active-node' : ''}`}>
                  <div className="node-inner-dot"></div>
                </div>

                {/* Milestone Content Card */}
                <div className="timeline-card card-base">
                  <div className="timeline-card-header">
                    <div className="timeline-icon-badge">
                      {item.icon}
                    </div>
                    <span className="timeline-tag">{item.tag}</span>
                  </div>

                  <h3 className="timeline-stat-number">
                    <span className="num-navy">{item.numVal}</span>
                  </h3>

                  <h4 className="timeline-stat-label">{item.label}</h4>
                  <p className="timeline-stat-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

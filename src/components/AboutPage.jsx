import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Users, Sparkles, Building2, Cpu, Award, Globe, Video, UserCheck, Calendar } from 'lucide-react';
import Footer from './Footer';
import './AboutPage.css';

export default function AboutPage({ onBack }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNodes, setActiveNodes] = useState([]);
  const timelineRef = useRef(null);

  // Chronological Journey Milestones (Authoritative Provided Data 2017–2023)
  const timelineData = [
    {
      year: '2017',
      badge: 'Foundation',
      title: 'Salt Lake Coaching Center',
      desc: 'Matricula was founded in 2017 with a coaching center in Salt Lake, Kolkata. It helped hundreds of students with their Competitive Exams preparations, focusing on JEE, NEET, & WBCS preparations.',
    },
    {
      year: '2018',
      badge: 'EdTech & AI-ML Innovation',
      title: 'Proprietary Tech & Mass Test Series',
      desc: '2018 marked the gradual shift of Matricula to the online space. We built our in-house tech to develop our own application and a proprietary AI-ML tool to help measure the Depth of Knowledge of the students. Launched its first mass-level Matricula Test Series 2018-19, engaging more than 25,000 students.',
    },
    {
      year: '2019',
      badge: 'MANTRA Launch',
      title: 'Statewide Talent Search',
      desc: 'We launched a Scholarship cum Talent Hunt Examination in 2019 by the name MANTRA. We received an overwhelming response for the exam and had been able to cater to 1,20,000 students from the states of West Bengal, Bihar, Jharkhand, Orissa, Assam, and Tripura. A one-of-a-kind exam to identify the best minds and help students pursue their dream career with financial support.',
    },
    {
      year: '2020',
      badge: 'School Network Reach',
      title: '29+ Partner Schools & Live Engagement',
      desc: 'Matricula roped in more than 29 schools in West Bengal with more than 82,000 students to increase the reach of its online infrastructure. Thus creating an impact on more students through live engagement, regardless of their location.',
    },
    {
      year: '2021',
      badge: '2,50,000+ MANTRA Aspirants',
      title: 'Doubt-Clearing & Philosophy',
      desc: 'Increased focus on online learning helped bring more students to our platform. Team Matricula crafted various tools to aid diligent learners. Doubt-clearing sessions through webinars, live classes, and interactive sessions with Domain Leaders helped shape students — rightly complimenting our philosophy: "Preparation sahi toh fikar nahi". Received over 2,50,000 registrations for MANTRA 2021.',
    },
    {
      year: '2022',
      badge: '6,00,000+ Registrations',
      title: 'Districts Milestone & Scale',
      desc: 'Matricula Test Series 2022-23 became our biggest offline examination to date engaging students across the 23 districts of West Bengal. We also touched an exceptional milestone of getting more than 6,00,000 registrations for MANTRA 2022.',
    },
    {
      year: '2023',
      badge: 'Offline Centers Across East India',
      title: 'Expansion & Bundled Learning',
      desc: 'We aim to open 23 offline interaction centers across East India to help students engage with state-of-the-art educational technology. Matricula will also offer a host of unique offerings of bundled courses at very lucrative price points.',
    },
  ];

  // Core Team Members Data (Authoritative Provided List)
  const teamMembers = [
    { name: 'Anirban Chakraborty', role: 'Chief Marketing Officer', initials: 'AC' },
    { name: 'Purbali Chatterjee', role: 'Chief Sales Officer', initials: 'PC' },
    { name: 'Ananyo Chakraborty', role: 'Human Resource Manager', initials: 'AC' },
    { name: 'Romit Banerjee', role: 'Social Media Associate', initials: 'RB' },
    { name: 'Kuntal Dhali', role: 'Senior Video Editor', initials: 'KD' },
    { name: 'Subhash Nandi', role: 'Video Editor', initials: 'SN' },
    { name: 'Soumita Banerjee', role: 'Graphic Designer', initials: 'SB' },
    { name: 'Anushka Mandal', role: 'Social Media Associate', initials: 'AM' },
    { name: 'Samir Paul', role: 'Video Editor', initials: 'SP' },
    { name: 'Shreya Das', role: 'Student Communication Executive', initials: 'SD' },
  ];

  // Scroll Progress Calculation (Matching Landing Page StatsSection logic)
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalHeight = rect.height;
      const currentScroll = windowHeight - rect.top;
      const progress = Math.min(Math.max((currentScroll / (totalHeight + windowHeight * 0.1)) * 100, 0), 100);
      
      setScrollProgress(progress);

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
    <div className="about-page-view animate-fadeIn">
      {/* Top Header with Centered Logo & No Enquire Button */}
      <header className="about-header sticky-top">
        <div className="about-header-container">
          <button className="back-arrow-icon-btn" onClick={onBack} aria-label="Back to Home">
            <ArrowLeft size={22} color="#17375E" />
          </button>
          
          <img 
            src="/matricula-logo.png" 
            alt="Matricula Logo" 
            className="about-header-logo" 
            onClick={onBack}
            style={{ cursor: 'pointer' }}
          />

          <div className="header-spacer-right"></div>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="section-wrapper bg-navy about-hero-section">
        <div className="section-header-block text-center">
          <h1 className="about-page-title text-white">
            Who are we?
          </h1>

          <p className="section-subtitle text-slate mt-8">
            <span className="font-serif-tagline text-gold">"no talent lies latent"</span> — India’s fastest-growing education partner for students and teachers.
          </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="section-wrapper bg-white story-section">
        <div className="section-header-block">
          <div className="pill-label">
            <span className="dot-red"></span>
            OUR ORIGINS
          </div>
          <h2 className="section-heading-large">
            Our Story
          </h2>
        </div>

        <div className="story-card card-base">
          <p className="story-text">
            Founded in 2017, Matricula is India’s one of the fastest-growing education partners for students and teachers providing courses, tools, and applications under one roof. The solutions help meet the requirements of students, working professionals, and enterprises.
          </p>
          <p className="story-text mt-14">
            The courses are designed in collaboration with the country's top minds to help curate a program that aids the participants to ace in their respective spheres.
          </p>
        </div>
      </section>

      {/* 3. Matricula Journey / Timeline (Matching Landing Page Timeline Structure) */}
      <section className="section-wrapper bg-navy about-timeline-section">
        <div className="section-header-block text-center">
          <div className="pill-label dark-theme">
            <Calendar size={12} color="#F59E0B" />
            MILESTONES & GROWTH
          </div>

          <h2 className="section-heading-large text-white">
            Matricula Journey
          </h2>

          <p className="section-subtitle text-slate mt-8">
            Chronological growth and major milestones from 2017 to 2023.
          </p>
        </div>

        {/* Scroll-Driven Animated Timeline Stage (Matching Landing Page) */}
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
            {timelineData.map((item, idx) => {
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
                      <div className="year-pill">{item.year}</div>
                      <span className="badge-subtext">{item.badge}</span>
                    </div>

                    <h3 className="timeline-card-title">{item.title}</h3>
                    <p className="timeline-card-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Our Core Team */}
      <section className="section-wrapper bg-light team-section">
        <div className="section-header-block text-center">
          <div className="pill-label">
            <Users size={12} color="#D7473B" />
            THE PEOPLE BEHIND MATRICULA
          </div>

          <h2 className="section-heading-large">
            Meet the core Team at Matricula
          </h2>
        </div>

        <div className="team-grid mt-24">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-member-card card-base">
              <div className="team-avatar-box">
                <span>{member.initials}</span>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global CTA Footer */}
      <Footer />
    </div>
  );
}

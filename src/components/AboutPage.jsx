import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  Users, 
  Sparkles, 
  BookOpen, 
  Target, 
  Compass, 
  Trophy, 
  Award, 
  TrendingUp, 
  Smartphone, 
  ArrowRight, 
  Calendar,
  CheckCircle2,
  Crown
} from 'lucide-react';
import Footer from './Footer';
import SubpageHomeWidget from './SubpageHomeWidget';
import './AboutPage.css';

export default function AboutPage({ onBack, onGoHome }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNodes, setActiveNodes] = useState([]);
  const timelineRef = useRef(null);

  const appLink = "https://play.google.com/store/apps/details?id=co.barney.qiilc&pcampaignid=web_share";

  // Key Achievements Data
  const achievements = [
    {
      num: 'Times Brand Icon',
      label: 'By The Times of India',
      desc: 'Honored as an iconic educational brand for academic excellence & innovation in West Bengal.',
      icon: <Crown size={22} color="#F59E0B" fill="#F59E0B" />,
      tag: 'TIMES OF INDIA',
      spotlight: true,
      image: '/times-award-banner.png',
    },
    {
      num: '6,27,456+',
      label: 'MANTRA Aspirants',
      desc: 'West Bengal’s largest state-wide scholarship exam across 23 districts.',
      icon: <Trophy size={22} color="#F59E0B" />,
      tag: 'STATE RECORD',
    },
    {
      num: '94%',
      label: 'Board Pass Rate',
      desc: 'Consistently producing first-division & top percentile scorers in WBBSE & WBCHSE.',
      icon: <TrendingUp size={22} color="#38BDF8" />,
      tag: 'EXCELLENCE',
    },
    {
      num: '16,000+',
      label: 'Active Learners',
      desc: 'Active and aspirational students hailing from West Bengal',
      icon: <Users size={22} color="#D7473B" />,
      tag: 'STUDENT TRUST',
    },
  ];

  // Chronological Journey Milestones (2017–2023)
  const timelineData = [
    {
      year: '2017',
      badge: 'Foundation',
      title: 'Salt Lake Coaching Center',
      desc: 'Matricula was founded in 2017 with a coaching center in Salt Lake, Kolkata, helping students prepare for JEE, NEET, & WBCS exams with dedicated personal guidance.',
    },
    {
      year: '2018',
      badge: 'EdTech & AI-ML Innovation',
      title: 'Proprietary Tech & Mass Test Series',
      desc: 'Shifted to online learning with in-house technology, an AI-ML tool measuring Depth of Knowledge, and launched the first Matricula Test Series engaging 25,000+ students.',
    },
    {
      year: '2019',
      badge: 'MANTRA Launch',
      title: 'Statewide Talent Search',
      desc: 'Launched MANTRA talent hunt exam, catering to 1,20,000 students across West Bengal, Bihar, Jharkhand, Orissa, Assam, and Tripura to identify and fund top talent.',
    },
    {
      year: '2020',
      badge: 'School Network Reach',
      title: '29+ Partner Schools & Live Engagement',
      desc: 'Partnered with 29+ schools in West Bengal impacting 82,000+ students through live digital interactive sessions regardless of location.',
    },
    {
      year: '2021',
      badge: '2,50,000+ MANTRA Aspirants',
      title: 'Doubt-Clearing & Philosophy',
      desc: 'Crafted webinar doubt sessions, domain leader interactive panels, and crossed 2,50,000 MANTRA registrations under the motto "Preparation sahi toh fikar nahi".',
    },
    {
      year: '2022',
      badge: '6,00,000+ Registrations',
      title: 'Districts Milestone & Scale',
      desc: 'Expanded Matricula Test Series offline across all 23 districts of West Bengal, reaching a milestone of over 6,00,000 registrations for MANTRA 2022.',
    },
    {
      year: '2023',
      badge: 'Offline Centers Across East India',
      title: 'Expansion & Bundled Learning',
      desc: 'Initiated 23 offline interaction centers across East India providing state-of-the-art educational tech and affordable bundled learning programs.',
    },
  ];

  // Core Team Members Data
  const teamMembers = [
    { name: 'Anirban Chakraborty', role: 'Founder & Chief Marketing Officer', initials: 'AC' },
    { name: 'Purbali Chatterjee', role: 'Co-Founder & Chief Sales Officer', initials: 'PC' },
    { name: 'Ananyo Chakraborty', role: 'Human Resource Manager', initials: 'AC' },
    { name: 'Romit Banerjee', role: 'Social Media Associate', initials: 'RB' },
    { name: 'Kuntal Dhali', role: 'Senior Video Editor', initials: 'KD' },
    { name: 'Subhash Nandi', role: 'Video Editor', initials: 'SN' },
    { name: 'Soumita Banerjee', role: 'Graphic Designer', initials: 'SB' },
    { name: 'Anushka Mandal', role: 'Social Media Associate', initials: 'AM' },
    { name: 'Samir Paul', role: 'Video Editor', initials: 'SP' },
    { name: 'Shreya Das', role: 'Student Communication Executive', initials: 'SD' },
  ];

  // Scroll Progress Calculation for Timeline
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
      {/* Top Sticky Header with Centered Logo & Back Arrow */}
      <header className="about-header sticky-top">
        <div className="about-header-container">
          <div className="header-left-actions">
            <button className="back-arrow-icon-btn" onClick={onBack} aria-label="Back">
              <ArrowLeft size={20} color="#FFFFFF" />
            </button>
          </div>
          
          <img 
            src="/matricula-logo.png" 
            alt="Matricula Logo" 
            className="about-header-logo" 
            onClick={onGoHome}
            style={{ cursor: 'pointer' }}
          />

          <div className="header-spacer-right"></div>
        </div>
      </header>

      {/* 1. WHO WE ARE — Hero Section */}
      <section className="section-wrapper bg-navy about-hero-section">
        <div className="section-header-block text-center reveal-on-scroll">
          <div className="pill-label dark-theme hero-pill">
            <Sparkles size={12} color="#F59E0B" fill="#F59E0B" />
            ABOUT MATRICULA EDUCATION
          </div>

          <h1 className="about-hero-headline text-white mt-12">
            Who We Are<br />
            <span className="text-gold">Empowering Bengal's Future</span>
          </h1>

          <p className="about-hero-tagline text-gold mt-10">
            ✨ "no talent lies latent"
          </p>

          <div className="hero-team-image-card mt-16">
            <img 
              src="/matricula-team.jpg" 
              alt="Matricula Faculty & Team" 
              className="hero-team-img" 
            />
            <div className="team-photo-caption">
              <span>Matricula Faculty & Leadership Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY — Origins & Narrative */}
      <section className="section-wrapper bg-white story-section">
        <div className="section-header-block text-center reveal-on-scroll">
          <div className="pill-label">
            <BookOpen size={12} color="#D7473B" />
            OUR ORIGINS & EVOLUTION
          </div>

          <h2 className="section-heading-large">
            Our Story
          </h2>
        </div>

        <div className="story-card card-base reveal-on-scroll">
          <p className="story-text">
            Founded in <strong>2017</strong> with a flagship coaching center in Kolkata, Matricula began with a clear mission: to ensure every student in West Bengal gets access to top-tier mentorship regardless of their location or socioeconomic background.
          </p>
          <p className="story-text mt-14">
            Over the years, Matricula transitioned from offline classrooms into a powerhouse EdTech platform—pioneering Bangla-medium online batches, AI-powered knowledge depth analytics, and <strong>MANTRA</strong> (West Bengal's largest talent search exam), transforming the lives of over 6,00,000+ students.
          </p>
        </div>
      </section>

      {/* 3. MISSION & VISION — Dual Focus Cards */}
      <section className="section-wrapper bg-light mission-vision-section">
        <div className="section-header-block text-center reveal-on-scroll">
          <div className="pill-label">
            <Target size={12} color="#D7473B" />
            PURPOSE & DIRECTION
          </div>

          <h2 className="section-heading-large">
            Driven by Purpose,<br />
            <span className="text-red">Guided by Excellence.</span>
          </h2>
        </div>

        <div className="mission-vision-grid mt-24 reveal-on-scroll">
          {/* Mission Card */}
          <div className="mv-card card-base mission-card">
            <div className="mv-icon-badge icon-red">
              <Target size={26} color="#D7473B" />
            </div>
            <h3 className="mv-card-title">OUR MISSION</h3>
            <p className="mv-card-desc">
              To deliver concept-first, affordable, and high-quality education in Bangla & English medium. We aim to eliminate learning barriers, provide 100% scholarship opportunities, and ensure no talented student in West Bengal is left behind.
            </p>
          </div>

          {/* Vision Card */}
          <div className="mv-card card-base vision-card">
            <div className="mv-icon-badge icon-navy">
              <Compass size={26} color="#17375E" />
            </div>
            <h3 className="mv-card-title">OUR VISION</h3>
            <p className="mv-card-desc">
              To build West Bengal’s most trusted learning ecosystem—nurturing district toppers, competitive rankers, and future space scientists through holistic guidance, tuition waivers, and national space center (ISRO) expeditions.
            </p>
          </div>
        </div>
      </section>

      {/* 4. ACHIEVEMENTS — Stats & Impact Grid */}
      <section className="section-wrapper bg-navy achievements-section">
        <div className="section-header-block text-center reveal-on-scroll">
          <div className="pill-label dark-theme">
            <Trophy size={12} color="#F59E0B" fill="#F59E0B" />
            OUR MILESTONES & IMPACT
          </div>

          <h2 className="section-heading-large text-white">
            Key Achievements
          </h2>

          <p className="section-subtitle text-slate mt-8">
            Quantifiable benchmarks of student success and academic excellence.
          </p>
        </div>

        <div className="achievements-grid mt-24 reveal-on-scroll">
          {achievements.map((item, idx) => (
            <div key={idx} className={`achievement-card card-base ${item.spotlight ? 'toi-spotlight-card' : ''}`}>
              {item.image && (
                <div className="toi-card-image-wrapper">
                  <img src={item.image} alt={item.num} className="toi-card-img" />
                </div>
              )}

              <div className="achievement-card-top">
                <div className={`achievement-icon-box ${item.spotlight ? 'toi-icon-box' : ''}`}>
                  {item.icon}
                </div>
                <span className={`achievement-tag-pill ${item.spotlight ? 'toi-tag-pill' : ''}`}>{item.tag}</span>
              </div>

              <h3 className={`achievement-num ${item.spotlight ? 'toi-num-title' : 'text-navy'} mt-12`}>{item.num}</h3>
              <h4 className="achievement-label mt-4">{item.label}</h4>
              <p className="achievement-desc mt-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. JOURNEY TIMELINE — Chronological Milestones (2017-2023) */}
      <section className="section-wrapper bg-navy about-timeline-section">
        <div className="section-header-block text-center reveal-on-scroll">
          <div className="pill-label dark-theme">
            <Calendar size={12} color="#F59E0B" />
            CHRONOLOGICAL GROWTH
          </div>

          <h2 className="section-heading-large text-white">
            Matricula Journey
          </h2>

          <p className="section-subtitle text-slate mt-8">
            Major milestones from a local Kolkata center to East India's leading EdTech platform.
          </p>
        </div>

        <div className="timeline-stage-wrapper reveal-on-scroll" ref={timelineRef}>
          <div className="timeline-rail">
            <div 
              className="timeline-progress-fill" 
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          <div className="timeline-items-list">
            {timelineData.map((item, idx) => {
              const isActive = activeNodes[idx];
              return (
                <div key={idx} className={`timeline-item ${isActive ? 'in-view' : ''}`}>
                  <div className={`timeline-node ${isActive ? 'active-node' : ''}`}>
                    <div className="node-inner-dot"></div>
                  </div>

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

      {/* 6. TEAM — Core Leadership & Mentors */}
      <section className="section-wrapper bg-light team-section">
        <div className="section-header-block text-center reveal-on-scroll">
          <div className="pill-label">
            <Users size={12} color="#D7473B" />
            THE PEOPLE BEHIND MATRICULA
          </div>

          <h2 className="section-heading-large">
            Meet Our Core Team
          </h2>

          <p className="section-subtitle mt-8">
            Dedicated educators, academicians, and innovators committed to student transformation.
          </p>
        </div>

        <div className="team-grid mt-24 reveal-on-scroll">
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

      {/* 7. APP DOWNLOAD — High-Conversion Call To Action Banner */}
      <section className="section-wrapper bg-navy about-app-download-section">
        <div className="about-cta-box card-base reveal-on-scroll">
          {/* App Feature Showcase Banner Image */}
          <div className="cta-banner-image-container">
            <a href={appLink} target="_blank" rel="noopener noreferrer">
              <img 
                src="/app-download-banner.png" 
                alt="Matricula Learning App - no talent lies latent" 
                className="cta-banner-img" 
              />
            </a>
          </div>

          <div className="cta-content-block text-center mt-16">
            <p className="cta-subtext text-slate">
              Download the <strong>Matricula Learning App</strong> for live interactive classes, structured notes, chapterwise mock tests, and MANTRA 2026 priority alerts.
            </p>

            <a 
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-red cta-download-btn mt-16"
            >
              <span>Download the App</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Global CTA Footer */}
      <Footer />

      {/* Floating Bottom Right Home Widget */}
      <SubpageHomeWidget onGoHome={onGoHome} />
    </div>
  );
}

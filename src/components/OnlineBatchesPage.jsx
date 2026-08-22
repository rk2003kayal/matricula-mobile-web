import React from 'react';
import { 
  ArrowLeft, ArrowRight, BookOpen, GraduationCap, 
  Sparkles, CheckCircle2, Award, Star, Users, ShieldCheck
} from 'lucide-react';
import Footer from './Footer';
import SubpageHomeWidget from './SubpageHomeWidget';
import './OnlineBatchesPage.css';

export default function OnlineBatchesPage({ onBack, onGoHome, onOpenEnquire }) {
  const appLink = "https://play.google.com/store/apps/details?id=co.barney.qiilc&pcampaignid=web_share";

  const batchOptions = [
    {
      title: 'Class 9 WBBSE Online Batch',
      bannerImg: '/wb-class-9-banner.png',
      badge: 'WBBSE CLASS 9',
      desc: 'Foundation building in Physical Science, Life Science, Mathematics & English with chapterwise live interactive classes and Bangla medium notes.',
    },
    {
      title: 'Class 10 WBBSE Madhyamik Ranker Batch',
      bannerImg: '/wb-class-10-banner.png',
      badge: 'MADHYAMIK 2026',
      desc: 'Complete WBBSE Madhyamik syllabus coverage, intensive test series rehearsal, previous 10-year paper solutions, and board ranker mentorship.',
    },
    {
      title: 'Class 11 WBCHSE Science & Arts Batch',
      bannerImg: '/wb-class-11-banner.png',
      badge: 'WBCHSE CLASS 11',
      desc: 'In-depth concepts in Physics, Chemistry, Mathematics & Biology tailored for WBCHSE Higher Secondary foundation and competitive preparation.',
    },
    {
      title: 'Class 12 WBCHSE HS Target Batch',
      badge: 'HS 2026 TARGET',
      bannerImg: '/wb-class-12-banner.png',
      desc: 'Comprehensive Class 12 WBCHSE HS Exam preparation, rapid revision modules, model test papers & score optimization strategies for top ranks.',
    },
  ];

  const targetAudience = [
    {
      role: 'Class 9 Students',
      icon: <GraduationCap size={24} color="#D7473B" />,
      desc: 'Build strong basics early in Science, Mathematics & English for school exams.',
    },
    {
      role: 'Madhyamik Candidates',
      icon: <Award size={24} color="#F59E0B" />,
      desc: 'Master the WBBSE Madhyamik curriculum with targeted question practice & mock tests.',
    },
    {
      role: 'Class 11 Students',
      icon: <BookOpen size={24} color="#17375E" />,
      desc: 'Transition smoothly into Higher Secondary topics with clear conceptual clarity.',
    },
    {
      role: 'HS 2026 Candidates',
      icon: <Sparkles size={24} color="#D7473B" />,
      desc: 'Score top percentages in WBCHSE Board exams with high-yield revision notes.',
    },
  ];

  const learningStoryPoints = [
    {
      title: 'Live Interactive Classes in Bangla',
      desc: 'Learn directly from Bengal’s top teachers in your own language with real-time Q&A.',
    },
    {
      title: 'Comprehensive Study Material',
      desc: 'High-quality chapterwise notes, model question banks, and suggested sample papers.',
    },
    {
      title: 'Dedicated Doubt Clearing Sessions',
      desc: 'Never leave a topic unclear — dedicated weekly doubt resolution classes for all subjects.',
    },
    {
      title: 'Regular Chapterwise Tests & Mock Exams',
      desc: 'Evaluate progress with periodic test series modeled strictly according to WB Board patterns.',
    },
    {
      title: 'Recorded Class Backups',
      desc: 'Missed a class? Re-watch any live session anytime on our app for revision.',
    },
    {
      title: 'Parent-Teacher Updates',
      desc: 'Regular attendance monitoring and test performance reports sent to guardians.',
    },
  ];

  const whyMatriculaPoints = [
    {
      title: 'Concept-First Teaching',
      desc: 'Understand deep concepts easily through practical examples and visual explanations.',
    },
    {
      title: 'Experienced Faculty',
      desc: 'Mentored by educators with decades of rank-producing track records in WBBSE & WBCHSE.',
    },
    {
      title: 'Strict Board Alignment',
      desc: 'Syllabus and test papers aligned strictly with current WBBSE and WBCHSE council guidelines.',
    },
    {
      title: 'Affordable Fee Structure',
      desc: 'Premium quality education accessible to every student across West Bengal.',
    },
    {
      title: 'Doubt Solving Support',
      desc: 'Instant help with difficult numericals, reaction mechanisms, and grammar rules.',
    },
    {
      title: 'Performance Rewards',
      desc: 'Merit certificates and rewards to keep students motivated throughout the year.',
    },
  ];

  return (
    <div className="online-batches-page-view animate-fadeIn">
      {/* Top Header with Centered Logo & Back Arrow */}
      <header className="online-header sticky-top">
        <div className="online-header-container">
          <div className="header-left-actions">
            <button className="back-arrow-icon-btn" onClick={onBack} aria-label="Back">
              <ArrowLeft size={20} color="#FFFFFF" />
            </button>
          </div>
          
          <img 
            src="/matricula-logo.png" 
            alt="Matricula Logo" 
            className="online-header-logo" 
            onClick={onGoHome}
            style={{ cursor: 'pointer' }}
          />

          <div className="header-spacer-right"></div>
        </div>
      </header>

      {/* 1. Hero Section / Introduction */}
      <section className="section-wrapper bg-navy online-hero-section">
        <div className="online-hero-content text-center reveal-on-scroll">
          <div className="pill-label dark-theme hero-tag-pill">
            <BookOpen size={12} color="#F59E0B" fill="#F59E0B" />
            WB BOARD ONLINE BATCHES
          </div>

          <h1 className="online-hero-headline text-white mt-12">
            ONLINE BATCHES FOR WB BOARD<br />
            <span className="text-red">CLASS 9, 10, 11 & 12</span>
          </h1>

          <div className="hero-intro-card mt-18">
            <p className="hero-subtext">
              Master the West Bengal Board syllabus in <strong>Bangla medium</strong> with top educators. 
              Comprehensive online batches for <strong>Class 9, 10 (Madhyamik), 11 & 12 (Higher Secondary)</strong> with live classes, study notes, and regular mock tests.
            </p>

            <p className="hero-tagline-text text-gold mt-12">
              ✨ Learn in your own language, conquer WB Board Exams!
            </p>

            <button className="btn-primary-red hero-enroll-btn mt-20" onClick={onOpenEnquire}>
              <span>Enroll Now</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Course / Batches Section */}
      <section className="section-wrapper bg-light courses-section">
        <div className="section-header-block text-center reveal-on-scroll">
          <div className="pill-label">
            <BookOpen size={12} color="#D7473B" />
            CHOOSE YOUR BATCH
          </div>

          <h2 className="section-heading-large">
            ENROLL TODAY — SELECT THE ONLINE BATCH FOR YOUR CLASS, <span className="text-red">ACHIEVE TOP RANKS!</span>
          </h2>
        </div>

        <div className="courses-grid mt-24 reveal-on-scroll">
          {batchOptions.map((batch, idx) => (
            <div key={idx} className="course-card card-base">
              {/* Class Banner Image */}
              <div className="course-banner-container">
                <img src={batch.bannerImg} alt={batch.title} className="course-banner-img" />
              </div>

              {/* Batch Card Body */}
              <div className="course-card-content">
                <div className="course-badge-row">
                  <span className="course-badge">{batch.badge}</span>
                </div>
                <h3 className="course-title">{batch.title}</h3>
                <p className="course-desc">{batch.desc}</p>
                
                <a 
                  href={appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-outline course-book-btn mt-16"
                >
                  <span>Know more in our App</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Who is this batch for? */}
      <section className="section-wrapper bg-white audience-section">
        <div className="section-header-block text-center reveal-on-scroll">
          <div className="pill-label">
            <Users size={12} color="#D7473B" />
            TARGET AUDIENCE
          </div>

          <h2 className="section-heading-large">
            Who are these batches for?
          </h2>
        </div>

        <div className="audience-grid mt-24 reveal-on-scroll">
          {targetAudience.map((item, idx) => (
            <div key={idx} className="audience-card card-base">
              <div className="audience-icon-box">
                {item.icon}
              </div>
              <h3 className="audience-role-title">{item.role}</h3>
              <p className="audience-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Our Methodology */}
      <section className="section-wrapper bg-navy learning-story-section">
        <div className="section-header-block text-center reveal-on-scroll">
          <div className="pill-label dark-theme">
            <Sparkles size={12} color="#F59E0B" fill="#F59E0B" />
            OUR METHODOLOGY
          </div>

          <h2 className="section-heading-large text-white">
            The learning story begins here.
          </h2>
        </div>

        <div className="story-features-grid mt-24 reveal-on-scroll">
          {learningStoryPoints.map((item, idx) => (
            <div key={idx} className="story-feature-card card-base">
              <div className="feature-check-icon">
                <CheckCircle2 size={22} color="#D7473B" />
              </div>
              <div className="feature-text-block">
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why choose Matricula? */}
      <section className="section-wrapper bg-light why-choose-section">
        <div className="section-header-block text-center reveal-on-scroll">
          <div className="pill-label">
            <ShieldCheck size={12} color="#D7473B" />
            TRUSTED BY THOUSANDS
          </div>

          <h2 className="section-heading-large">
            Why are thousands of WB Board students choosing Matricula?
          </h2>

          <p className="section-subtitle mt-10">
            Matricula doesn't just teach; it develops. Experienced teachers, interactive online classes, proper guidelines, and free resources—all of which come together to help students excel. Join us today.
          </p>
        </div>

        <div className="why-grid mt-24 reveal-on-scroll">
          {whyMatriculaPoints.map((item, idx) => (
            <div key={idx} className="why-card card-base">
              <div className="why-star-icon">
                <Star size={18} color="#D7473B" fill="#D7473B" />
              </div>
              <div className="why-text-block">
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call To Action Banner */}
        <div className="online-bottom-cta-box text-center mt-32 reveal-on-scroll">
          <h3 className="cta-headline text-white">Ready to excel in your WB Board Exams?</h3>
          <p className="cta-subtext text-slate mt-8">Download the app to explore Class 9, 10, 11 & 12 batches!</p>
          <a 
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-red cta-action-btn mt-16"
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
  );
}

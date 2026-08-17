import React from 'react';
import { 
  ArrowLeft, ArrowRight, MessageSquare, BookOpen, GraduationCap, 
  Briefcase, Sparkles, CheckCircle2, Award, Heart, HelpCircle, Star, Users, User, ShieldCheck
} from 'lucide-react';
import Footer from './Footer';
import './SpokenEnglishPage.css';

export default function SpokenEnglishPage({ onBack, onOpenEnquire }) {
  const courseOptions = [
    {
      title: 'Spoken English Course (Basic)',
      bannerImg: '/spoken-basic-banner.png',
      badge: 'FOUNDATION',
      desc: 'Master foundation grammar, essential sentence structures, everyday vocabulary, and overcome fear of speaking in Bangla.',
    },
    {
      title: 'Spoken English Course (Intermediate)',
      bannerImg: '/spoken-intermediate-banner.png',
      badge: 'FLUENCY & ACCENT',
      desc: 'Build continuous conversational fluency, pronunciation & accent refinement, public speaking basics, and group discussions.',
    },
    {
      title: 'Spoken English Course (Advanced)',
      bannerImg: '/spoken-advance-banner.png',
      badge: 'MASTERY & DEBATE',
      desc: 'Master corporate English, advanced vocabulary, spontaneous debating, professional presentations, and leadership speech.',
    },
    {
      title: 'Spoken English for IELTS, EFL & Job Interviews',
      bannerImg: '/spoken-ielts-banner.png',
      badge: 'CAREER & TEST PREP',
      desc: 'Targeted preparation for HR job interviews, IELTS Speaking module, corporate meetings, and global career opportunities.',
    },
  ];

  const targetAudience = [
    {
      role: 'Student',
      icon: <GraduationCap size={24} color="#D7473B" />,
      desc: 'Go beyond the boundaries of school textbooks and master new and essential concepts.',
    },
    {
      role: 'Career Shifters',
      icon: <Briefcase size={24} color="#F59E0B" />,
      desc: 'Get the right direction and inspiration today to confidently step into a new path.',
    },
    {
      role: 'Working Professionals',
      icon: <Award size={24} color="#17375E" />,
      desc: 'Build your skills to improve your work skills and reach the threshold of success in your career.',
    },
    {
      role: 'Guardian',
      icon: <Heart size={24} color="#D7473B" />,
      desc: 'Build your dream story while staying with your family.',
    },
    {
      role: 'Freelancer',
      icon: <Users size={24} color="#38BDF8" />,
      desc: 'Make freelance work bigger, easier, and smarter.',
    },
    {
      role: 'Dreamer',
      icon: <Sparkles size={24} color="#F59E0B" />,
      desc: 'Learn the direction and strategies to build your own dream path, and draw your own map of success.',
    },
  ];

  const learningStoryPoints = [
    {
      title: 'Learning is fun',
      desc: 'Learning is made fun through interactive activities, where students can participate and easily understand difficult topics.',
    },
    {
      title: 'Smart learning range',
      desc: 'Learning in the classroom is made more vibrant and productive through cutting-edge technology and digital tools.',
    },
    {
      title: 'The best teacher, the right direction',
      desc: 'Experienced and enthusiastic teachers facilitate the learning path by providing guidance according to each student\'s potential.',
    },
    {
      title: 'Premium Study Material',
      desc: 'High-quality notes, model questions, and guidelines tailored to students enhance learning.',
    },
    {
      title: 'Regular evaluation and feedback',
      desc: 'Students\' progress is assessed through tests and quizzes so that they can understand their areas of improvement.',
    },
    {
      title: 'Easy-to-understand method',
      desc: 'Stories, charts, animation, and examples are used to make even difficult topics easy to understand.',
    },
  ];

  const whyMatriculaPoints = [
    {
      title: 'Learning through storytelling',
      desc: 'Learning becomes easier to remember.',
    },
    {
      title: 'Interactive Sessions',
      desc: 'An opportunity to learn directly.',
    },
    {
      title: 'Supportive Environment',
      desc: 'A pleasant environment for learning.',
    },
    {
      title: 'Collaborative Learning',
      desc: 'Learn together and understand different perspectives.',
    },
    {
      title: 'Doubt Clearing Sessions',
      desc: 'Ask questions, solve problems.',
    },
    {
      title: 'Small Quizzes & Rewards',
      desc: 'Fun along with learning.',
    },
  ];

  return (
    <div className="spoken-page-view animate-fadeIn">
      {/* Top Header with Centered Logo & No Enquire Button */}
      <header className="spoken-header sticky-top">
        <div className="spoken-header-container">
          <button className="back-arrow-icon-btn" onClick={onBack} aria-label="Back to Home">
            <ArrowLeft size={22} color="#17375E" />
          </button>
          
          <img 
            src="/matricula-logo.png" 
            alt="Matricula Logo" 
            className="spoken-header-logo" 
            onClick={onBack}
            style={{ cursor: 'pointer' }}
          />

          <div className="header-spacer-right"></div>
        </div>
      </header>

      {/* 1. Hero Section / Introduction */}
      <section className="section-wrapper bg-navy spoken-hero-section">
        <div className="spoken-hero-content text-center">
          <div className="pill-label dark-theme hero-tag-pill">
            <MessageSquare size={12} color="#F59E0B" fill="#F59E0B" />
            SPOKEN ENGLISH WITH PURBALI MA'AM
          </div>

          <h1 className="spoken-hero-headline text-white mt-12">
            ARE YOU AFRAID TO SPEAK ENGLISH?<br />
            <span className="text-red">YOU'RE NOT ALONE.</span>
          </h1>

          <div className="hero-intro-card mt-18">
            <p className="hero-subtext">
              Learning Spoken English will be very easy in <strong>Purbali Ma'am's</strong> classes. 
              Everything from Basic to Advanced is taught in <strong>Bangla</strong>, with practical examples and a step-by-step teaching method. English will be your friend.
            </p>

            <p className="hero-tagline-text text-gold mt-12">
              ✨ Learn in your own language, conquer in English!
            </p>

            <button className="btn-primary-red hero-enroll-btn mt-20" onClick={onOpenEnquire}>
              <span>Enroll Now</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Course Section */}
      <section className="section-wrapper bg-light courses-section">
        <div className="section-header-block text-center">
          <div className="pill-label">
            <BookOpen size={12} color="#D7473B" />
            CHOOSE YOUR COURSE
          </div>

          <h2 className="section-heading-large">
            ENROLL TODAY — CHOOSE THE COURSE THAT SUITS YOUR NEEDS, <span className="text-red">SPEAK WITH CONFIDENCE!</span>
          </h2>
        </div>

        <div className="courses-grid mt-24">
          {courseOptions.map((course, idx) => (
            <div key={idx} className="course-card card-base">
              {/* Course Banner Image */}
              <div className="course-banner-container">
                <img src={course.bannerImg} alt={course.title} className="course-banner-img" />
              </div>

              {/* Course Card Body */}
              <div className="course-card-content">
                <div className="course-badge-row">
                  <span className="course-badge">{course.badge}</span>
                </div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.desc}</p>
                
                <button className="btn-secondary-outline course-book-btn mt-16" onClick={onOpenEnquire}>
                  <span>Book a free class</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Who is this course for? */}
      <section className="section-wrapper bg-white audience-section">
        <div className="section-header-block text-center">
          <div className="pill-label">
            <Users size={12} color="#D7473B" />
            TARGET AUDIENCE
          </div>

          <h2 className="section-heading-large">
            Who is this course for?
          </h2>
        </div>

        <div className="audience-grid mt-24">
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

      {/* 4. The learning story begins here */}
      <section className="section-wrapper bg-navy learning-story-section">
        <div className="section-header-block text-center">
          <div className="pill-label dark-theme">
            <Sparkles size={12} color="#F59E0B" fill="#F59E0B" />
            OUR METHODOLOGY
          </div>

          <h2 className="section-heading-large text-white">
            The learning story begins here.
          </h2>
        </div>

        <div className="story-features-grid mt-24">
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

      {/* 5. Why are thousands of students choosing Matricula? */}
      <section className="section-wrapper bg-light why-choose-section">
        <div className="section-header-block text-center">
          <div className="pill-label">
            <ShieldCheck size={12} color="#D7473B" />
            TRUSTED BY THOUSANDS
          </div>

          <h2 className="section-heading-large">
            Why are thousands of students choosing Matricula?
          </h2>

          <p className="section-subtitle mt-10">
            Matricula doesn't just teach; it develops. Experienced teachers, interactive classes, proper guidelines, and free resources—all of which come together, and students trust Matricula. Join us today.
          </p>
        </div>

        <div className="why-grid mt-24">
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
        <div className="spoken-bottom-cta-box card-base bg-navy text-center mt-32">
          <h3 className="cta-headline text-white">Ready to speak English with confidence?</h3>
          <p className="cta-subtext text-slate mt-8">Book your free trial class today with Purbali Ma'am!</p>
          <button className="btn-primary-red cta-action-btn mt-16" onClick={onOpenEnquire}>
            <span>Book a free class</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Global CTA Footer */}
      <Footer />
    </div>
  );
}

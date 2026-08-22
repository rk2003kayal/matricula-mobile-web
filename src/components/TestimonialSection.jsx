import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, UserCheck, GraduationCap, HeartHandshake } from 'lucide-react';
import './TestimonialSection.css';

export default function TestimonialSection() {
  const [activeTab, setActiveTab] = useState('students'); // 'students' | 'parents'
  const [studentIndex, setStudentIndex] = useState(0);
  const [parentIndex, setParentIndex] = useState(0);

  // 10 Student Reviews
  const studentReviews = [
    {
      id: 1,
      name: 'Arpan Sarkar',
      classBoard: 'Class 10 • WBBSE',
      achievement: '96.2% in Board Exams',
      quote: 'Matricula changed the way I study! The teachers made complex Mathematics concepts so intuitive and clear. Regular mock tests helped me conquer exam fear.',
      avatarBg: '#D7473B',
      initials: 'AS',
    },
    {
      id: 2,
      name: 'Ananya Roy',
      classBoard: 'Class 12 • WBCHSE',
      achievement: 'WBCHSE Rank 14 & 95.8%',
      quote: 'The faculty at Siliguri branch gave me personalized attention. Their concept-clearing doubt sessions were pivotal for my Physics preparation.',
      avatarBg: '#17375E',
      initials: 'AR',
    },
    {
      id: 3,
      name: 'Rahul Ghosh',
      classBoard: 'JEE Aspirant • Class 12',
      achievement: 'JEE Main 99.4 Percentile',
      quote: 'MANTRA mock exam gave me the exact competitive bench-marking I needed. The test series & problem-solving shortcuts were spot on!',
      avatarBg: '#718198',
      initials: 'RG',
    },
    {
      id: 4,
      name: 'Sayan Chowdhury',
      classBoard: 'Class 10 • WBBSE',
      achievement: '98/100 in Physical Science',
      quote: 'The small batch sizes meant teachers noticed where I was struggling immediately. I improved from 72% to 94% in 8 months.',
      avatarBg: '#D7473B',
      initials: 'SC',
    },
    {
      id: 5,
      name: 'Priya Das',
      classBoard: 'NEET Aspirant • Class 12',
      achievement: 'NEET Score 675/720',
      quote: 'Biology and Chemistry faculties at Matricula are top notch. Their mnemonic tricks and NCERT line-by-line focus made NEET prep seamless.',
      avatarBg: '#17375E',
      initials: 'PD',
    },
    {
      id: 6,
      name: 'Bikram Mukherjee',
      classBoard: 'Class 9 • WBBSE',
      achievement: 'Class Topper & MANTRA Scholar',
      quote: 'Winning 100% scholarship through MANTRA motivated me immensely. The foundation classes in Class 9 made Class 10 boards feel so easy!',
      avatarBg: '#F59E0B',
      initials: 'BM',
    },
    {
      id: 7,
      name: 'Debasmita Paul',
      classBoard: 'Class 11 • WBCHSE',
      achievement: '94.5% in Annual Exams',
      quote: 'Transition from Class 10 to 11 is tough, but Matricula mentors made organic chemistry and calculus super friendly.',
      avatarBg: '#718198',
      initials: 'DP',
    },
    {
      id: 8,
      name: 'Subhajit Maiti',
      classBoard: 'JEE Advanced Ranker',
      achievement: 'AIR 1280 in JEE Adv',
      quote: 'The problem sets provided at Siliguri offline center matched JEE Advanced level difficulty perfectly. Highly recommended!',
      avatarBg: '#17375E',
      initials: 'SM',
    },
    {
      id: 9,
      name: 'Riya Sen',
      classBoard: 'Class 10 • WBBSE',
      achievement: '95.4% in Board Exams',
      quote: 'Weekly objective test series and personalized report cards kept my progress transparent. Thank you Matricula!',
      avatarBg: '#D7473B',
      initials: 'RS',
    },
    {
      id: 10,
      name: 'Ayan Banerjee',
      classBoard: 'Class 12 • WBCHSE',
      achievement: '96.0% in Boards',
      quote: 'The doubt counter was open till late evening before board exams. The guidance from faculty felt like having personal mentors.',
      avatarBg: '#F59E0B',
      initials: 'AB',
    },
  ];

  // 10 Parent Reviews
  const parentReviews = [
    {
      id: 1,
      name: 'Sujit Kumar Sarkar',
      relation: 'Father of Arpan Sarkar (Class 10)',
      achievement: 'Parent Satisfaction: 5/5 Stars',
      quote: 'Matricula provided structured discipline and regular parent-teacher updates. Watching my son gain confidence in Maths was priceless.',
      avatarBg: '#17375E',
      initials: 'SS',
    },
    {
      id: 2,
      name: 'Kakali Roy',
      relation: 'Mother of Ananya Roy (Class 12)',
      achievement: 'Parent Satisfaction: 5/5 Stars',
      quote: 'The safety, academic environment, and dedication of teachers at Siliguri branch are exemplary. Highly recommend for board preparation!',
      avatarBg: '#D7473B',
      initials: 'KR',
    },
    {
      id: 3,
      name: 'Dr. P. K. Ghosh',
      relation: 'Father of Rahul Ghosh (JEE Aspirant)',
      achievement: 'Parent Satisfaction: 5/5 Stars',
      quote: 'As a doctor, I wanted analytical rigor for my son. Matricula\'s scientific approach and competitive exam focus delivered outstanding results.',
      avatarBg: '#718198',
      initials: 'PG',
    },
    {
      id: 4,
      name: 'Manas Das',
      relation: 'Father of Priya Das (NEET Aspirant)',
      achievement: 'Parent Satisfaction: 5/5 Stars',
      quote: 'The faculty didn\'t just teach syllabus; they mentored my daughter emotionally through stress before exams. True educational leaders.',
      avatarBg: '#17375E',
      initials: 'MD',
    },
    {
      id: 5,
      name: 'Barnali Chowdhury',
      relation: 'Mother of Sayan Chowdhury (Class 10)',
      achievement: 'Parent Satisfaction: 5/5 Stars',
      quote: 'Frequent progress reports and concept tests showed me exactly where Sayan was improving. His board percentage speaks for itself!',
      avatarBg: '#D7473B',
      initials: 'BC',
    },
    {
      id: 6,
      name: 'Dipankar Mukherjee',
      relation: 'Father of Bikram Mukherjee (Class 9)',
      achievement: 'Parent Satisfaction: 5/5 Stars',
      quote: 'MANTRA scholarship talent exam gave my son national-level exposure at such an early age. Best coaching decision we made.',
      avatarBg: '#F59E0B',
      initials: 'DM',
    },
    {
      id: 7,
      name: 'Soumen Paul',
      relation: 'Father of Debasmita Paul (Class 11)',
      achievement: 'Parent Satisfaction: 5/5 Stars',
      quote: 'The atmosphere at Matricula campus is quiet, focused, and deeply encouraging. Fees are transparent and value provided is immense.',
      avatarBg: '#718198',
      initials: 'SP',
    },
    {
      id: 8,
      name: 'Tania Banerjee',
      relation: 'Mother of Ayan Banerjee (Class 12)',
      achievement: 'Parent Satisfaction: 5/5 Stars',
      quote: 'Individual attention given to every student sets Matricula apart from crowded commercial institutes. Highly satisfied!',
      avatarBg: '#17375E',
      initials: 'TB',
    },
    {
      id: 9,
      name: 'Rabindra Nath Sen',
      relation: 'Father of Riya Sen (Class 10)',
      achievement: 'Parent Satisfaction: 5/5 Stars',
      quote: 'My daughter went from fearing Mathematics to scoring 96 in boards. The foundation laid by Matricula teachers is incredible.',
      avatarBg: '#D7473B',
      initials: 'RS',
    },
    {
      id: 10,
      name: 'Amitabh Maiti',
      relation: 'Father of Subhajit Maiti (JEE Adv)',
      achievement: 'Parent Satisfaction: 5/5 Stars',
      quote: 'The Siliguri center\'s administrative team and faculty are easily accessible to parents anytime. We felt fully supported throughout.',
      avatarBg: '#F59E0B',
      initials: 'AM',
    },
  ];

  const currentList = activeTab === 'students' ? studentReviews : parentReviews;
  const currentIndex = activeTab === 'students' ? studentIndex : parentIndex;
  const setCurrentIndex = activeTab === 'students' ? setStudentIndex : setParentIndex;

  // Auto-swiping Timer Effect (3.5 seconds interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentList.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [activeTab, currentList.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % currentList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + currentList.length) % currentList.length);
  };

  const current = currentList[currentIndex];

  return (
    <section id="testimonials" className="section-wrapper bg-white testimonial-section">
      <div className="section-header-block reveal-on-scroll">
        <div className="pill-label">
          <span className="dot-red"></span>
          COMMUNITY VOICES
          <span className="dot-red"></span>
        </div>

        <h2 className="section-heading-large">
          Real Stories,<br />
          <span className="text-red">Real Achievements.</span>
        </h2>

        <p className="section-subtitle">
          Hear from our students and parents who experienced the Matricula difference.
        </p>

        {/* Switchable Tabs: Students | Parents */}
        <div className="testimonial-tab-toggle">
          <button 
            className={`tab-toggle-btn ${activeTab === 'students' ? 'active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            <GraduationCap size={16} />
            <span>Students (10)</span>
          </button>
          <button 
            className={`tab-toggle-btn ${activeTab === 'parents' ? 'active' : ''}`}
            onClick={() => setActiveTab('parents')}
          >
            <HeartHandshake size={16} />
            <span>Parents (10)</span>
          </button>
        </div>
      </div>

      {/* Auto-Swiping Testimonial Card */}
      <div className="testimonial-slider-card card-base reveal-on-scroll">
        <div className="card-top-row">
          <div className="stars-row">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
            ))}
          </div>

          <Quote size={28} color="#D7473B" opacity={0.3} />
        </div>

        <p className="testimonial-quote-text">
          "{current.quote}"
        </p>

        <div className="testimonial-divider"></div>

        <div className="student-profile-row">
          <div className="student-avatar" style={{ backgroundColor: current.avatarBg }}>
            <span>{current.initials}</span>
          </div>

          <div className="student-details">
            <h4 className="student-name">{current.name}</h4>
            <p className="student-class">
              {activeTab === 'students' ? current.classBoard : current.relation}
            </p>
            <div className="student-achievement-badge">
              <span>{activeTab === 'students' ? 'Achievement: ' : 'Rating: '}</span>
              <strong>{current.achievement}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation & Counter Indicator */}
      <div className="slider-controls">
        <button className="slider-arrow-btn" onClick={handlePrev} aria-label="Previous Testimonial">
          <ChevronLeft size={20} color="#17375E" />
        </button>

        <div className="dots-indicator">
          {currentList.map((_, idx) => (
            <button
              key={idx}
              className={`dot-btn ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>

        <button className="slider-arrow-btn" onClick={handleNext} aria-label="Next Testimonial">
          <ChevronRight size={20} color="#17375E" />
        </button>
      </div>
    </section>
  );
}

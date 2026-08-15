import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FaqSection.css';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      num: '01',
      question: 'Which classes does Matricula teach?',
      answer: 'Matricula teaches WBBSE & WBCHSE students from Classes 9 to 12, along with specialized competitive exam coaching for JEE and NEET.',
    },
    {
      num: '02',
      question: 'Where is the offline coaching branch located?',
      answer: 'Our flagship offline branch is located in Siliguri, featuring modern classrooms, dedicated faculty, and high-frequency testing facilities.',
    },
    {
      num: '03',
      question: 'What is the MANTRA Scholarship Exam?',
      answer: 'MANTRA (Matricula Academic Talent & Recognition Assessment) is our flagship state-wide talent exam for Classes 9–12, awarding up to 100% scholarship and cash prizes.',
    },
    {
      num: '04',
      question: 'What is the batch size at Matricula?',
      answer: 'We maintain optimum batch sizes to ensure every student receives personalized attention, regular doubt resolution, and continuous monitoring.',
    },
    {
      num: '05',
      question: 'How can I enroll or book a counseling session?',
      answer: 'You can click on "Enquire Now" or fill out the offline course inquiry form above. Our academic advisor will contact you within 24 hours.',
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-wrapper bg-white faq-section">
      <div className="section-header-block">
        <div className="pill-label">
          <span className="dot-red"></span>
          FREQUENTLY ASKED QUESTIONS
          <span className="dot-red"></span>
        </div>

        <h2 className="section-heading-large">
          Got Questions?<br />
          <span className="text-red">We've Got Answers.</span>
        </h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className={`faq-accordion-card ${isOpen ? 'open' : ''}`}>
              <button className="faq-question-btn" onClick={() => toggleFaq(idx)}>
                <span className="faq-num">{faq.num}</span>
                <span className="faq-question-text">{faq.question}</span>
                <div className="faq-toggle-icon">
                  {isOpen ? <Minus size={18} color="#D7473B" /> : <Plus size={18} color="#17375E" />}
                </div>
              </button>

              {isOpen && (
                <div className="faq-answer-body animate-fadeIn">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

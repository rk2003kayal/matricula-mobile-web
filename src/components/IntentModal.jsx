import React, { useState } from 'react';
import { X, Search, CheckCircle2, ArrowRight } from 'lucide-react';
import './IntentModal.css';

export default function IntentModal({ isOpen, onClose, onSelectIntent }) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  if (!isOpen) return null;

  const intentOptions = [
    { id: 'marks', label: 'Better Marks', icon: '📈', desc: 'Targeted strategies for 90%+ in WBBSE & WBCHSE board exams.' },
    { id: 'jee-neet', label: 'JEE / NEET', icon: '🎯', desc: 'Siliguri offline branch coaching with top faculty & test series.' },
    { id: 'scholarship', label: 'Scholarship', icon: '🏆', desc: 'MANTRA Flagship Talent Exam with up to 100% fee waiver & cash awards.' },
    { id: 'board', label: 'Board Preparation', icon: '📚', desc: 'Comprehensive coverage of Classes 9 to 12 syllabus with mock tests.' },
    { id: 'concept', label: 'Concept Clarity', icon: '💡', desc: 'Small batch size ensuring personal attention and deep clarity.' },
    { id: 'career', label: 'Career Guidance', icon: '🧭', desc: '1-on-1 expert counseling to choose the right academic stream.' },
  ];

  const handleSelect = (option) => {
    setSelectedTopic(option);
  };

  return (
    <div className="intent-modal-backdrop" onClick={onClose}>
      <div className="intent-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-title">
            <Search size={20} color="#D7473B" />
            <h3>What made you come here?</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} color="#17375E" />
          </button>
        </div>

        <p className="modal-subtitle">
          Select what you're looking for to get instant tailored guidance:
        </p>

        <div className="intent-options-grid">
          {intentOptions.map((opt) => {
            const isSelected = selectedTopic?.id === opt.id;
            return (
              <button 
                key={opt.id} 
                className={`intent-chip-card ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSelect(opt)}
              >
                <span className="chip-icon">{opt.icon}</span>
                <span className="chip-label">{opt.label}</span>
                {isSelected && <CheckCircle2 size={16} className="chip-check" color="#D7473B" />}
              </button>
            );
          })}
        </div>

        {selectedTopic && (
          <div className="intent-recommendation-box animate-fadeIn">
            <div className="rec-badge">TAILORED RECOMMENDATION</div>
            <h4 className="rec-title">{selectedTopic.icon} {selectedTopic.label}</h4>
            <p className="rec-desc">{selectedTopic.desc}</p>
            <button 
              className="btn-primary-red w-full mt-12"
              onClick={() => {
                onClose();
                onSelectIntent(selectedTopic.label);
              }}
            >
              <span>Get Details for {selectedTopic.label}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

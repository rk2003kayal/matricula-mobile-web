import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntentModal from './components/IntentModal';
import AboutSection from './components/AboutSection';
import JeeNeetSection from './components/JeeNeetSection';
import MantraSection from './components/MantraSection';
import TestimonialSection from './components/TestimonialSection';
import StatsSection from './components/StatsSection';
import VisionariesSection from './components/VisionariesSection';
import FaqSection from './components/FaqSection';
import EnquireModal from './components/EnquireModal';
import StickyCta from './components/StickyCta';
import Footer from './components/Footer';
import TeachersModal from './components/TeachersModal';

export default function App() {
  const [isIntentOpen, setIsIntentOpen] = useState(false);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [isTeachersOpen, setIsTeachersOpen] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState('');

  const handleOpenIntent = () => {
    setIsIntentOpen(true);
  };

  const handleOpenEnquire = () => {
    setIsEnquireOpen(true);
  };

  const handleSelectIntent = (intentLabel) => {
    setSelectedIntent(intentLabel);
    setIsEnquireOpen(true);
  };

  return (
    <div className="mobile-app-viewport">
      {/* Sticky Header */}
      <Header onOpenEnquire={handleOpenEnquire} />

      {/* Main Content Sections with Design Rhythm */}
      <main>
        {/* 1. Hero Section (Light + Thought Bubbles + Intent Bar) */}
        <Hero onOpenIntent={handleOpenIntent} />

        {/* 2. About Section (White + Pill Labels + 4 Cards) */}
        <AboutSection onOpenEnquire={handleOpenEnquire} />

        {/* 3. JEE / NEET Section (Light Tint + Siliguri Branch Form) */}
        <JeeNeetSection />

        {/* 4. MANTRA Section (Dark Navy Sub-brand + Gold Accents) */}
        <MantraSection onOpenEnquire={handleOpenEnquire} />

        {/* 5. Testimonial Section (White + Auto/Touch Slider) */}
        <TestimonialSection />

        {/* 6. Stats Section (Navy + Red Numbers) */}
        <StatsSection />

        {/* 7. Visionaries Section (2 Side-by-Side Founders + Teachers Button) */}
        <VisionariesSection onOpenTeachers={() => setIsTeachersOpen(true)} />

        {/* 8. FAQ Section (White + Accordion Cards) */}
        <FaqSection />
      </main>

      {/* Footer (Dark Navy) */}
      <Footer />

      {/* Floating Mobile Sticky CTA */}
      <StickyCta onOpenEnquire={handleOpenEnquire} />

      {/* Interactive Modals & Sub-pages */}
      <IntentModal 
        isOpen={isIntentOpen} 
        onClose={() => setIsIntentOpen(false)} 
        onSelectIntent={handleSelectIntent}
      />

      <EnquireModal 
        isOpen={isEnquireOpen} 
        onClose={() => setIsEnquireOpen(false)} 
        initialIntent={selectedIntent}
      />

      <TeachersModal
        isOpen={isTeachersOpen}
        onClose={() => setIsTeachersOpen(false)}
        onOpenEnquire={handleOpenEnquire}
      />
    </div>
  );
}

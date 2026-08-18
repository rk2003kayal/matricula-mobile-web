import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntentModal from './components/IntentModal';
import AboutSection from './components/AboutSection';
import JeeNeetSection from './components/JeeNeetSection';
import MantraSection from './components/MantraSection';
import TestimonialSection from './components/TestimonialSection';
import MockTestSection from './components/MockTestSection';
import StatsSection from './components/StatsSection';
import VisionariesSection from './components/VisionariesSection';
import FaqSection from './components/FaqSection';
import EnquireModal from './components/EnquireModal';
import StickyCta from './components/StickyCta';
import Footer from './components/Footer';
import TeachersModal from './components/TeachersModal';
import MantraPage from './components/MantraPage';
import TermsPage from './components/TermsPage';
import RefundPage from './components/RefundPage';
import PrivacyPage from './components/PrivacyPage';
import CareersPage from './components/CareersPage';
import AboutPage from './components/AboutPage';
import SpokenEnglishPage from './components/SpokenEnglishPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isIntentOpen, setIsIntentOpen] = useState(false);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState('');

  // Synchronize browser URL history with popstate listener for back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Programmatic client-side navigation handler
  const navigateTo = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    navigateTo('/');
  };

  const handleBackToHome = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      navigateTo('/');
    }
  };

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

  const isTeachersOpen = currentPath === '/mentors';
  const isMantraPage = currentPath === '/mantra';
  const isTermsPage = currentPath === '/terms-and-conditions';
  const isRefundPage = currentPath === '/refund-policy';
  const isPrivacyPage = currentPath === '/privacy-policy';
  const isCareersPage = currentPath === '/careers';
  const isAboutPage = currentPath === '/about-us';
  const isSpokenEnglishPage = currentPath === '/spoken-english';

  // Dedicated /mantra Webpage View
  if (isMantraPage) {
    return (
      <div className="mobile-app-viewport">
        <MantraPage 
          onBack={handleBackToHome}
          onGoHome={handleGoHome}
          onOpenEnquire={handleOpenEnquire}
        />

        <EnquireModal 
          isOpen={isEnquireOpen} 
          onClose={() => setIsEnquireOpen(false)} 
          initialIntent="MANTRA 2026 Registration"
        />
      </div>
    );
  }

  // Dedicated /terms-and-conditions Webpage View
  if (isTermsPage) {
    return (
      <div className="mobile-app-viewport">
        <TermsPage 
          onBack={handleBackToHome}
          onGoHome={handleGoHome}
          onOpenEnquire={handleOpenEnquire}
        />

        <EnquireModal 
          isOpen={isEnquireOpen} 
          onClose={() => setIsEnquireOpen(false)} 
          initialIntent="General Enquiry"
        />
      </div>
    );
  }

  // Dedicated /refund-policy Webpage View
  if (isRefundPage) {
    return (
      <div className="mobile-app-viewport">
        <RefundPage 
          onBack={handleBackToHome}
          onGoHome={handleGoHome}
          onOpenEnquire={handleOpenEnquire}
        />

        <EnquireModal 
          isOpen={isEnquireOpen} 
          onClose={() => setIsEnquireOpen(false)} 
          initialIntent="Refund & Cancellation Enquiry"
        />
      </div>
    );
  }

  // Dedicated /privacy-policy Webpage View
  if (isPrivacyPage) {
    return (
      <div className="mobile-app-viewport">
        <PrivacyPage 
          onBack={handleBackToHome}
          onGoHome={handleGoHome}
          onOpenEnquire={handleOpenEnquire}
        />

        <EnquireModal 
          isOpen={isEnquireOpen} 
          onClose={() => setIsEnquireOpen(false)} 
          initialIntent="Privacy Policy Enquiry"
        />
      </div>
    );
  }

  // Dedicated /careers Webpage View
  if (isCareersPage) {
    return (
      <div className="mobile-app-viewport">
        <CareersPage 
          onBack={handleBackToHome}
          onGoHome={handleGoHome}
          onOpenEnquire={handleOpenEnquire}
        />

        <EnquireModal 
          isOpen={isEnquireOpen} 
          onClose={() => setIsEnquireOpen(false)} 
          initialIntent="Job Application Enquiry"
        />
      </div>
    );
  }

  // Dedicated /about-us Webpage View
  if (isAboutPage) {
    return (
      <div className="mobile-app-viewport">
        <AboutPage 
          onBack={handleBackToHome}
          onGoHome={handleGoHome}
          onOpenEnquire={handleOpenEnquire}
        />

        <EnquireModal 
          isOpen={isEnquireOpen} 
          onClose={() => setIsEnquireOpen(false)} 
          initialIntent="About Matricula Enquiry"
        />
      </div>
    );
  }

  // Dedicated /spoken-english Webpage View
  if (isSpokenEnglishPage) {
    return (
      <div className="mobile-app-viewport">
        <SpokenEnglishPage 
          onBack={handleBackToHome}
          onGoHome={handleGoHome}
          onOpenEnquire={handleOpenEnquire}
        />

        <EnquireModal 
          isOpen={isEnquireOpen} 
          onClose={() => setIsEnquireOpen(false)} 
          initialIntent="Spoken English Enquiry"
        />
      </div>
    );
  }

  return (
    <div className="mobile-app-viewport">
      {/* Sticky Header */}
      <Header 
        onOpenEnquire={handleOpenEnquire} 
        onNavigate={navigateTo}
      />

      {/* Main Content Sections with Design Rhythm */}
      <main>
        {/* 1. Hero Section (Light + Thought Bubbles + Intent Bar) */}
        <Hero onOpenIntent={handleOpenIntent} />

        {/* 2. About Section (White + Pill Labels + 4 Cards) */}
        <AboutSection onOpenEnquire={handleOpenEnquire} />

        {/* 3. JEE / NEET Section (Light Tint + Siliguri Branch Form) */}
        <JeeNeetSection />

        {/* 4. MANTRA Section (Dark Navy Sub-brand + Gold Accents) */}
        <MantraSection 
          onOpenEnquire={handleOpenEnquire}
          onNavigate={navigateTo}
        />

        {/* 5. Testimonial Section (Real Stories & Achievements) */}
        <TestimonialSection />

        {/* 6. Mock Test Section (MATRICULA MOCK TEST Rehearsal) */}
        <MockTestSection onOpenEnquire={handleOpenEnquire} />

        {/* 7. Stats Section (Our Track Record Timeline) */}
        <StatsSection />

        {/* 8. Visionaries Section (2 Side-by-Side Founders + Teachers Button) */}
        <VisionariesSection onOpenTeachers={() => navigateTo('/mentors')} />

        {/* 9. FAQ Section (White + Accordion Cards) */}
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
        onClose={handleBackToHome}
        onGoHome={handleGoHome}
        onOpenEnquire={handleOpenEnquire}
      />
    </div>
  );
}

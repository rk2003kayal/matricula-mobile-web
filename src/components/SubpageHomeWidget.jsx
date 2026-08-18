import React from 'react';
import { Home } from 'lucide-react';
import './SubpageHomeWidget.css';

export default function SubpageHomeWidget({ onGoHome }) {
  return (
    <button 
      className="subpage-bottom-home-btn" 
      onClick={onGoHome} 
      aria-label="Go to Home" 
      title="Go to Home"
    >
      <Home size={22} color="#FFFFFF" />
    </button>
  );
}

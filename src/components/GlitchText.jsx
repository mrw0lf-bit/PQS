import React from 'react';

export default function GlitchText({ text }) {
  return (
    <div className="relative inline-block">
      <div 
        className="glitch-text" 
        data-text={text}
        style={{
          perspective: '1000px',
        }}
      >
        {text}
      </div>
    </div>
  );
}

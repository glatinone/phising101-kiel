import React from 'react';

const SlideCard = ({ children, className = '' }) => (
  <div
    className={`card bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-8 transition-transform duration-300 hover:scale-105 ${className}`}
    style={{ maxWidth: 600, margin: '0 auto' }}
  >
    {children}
  </div>
);

export default SlideCard; 
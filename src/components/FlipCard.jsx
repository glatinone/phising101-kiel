import React, { useState } from 'react';

const FlipCard = ({ front, back, className = '' }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`relative w-56 h-40 perspective ${className}`}
      onClick={() => setFlipped(f => !f)}
      style={{ perspective: 1000, cursor: 'pointer' }}
    >
      <div
        className={`absolute inset-0 transition-transform duration-500 ${flipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-xl shadow-lg backface-hidden">
          {front}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-orange-600 text-white rounded-xl shadow-lg rotate-y-180 backface-hidden">
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard; 
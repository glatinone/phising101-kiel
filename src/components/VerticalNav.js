import React from 'react';

const VerticalNav = ({ current, total, onPrev, onNext, onFullscreen }) => (
  <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
    <button
      onClick={onPrev}
      className="bg-white/80 hover:bg-orange-500 text-orange-700 hover:text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
      aria-label="Previous Slide"
      disabled={current === 0}
    >
      <span className="text-2xl font-bold">&#8593;</span>
    </button>
    <div className="text-white font-bold text-lg select-none">
      {current + 1} / {total}
    </div>
    <button
      onClick={onNext}
      className="bg-white/80 hover:bg-orange-500 text-orange-700 hover:text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
      aria-label="Next Slide"
      disabled={current === total - 1}
    >
      <span className="text-2xl font-bold">&#8595;</span>
    </button>
    <button
      onClick={onFullscreen}
      className="mt-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition"
      aria-label="Fullscreen"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 3H5a2 2 0 00-2 2v3m0 8v3a2 2 0 002 2h3m8-18h3a2 2 0 012 2v3m0 8v3a2 2 0 01-2 2h-3" />
      </svg>
    </button>
  </div>
);

export default VerticalNav; 
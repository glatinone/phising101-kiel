import React, { useState } from 'react';

const clues = [
  { label: 'Alamat pengirim aneh', clue: 'Perhatikan domain pengirim yang tidak biasa.' },
  { label: 'Bahasa mendesak', clue: 'Email meminta tindakan segera.' },
  { label: 'Link tidak sesuai', clue: 'Link tujuan berbeda dengan yang tertulis.' },
  { label: 'File lampiran mencurigakan', clue: 'Ada file yang tidak relevan.' },
  { label: 'Tampilan mirip aslinya', clue: 'Desain meniru institusi resmi.' },
];

const AnimatedEmail = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="bg-white/90 rounded-xl shadow-xl p-6 max-w-lg mx-auto">
      <div className="mb-4 font-bold text-lg text-orange-700">Email Palsu</div>
      <ul className="space-y-2">
        {clues.map((item, idx) => (
          <li
            key={item.label}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className={`transition-colors px-2 py-1 rounded cursor-pointer ${hovered === idx ? 'bg-red-100 text-red-700 font-bold' : 'hover:bg-orange-100'}`}
          >
            {item.label}
            {hovered === idx && (
              <div className="text-xs mt-1 text-red-500 animate-fade-in">{item.clue}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedEmail; 
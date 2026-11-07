import React from 'react';
import { useTypewriter } from '../utils/typewriter';

const TypewriterText = ({ text, speed = 40, className = '' }) => {
  const displayed = useTypewriter(text, speed);
  return <span className={className}>{displayed}</span>;
};

export default TypewriterText; 
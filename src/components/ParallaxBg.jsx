import React, { useRef, useEffect, useState } from 'react';

const ParallaxBg = ({ bgImage, bgColor = '', children, className = '' }) => {
  const ref = useRef();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setOffset(rect.top * 0.2);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-full h-full ${className}`}
      style={{
        background: bgImage
          ? `url(${bgImage}) center/cover no-repeat` : bgColor,
        transform: `translateY(${offset}px)`
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxBg; 
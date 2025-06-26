import React, { useState } from "react";
import PhishingPoster from "./components/PhishingPoster";
import Slide1Title from "./slides/Slide1Title";
import Slide2Speaker from "./slides/Slide2Speaker";
import Slide3Definition from "./slides/Slide3Definition";
import Slide4JenisPhishing from "./slides/Slide4JenisPhishing";
import Slide5CiriPhishing from "./slides/Slide5CiriPhishing";
import Slide6DemoAnalisis from "./slides/Slide6DemoAnalisis";
import Slide7SimulasiPhishing from "./slides/Slide7SimulasiPhishing";
import Slide8TipsDeteksi from "./slides/Slide8TipsDeteksi";
import Slide9StrategiPerlindungan from "./slides/Slide9StrategiPerlindungan";
import Slide10StudiKasus from "./slides/Slide10StudiKasus";
import Slide11ToolsGratis from "./slides/Slide11ToolsGratis";
import Slide12QnA from "./slides/Slide12QnA";
import Slide13Penutup from "./slides/Slide13Penutup";

const slides = [
  Slide1Title,
  Slide2Speaker,
  Slide3Definition,
  Slide4JenisPhishing,
  Slide5CiriPhishing,
  Slide6DemoAnalisis,
  Slide7SimulasiPhishing,
  Slide8TipsDeteksi,
  Slide9StrategiPerlindungan,
  Slide10StudiKasus,
  Slide11ToolsGratis,
  Slide12QnA,
  Slide13Penutup,
];

export default function App() {
  const [showPoster, setShowPoster] = useState(true);
  const [current, setCurrent] = useState(0);
  const SlideComponent = slides[current];

  const handleNext = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
  };
  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };
  const handleStart = () => {
    setShowPoster(false);
    setCurrent(0);
  };
  const handleHome = () => {
    setShowPoster(true);
  };

  if (showPoster) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#FFF7F0] to-[#FFD6A7]">
        <div className="flex flex-col items-center w-full">
          <PhishingPoster onStart={handleStart} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full gradient-bg flex items-center justify-center relative overflow-x-hidden font-poppins">
      <div className="slide-container">
        <SlideComponent onNext={handleNext} onPrev={handlePrev} />
            </div>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
        <button
          className="bg-white/80 hover:bg-orange-500 text-orange-700 hover:text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
          aria-label="Home"
          onClick={handleHome}
        >
          <span className="text-2xl font-bold">🏠</span>
        </button>
        <button
          className="bg-white/80 hover:bg-orange-500 text-orange-700 hover:text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
          aria-label="Previous Slide"
          onClick={handlePrev}
          disabled={current === 0}
        >
          <span className="text-2xl font-bold">&#8593;</span>
        </button>
        <div className="text-white font-bold text-lg select-none">
          {current + 1} / {slides.length}
              </div>
        <button
          className="bg-white/80 hover:bg-orange-500 text-orange-700 hover:text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
          aria-label="Next Slide"
          onClick={handleNext}
          disabled={current === slides.length - 1}
        >
          <span className="text-2xl font-bold">&#8595;</span>
        </button>
      </div>
    </div>
  );
}
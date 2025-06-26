import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const content = [
  "Phishing = Fishing 🎣",
  "Phishing adalah seperti memancing, tetapi penipu menyamar sebagai institusi terpercaya untuk 'memancing' informasi sensitif dari korbannya.",
  "Penipu membuat email atau website palsu, mengirimkan link atau formulir yang meminta informasi pribadi seperti password, nomor kartu kredit, atau data sensitif lainnya.",
  "Cara Kerja Phishing:",
  "1. Penyerang membuat email atau website palsu yang terlihat resmi.",
  "2. Menyamar sebagai institusi terpercaya, seperti bank, e-commerce, atau layanan pemerintah.",
  "3. Mengirimkan pesan mendesak untuk membuat korban cepat percaya dan bertindak.",
  "4. Korban memasukkan informasi pribadi mereka, yang kemudian dicuri oleh penyerang."
];

function toggleFullscreen(ref) {
  if (!document.fullscreenElement) {
    ref.current.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

export default function Slide1Title({ onNext }) {
  const slideRef = useRef(null);
  return (
    <AnimatePresence>
      <motion.div
        key="slide1"
        ref={slideRef}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full min-h-[500px] flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#FFDDC1] to-[#FF7F00] rounded-2xl pt-2 pb-6 px-2 md:pt-2 md:pb-8 md:px-6 shadow-xl mt-0 relative"
      >
        {/* Fullscreen Button */}
        <button
          onClick={() => toggleFullscreen(slideRef)}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-[#FF7F00] border border-[#FF7F00] rounded-full p-2 shadow transition"
          title="Fullscreen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V6a2 2 0 012-2h2m8 0h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2m-8 0H6a2 2 0 01-2-2v-2" />
          </svg>
        </button>
        {/* Left: Text */}
        <div className="flex-1 pr-0 md:pr-6">
          <h1 className="text-[36px] font-extrabold text-[#FF7F00] text-center mb-4 font-montserrat tracking-tight leading-tight">Apa Itu Phishing?</h1>
          <div className="text-[20px] text-[#333] italic text-center mb-8 font-poppins font-medium">Teknik penipuan digital yang menyamar sebagai entitas terpercaya untuk mencuri informasi sensitif.</div>
          <ul className="text-[18px] text-[#333] font-poppins leading-relaxed space-y-3 mb-8 list-disc list-inside">
            {content.map((item, idx) => (
              <li key={idx} className={idx === 0 ? "font-bold text-lg" : "font-medium"}>{item}</li>
            ))}
          </ul>
          <div className="w-full flex justify-center">
            <div className="bg-white px-6 py-3 rounded-2xl text-center text-[#FF7F00] font-bold text-[16px] shadow mt-4 max-w-xl font-poppins">
              "Ingat: Tidak ada bank atau institusi resmi yang akan meminta password melalui email!"
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button onClick={onNext} className="bg-[#FF7F00] text-white px-8 py-2 rounded-lg font-bold text-lg shadow hover:bg-orange-600 transition font-poppins">Next</button>
          </div>
        </div>
        {/* Right: Visual */}
        <div className="flex-1 flex justify-center md:justify-start mt-8 md:mt-0 pl-0 md:pl-2">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Orang Fishing"
            className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg object-cover"
            style={{ borderRadius: '10px' }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 
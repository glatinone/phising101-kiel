import React from "react";

export default function SlideSpeaker() {
  return (
    <div className="slide-content flex flex-col md:flex-row items-center gap-8">
      <div className="flex-shrink-0">
        <img src="/IMG_8642.jpg" alt="Foto Pembicara" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-orange-200 shadow-lg" />
      </div>
      <div className="flex-1 text-left md:pl-6">
        <h2 className="slide-title mb-2">Kiell Tampubolon</h2>
        <div className="slide-subtitle mb-2">Cybersecurity Engineer, Singapore</div>
        <div className="slide-text text-white/90">Saya Kiell, sehari-hari membantu perusahaan mencegah dan menangani serangan phishing. Pengalaman saya membuktikan: siapapun bisa jadi target, bahkan profesional IT!</div>
      </div>
    </div>
  );
} 
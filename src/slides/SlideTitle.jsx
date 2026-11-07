import React from "react";

export default function SlideTitle() {
  return (
    <div className="slide-content flex flex-col items-center gap-4">
      <div className="text-orange-600 w-16 h-16 animate-bounce mb-2">
        {/* Icon bisa diganti sesuai kebutuhan */}
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11V7m0 4v4m0 0a9 9 0 110-18 9 9 0 010 18z" /></svg>
      </div>
      <h1 className="slide-title text-center">Phishing 101 – Jangan Jadi Korban!</h1>
      <h2 className="slide-subtitle text-center">Belajar mengenali, memahami, dan menghindari serangan phishing di era digital.</h2>
      <div className="slide-text text-white/90 text-center mt-2">
        Selamat datang! Pernahkah Anda menerima email mencurigakan? Hari ini, kita akan belajar cara membedakan email asli dan palsu agar tidak menjadi korban penipuan digital.
      </div>
    </div>
  );
} 
import React from "react";

export default function PhishingPoster({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFF7F0] to-[#FFD6A7] p-6 flex flex-col items-center">
      {/* Layout dua kolom */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8 items-start">
        {/* Kolom Kiri: Logo besar & info menarik */}
        <div className="flex flex-col items-center md:items-start flex-shrink-0 w-full md:w-1/3 mb-8 md:mb-0">
          <div className="flex flex-col items-center mb-4 w-full">
            <a
              href="https://www.hacktiv8.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none"
              title="Kunjungi Hacktiv8"
            >
              <div className="bg-[#F3F4F6] rounded-full shadow-lg flex items-center justify-center w-40 h-40 md:w-52 md:h-52 mb-2 transition-transform hover:scale-105">
                <img src={process.env.PUBLIC_URL + "/logo-hacktiv8.png"} alt="Hacktiv8" className="w-28 h-28 md:w-36 md:h-36 object-contain" />
              </div>
            </a>
            <span className="font-extrabold text-2xl md:text-3xl text-[#232323] mt-2 tracking-wide text-center">HACKTIV8</span>
          </div>
          <div className="bg-white/80 rounded-xl p-4 shadow text-[#232323] w-full">
            <div className="font-bold text-lg mb-2 text-[#FF7F00]">Kenapa Harus Ikut?</div>
            <ul className="list-disc pl-5 space-y-1 text-base">
              <li>Update ancaman siber terbaru</li>
              <li>Belajar langsung dari praktisi</li>
              <li>Studi kasus nyata & tips praktis</li>
              <li>Simulasi serangan phishing</li>
              <li>GRATIS & dapat e-certificate</li>
            </ul>
          </div>
        </div>
        {/* Kolom Kanan: Poster utama */}
        <div className="flex-1 flex flex-col items-center">
          {/* Badge */}
          <div className="bg-[#FF7F00] text-white rounded-lg px-4 py-1 text-base font-semibold self-start mb-2">
            Cyber Security
          </div>
          {/* Title & Subtitle */}
          <div className="w-full">
            <h1 className="font-bold text-[36px] leading-[44px] text-[#232323] mb-1">
              Phishing 101 Jangan Jadi Korban!
            </h1>
            <h2 className="text-[22px] text-[#FF7F00] font-semibold mb-2">
              Belajar Mengenali dan Menghindari Serangan Phishing
            </h2>
            <div className="italic text-[#3B9E9F] text-[16px] mb-4">
              "Pengetahuan adalah pertahanan terbaik melawan penipuan digital"
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col md:flex-row w-full gap-6">
            {/* Materi */}
            <div className="bg-[#232323] text-white rounded-xl p-5 flex-1 mb-4">
              <div className="font-bold text-lg mb-2">Materi Pembahasan</div>
              <ul className="space-y-2 text-base">
                <li><span className="text-[#FF7F00] mr-2">▶</span>Pengenalan Phishing dan Lanskap Ancaman dari phishing</li>
                <li><span className="text-[#FF7F00] mr-2">▶</span>Mengenali Ciri-Ciri Email/Pesan Phishing</li>
                <li><span className="text-[#FF7F00] mr-2">▶</span>Praktik Memeriksa Tautan dan Domain</li>
                <li><span className="text-[#FF7F00] mr-2">▶</span>Strategi Mitigasi dan Perlindungan Diri</li>
                <li><span className="text-[#FF7F00] mr-2">▶</span>Simulasi Serangan dan Pengujian Kesadaran</li>
                <li><span className="text-[#FF7F00] mr-2">▶</span>Studi Kasus dan Best Practices</li>
              </ul>
            </div>
            {/* Speaker */}
            <div className="flex flex-col items-center">
              <img
                src={process.env.PUBLIC_URL + "/IMG_8642.jpg"}
                alt="Speaker"
                className="w-[180px] h-[180px] rounded-xl shadow-md object-cover mb-2"
              />
              <div className="bg-[#232323] text-white rounded-lg px-4 py-2 text-center">
                <div className="font-bold">Kiell Tampubolon</div>
                <div className="text-sm">Information Security Engineer<br />Singapore</div>
              </div>
            </div>
          </div>
          {/* Info Box */}
          <div className="bg-white rounded-lg px-6 py-3 mt-4 flex flex-wrap items-center gap-4 w-full shadow">
            <div className="flex items-center gap-2 text-[#232323] text-[15px]">
              <span>🗓️ Kamis, 26 Juni 2025</span>
              <span>⏰ 19.00 - 21.00 WIB</span>
              <span className="bg-[#FF7F00] text-white rounded-md px-3 py-1 font-bold ml-2">GRATIS!</span>
            </div>
            <div className="text-[#232323] text-[15px]">▶ Streaming Via Zoom</div>
          </div>
          {/* Button & Link */}
          <div className="flex flex-col md:flex-row items-center gap-3 mt-6 w-full">
            <button className="bg-[#232323] text-white rounded-lg px-6 py-2 text-lg font-semibold">
              Registrasi
            </button>
            <span className="bg-white text-[#FF7F00] rounded-md px-4 py-2 text-base font-mono border border-[#FF7F00]">
              my.hacktiv8.com/twcsjun
            </span>
          </div>
          {/* Tombol Mulai Slide */}
          <button
            className="mt-6 bg-[#FF7F00] text-white px-8 py-3 rounded-lg font-bold text-xl shadow hover:bg-orange-600 transition"
            onClick={onStart}
          >
            Mulai Slide
          </button>
        </div>
      </div>
    </div>
  );
} 
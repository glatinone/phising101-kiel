import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const points = [
  'Phishing bisa dicegah dengan kewaspadaan.',
  'Edukasi & kesadaran adalah kunci utama.',
  'Jangan klik sebelum yakin, selalu verifikasi!',
  'Jadilah agen perubahan di lingkunganmu.',
];

export default function Slide13Penutup() {
  return (
    <AnimatePresence>
      <motion.div
        key="slide13"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="slide-content bg-gradient-to-r from-[#e6f4ea] to-[#b7e0c7] rounded-2xl p-8 md:p-12 shadow-xl flex flex-col items-center"
      >
        <div className="mb-4">
          <span className="inline-block text-5xl md:text-6xl">🌱🔒</span>
        </div>
        <h2 className="slide-title mb-6 text-green-700 text-center">Penutup</h2>
        <ul className="text-lg text-gray-800 mb-6 space-y-3 max-w-xl">
          {points.map((pt, i) => (
            <li key={pt} className="flex items-center gap-3"><span className="text-green-600">✔</span>{pt}</li>
          ))}
        </ul>
        <div className="text-gray-700 mb-8 text-center max-w-xl">
          Mulai hari ini, cek ulang setiap email yang Anda terima. Jangan mudah percaya, selalu verifikasi.<br/>
          <span className="font-semibold text-green-800">Keamanan siber adalah tanggung jawab bersama. Terima kasih & tetap waspada! 🙏</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const kasus = [
  {
    title: 'BEC: Perusahaan Teknologi Singapura Rugi SGD 700,000',
    desc: '2022: Penipu menyamar sebagai vendor, mengirim email invoice palsu, dan dana ditransfer ke rekening luar negeri.'
  },
  {
    title: 'Rekrutmen Palsu LinkedIn di Singapura',
    desc: 'Pelaku mengaku HR perusahaan ternama, meminta data pribadi & pembayaran palsu dari kandidat.'
  },
];

export default function Slide10StudiKasus() {
  return (
    <AnimatePresence>
      <motion.div
        key="slide10"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="slide-content bg-gradient-to-r from-[#ede7f6] to-[#d1c4e9] rounded-2xl p-8 md:p-12 shadow-xl"
      >
        <h2 className="slide-title mb-6 text-purple-700">Studi Kasus Nyata</h2>
        <ul className="text-lg text-gray-800 mb-6 space-y-5">
          {kasus.map((k, i) => (
            <li key={k.title} className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="text-purple-600">📄</span>
                <span className="font-semibold">{k.title}</span>
              </div>
              <div className="ml-8 text-sm text-gray-600">{k.desc}</div>
            </li>
          ))}
        </ul>
        <div className="text-gray-700 mb-8">Bukan hanya orang awam, eksekutif pun bisa tertipu. Selalu verifikasi sebelum bertindak!</div>
      </motion.div>
    </AnimatePresence>
  );
} 
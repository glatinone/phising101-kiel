import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const verifikasiTips = [
  "Cek domain pengirim",
  "Hover link sebelum klik",
  "Verifikasi via channel resmi",
];

const teknisTips = [
  "Aktifkan 2FA di akun penting",
  "Update browser & antivirus",
  "Gunakan password manager",
];

const behavioralTips = [
  "Jangan panik dengan email urgent",
  "Jangan share OTP/PIN",
  "Laporkan phishing ke pihak berwajib",
];

const doList = [
  "Gunakan bookmarks situs banking",
  "Verifikasi langsung via telepon/kantor",
  "Update sistem secara rutin",
];

const dontList = [
  "Klik link dari email mencurigakan",
  "Share password/PIN via email/SMS",
  "Download attachment dari unknown sender",
];

export default function Slide8TipsDeteksi() {
  return (
    <AnimatePresence>
      <motion.div
        key="slide8"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex justify-center items-start min-h-0 py-2 px-1 bg-gradient-to-b from-[#ffe4c4] to-[#f7f7f7]"
      >
        <div className="w-full max-w-5xl bg-white/80 rounded-2xl shadow-xl p-4 md:p-6 flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-bold text-orange-600 text-center mb-1">Tips Pencegahan Phishing</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-3 rounded-full" />
            <div className="flex flex-col items-center mb-3">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-1 shadow-md">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-base font-semibold text-gray-800">Strategi Perlindungan 360°</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-2">
            {/* Verifikasi */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center mb-1">
                <span className="text-lg mr-2">🔍</span>
                <span className="font-bold text-base text-blue-800">Verifikasi</span>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                {verifikasiTips.map((tip, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-green-500">✔</span>{tip}</li>
                ))}
              </ul>
            </div>
            {/* Teknis */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center mb-1">
                <span className="text-lg mr-2">🛡️</span>
                <span className="font-bold text-base text-green-800">Teknis</span>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                {teknisTips.map((tip, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-green-500">✔</span>{tip}</li>
                ))}
              </ul>
            </div>
            {/* Behavioral */}
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center mb-1">
                <span className="text-lg mr-2">🧠</span>
                <span className="font-bold text-base text-purple-800">Behavioral</span>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                {behavioralTips.map((tip, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-green-500">✔</span>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Golden Rules */}
          <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-xl p-4 text-white flex flex-col gap-3 shadow-md">
            <div className="flex items-center mb-1">
              <span className="text-lg mr-2">🚨</span>
              <span className="font-bold text-lg">Golden Rules Anti-Phishing</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-1">
              <div>
                <div className="flex items-center mb-1">
                  <span className="text-green-200 mr-2">✅</span>
                  <span className="font-bold text-base">DO (Lakukan):</span>
                </div>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  {doList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <span className="text-red-200 mr-2">✖️</span>
                  <span className="font-bold text-base">DON'T (Jangan):</span>
                </div>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  {dontList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 
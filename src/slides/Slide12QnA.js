import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slide12QnA() {
  return (
    <AnimatePresence>
      <motion.div
        key="slide12"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="slide-content bg-gradient-to-r from-[#f5f5f5] to-[#e0e0e0] rounded-2xl p-8 md:p-12 shadow-xl flex flex-col items-center"
      >
        <div className="mb-4">
          <span className="inline-block text-5xl md:text-6xl">❓💬</span>
        </div>
        <h2 className="slide-title mb-2 text-gray-800 text-center">Tanya Jawab</h2>
        <div className="text-md text-blue-700 font-semibold mb-6 text-center">Diskusi terbuka, semua pertanyaan dihargai!</div>
        <div className="relative mb-8 w-full max-w-xl">
          <div className="bg-white/80 rounded-xl px-6 py-4 shadow flex items-center gap-3">
            <span className="text-blue-500 text-2xl">💡</span>
            <span className="text-gray-700 text-base">Jangan ragu bertanya, satu klik bisa fatal. Lebih baik tanya daripada menyesal!</span>
          </div>
          <div className="absolute -top-4 left-8 bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full shadow">Tips: Pertanyaanmu bisa menyelamatkan banyak orang!</div>
        </div>
        <div className="text-gray-600 text-sm text-center">Ayo, siapa duluan? 😊</div>
      </motion.div>
    </AnimatePresence>
  );
} 
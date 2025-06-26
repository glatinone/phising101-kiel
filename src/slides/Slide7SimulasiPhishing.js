import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slide7SimulasiPhishing() {
  return (
    <AnimatePresence>
      <motion.div
        key="slide7"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="slide-content bg-gradient-to-r from-[#e0e7ef] to-[#b6c6e3] rounded-2xl p-8 md:p-12 shadow-xl"
      >
        <h2 className="slide-title mb-4 text-blue-700">Simulasi Kirim Phishing Email</h2>
        <div className="text-lg text-gray-800 mb-4">Bayangkan Anda menerima email dari <b>"admin@bank0famerica.com"</b>. Apakah Anda akan percaya? Tools: GoPhish (hanya untuk edukasi, tidak dikirim ke peserta).</div>
        <a href="https://getgophish.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold shadow mb-8">GoPhish</a>
      </motion.div>
    </AnimatePresence>
  );
} 
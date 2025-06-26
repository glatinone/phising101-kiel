import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, AlertTriangle, Phone } from 'lucide-react';

const types = [
  { title: 'Spear Phishing', desc: 'Menarget individu dengan data personal.', icon: <Mail className="text-orange-500 w-8 h-8 mb-2" /> },
  { title: 'Whaling', desc: 'Target eksekutif perusahaan.', icon: <User className="text-orange-500 w-8 h-8 mb-2" /> },
  { title: 'Clone', desc: 'Menyalin email asli, mengubah link/lampiran.', icon: <Mail className="text-orange-500 w-8 h-8 mb-2" /> },
  { title: 'BEC', desc: 'Penipuan transfer dana perusahaan.', icon: <AlertTriangle className="text-orange-500 w-8 h-8 mb-2" /> },
  { title: 'Vishing', desc: 'Phishing via telepon.', icon: <Phone className="text-orange-500 w-8 h-8 mb-2" /> },
  { title: 'Smishing', desc: 'Phishing via SMS.', icon: <Mail className="text-orange-500 w-8 h-8 mb-2" /> },
];

export default function Slide4JenisPhishing() {
  return (
    <AnimatePresence>
      <motion.div
        key="slide4"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="slide-content"
      >
        <h2 className="slide-title mb-6">Jenis-jenis Phishing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {types.map((t) => (
            <div key={t.title} className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              {t.icon}
              <div className="font-bold text-orange-700 text-lg mb-1">{t.title}</div>
              <div className="text-gray-700 text-sm">{t.desc}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 
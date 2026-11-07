import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const strategiIndividu = [
  'Multi-Factor Authentication (MFA)',
  'Password Manager & Generator',
  'Literasi Digital & Awareness',
  'Regular Software Updates',
  'Backup Data Berkala',
  'VPN untuk Koneksi Aman',
  'Antivirus & Anti-Malware',
  'Email Security Best Practices',
];

const strategiPerusahaan = [
  'Advanced Email Filtering',
  'DMARC/SPF/DKIM Implementation',
  'Phishing Campaign Simulation',
  'Cybersec Awareness Training',
  'Endpoint Detection & Response',
  'Network Segmentation',
  'Incident Response Plan',
  'Regular Security Audits',
];

export default function Slide9StrategiPerlindungan() {
  return (
    <AnimatePresence>
      <motion.div
        key="slide9"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="slide-content bg-gradient-to-r from-[#e0e7ef] to-[#b6c6e3] rounded-2xl p-8 md:p-12 shadow-xl"
      >
        <h2 className="slide-title mb-6 text-blue-700">Strategi Perlindungan</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Individu */}
          <div className="bg-white/70 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
              <span>👤</span> Individu
            </h3>
            <ul className="space-y-2">
              {strategiIndividu.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800">
                  <span className="text-blue-500 font-bold text-sm mt-1">•</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div className="bg-white/70 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
              <span>🏢</span> Perusahaan
            </h3>
            <ul className="space-y-2">
              {strategiPerusahaan.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800">
                  <span className="text-blue-500 font-bold text-sm mt-1">•</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="text-gray-700 font-medium">
            Teknologi penting, tapi kesadaran jauh lebih efektif!
          </div>
          <div className="text-sm text-gray-600 mt-2">
            🔒 Defense in Depth | 🛡️ Zero Trust | 🚀 Continuous Improvement
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 
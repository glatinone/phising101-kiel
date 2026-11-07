import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const tools = [
  { name: 'VirusTotal', url: 'https://www.virustotal.com/' },
  { name: 'HaveIBeenPwned', url: 'https://haveibeenpwned.com/' },
  { name: 'Bitwarden', url: 'https://bitwarden.com/' },
  { name: 'Email Header Analyzer', url: 'https://mxtoolbox.com/EmailHeaders.aspx' },
];

export default function Slide11ToolsGratis() {
  return (
    <AnimatePresence>
      <motion.div
        key="slide11"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="slide-content bg-gradient-to-r from-[#e0e7ef] to-[#b6c6e3] rounded-2xl p-8 md:p-12 shadow-xl"
      >
        <h2 className="slide-title mb-6 text-blue-700">Tools Gratis untuk Melindungi Diri</h2>
        <ul className="text-lg text-gray-800 mb-6 space-y-3">
          {tools.map((tool, i) => (
            <li key={tool.name} className="flex items-center gap-3">
              <span className="text-blue-600">🛡️</span>
              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-blue-800">{tool.name}</a>
            </li>
          ))}
        </ul>
        <div className="text-gray-700 mb-8">Gunakan tools gratis ini untuk melindungi data Anda.</div>
      </motion.div>
    </AnimatePresence>
  );
} 
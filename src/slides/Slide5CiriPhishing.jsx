import React from "react";
import { Mail, AlertTriangle, Link2, Paperclip, Palette } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const ciri = [
  {
    title: 'Alamat Pengirim Aneh',
    icon: <Mail size={32} className="text-orange-500 bg-orange-100 rounded-full p-1" />,
    desc: 'Pengirim email phishing sering kali menggunakan alamat email yang tidak sesuai atau tidak dikenal, terkadang hanya sedikit berbeda dengan yang asli.'
  },
  {
    title: 'Bahasa Mendesak',
    icon: <AlertTriangle size={32} className="text-yellow-600 bg-yellow-100 rounded-full p-1" />,
    desc: 'Email phishing sering kali menggunakan bahasa yang mendesak atau menakut-nakuti, seperti meminta Anda untuk segera mengambil tindakan atau memberikan informasi pribadi.'
  },
  {
    title: 'Link Mencurigakan',
    icon: <Link2 size={32} className="text-blue-600 bg-blue-100 rounded-full p-1" />,
    desc: 'Email phishing sering menyertakan link yang tampaknya mengarah ke situs yang sah, namun jika diperhatikan lebih cermat, URL tersebut mencurigakan atau tidak sesuai.'
  },
  {
    title: 'Lampiran Tidak Relevan',
    icon: <Paperclip size={32} className="text-green-600 bg-green-100 rounded-full p-1" />,
    desc: 'Sering kali, email phishing menyertakan lampiran yang tidak relevan atau yang meminta Anda untuk mengunduh file yang tampaknya penting namun sebenarnya berbahaya.'
  },
  {
    title: 'Tampilan Mirip Asli',
    icon: <Palette size={32} className="text-purple-600 bg-purple-100 rounded-full p-1" />,
    desc: 'Email phishing sering kali meniru desain dan logo perusahaan atau lembaga resmi untuk memberikan kesan bahwa email tersebut sah, meskipun ada perbedaan halus.'
  },
];

export default function Slide5CiriPhishing() {
  return (
    <AnimatePresence>
      <motion.div
        key="slide5"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mt-4 min-h-[60vh] flex flex-col justify-start items-center bg-gradient-to-br from-yellow-50 via-orange-100 to-white rounded-2xl shadow-xl p-6"
      >
        <h2 className="text-2xl font-extrabold text-orange-700 mb-5 drop-shadow">Ciri-ciri Email Phishing</h2>
        <ul className="w-full max-w-2xl space-y-4 mb-5">
          {ciri.map((c, i) => (
            <li key={i} className="flex items-start gap-4 bg-white/80 rounded-xl shadow p-4 hover:scale-[1.01] transition-transform">
              <div>{c.icon}</div>
              <div>
                <div className="font-bold text-base text-orange-800 mb-1">{c.title}</div>
                <div className="text-gray-700 text-sm leading-snug">{c.desc}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-orange-100 border-l-4 border-orange-500 p-3 rounded-xl shadow flex items-center gap-2 max-w-xl">
          <span className="text-xl">📊</span>
          <div className="text-orange-900 font-semibold text-sm">
            <span className="font-bold">Fakta:</span> Pada tahun 2023, jumlah serangan phishing global meningkat hampir <span className="text-orange-700 font-bold">50.000</span> dibanding tahun sebelumnya, mencapai hampir <span className="text-orange-700 font-bold">1,9 juta</span> insiden di seluruh dunia. Sumber: Interisle Consulting Group, 2024.
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 
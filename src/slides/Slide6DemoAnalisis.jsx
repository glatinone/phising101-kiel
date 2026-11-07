import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaEye } from "react-icons/fa";

const sources = [
  { name: 'VirusTotal', url: 'https://www.virustotal.com/' },
  { name: 'MXToolbox', url: 'https://mxtoolbox.com/' },
  { name: 'Email Header Analyzer', url: 'https://mxtoolbox.com/EmailHeaders.aspx' },
  { name: 'Gophish', url: 'https://github.com/gophish/gophish' },
];

export default function Slide6DemoAnalisis() {
  return (
    <AnimatePresence>
      <motion.div
        key="slide6"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="slide-content flex flex-col items-center"
      >
        <h2 className="slide-title mb-4 text-center">Demo: Analisis Email Phishing</h2>
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center mb-3 text-lg font-semibold text-gray-700">
            <FaEye className="mr-2 text-orange-500" /> Contoh Email Phishing
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-sm font-mono text-gray-800 mb-4 border border-gray-200">
            <div><span className="font-bold">From:</span> <span className="text-red-600">security-bca@gmail.com</span> <FaTimesCircle className="inline ml-1 text-red-500" /></div>
            <div><span className="font-bold">To:</span> customer@email.com</div>
            <div><span className="font-bold">Subject:</span> <span className="text-red-600">URGENT: Rekening Anda Akan Diblokir!</span> <FaExclamationTriangle className="inline ml-1 text-yellow-500" /></div>
            <div className="mt-2">Dear Customer, <FaTimesCircle className="inline ml-1 text-red-500" /></div>
            <div className="mt-2">Kami mendeteksi aktivitas mencurigakan di rekening anda. Untuk mencegah pemblokiran, silahkan verifikasi data dibawah ini:</div>
            <div className="mt-2"><span className="text-orange-600 font-bold">👉 VERIFIKASI SEKARANG (link mencurigakan)</span> <FaTimesCircle className="inline ml-1 text-red-500" /></div>
            <div className="mt-2">Batas waktu: 24 jam dari sekarang <FaExclamationTriangle className="inline ml-1 text-yellow-500" /></div>
            <div className="mt-2">Terimakasih,<br/>Tim Keamanan BCA</div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center font-semibold text-red-600 mb-2"><FaTimesCircle className="mr-2" />Tanda Bahaya Ditemukan:</div>
              <ul className="list-disc pl-5 text-red-700 text-sm space-y-1">
                <li>Domain pengirim: Gmail, bukan BCA resmi</li>
                <li>Greeting generik: "Dear Customer"</li>
                <li>Urgency tactics: "24 jam" ancaman</li>
                <li>Grammar: 'anda' (huruf kecil)</li>
                <li>Minta verifikasi data sensitif</li>
                <li>Link tidak menuju domain BCA</li>
              </ul>
            </div>
            <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center font-semibold text-green-700 mb-2"><FaCheckCircle className="mr-2" />Email BCA Asli Seharusnya:</div>
              <ul className="list-disc pl-5 text-green-800 text-sm space-y-1">
                <li>From: noreply@bca.co.id</li>
                <li>Menyapa dengan nama lengkap</li>
                <li>Tidak meminta data melalui email</li>
                <li>Link menuju m.bca.co.id atau klikbca.com</li>
                <li>Ada nomor referensi/tiket</li>
                <li>Branding konsisten dengan website</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-white/90 text-center mb-2">Contoh analisis email phishing menggunakan tools online. Cek reputasi link, header email, dan lampiran dengan tools gratis.</div>
        <div className="flex flex-wrap gap-4 justify-center mt-2 mb-6">
          {sources.map((src) => (
            <a key={src.name} href={src.url} target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full font-bold shadow transition">{src.name}</a>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 
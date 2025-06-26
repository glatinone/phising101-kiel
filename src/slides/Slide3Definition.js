import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slide3Definition() {
  return (
    <AnimatePresence>
      <motion.div
        key="slide3"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full min-h-[500px] flex flex-col items-center justify-center bg-gradient-to-r from-[#FFDDC1] to-[#FF7F00] rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none" style={{ backgroundImage: 'url("url_to_background_image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        {/* Centered Content */}
        <div className="w-full max-w-5xl flex flex-col items-center justify-center relative z-10">
          <h1 className="text-[36px] font-extrabold text-slate-800 text-center mb-2 font-[Poppins,Montserrat,sans-serif] tracking-tight leading-tight drop-shadow-sm">Mengapa Phishing Sangat Berbahaya?</h1>
          <div className="text-[20px] text-slate-600 italic text-center mb-6 font-[Poppins,Montserrat,sans-serif] font-medium">Dampak dari Serangan Phishing yang Harus Diketahui</div>
          <div className="text-[18px] text-slate-700 font-[Poppins,Montserrat,sans-serif] leading-relaxed mb-6 text-center">Phishing dapat menimbulkan dampak yang sangat merugikan, baik secara finansial, identitas, maupun reputasi. Kerugian yang disebabkan oleh serangan phishing tidak hanya mempengaruhi korban secara langsung, tetapi juga dapat merusak kepercayaan masyarakat terhadap individu atau perusahaan yang menjadi sasaran. Pahami bahaya phishing untuk melindungi diri Anda.</div>
          {/* Impacts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full">
            <div className="bg-white rounded-xl p-4 shadow flex flex-col items-center text-center font-[Poppins,Montserrat,sans-serif]">
              <span className="text-3xl mb-2">⚠️</span>
              <div className="font-bold text-lg mb-1 text-slate-800">Kerugian Finansial</div>
              <div className="text-[16px] text-slate-600">Rekening bank dapat kosong dalam hitungan menit akibat transfer yang dilakukan penyerang setelah mengakses informasi pribadi korban.</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow flex flex-col items-center text-center font-[Poppins,Montserrat,sans-serif]">
              <span className="text-3xl mb-2">🛡️</span>
              <div className="font-bold text-lg mb-1 text-slate-800">Identitas Dicuri</div>
              <div className="text-[16px] text-slate-600">Data pribadi seperti nomor kartu kredit, akun bank, dan informasi pribadi lainnya dapat disalahgunakan untuk tujuan jahat.</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow flex flex-col items-center text-center font-[Poppins,Montserrat,sans-serif]">
              <span className="text-3xl mb-2">🌐</span>
              <div className="font-bold text-lg mb-1 text-slate-800">Reputasi Rusak</div>
              <div className="text-[16px] text-slate-600">Nama baik dapat tercemar di dunia digital, baik bagi individu maupun perusahaan, akibat penyalahgunaan data pribadi atau informasi yang telah dicuri.</div>
            </div>
          </div>
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full">
            <div className="bg-slate-800 text-white rounded-xl p-4 shadow flex flex-col items-center text-center font-[Poppins,Montserrat,sans-serif]">
              <div className="font-bold text-2xl mb-1">91%</div>
              <div className="font-semibold mb-1">Serangan Phishing Dimulai dari Email</div>
              <div className="text-[15px]">Sebagian besar serangan phishing dimulai melalui email yang menipu penerima untuk mengklik link berbahaya.</div>
            </div>
            <div className="bg-slate-800 text-white rounded-xl p-4 shadow flex flex-col items-center text-center font-[Poppins,Montserrat,sans-serif]">
              <div className="font-bold text-2xl mb-1">30%</div>
              <div className="font-semibold mb-1">Orang Membuka Email Phishing</div>
              <div className="text-[15px]">Sekitar 30% orang cenderung membuka email phishing yang dikirimkan oleh penyerang.</div>
            </div>
            <div className="bg-slate-800 text-white rounded-xl p-4 shadow flex flex-col items-center text-center font-[Poppins,Montserrat,sans-serif]">
              <div className="font-bold text-2xl mb-1">12%</div>
              <div className="font-semibold mb-1">Klik Link Berbahaya</div>
              <div className="text-[15px]">Sekitar 12% orang yang menerima email phishing mengklik link yang berisi malware atau penipuan lainnya.</div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 
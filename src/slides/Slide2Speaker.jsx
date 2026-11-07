import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slide2Speaker() {
  const backgroundImage = "url('url_to_background_image.jpg')";
  return (
    <AnimatePresence>
      <motion.div
        key="slide2"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="slide-content flex flex-col md:flex-row items-center justify-center gap-12 relative max-w-6xl mx-auto"
        style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '1.5rem', padding: '2.5rem' }}
      >
        <div className="flex-shrink-0 bg-white/80 rounded-full p-4 shadow-lg">
          <img src="/IMG_8642.jpg" alt="Foto Pembicara" className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border-4 border-orange-200 shadow-lg" />
        </div>
        <div className="flex-1 text-left md:pl-10 bg-black/70 rounded-2xl p-8 shadow-xl min-w-[320px] max-w-2xl">
          <h2 className="slide-title mb-1 text-3xl font-bold text-orange-200">Kiell Tampubolon</h2>
          <div className="slide-subtitle mb-3 text-lg text-orange-100 font-semibold">Information Security Engineer, Singapore</div>
          <div className="slide-text text-white/95 mb-4 leading-relaxed text-base md:text-lg">
            Halo! Saya Kiell Tampubolon, seorang Information Security Engineer yang sehari-hari berburu dan membongkar berbagai ancaman siber, khususnya serangan phishing. Di dunia digital yang terus berubah, saya percaya bahwa keamanan bukan hanya soal teknologi, tapi juga soal membangun kesadaran dan budaya waspada di setiap lini. Melalui webinar ini, saya ingin berbagi pengalaman, insight, dan tips praktis agar kita semua bisa lebih siap menghadapi tantangan keamanan siber—karena siapa pun bisa jadi target, bahkan profesional IT!
          </div>
          <div className="mb-2">
            <span className="font-semibold text-orange-300">Pendidikan:</span> D4 Cybersecurity Engineering
          </div>
          <span className="font-semibold text-orange-300">Sertifikasi:</span>
          <ul className="list-disc list-inside ml-4 text-white/90">
            <li>CEH (Certified Ethical Hacker)</li>
            <li>CTIA (Certified Threat Intelligence Analyst)</li>
            <li>RHCSA (Red Hat Certified System Administrator)</li>
          </ul>
          <div className="mb-5 mt-3">
            Lihat lebih lanjut tentang pengalaman saya dan proyek yang telah saya kerjakan di portofolio saya:
            <a
              href="https://kielltampubolon.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 underline text-[#FF7F00] font-semibold hover:text-orange-400 transition"
            >
              kielltampubolon.netlify.app
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 
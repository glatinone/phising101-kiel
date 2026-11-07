import React, { useState } from "react";
import PhishingPoster from "./components/PhishingPoster";
import SlideCard from "./components/SlideCard";
import VerticalNav from "./components/VerticalNav";
import TypewriterText from "./components/TypewriterText";
import FlipCard from "./components/FlipCard";
import AnimatedEmail from "./components/AnimatedEmail";
import { Shield, User, AlertTriangle, Mail, Eye, Search, Zap, CheckCircle, Settings, CaseSensitive, Wrench, MessageCircle, Heart, Phone, Linkedin } from 'lucide-react';

const slides = [
  {
    id: 'slide1',
    type: 'title',
    title: 'Phishing 101 – Jangan Jadi Korban!',
    subtitle: 'Belajar mengenali, memahami, dan menghindari serangan phishing di era digital.',
    icon: <Shield className="text-orange-600 w-16 h-16 animate-bounce" />, 
    logo: '/logo-hacktiv8.png',
    description: 'Selamat datang! Pernahkah Anda menerima email mencurigakan? Hari ini, kita akan belajar cara membedakan email asli dan palsu agar tidak menjadi korban penipuan digital.'
  },
  {
    id: 'slide2',
    type: 'speaker',
    name: 'Kiell Tampubolon',
    role: 'Cybersecurity Engineer, Singapore',
    photo: '/IMG_8642.jpg',
    description: 'Saya Kiell, sehari-hari membantu perusahaan mencegah dan menangani serangan phishing. Pengalaman saya membuktikan: siapapun bisa jadi target, bahkan profesional IT!'
  },
  {
    id: 'slide3',
    type: 'definition',
    title: 'Apa itu Phishing?',
    analogy: 'Penipu berdasi',
    desc: 'Phishing adalah upaya penipuan dengan menyamar sebagai pihak tepercaya untuk mencuri data sensitif. 90% serangan siber berawal dari phishing (Verizon DBIR). Bayangkan penipu berdasi yang datang lewat email, bukan pintu rumah.',
    img: 'https://undraw.co/api/illustrations/7b1e7e7e-7e7e-4e7e-8e7e-7e7e7e7e7e7e',
  },
  {
    id: 'slide4',
    type: 'types',
    title: 'Jenis-jenis Phishing',
    types: [
      { title: 'Spear Phishing', desc: 'Menarget individu dengan data personal.', icon: <Mail className="text-orange-500 w-8 h-8 mb-2" /> },
      { title: 'Whaling', desc: 'Target eksekutif perusahaan.', icon: <User className="text-orange-500 w-8 h-8 mb-2" /> },
      { title: 'Clone', desc: 'Menyalin email asli, mengubah link/lampiran.', icon: <Mail className="text-orange-500 w-8 h-8 mb-2" /> },
      { title: 'BEC', desc: 'Penipuan transfer dana perusahaan.', icon: <AlertTriangle className="text-orange-500 w-8 h-8 mb-2" /> },
      { title: 'Vishing', desc: 'Phishing via telepon.', icon: <Phone className="text-orange-500 w-8 h-8 mb-2" /> },
      { title: 'Smishing', desc: 'Phishing via SMS.', icon: <Mail className="text-orange-500 w-8 h-8 mb-2" /> },
    ]
  },
  {
    id: 'slide5',
    type: 'signs',
    title: 'Ciri-ciri Email Phishing',
    description: 'Ciri-ciri umum: alamat pengirim aneh, bahasa mendesak, link mencurigakan, lampiran tidak relevan, tampilan mirip asli.'
  },
  {
    id: 'slide6',
    type: 'demo',
    title: 'Demo Analisis Email',
    video: 'https://www.youtube.com/embed/1c1w0pQOa2Q',
    sources: [
      { name: 'VirusTotal', url: 'https://www.virustotal.com/' },
      { name: 'MXToolbox', url: 'https://mxtoolbox.com/' },
      { name: 'Email Header Analyzer', url: 'https://mxtoolbox.com/EmailHeaders.aspx' },
    ],
    description: 'Contoh analisis email phishing menggunakan tools online. Cek reputasi link, header email, dan lampiran dengan tools gratis.'
  },
  {
    id: 'slide7',
    type: 'simulation',
    title: 'Simulasi Kirim Phishing Email',
    desc: 'Bayangkan Anda menerima email dari "admin@bank0famerica.com". Apakah Anda akan percaya? Tools: GoPhish (hanya untuk edukasi, tidak dikirim ke peserta).',
    sources: [
      { name: 'GoPhish', url: 'https://getgophish.com/' },
    ],
  },
  {
    id: 'slide8',
    type: 'tips',
    title: 'Tips Mendeteksi Phishing',
    tips: [
      { icon: <Eye className="w-6 h-6 text-orange-400" />, text: 'Selalu cek domain pengirim.' },
      { icon: <Mail className="w-6 h-6 text-orange-400" />, text: 'Hover sebelum klik link.' },
      { icon: <AlertTriangle className="w-6 h-6 text-orange-400" />, text: 'Jangan panik, jangan tergesa.' },
      { icon: <CheckCircle className="w-6 h-6 text-orange-400" />, text: 'Verifikasi ke sumber resmi.' },
    ],
  },
  {
    id: 'slide9',
    type: 'protection',
    title: 'Strategi Perlindungan',
    points: [
      { icon: <CheckCircle className="w-6 h-6 text-orange-400" />, text: 'Individu: MFA, password manager, literasi digital.' },
      { icon: <Settings className="w-6 h-6 text-orange-400" />, text: 'Perusahaan: Filter email, DMARC/SPF, simulasi phishing.' },
    ],
    description: 'Teknologi penting, tapi kesadaran jauh lebih efektif!'
  },
  {
    id: 'slide10',
    type: 'case',
    title: 'Studi Kasus Nyata',
    cases: [
      { icon: <CaseSensitive className="w-6 h-6 text-orange-400" />, text: 'BEC rugi $10 juta.' },
      { icon: <Linkedin className="w-6 h-6 text-orange-400" />, text: 'Rekrutmen palsu LinkedIn.' },
    ],
    description: 'Bukan hanya orang awam, eksekutif pun bisa tertipu.'
  },
  {
    id: 'slide11',
    type: 'tools',
    title: 'Tools Gratis untuk Melindungi Diri',
    tools: [
      { icon: <Search className="w-6 h-6 text-orange-400" />, name: 'VirusTotal', url: 'https://www.virustotal.com/' },
      { icon: <Mail className="w-6 h-6 text-orange-400" />, name: 'HaveIBeenPwned', url: 'https://haveibeenpwned.com/' },
      { icon: <Wrench className="w-6 h-6 text-orange-400" />, name: 'Bitwarden', url: 'https://bitwarden.com/' },
      { icon: <Mail className="w-6 h-6 text-orange-400" />, name: 'Email Header Analyzer', url: 'https://mxtoolbox.com/EmailHeaders.aspx' },
    ],
    description: 'Gunakan tools gratis ini untuk melindungi data Anda.'
  },
  {
    id: 'slide12',
    type: 'qna',
    title: 'Tanya Jawab',
    desc: 'Silakan bertanya, tidak ada pertanyaan bodoh. Satu klik bisa fatal.'
  },
  {
    id: 'slide13',
    type: 'closing',
    title: 'Penutup & CTA',
    points: [
      { icon: <CheckCircle className="w-6 h-6 text-orange-400" />, text: 'Phishing bisa dicegah.' },
      { icon: <CheckCircle className="w-6 h-6 text-orange-400" />, text: 'Edukasi & kesadaran adalah kunci.' },
      { icon: <CheckCircle className="w-6 h-6 text-orange-400" />, text: 'Jangan klik sebelum yakin!' },
    ],
    desc: 'Mulai hari ini, cek ulang setiap email yang Anda terima. Jangan mudah percaya, selalu verifikasi.'
  },
];

function App() {
  const [showPoster, setShowPoster] = useState(true);
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  // Konten dinamis untuk slide 1 (definition) dari prompt JSON
  const phishingDefinitionContent = {
    background: {
      color: "#FFDDC1",
      gradient: "linear-gradient(to right, #FFDDC1, #FF7F00)"
    },
    title: {
      text: "Apa Itu Phishing?",
      style: "text-[36px] font-bold text-[#FF7F00] text-center mb-4 font-sans"
    },
    subtitle: {
      text: "Teknik penipuan digital yang menyamar sebagai entitas terpercaya untuk mencuri informasi sensitif.",
      style: "text-[20px] text-[#333] italic text-center mb-8 font-sans"
    },
    content: [
      "Phishing = Fishing 🎣",
      "Phishing adalah seperti memancing, tetapi penipu menyamar sebagai institusi terpercaya untuk 'memancing' informasi sensitif dari korbannya.",
      "Penipu membuat email atau website palsu, mengirimkan link atau formulir yang meminta informasi pribadi seperti password, nomor kartu kredit, atau data sensitif lainnya.",
      "Cara Kerja Phishing:",
      "1. Penyerang membuat email atau website palsu yang terlihat resmi.",
      "2. Menyamar sebagai institusi terpercaya, seperti bank, e-commerce, atau layanan pemerintah.",
      "3. Mengirimkan pesan mendesak untuk membuat korban cepat percaya dan bertindak.",
      "4. Korban memasukkan informasi pribadi mereka, yang kemudian dicuri oleh penyerang."
    ],
    image: {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      alt: "Phishing Illustration"
    },
    quote: {
      text: "Ingat: Tidak ada bank atau institusi resmi yang akan meminta password melalui email!",
      style: "bg-white px-6 py-3 rounded-2xl text-center text-[#FF7F00] font-bold text-[16px] shadow mt-4 max-w-xl mx-auto"
    }
  };

  const handleFullscreen = () => {
    const elem = document.documentElement;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      elem.requestFullscreen();
    }
  };

  if (showPoster) {
    return (
      <div>
        <PhishingPoster />
        <div className="flex justify-center mt-8">
          <button
            className="bg-[#232323] text-white rounded-lg px-8 py-3 text-xl font-bold shadow-lg hover:bg-[#FF7F00] transition"
            onClick={() => setShowPoster(false)}
          >
            Mulai Slide
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full gradient-bg flex items-center justify-center relative overflow-x-hidden font-poppins">
      <img src="/logo-hacktiv8.png" alt="Hacktiv8 Logo" className="slide-logo" />
      <div className="slide-container">
        <SlideCard>
          {slide.type === 'definition' ? (
            <div className="w-full min-h-[500px] flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#FFDDC1] to-[#FF7F00] rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex-1 pr-0 md:pr-8">
                <h1 className={phishingDefinitionContent.title.style}>{phishingDefinitionContent.title.text}</h1>
                <div className={phishingDefinitionContent.subtitle.style}>{phishingDefinitionContent.subtitle.text}</div>
                <ul className="text-[18px] text-[#333] font-sans leading-relaxed space-y-3 mb-8 list-disc list-inside">
                  {phishingDefinitionContent.content.map((item, idx) => (
                    <li key={idx} className={idx === 0 ? "font-bold text-lg" : ""}>{item}</li>
                  ))}
                </ul>
                <div className="w-full flex justify-center">
                  <div className={phishingDefinitionContent.quote.style}>
                    {phishingDefinitionContent.quote.text}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center mt-8 md:mt-0 md:justify-end">
                <img
                  src={phishingDefinitionContent.image.url}
                  alt={phishingDefinitionContent.image.alt}
                  className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg object-cover"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          ) : (
            <>
            {slide.type === 'title' && (
              <div className="slide-content flex flex-col items-center gap-4">
                {slide.icon}
                <h1 className="slide-title"><TypewriterText text={slide.title} speed={40} /></h1>
                <h2 className="slide-subtitle"><TypewriterText text={slide.subtitle} speed={20} /></h2>
                <div className="slide-text text-white/90 text-center mt-2">{slide.description}</div>
              </div>
            )}
            {slide.type === 'speaker' && (
              <div className="slide-content flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img src={slide.photo} alt="Foto Pembicara" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-orange-200 shadow-lg" />
                </div>
                <div className="flex-1 text-left md:pl-6">
                  <h2 className="slide-title mb-2">{slide.name}</h2>
                  <div className="slide-subtitle mb-2">{slide.role}</div>
                  <div className="slide-text text-white/90">{slide.description}</div>
                </div>
              </div>
            )}
            {slide.type === 'types' && (
              <div className="slide-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {slide.types.map((t, idx) => (
                  <FlipCard
                    key={t.title}
                    front={<div className="flex flex-col items-center">{t.icon}<div className="font-bold text-orange-700 text-lg">{t.title}</div></div>}
                    back={<div className="text-white text-center text-sm p-2">{t.desc}</div>}
                  />
                ))}
              </div>
            )}
            {slide.type === 'signs' && (
              <div className="slide-content flex flex-col items-center">
                <AnimatedEmail />
                <div className="slide-text text-white/90 text-center mt-4">{slide.description}</div>
              </div>
            )}
            {slide.type === 'demo' && (
              <div className="slide-content flex flex-col items-center">
                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
                  <iframe
                    src={slide.video}
                    title="Demo Analisis Email"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="text-white/90 text-center mb-2">{slide.description}</div>
                <div className="flex flex-wrap gap-4 justify-center mt-2">
                  {slide.sources.map((src) => (
                    <a key={src.name} href={src.url} target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full font-bold shadow transition">{src.name}</a>
                  ))}
                </div>
              </div>
            )}
            {slide.type === 'simulation' && (
              <div className="slide-content flex flex-col items-center">
                <Zap size={48} className="text-orange-500 mb-4 animate-pulse" />
                <h2 className="slide-title mb-2">{slide.title}</h2>
                <div className="slide-text text-white/90 text-center mb-2">{slide.desc}</div>
                <div className="flex flex-wrap gap-4 justify-center mt-2">
                  {slide.sources.map((src) => (
                    <a key={src.name} href={src.url} target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full font-bold shadow transition">{src.name}</a>
                  ))}
                </div>
              </div>
            )}
            {slide.type === 'tips' && (
              <div className="slide-content flex flex-col items-center">
                <CheckCircle size={48} className="text-orange-400 mb-4 animate-bounce" />
                <h2 className="slide-title mb-2">{slide.title}</h2>
                <ul className="text-white/90 text-left space-y-2">
                  {slide.tips.map((tip, idx) => (
                    <li key={tip.text} className="hover:text-orange-300 transition-colors font-bold flex items-center gap-2">{tip.icon}{tip.text}</li>
                  ))}
                </ul>
              </div>
            )}
            {slide.type === 'protection' && (
              <div className="slide-content flex flex-col items-center">
                <Settings size={48} className="text-orange-400 mb-4 animate-spin-slow" />
                <h2 className="slide-title mb-2">{slide.title}</h2>
                <ul className="text-white/90 text-left space-y-2">
                  {slide.points.map((pt, idx) => (
                    <li key={pt.text} className="hover:text-orange-300 transition-colors font-bold flex items-center gap-2">{pt.icon}{pt.text}</li>
                  ))}
                </ul>
                <div className="slide-text text-white/90 text-center mt-2">{slide.description}</div>
              </div>
            )}
            {slide.type === 'case' && (
              <div className="slide-content flex flex-col items-center">
                <CaseSensitive size={48} className="text-orange-400 mb-4 animate-pulse" />
                <h2 className="slide-title mb-2">{slide.title}</h2>
                <ul className="text-white/90 text-left space-y-2">
                  {slide.cases.map((c, idx) => (
                    <li key={c.text} className="hover:text-orange-300 transition-colors font-bold flex items-center gap-2">{c.icon}{c.text}</li>
                  ))}
                </ul>
                <div className="slide-text text-white/90 text-center mt-2">{slide.description}</div>
              </div>
            )}
            {slide.type === 'tools' && (
              <div className="slide-content flex flex-col items-center">
                <Wrench size={48} className="text-orange-400 mb-4 animate-spin" />
                <h2 className="slide-title mb-2">{slide.title}</h2>
                <ul className="text-white/90 text-left space-y-2">
                  {slide.tools.map((tool, idx) => (
                    <li key={tool.name} className="hover:text-orange-300 transition-colors font-bold flex items-center gap-2">
                      {tool.icon}
                      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{tool.name}</a>
                    </li>
                  ))}
                </ul>
                <div className="slide-text text-white/90 text-center mt-2">{slide.description}</div>
              </div>
            )}
            {slide.type === 'qna' && (
              <div className="slide-content flex flex-col items-center">
                <MessageCircle size={48} className="text-orange-400 mb-4 animate-bounce" />
                <h2 className="slide-title mb-2">{slide.title}</h2>
                <div className="slide-text text-white/90 text-center">{slide.desc}</div>
              </div>
            )}
            {slide.type === 'closing' && (
              <div className="slide-content flex flex-col items-center">
                <Heart size={48} className="text-orange-400 mb-4 animate-bounce" />
                <h2 className="slide-title mb-2">{slide.title}</h2>
                <ul className="text-white/90 text-left space-y-2 mb-2">
                  {slide.points.map((pt, idx) => (
                    <li key={pt.text} className="hover:text-orange-300 transition-colors font-bold flex items-center gap-2">{pt.icon}{pt.text}</li>
                  ))}
                </ul>
                <div className="slide-text text-white/90 text-center">{slide.desc}</div>
              </div>
            )}
            </>
          )}
        </SlideCard>
      </div>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
        <button
          className="bg-white/80 hover:bg-orange-500 text-orange-700 hover:text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
          aria-label="Kembali ke Poster"
          onClick={() => setShowPoster(true)}
        >
          <span className="text-2xl font-bold">🏠</span>
        </button>
        <VerticalNav
          current={current}
          total={slides.length}
          onPrev={() => setCurrent((c) => Math.max(0, c - 1))}
          onNext={() => setCurrent((c) => Math.min(slides.length - 1, c + 1))}
          onFullscreen={handleFullscreen}
        />
      </div>
    </div>
  );
}

export default App; 
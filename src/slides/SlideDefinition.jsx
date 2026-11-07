import React from "react";

export default function SlideDefinition() {
  return (
    <div className="w-full min-h-[500px] flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#FFDDC1] to-[#FF7F00] rounded-2xl p-8 md:p-12 shadow-xl">
      {/* Left: Text */}
      <div className="flex-1 pr-0 md:pr-8">
        <h1 className="text-[36px] font-bold text-[#FF7F00] text-center mb-4 font-sans">Apa Itu Phishing?</h1>
        <div className="text-[20px] text-[#333] italic text-center mb-8 font-sans">Teknik penipuan digital yang menyamar sebagai entitas terpercaya untuk mencuri informasi sensitif.</div>
        <ul className="text-[18px] text-[#333] font-sans leading-relaxed space-y-3 mb-8 list-disc list-inside">
          <li className="font-bold text-lg">Phishing = Fishing 🎣</li>
          <li>Phishing adalah seperti memancing, tetapi penipu menyamar sebagai institusi terpercaya untuk 'memancing' informasi sensitif dari korbannya.</li>
          <li>Penipu membuat email atau website palsu, mengirimkan link atau formulir yang meminta informasi pribadi seperti password, nomor kartu kredit, atau data sensitif lainnya.</li>
          <li className="font-bold">Cara Kerja Phishing:</li>
          <li>1. Penyerang membuat email atau website palsu yang terlihat resmi.</li>
          <li>2. Menyamar sebagai institusi terpercaya, seperti bank, e-commerce, atau layanan pemerintah.</li>
          <li>3. Mengirimkan pesan mendesak untuk membuat korban cepat percaya dan bertindak.</li>
          <li>4. Korban memasukkan informasi pribadi mereka, yang kemudian dicuri oleh penyerang.</li>
        </ul>
        <div className="w-full flex justify-center">
          <div className="bg-white px-6 py-3 rounded-2xl text-center text-[#FF7F00] font-bold text-[16px] shadow mt-4 max-w-xl">
            "Ingat: Tidak ada bank atau institusi resmi yang akan meminta password melalui email!"
          </div>
        </div>
      </div>
      {/* Right: Visual */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0 md:justify-end">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
          alt="Phishing Illustration"
          className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg object-cover"
          style={{ borderRadius: '10px' }}
        />
      </div>
    </div>
  );
} 
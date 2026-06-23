import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export const Beranda: React.FC = () => {
  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <motion.section
      id="beranda"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
      className="w-full min-h-screen relative overflow-hidden flex flex-col items-center pb-20 bg-gradient-to-br from-[#8b1515] via-[#4d1313] to-[#1c1818]"
    >
      {/* Background Silhouette */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-luminosity bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/navbar&background/fotoramean_BG.png')",
          filter: "grayscale(100%) contrast(120%) brightness(80%)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center flex-1 justify-center mt-20">

        {/* Theme Text */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-[64px] lg:text-[76px] font-black text-white text-center leading-[1.1] tracking-tight mb-8"
          style={{ fontFamily: '"Impact", "Oswald", system-ui, sans-serif' }}
        >
          AKAR PERJUANGAN DI TANAH LELUHUR<br />
          MERDEKA DI BAWAH LANGIT BIRU<br />
          BERPIJAK DI BUMI YANG HIJAU
        </motion.h1>

        {/* Meaning Text */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-gray-300 font-normal leading-relaxed text-center max-w-3xl mb-16"
        >
          Sebuah ajakan untuk membangun masa depan yang cerah, dengan tetap berpegang teguh pada nilai sejarah bangsa serta menjaga kelestarian bumi sebagai sumber kehidupan.
        </motion.p>

        {/* Info Boxes */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-8"
        >
          {/* Tanggal */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm border border-white/5">
              <Calendar size={20} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] text-gray-400 font-medium">Tanggal</span>
              <span className="text-[13px] text-white font-bold">17 Agustus 2026</span>
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="hidden md:block w-px h-10 bg-white/20"></div>

          {/* Lokasi */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm border border-white/5">
              <MapPin size={20} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] text-gray-400 font-medium">Lokasi</span>
              <span className="text-[13px] text-white font-bold">Jalan Utama RT010 / 011</span>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center gap-4 mt-8"
        >
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/6285781278856?text=Halo%20panitia%20HUT%20RI%2081%20RT%2010,%20saya%20tertarik%20menjadi%20sponsor."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[#cc3333] font-black px-8 py-3.5 rounded-full text-[13px] md:text-sm shadow-[0_8px_25px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform"
          >
            Tertarik Jadi Sponsor? Hubungi Kami
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>

          {/* Jadwal Button */}
          <a
            href="#jadwal"
            className="flex items-center gap-2 bg-transparent text-white font-bold px-8 py-3.5 rounded-full text-[13px] md:text-sm border border-white/30 hover:bg-white/10 transition-colors"
          >
            Lihat Jadwal
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
};

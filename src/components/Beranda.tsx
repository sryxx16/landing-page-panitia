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
      {/* Transparent Navbar inside the Hero */}
      <nav className="w-full px-6 md:px-16 py-6 flex items-center justify-between z-50 mb-10 md:mb-20">
        <div className="flex items-center gap-3">
          {/* Logo 81 */}
          <div className="w-10 h-10 bg-[#cc3333] rounded-full flex items-center justify-center text-white font-black text-lg">
            81
          </div>
          <div className="flex items-center gap-1.5 text-[17px] font-black uppercase tracking-wide">
            <span className="text-white">HUT RI 81</span>
            <span className="text-[#cc3333]">RT 10</span>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-bold text-gray-300">
          <a href="#beranda" className="text-white">Beranda</a>
          <a href="#tentang" className="hover:text-white transition-colors">Tentang</a>
          <a href="#lomba" className="hover:text-white transition-colors">Lomba</a>
          <a href="#jadwal" className="hover:text-white transition-colors">Jadwal</a>
          <a href="#struktur" className="hover:text-white transition-colors">Panitia</a>
          <a href="#anggaran" className="hover:text-white transition-colors">Anggaran</a>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center flex-1 justify-center">
        
        {/* Theme Text */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-[64px] lg:text-[76px] font-black text-white text-center leading-[1.1] tracking-tight mb-8"
          style={{ fontFamily: '"Impact", "Oswald", system-ui, sans-serif' }}
        >
          AKAR PERJUANGAN DI TANAH LELUHUR<br/>
          MERDEKA DI BAWAH LANGIT BIRU<br/>
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
        
      </div>
    </motion.section>
  );
};

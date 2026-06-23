import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 w-full px-6 md:px-16 py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="flex items-center gap-3">
        {/* Logo 81 */}
        <div className="w-12 h-12 flex items-center justify-center shrink-0">
          <img
            src="/navbar&background/logo_81_baru.png"
            alt="Logo 81"
            className="w-full h-full object-contain scale-[1.35] object-center"
          />
        </div>
        <div className={`flex items-center gap-1.5 text-[17px] font-black uppercase tracking-wide transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
          <span>HUT RI 81</span>
          <span className="text-[#cc3333]">RT 10</span>
        </div>
      </div>

      {/* Desktop Links */}
      <div className={`hidden md:flex items-center gap-8 text-[13px] font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
        <a href="#beranda" className={isScrolled ? 'hover:text-[#cc3333]' : 'text-white'}>Beranda</a>
        <a href="#tentang" className={`transition-colors ${isScrolled ? 'hover:text-[#cc3333]' : 'hover:text-white'}`}>Tentang</a>
        <a href="#struktur" className={`transition-colors ${isScrolled ? 'hover:text-[#cc3333]' : 'hover:text-white'}`}>Panitia</a>
        <a href="#lomba" className={`transition-colors ${isScrolled ? 'hover:text-[#cc3333]' : 'hover:text-white'}`}>Lomba</a>
        <a href="#jadwal" className={`transition-colors ${isScrolled ? 'hover:text-[#cc3333]' : 'hover:text-white'}`}>Jadwal</a>
        <a href="#anggaran" className={`transition-colors ${isScrolled ? 'hover:text-[#cc3333]' : 'hover:text-white'}`}>Anggaran</a>
      </div>
    </motion.nav>
  );
};

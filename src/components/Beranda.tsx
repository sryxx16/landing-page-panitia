import React from 'react';
import { motion } from 'framer-motion';

export const Beranda: React.FC = () => {
  const containerVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    }
  };

  const itemVariants: import('framer-motion').Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full flex flex-col gap-6 w-full"
    >
      {/* Component 1: Navbar Pill (Glassmorphism) */}
      <motion.nav 
        variants={itemVariants}
        className="w-full glass-nav rounded-full px-6 py-3 flex items-center justify-between shadow-sm sticky top-4 z-50 transition-all duration-300 hover:shadow-md"
      >
        <div className="flex items-center gap-3">
          {/* Flag Logo */}
          <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5C10 15 20 -5 40 5V15C20 5 10 25 0 15V5Z" fill="#E32636"/>
            <path d="M0 15C10 25 20 5 40 15V25C20 15 10 35 0 25V15Z" fill="#F2F2F2"/>
            <rect x="0" y="0" width="2" height="30" fill="#D9D9D9"/>
          </svg>
          <div className="flex flex-col leading-tight">
            <span className="font-black text-gray-900 text-[15px]">HUT RI 81</span>
            <span className="font-bold text-gray-900 text-[15px]">RT 05</span>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-[13px] font-bold text-gray-700">
          <a href="#beranda" className="text-[#cc3333]">Beranda</a>
          <a href="#tentang" className="hover:text-[#cc3333] transition-colors hover:scale-105 transform">Tentang</a>
          <a href="#struktur" className="hover:text-[#cc3333] transition-colors hover:scale-105 transform">Struktur</a>
          <a href="#lomba" className="hover:text-[#cc3333] transition-colors hover:scale-105 transform">Lomba</a>
          <a href="#jadwal" className="hover:text-[#cc3333] transition-colors hover:scale-105 transform">Jadwal</a>
          <a href="#anggaran" className="hover:text-[#cc3333] transition-colors hover:scale-105 transform">Anggaran</a>
        </div>
      </motion.nav>

      {/* Hero Section Card */}
      <motion.section 
        variants={itemVariants}
        id="beranda" 
        className="w-full relative bg-[#fbecec] rounded-[30px] overflow-hidden flex flex-col items-center justify-center pt-20 pb-20 card-hover"
      >
        {/* Decorative corner waves */}
        <motion.svg 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 w-64 h-64 text-[#e32636]" viewBox="0 0 200 200" fill="none"
        >
          <path d="M0,0 L200,0 C150,50 100,100 0,100 Z" fill="currentColor"/>
          <path d="M0,20 L180,20 C130,70 80,120 0,120 Z" fill="#f2f2f2" opacity="0.9"/>
          <path d="M0,40 L160,40 C110,90 60,140 0,140 Z" fill="#e32636"/>
        </motion.svg>

        <motion.svg 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-0 right-0 w-64 h-64 text-[#e32636] transform rotate-180" viewBox="0 0 200 200" fill="none"
        >
           <path d="M0,0 L200,0 C150,50 100,100 0,100 Z" fill="currentColor"/>
           <path d="M0,20 L180,20 C130,70 80,120 0,120 Z" fill="#f2f2f2" opacity="0.9"/>
           <path d="M0,40 L160,40 C110,90 60,140 0,140 Z" fill="#e32636"/>
        </motion.svg>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-[54px] font-black text-[#cc3333] mb-4 leading-tight drop-shadow-sm"
          >
            SEMARAK<br/>KEMERDEKAAN<br/>RT 05
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-[13px] md:text-sm text-gray-700 mb-8 font-medium"
          >
            Guyub Rukun Warga - Bersama Rayakan Kemerdekaan ke-81
          </motion.p>
          
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(204,51,51,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#cc3333] font-black px-8 py-3 rounded-full text-xs md:text-sm shadow-md transition-colors"
          >
            LIHAT JADWAL LOMBA
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 text-[9px] text-gray-500 font-medium"
        >
          © 2026 Panitia HUT RI 81 RT 05 Cibinong
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

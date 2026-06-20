import React from 'react';
import { motion } from 'framer-motion';

const ProfileCard: React.FC<{ name: string; role: string; imgUrl: string }> = ({ name, role, imgUrl }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.05 }}
    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white p-2 flex flex-col items-center group cursor-default"
  >
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden mb-2">
      <img src={imgUrl} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="text-center">
      <h3 className="font-bold text-gray-900 text-[11px] md:text-xs group-hover:text-[#d32f2f] transition-colors">{name}</h3>
      <p className="text-[9px] md:text-[10px] text-gray-500">{role}</p>
    </div>
  </motion.div>
);

export const Tentang: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring" }}
      id="tentang" 
      className="w-full relative bg-white/90 backdrop-blur-xl rounded-[30px] overflow-hidden p-8 md:p-12 card-hover"
    >
      
      {/* Decorative corner watermarks */}
      <svg className="absolute top-0 left-0 w-32 h-32 opacity-10 pointer-events-none" viewBox="0 0 100 100" fill="none">
        <path d="M0,0 L100,0 C70,40 50,80 0,100 Z" fill="#e32636"/>
      </svg>
      <svg className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none transform rotate-90" viewBox="0 0 100 100" fill="none">
        <path d="M0,0 L100,0 C70,40 50,80 0,100 Z" fill="#e32636"/>
        <path d="M0,20 L80,20 C50,60 30,100 0,120 Z" fill="#f2f2f2"/>
      </svg>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 relative z-10 items-center">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-[28px] font-black text-gray-900 mb-6"
          >
            Tentang Acara
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-xs md:text-[13px] leading-relaxed font-medium"
          >
            Guyub Rukun Warga bersama seperwakilan warga RT 05 mengadakan serangkaian kegiatan dalam rangka memeriahkan dan menyemarakkan semarak kemerdekaan RI ke-81.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-700 text-xs md:text-[13px] leading-relaxed font-medium"
          >
            Guyub Rukun Warga bersama rayakan kemerdekaan ke-81, memupuk erat rukun bertetangga dalam kebhinekaan di atas relung bangsa, memupuk erat kebersamaan dan mengamalkan konsep gotong royong yang mengayomi seluruh elemen warga.
          </motion.p>
        </div>

        {/* Right: Grid of Profiles */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            <ProfileCard name="Pak Budi" role="Ketua" imgUrl="https://i.pravatar.cc/150?u=11" />
            <ProfileCard name="Ibu Sari" role="Sekretaris" imgUrl="https://i.pravatar.cc/150?u=22" />
            <ProfileCard name="Mas Danu" role="Bendahara" imgUrl="https://i.pravatar.cc/150?u=33" />
            <ProfileCard name="Nama Sari" role="Humas" imgUrl="https://i.pravatar.cc/150?u=44" />
            <ProfileCard name="Mas Canu" role="Logistik" imgUrl="https://i.pravatar.cc/150?u=55" />
            <ProfileCard name="Mas Canu" role="Publikasi" imgUrl="https://i.pravatar.cc/150?u=66" />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

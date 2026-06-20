import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Mic, Package, Camera } from 'lucide-react';

const CardTop: React.FC<{ role: string; name: string; imgUrl: string }> = ({ role, name, imgUrl }) => (
  <motion.div 
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white/90 backdrop-blur-sm rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center p-2 pr-6 w-auto relative z-10 cursor-default"
  >
    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 shrink-0 border border-gray-100">
      <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col text-left">
      <span className="font-extrabold text-gray-900 text-xs">{role}</span>
      <span className="text-[10px] text-gray-500">{name}</span>
    </div>
  </motion.div>
);

const CardDivisi: React.FC<{ role: string; subtext: string; icon: React.ReactNode }> = ({ role, subtext, icon }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.05 }}
    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center p-4 w-[110px] relative z-10 group cursor-default"
  >
    <div className="w-12 h-12 bg-red-50 rounded-full text-[#d32f2f] flex items-center justify-center mb-3 group-hover:bg-[#d32f2f] group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="font-bold text-gray-900 text-[11px] text-center group-hover:text-[#d32f2f] transition-colors">{role}</h3>
    <p className="text-[8px] text-gray-400 mt-1">{subtext}</p>
  </motion.div>
);

export const StrukturPanitia: React.FC = () => {
  const containerVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" } }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring" }}
      id="struktur" 
      className="w-full bg-white/90 backdrop-blur-xl rounded-[30px] overflow-hidden p-8 md:p-12 relative card-hover"
    >
      {/* Decorative corner watermarks */}
      <svg className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none transform rotate-180" viewBox="0 0 200 200" fill="none">
        <path d="M0,0 L200,0 C150,50 100,100 0,100 Z" fill="#e32636"/>
        <path d="M0,20 L180,20 C130,70 80,120 0,120 Z" fill="#e32636" opacity="0.3"/>
      </svg>
      <svg className="absolute bottom-20 left-0 w-48 h-48 opacity-10 pointer-events-none" viewBox="0 0 100 100" fill="none">
        <path d="M0,0 L100,0 C70,40 50,80 0,100 Z" fill="#e32636"/>
      </svg>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-black text-gray-900 mb-12 text-center md:text-left"
        >
          Struktur Kepanitiaan<br/><span className="text-xl font-bold">(Arsitektur Struktur)</span>
        </motion.h2>

        {/* Organization Chart */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center w-full mt-8"
        >
          {/* Level 1: Ketua */}
          <motion.div variants={itemVariants} className="relative flex flex-col items-center">
            <CardTop role="Ketua" name="Pak Budi" imgUrl="https://i.pravatar.cc/150?u=11" />
            <motion.div initial={{ height: 0 }} whileInView={{ height: 32 }} transition={{ duration: 0.5, delay: 0.5 }} className="w-px bg-red-300"></motion.div>
          </motion.div>

          {/* Level 2: Sekretaris */}
          <motion.div variants={itemVariants} className="relative flex flex-col items-center">
            <CardTop role="Sekretaris" name="Ibu Sari" imgUrl="https://i.pravatar.cc/150?u=22" />
            <motion.div initial={{ height: 0 }} whileInView={{ height: 48 }} transition={{ duration: 0.5, delay: 0.7 }} className="w-px bg-red-300"></motion.div>
          </motion.div>

          {/* Bendahara (Left & Right) */}
          <div className="flex items-center justify-between w-full max-w-lg absolute top-[160px] pointer-events-none">
            <motion.div variants={itemVariants} className="pointer-events-auto">
              <CardTop role="Bendahara" name="Mas Danu" imgUrl="https://i.pravatar.cc/150?u=33" />
            </motion.div>
            <motion.div variants={itemVariants} className="pointer-events-auto">
              <CardTop role="Bendahara" name="Mas Danu" imgUrl="https://i.pravatar.cc/150?u=44" />
            </motion.div>
          </div>

          {/* Level 3: Divisions */}
          <motion.div variants={itemVariants} className="flex items-start justify-center gap-4 w-full max-w-2xl relative mt-4">
            {/* Horizontal Line */}
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="absolute -top-[16px] left-[12.5%] right-[12.5%] h-px bg-red-300 origin-center"></motion.div>
            
            <div className="flex-1 flex flex-col items-center relative">
              <motion.div initial={{ height: 0 }} whileInView={{ height: 16 }} transition={{ duration: 0.3, delay: 1.2 }} className="w-px bg-red-300 absolute -top-[16px]"></motion.div>
              <CardDivisi role="Perlengkapan" subtext="unit logo" icon={<Wrench size={20} />} />
            </div>
            
            <div className="flex-1 flex flex-col items-center relative">
              <motion.div initial={{ height: 0 }} whileInView={{ height: 16 }} transition={{ duration: 0.3, delay: 1.3 }} className="w-px bg-red-300 absolute -top-[16px]"></motion.div>
              <CardDivisi role="Humas" subtext="nusantara" icon={<Mic size={20} />} />
            </div>
            
            <div className="flex-1 flex flex-col items-center relative">
              <motion.div initial={{ height: 0 }} whileInView={{ height: 16 }} transition={{ duration: 0.3, delay: 1.4 }} className="w-px bg-red-300 absolute -top-[16px]"></motion.div>
              <CardDivisi role="Logistik" subtext="unit asu" icon={<Package size={20} />} />
            </div>
            
            <div className="flex-1 flex flex-col items-center relative">
              <motion.div initial={{ height: 0 }} whileInView={{ height: 16 }} transition={{ duration: 0.3, delay: 1.5 }} className="w-px bg-red-300 absolute -top-[16px]"></motion.div>
              <CardDivisi role="Publikasi" subtext="unit asu" icon={<Camera size={20} />} />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
};

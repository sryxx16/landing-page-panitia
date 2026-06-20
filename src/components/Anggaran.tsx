import React from 'react';
import { motion } from 'framer-motion';

const AnggaranRow: React.FC<{ ket: string; jenisColor: string; nominal: string; nominalColor: string; index: number }> = ({ ket, jenisColor, nominal, nominalColor, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 + 0.2 }}
    className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 transition-all duration-300 hover:bg-red-50/30 px-2 rounded-lg cursor-default group hover:translate-x-1"
  >
    <div className="w-1/3 text-[10px] md:text-xs font-bold text-gray-800 group-hover:text-gray-900 transition-colors">{ket}</div>
    <div className="w-1/3 flex justify-center">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 32 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.4, type: "spring" }}
        className={`h-1.5 rounded-full ${jenisColor} group-hover:scale-110 transition-transform duration-300`}
      ></motion.div>
    </div>
    <div className={`w-1/3 text-[10px] md:text-xs font-bold text-right ${nominalColor} group-hover:scale-105 origin-right transition-transform duration-300`}>
      {nominal}
    </div>
  </motion.div>
);

export const Anggaran: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring" }}
      id="anggaran" 
      className="w-full h-full bg-white overflow-hidden py-20 md:py-32 px-6 md:px-16 flex flex-col items-center"
    >
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl font-black text-gray-900 mb-6"
      >
        Transparansi Anggaran
      </motion.h2>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-100 p-4 md:p-6 flex-1 w-full max-w-4xl">
        <h3 className="font-bold text-gray-800 text-sm mb-4">Transparansi Anggaran</h3>
        
        {/* Header */}
        <div className="flex items-center justify-between py-2 bg-gray-100/50 rounded-lg px-2 mb-2">
          <div className="w-1/3 text-[9px] font-bold text-gray-600 uppercase">Keterangan</div>
          <div className="w-1/3 text-[9px] font-bold text-gray-600 uppercase text-center">Jenis</div>
          <div className="w-1/3 text-[9px] font-bold text-gray-600 uppercase text-right">Nominal</div>
        </div>
        
        {/* Data */}
        <div className="px-2">
          <AnggaranRow index={0} ket="Iuran Warga" jenisColor="bg-[#10b981]" nominal="+Rp 5jt" nominalColor="text-[#10b981]" />
          <AnggaranRow index={1} ket="Donatur" jenisColor="bg-[#10b981]" nominal="+Rp 2jt" nominalColor="text-[#10b981]" />
          <AnggaranRow index={2} ket="Sewa Tenda" jenisColor="bg-[#ef4444]" nominal="-Rp 2jt" nominalColor="text-[#ef4444]" />
          <AnggaranRow index={3} ket="Hadiah Lomba" jenisColor="bg-[#ef4444]" nominal="-Rp 1.5jt" nominalColor="text-[#ef4444]" />
        </div>
      </div>
    </motion.section>
  );
};

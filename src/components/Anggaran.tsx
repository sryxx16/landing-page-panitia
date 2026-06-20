import React from 'react';
import { motion } from 'framer-motion';

const AnggaranRow: React.FC<{ ket: string; jenisColor: string; nominal: string; nominalColor: string; index: number; barWidth: string }> = ({ ket, jenisColor, nominal, nominalColor, index, barWidth }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 + 0.2 }}
    className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0 transition-all duration-300 hover:bg-red-50/30 px-4 rounded-lg cursor-default group hover:translate-x-1"
  >
    <div className="w-2/5 text-xs md:text-sm font-bold text-gray-800 group-hover:text-[#cc3333] transition-colors">{ket}</div>
    <div className="w-1/5 flex justify-center">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: barWidth }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1 + 0.4, type: "spring" }}
        className={`h-1.5 rounded-full ${jenisColor} group-hover:scale-y-150 transition-transform duration-300 origin-left`}
      ></motion.div>
    </div>
    <div className={`w-2/5 text-xs md:text-sm font-bold text-right ${nominalColor} group-hover:scale-105 origin-right transition-transform duration-300`}>
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
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-[#cc3333] font-bold text-[11px] uppercase tracking-wider mb-4"
        >
          Transparansi Dana
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black text-gray-900"
        >
          Anggaran Biaya
        </motion.h2>
      </div>
      
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 md:p-8 flex-1 w-full max-w-3xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-gray-100 pb-6">
          <div>
            <h3 className="font-bold text-gray-800 text-lg">Rekapitulasi Kebutuhan</h3>
            <p className="text-xs text-gray-500 mt-1">Estimasi pengeluaran berdasarkan proposal</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 font-bold uppercase mb-1">Total Anggaran</p>
            <p className="text-2xl font-black text-[#cc3333]">Rp 12.000.000,-</p>
          </div>
        </div>
        
        {/* Header */}
        <div className="flex items-center justify-between py-3 bg-gray-50 rounded-xl px-4 mb-4">
          <div className="w-2/5 text-[10px] font-bold text-gray-500 uppercase">Keterangan Divisi</div>
          <div className="w-1/5 text-[10px] font-bold text-gray-500 uppercase text-center">Persentase</div>
          <div className="w-2/5 text-[10px] font-bold text-gray-500 uppercase text-right">Nominal</div>
        </div>
        
        {/* Data */}
        <div className="px-2">
          <AnggaranRow index={0} ket="1. Kesekretariatan" jenisColor="bg-gray-400" barWidth="10%" nominal="Rp 1.137.000,-" nominalColor="text-gray-700" />
          <AnggaranRow index={1} ket="2. Pubdekdoklog" jenisColor="bg-[#3b82f6]" barWidth="60%" nominal="Rp 7.140.000,-" nominalColor="text-gray-700" />
          <AnggaranRow index={2} ket="3. Humas" jenisColor="bg-gray-400" barWidth="5%" nominal="Rp 200.000,-" nominalColor="text-gray-700" />
          <AnggaranRow index={3} ket="4. Konsumsi" jenisColor="bg-[#f59e0b]" barWidth="30%" nominal="Rp 2.988.000,-" nominalColor="text-gray-700" />
          <AnggaranRow index={4} ket="5. Biaya Tak Terduga" jenisColor="bg-[#cc3333]" barWidth="10%" nominal="Rp 1.000.000,-" nominalColor="text-gray-700" />
        </div>
      </div>
    </motion.section>
  );
};

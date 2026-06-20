import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem: React.FC<{ time: string; title: string; subtitle?: string; isHighlight?: boolean }> = ({ time, title, subtitle, isHighlight }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className="relative pl-8 md:pl-0 w-full md:w-1/2 md:odd:pr-12 md:even:pl-12 md:even:ml-auto group mb-8"
  >
    {/* Dot for mobile */}
    <div className={`absolute left-[5px] md:hidden w-3 h-3 rounded-full mt-1.5 ${isHighlight ? 'bg-[#cc3333]' : 'bg-gray-300'}`}></div>
    
    {/* Dot for desktop (center of the screen) */}
    <div className={`hidden md:block absolute top-1.5 w-4 h-4 rounded-full ${isHighlight ? 'bg-[#cc3333]' : 'bg-gray-300'} 
      group-odd:-right-[8px] group-even:-left-[8px] border-4 border-gray-50`}
    ></div>

    <div className={`bg-white p-4 rounded-2xl shadow-sm border ${isHighlight ? 'border-red-100' : 'border-gray-100'} hover:shadow-md transition-shadow`}>
      <div className={`text-xs font-black mb-1 ${isHighlight ? 'text-[#cc3333]' : 'text-gray-500'}`}>{time}</div>
      <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
      {subtitle && <p className="text-[11px] text-gray-600 mt-1">{subtitle}</p>}
    </div>
  </motion.div>
);

export const Jadwal: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring" }}
      id="jadwal" 
      className="w-full bg-gray-50/50 py-20 md:py-32 relative border-y border-gray-100 px-6"
    >
      <div className="max-w-4xl mx-auto flex flex-col relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-[#cc3333] font-bold text-[11px] uppercase tracking-wider mb-4"
          >
            Rundown Acara
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-gray-900"
          >
            Susunan Acara
          </motion.h2>
        </div>
        
        <div className="relative w-full">
          {/* Vertical Center Line */}
          <div className="absolute left-[10px] md:left-1/2 md:transform md:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-gray-200"></div>
          
          <TimelineItem time="16 Agu, 19:30 - Selesai" title="Tasyakuran" subtitle="Malam hari sebelum puncak acara" isHighlight />
          
          <TimelineItem time="17 Agu, 07:00 - 07:30" title="Pembukaan Acara HUT RI-81" isHighlight />
          
          <TimelineItem time="07:30 - 09:00" title="Lomba Tingkat Balita" subtitle="Termasuk Lomba Pensil ke Botol & Ambil Bendera" />
          
          <TimelineItem time="09:00 - 11:30" title="Lomba Tingkat Anak-Anak" subtitle="Makan Biskuit, Kemeja Balon, Air Kerucut, Besek Gantung" />
          
          <TimelineItem time="11:30 - 13:00" title="ISHOMA" subtitle="Istirahat, Sholat, Makan" isHighlight />
          
          <TimelineItem time="13:00 - 14:00" title="Lomba Tingkat Dewasa (Ibu-Ibu & Bapak-Bapak)" subtitle="Air Kerucut, Sarung Balon, dll" />
          
          <TimelineItem time="14:00 - 15:00" title="Lomba Grup" subtitle="Estafet Pukul Paku, dll" />
          
          <TimelineItem time="15:00 - 15:30" title="ISHOMA" subtitle="Istirahat Sore" isHighlight />
          
          <TimelineItem time="15:30 - 15:45" title="Pembagian Hadiah" isHighlight />
          
          <TimelineItem time="15:45 - 16:00" title="Sterilisasi Area Acara" />
          
          <TimelineItem time="16:00 - 17:00" title="Penutup" isHighlight />
          
        </div>
      </div>
    </motion.section>
  );
};

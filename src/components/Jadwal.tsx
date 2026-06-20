import React from 'react';
import { motion } from 'framer-motion';
import { PersonStanding, Balloon, Activity } from 'lucide-react';

const JadwalItem: React.FC<{ time: string; title: string; icon: React.ReactNode }> = ({ time, title, icon }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className="relative flex items-center justify-center w-full mb-10 group"
  >
    {/* Red dot on the line */}
    <motion.div 
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { type: "spring", stiffness: 300, delay: 0.2 } }
      }}
      className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[#d32f2f] z-10 transition-transform duration-300 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(211,47,47,0.5)]"
    ></motion.div>
    
    {/* Left Side: Icon and Title */}
    <motion.div 
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, delay: 0.3 } }
      }}
      className="w-1/2 flex flex-col items-end pr-8 transition-transform duration-300 group-hover:-translate-x-2"
    >
      <div className="w-12 h-12 bg-[#fbecec] rounded-full flex items-center justify-center text-[#d32f2f] mb-1 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-sm group-hover:bg-[#d32f2f] group-hover:text-white">
        {icon}
      </div>
      <span className="text-[10px] md:text-xs font-bold text-gray-800 text-center w-12 group-hover:text-[#d32f2f] transition-colors">{title}</span>
    </motion.div>

    {/* Right Side: Time Pill */}
    <motion.div 
      variants={{
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, delay: 0.3 } }
      }}
      className="w-1/2 flex justify-start pl-8 transition-transform duration-300 group-hover:translate-x-2"
    >
      <div className="bg-white px-5 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 font-extrabold text-gray-900 text-sm group-hover:shadow-[0_8px_25px_rgba(211,47,47,0.1)] group-hover:text-[#d32f2f] transition-all duration-300">
        {time}
      </div>
    </motion.div>
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
      className="w-full h-full bg-gray-50/50 overflow-hidden py-20 md:py-32 flex flex-col items-center relative border-y border-gray-100 px-6"
    >
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-xl font-black text-gray-900 mb-10"
      >
        Jadwal
      </motion.h2>
      
      <div className="relative w-full max-w-md flex-1 flex flex-col justify-center">
        {/* Vertical Center Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-8 w-0.5 bg-[#d32f2f] origin-top"
        ></motion.div>
        
        <JadwalItem time="07:00" title="Jalan Sehat" icon={<PersonStanding size={24} />} />
        <JadwalItem time="09:00" title="Lomba Anak" icon={<Balloon size={24} />} />
        <JadwalItem time="13:00" title="Lomba Dewasa" icon={<Activity size={24} />} />
      </div>
    </motion.section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Activity, Trophy, Gamepad2 } from 'lucide-react';

const LombaCard: React.FC<{ title: string; category: string; icon: React.ReactNode }> = ({ title, category, icon }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.05 }}
    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center p-4 w-full relative z-10 gap-4 group cursor-default"
  >
    <div className="flex-1 flex flex-col items-start">
      <h3 className="font-extrabold text-gray-900 text-[13px] leading-tight mb-1 group-hover:text-[#d32f2f] transition-colors">{title}</h3>
      <p className="text-[10px] text-gray-500">{category}</p>
    </div>
    <div className="w-14 h-14 bg-[#fbecec] rounded-full flex items-center justify-center text-[#d32f2f] group-hover:bg-[#d32f2f] group-hover:text-white transition-all duration-300">
      {icon}
    </div>
  </motion.div>
);

export const Lomba: React.FC = () => {
  const containerVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring" }}
      id="lomba" 
      className="w-full bg-white/90 backdrop-blur-xl rounded-[30px] overflow-hidden shadow-sm p-8 md:p-12 relative card-hover"
    >
      {/* Decorative corner watermarks */}
      <svg className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none transform rotate-180" viewBox="0 0 100 100" fill="none">
        <path d="M0,0 L100,0 C70,40 50,80 0,100 Z" fill="#e32636"/>
        <path d="M0,20 L80,20 C50,60 30,100 0,120 Z" fill="#f2f2f2"/>
      </svg>
      <svg className="absolute bottom-0 left-0 w-32 h-32 opacity-10 pointer-events-none" viewBox="0 0 100 100" fill="none">
        <path d="M0,0 L100,0 C70,40 50,80 0,100 Z" fill="#e32636"/>
      </svg>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-black text-gray-900 mb-8 self-center"
        >
          Lomba
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          <motion.div variants={itemVariants}>
            <LombaCard title="Makan Kerupuk" category="Anak" icon={<Cookie size={24} />} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <LombaCard title="Tarik Tambang" category="Bapak/Dewasa" icon={<Activity size={24} />} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <LombaCard title="Balap Karung" category="Anak" icon={<Trophy size={24} />} />
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:col-start-1 md:col-span-1">
            <LombaCard title="Balap Karung" category="Anak" icon={<Trophy size={24} />} />
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-start-2 md:col-span-1">
            <LombaCard title="Esport ML" category="Dewasa" icon={<Gamepad2 size={24} />} />
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-start-3 md:col-span-1">
            <LombaCard title="Esport ML" category="Umum" icon={<Gamepad2 size={24} />} />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

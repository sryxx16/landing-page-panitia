import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Users, Target, UsersRound } from 'lucide-react';

const CategoryCard: React.FC<{ title: string; items: string[]; icon: React.ReactNode; color: string }> = ({ title, items, icon, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full flex flex-col"
  >
    <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-white ${color}`}>
      {icon}
    </div>
    <h3 className="font-black text-gray-900 text-lg mb-4">{title}</h3>
    <ul className="flex flex-col gap-3 flex-1">
      {items.map((item, idx) => (
        <li key={idx} className="text-sm text-gray-600 flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0"></div>
          <span className="leading-tight">{item}</span>
        </li>
      ))}
    </ul>
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
      className="w-full bg-white overflow-hidden py-20 md:py-32 px-6 md:px-16 relative"
    >
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-[#cc3333] font-bold text-[11px] uppercase tracking-wider mb-4"
        >
          Kategori Lomba
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center"
        >
          Daftar Perlombaan
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          <motion.div variants={itemVariants} className="h-full">
            <CategoryCard 
              title="Balita" 
              icon={<Baby size={24} />} 
              color="bg-pink-500"
              items={["Memasukkan Pensil ke dalam botol", "Ambil Bendera"]}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="h-full">
            <CategoryCard 
              title="Anak - Anak" 
              icon={<Target size={24} />} 
              color="bg-blue-500"
              items={["Memasukkan pensil ke dalam botol", "Makan Biskuit", "Kemeja Balon", "Air Kerucut", "Besek Gantung"]}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="h-full">
            <CategoryCard 
              title="Dewasa" 
              icon={<Users size={24} />} 
              color="bg-orange-500"
              items={["Air Kerucut", "Sarung Balon", "Bola Tuing-Tuing"]}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="h-full">
            <CategoryCard 
              title="Lomba Grup" 
              icon={<UsersRound size={24} />} 
              color="bg-emerald-500"
              items={["Estafet Pukul Paku", "Estafet Sarung", "Estafet Air"]}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserCheck, Mic, CalendarHeart, Utensils, Camera, HardHat, ShieldCheck } from 'lucide-react';

const IntiCard: React.FC<{ role: string; names: string[] }> = ({ role, names }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center text-center"
  >
    <div className="text-[#cc3333] mb-2">
      <UserCheck size={24} />
    </div>
    <h4 className="font-black text-gray-900 text-sm mb-3 uppercase tracking-wider">{role}</h4>
    <div className="flex flex-col gap-1 w-full">
      {names.map((name, i) => (
        <span key={i} className="text-[13px] font-bold text-gray-700 bg-gray-50 py-1.5 px-3 rounded-md">{name}</span>
      ))}
    </div>
  </motion.div>
);

const SeksiCard: React.FC<{ title: string; members: string[]; icon: React.ReactNode }> = ({ title, members, icon }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
  >
    <div className="flex items-center gap-3 mb-4 border-b border-gray-50 pb-3">
      <div className="w-10 h-10 rounded-full bg-red-50 text-[#cc3333] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <h4 className="font-black text-gray-900 text-sm uppercase">{title}</h4>
    </div>
    <ul className="flex flex-col gap-2">
      {members.map((member, idx) => (
        <li key={idx} className="text-[13px] text-gray-600 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          {member}
        </li>
      ))}
    </ul>
  </motion.div>
);

export const StrukturPanitia: React.FC = () => {
  const containerVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
      className="w-full bg-gray-50/50 overflow-hidden py-20 md:py-32 px-6 md:px-16 relative border-y border-gray-100"
    >
      <div className="max-w-6xl mx-auto flex flex-col relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-[#cc3333] font-bold text-[11px] uppercase tracking-wider mb-4"
          >
            Susunan Kepanitiaan
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-gray-900"
          >
            Struktur Panitia HUT RI 81
          </motion.h2>
        </div>

        {/* Pelindung & Penasihat */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm mb-12"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <ShieldCheck className="text-[#cc3333]" />
            <h3 className="text-lg font-black text-gray-900 uppercase">Pelindung & Penasihat</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Penasihat</h4>
              <p className="text-[13px] font-bold text-gray-800">Bpk. Nimas Muslim<br/>Bpk. Muhidin<br/>Bpk. Aun Supritna</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Pembina Pemuda</h4>
              <p className="text-[13px] font-bold text-gray-800">Bpk. Jumadi Akbar, S.Pd.</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Penanggung Jawab</h4>
              <p className="text-[13px] font-bold text-gray-800">Bpk. KETUA RT 010/011<br/>Agung Budi Santoso</p>
            </div>
          </div>
        </motion.div>

        {/* Pengurus Inti */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <motion.div variants={itemVariants}>
            <IntiCard role="Ketua Pelaksana" names={["Ahmad Miftahudin (I)", "Haqi Fajriansyah (II)"]} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <IntiCard role="Sekretaris" names={["Surya Daffa Fauzi (I)", "Dama Mahiza (II)"]} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <IntiCard role="Bendahara" names={["Siti Chodijah (I)", "Rafly Miftahudin (II)"]} />
          </motion.div>
        </motion.div>

        {/* Seksi-Seksi */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-black text-gray-900 uppercase">Seksi - Seksi</h3>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants}>
            <SeksiCard 
              title="Seksi Acara" 
              icon={<CalendarHeart size={20} />}
              members={["M. Fathir", "Dea Anisa", "Diah Rohmawati", "Nayla Agustina", "Aurel Cantika"]} 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SeksiCard 
              title="Seksi Konsumsi" 
              icon={<Utensils size={20} />}
              members={["Nara Pasya", "Reisya Najwa", "Anisa Najwa", "Awal Rahman", "Aliya Nurhaliza", "Putri Wulandari", "Nur Khofifah"]} 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SeksiCard 
              title="Seksi Humas" 
              icon={<Mic size={20} />}
              members={["M. Fahri Ak", "Ramadiaz"]} 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SeksiCard 
              title="Seksi Perlengkapan" 
              icon={<HardHat size={20} />}
              members={["Aulana Sutisna", "Luthfi Wardana", "Afif Faisal", "Robbi", "Raffa", "Dera", "Lingga", "Naufal"]} 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SeksiCard 
              title="Koordinator Lapangan" 
              icon={<Users size={20} />}
              members={["Rizky Ramadhan", "Ilham Habibi", "M. Yusni Mubarok", "Sukartini Dewi Anjani"]} 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <SeksiCard 
              title="Seksi Dokumentasi" 
              icon={<Camera size={20} />}
              members={["Aqila Ufairoh", "Putri Wulandari"]} 
            />
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};

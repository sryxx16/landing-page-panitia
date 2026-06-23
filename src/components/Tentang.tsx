import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Heart, Medal } from 'lucide-react';
import { GaleriPanitia } from './GaleriPanitia';

const TujuanItem: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
  >
    <div className="w-10 h-10 rounded-full bg-red-50 text-[#cc3333] flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div className="flex flex-col">
      <h4 className="font-bold text-gray-900 text-sm mb-1">{title}</h4>
      <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
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
      className="w-full relative bg-white overflow-hidden py-20 md:py-32 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Left: Latar Belakang */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-[#cc3333] font-bold text-[11px] uppercase tracking-wider mb-6 w-fit"
          >
            Latar Belakang
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight"
          >
            Peran Pemuda dalam<br/>Membangun Bangsa
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4 text-gray-600 text-sm md:text-[15px] leading-relaxed"
          >
            <p>
              Peranan pemuda dalam mengimplementasikan pembangunan bangsa mempunyai andil yang sangat besar. Di tengah derasnya arus globalisasi, masyarakat dituntut untuk menyiapkan pemuda-pemudi yang siap dalam segala hal, baik di tingkat lokal, regional, maupun nasional.
            </p>
            <p>
              Pemuda warga RT 010/011 khususnya, dituntut untuk mampu mempresentasikan ide atau gagasan yang kreatif dan inovatif agar ideal menjawab tantangan zaman. Jiwa nasionalisme dan kepribadian yang cinta tanah air sangat dibutuhkan.
            </p>
            <p className="font-semibold text-gray-800">
              Kegiatan ini diarahkan untuk memperingati HUT RI ke-81 demi terciptanya lingkungan dengan semangat baru, keharmonisan, dan kerukunan antar tetangga.
            </p>
          </motion.div>
        </div>

        {/* Right: Maksud dan Tujuan */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <h3 className="text-xl font-black text-gray-900 mb-6">Maksud & Tujuan</h3>
            
            <div className="flex flex-col gap-2">
              <TujuanItem 
                title="Silaturahmi Warga" 
                desc="Mempererat tali silaturahmi antar sesama warga lingkungan RT 010 RW 011." 
                icon={<Users size={20} />} 
              />
              <TujuanItem 
                title="Semangat Nasionalisme" 
                desc="Meningkatkan semangat Nasionalisme di kalangan pemuda dan warga." 
                icon={<Target size={20} />} 
              />
              <TujuanItem 
                title="Jiwa Sportivitas" 
                desc="Memupuk jiwa sportivitas dalam berbagai kegiatan perlombaan antar warga." 
                icon={<Medal size={20} />} 
              />
              <TujuanItem 
                title="Mengenang Pahlawan" 
                desc="Mengenang jasa para pahlawan yang telah berkorban demi bangsa, serta mendorong rasa bangga dan cinta tanah air." 
                icon={<Heart size={20} />} 
              />
            </div>
          </motion.div>
        </div>

      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <GaleriPanitia />
      </div>
    </motion.section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Beranda } from './components/Beranda';
import { Tentang } from './components/Tentang';
import { StrukturPanitia } from './components/StrukturPanitia';
import { Lomba } from './components/Lomba';
import { Jadwal } from './components/Jadwal';
import { Anggaran } from './components/Anggaran';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#7b8c98] font-sans text-gray-800 p-4 md:p-8 flex flex-col items-center gap-8 relative overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-300/20 rounded-full mix-blend-overlay filter blur-[100px]"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-red-300/10 rounded-full mix-blend-overlay filter blur-[120px]"
        />
      </div>

      {/* Maximum width container for all cards */}
      <div className="w-full max-w-6xl flex flex-col gap-8 relative z-10">
        <Beranda />
        <Tentang />
        <StrukturPanitia />
        <Lomba />
        
        <div className="flex flex-col md:flex-row gap-8 items-stretch w-full">
          <div className="w-full md:w-1/3">
            <Jadwal />
          </div>
          <div className="w-full md:w-2/3">
            <Anggaran />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

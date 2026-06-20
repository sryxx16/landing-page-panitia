import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Beranda } from './components/Beranda';
import { Tentang } from './components/Tentang';
import { StrukturPanitia } from './components/StrukturPanitia';
import { Lomba } from './components/Lomba';
import { Jadwal } from './components/Jadwal';
import { Anggaran } from './components/Anggaran';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen font-sans text-gray-800 flex flex-col relative overflow-hidden bg-white">
      
      {/* Global Sticky Navbar */}
      <Navbar />

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

      {/* Sections stack directly without gaps or paddings */}
      <div className="w-full flex flex-col relative z-10">
        <Beranda />
        <Tentang />
        <StrukturPanitia />
        <Lomba />
        <Jadwal />
        <Anggaran />

        {/* Footer */}
        <footer className="w-full bg-[#1c1818] py-8 border-t border-gray-800 flex items-center justify-center relative z-20">
          <p className="text-sm font-medium text-gray-400">
            Dibuat dengan ❤️ oleh <span className="text-white font-bold">Surya</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;

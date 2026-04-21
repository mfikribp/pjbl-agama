import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RolledTextButton from '../components/RolledTextButton';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4 relative">
      {/* Decorative BG Blobs (Blue Theme) */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-sky-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 px-5 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-sm font-bold inline-block shadow-sm"
      >
        🌟 Belajar Tajwid Lebih Mudah & Interaktif
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl md:text-7xl font-black mb-8 text-slate-900 leading-[1.1]"
      >
        Kuasai Tajwid dengan <br/>
        <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          Gaya Lebih Modern.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-2xl text-slate-500 mb-12 text-lg md:text-xl leading-relaxed"
      >
        Platform interaktif untuk mempelajari hukum tajwid, makhrajul huruf, 
        dan evaluasi kemampuanmu dengan kuis berbasis AI yang cerdas.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-wrap gap-6 justify-center"
      >
        <Link to="/materi">
          <RolledTextButton 
            text="Mulai Belajar" 
            className="h-16 px-12 rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-200 hover:bg-sky-600 transition-all font-bold text-lg" 
          />
        </Link>
        <Link to="/quiz">
          <RolledTextButton 
            text="Coba Kuis AI" 
            variant="outline" 
            className="h-16 px-12 rounded-2xl border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-bold text-lg" 
          />
        </Link>
      </motion.div>
    </div>
  );
}

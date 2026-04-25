import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import { makhrajPoints, MakhrajPoint } from '../../data/agama/alquran-hadis/makhraj';

const POINTS: MakhrajPoint[] = makhrajPoints;

export default function Makhraj() {
  const [selected, setSelected] = useState<MakhrajPoint | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20 text-center max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sky-600 font-bold tracking-[0.2em] uppercase text-xs mb-4"
        >
          Edukasi Visual
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-slate-900 mb-8"
        >
          Diagram <span className="text-sky-500">Makhraj.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-500 leading-relaxed"
        >
          Klik pada titik bercahaya untuk mengeksplorasi organ bicara dan titik keluarnya huruf hijaiyah.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Interactive Image Container */}
        <div className="relative bg-white rounded-[3rem] shadow-2xl shadow-sky-100/50 border border-slate-100 overflow-hidden aspect-square">
          <img 
            src="/makhraj.png" 
            alt="Anatomi Makhraj" 
            className="w-full h-full object-cover"
          />
          
          {/* Interactive Hotspots */}
          {POINTS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className={`absolute w-8 h-8 rounded-full transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 group z-20`}
              style={{ top: p.top, left: p.left }}
            >
              <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${selected?.id === p.id ? 'bg-sky-500' : 'bg-white'}`} />
              <div className={`relative w-full h-full rounded-full border-4 border-white shadow-lg transition-transform group-hover:scale-125 ${selected?.id === p.id ? 'bg-sky-500' : 'bg-sky-400'}`} />
              
              {/* Tooltip on Hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {p.label}
              </div>
            </button>
          ))}
        </div>

        {/* Content Side */}
        <div className="lg:sticky lg:top-32">
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div 
                key={selected.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-10 md:p-16 rounded-[3rem] bg-white border border-slate-100 shadow-2xl shadow-sky-100/30"
              >
                <div className="inline-block px-4 py-1.5 bg-sky-50 text-sky-600 rounded-full text-sm font-bold mb-6">
                  Area Terpilih
                </div>
                <h3 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 leading-tight">
                  {selected.label}
                </h3>
                <p className="text-xl md:text-2xl text-slate-500 leading-relaxed mb-10">
                  {selected.desc}
                </p>
                <div className="flex gap-4">
                  <Link 
                    to={`/materi?bab=${selected.materiId}`}
                    className="px-8 py-4 bg-sky-500 text-white rounded-2xl font-bold hover:bg-sky-600 transition-colors flex items-center justify-center"
                  >
                    Pelajari Huruf
                  </Link>
                  <button 
                    onClick={() => setSelected(null)}
                    className="px-8 py-4 bg-slate-50 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center p-20 border-2 border-dashed border-slate-200 rounded-[3rem] bg-slate-50/50"
              >
                <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Mulai Eksplorasi</h3>
                <p className="text-slate-500">Pilih salah satu titik bercahaya pada diagram anatomi di samping untuk melihat detail makhraj.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}



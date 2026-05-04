import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import { makhrajPoints, MakhrajPoint } from '../../data/agama/alquran-hadis/makhraj';

const POINTS: MakhrajPoint[] = makhrajPoints;

export default function Makhraj() {
  const [selected, setSelected] = useState<MakhrajPoint | null>(null);

  return (
    <div className="relative min-h-screen bg-[#fafbfc] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-sky-100/50 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
          >
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-ping" />
            Edukasi Visual Interaktif
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight"
          >
            Diagram <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Makhraj.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 leading-relaxed"
          >
            Klik pada titik bercahaya untuk mengeksplorasi organ bicara dan titik keluarnya huruf-huruf hijaiyah secara presisi.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Interactive Image Container */}
          <div className="lg:col-span-7 relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative bg-white rounded-[4rem] p-4 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden relative bg-slate-50">
                <motion.img 
                  src="/makhraj.png" 
                  alt="Anatomi Makhraj" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />

                {/* Interactive Hotspots */}
                {POINTS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelected(p)}
                    className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 z-20"
                    style={{ top: p.top, left: p.left }}
                  >
                    <div className="relative flex items-center justify-center w-full h-full">
                      {/* Outer Rings */}
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-full ${selected?.id === p.id ? 'bg-sky-500' : 'bg-sky-400'}`}
                      />
                      
                      {/* Main Circle */}
                      <div className={`relative w-6 h-6 rounded-full border-4 border-white shadow-xl transition-all duration-500 flex items-center justify-center
                        ${selected?.id === p.id ? 'bg-sky-500 scale-125' : 'bg-white group-hover:bg-sky-400'}
                      `}>
                        {selected?.id === p.id && (
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        )}
                      </div>

                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-black rounded-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none uppercase tracking-widest translate-y-2 group-hover:translate-y-0">
                        {p.label}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div 
                  key={selected.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 md:p-12 rounded-[4rem] bg-white/80 backdrop-blur-2xl border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <svg className="w-32 h-32 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                  </div>

                  <div className="relative">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 text-sky-600 rounded-full text-xs font-bold mb-8"
                    >
                      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
                      Detail Eksplorasi
                    </motion.div>
                    
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-[1.1] tracking-tight"
                    >
                      {selected.label}
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-lg text-slate-500 leading-relaxed mb-10"
                    >
                      {selected.detail || selected.desc}
                    </motion.p>

                    {selected.letters && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-12"
                      >
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Huruf Terkait</h4>
                        <div className="flex flex-wrap gap-4">
                          {selected.letters.map((letter, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + (idx * 0.05) }}
                              whileHover={{ 
                                y: -8, 
                                scale: 1.15, 
                                backgroundColor: '#0ea5e9', 
                                color: '#ffffff',
                                boxShadow: '0 20px 25px -5px rgba(14, 165, 233, 0.3)'
                              }}
                              className="w-16 h-16 flex items-center justify-center bg-white border border-slate-100 rounded-[1.25rem] text-3xl font-bold text-slate-700 shadow-sm transition-all cursor-default arab"
                            >
                              {letter}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <Link 
                        to={`/alquran-hadis/tajwid?bab=${selected.materiId}`}
                        className="flex-1 px-8 py-5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-[2rem] font-bold hover:shadow-lg hover:shadow-sky-200 transition-all flex items-center justify-center gap-3 group"
                      >
                        Pelajari Hukum Tajwid
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <button 
                        onClick={() => setSelected(null)}
                        className="px-8 py-5 bg-slate-50 text-slate-500 rounded-[2rem] font-bold hover:bg-slate-100 transition-all"
                      >
                        Tutup
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center p-16 lg:p-24 border-2 border-dashed border-slate-200 rounded-[4rem] bg-slate-50/30 backdrop-blur-sm flex flex-col items-center"
                >
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 bg-white rounded-3xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] flex items-center justify-center mb-10"
                  >
                    <svg className="w-12 h-12 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </motion.div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Mulai Eksplorasi</h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-xs">Pilih salah satu titik bercahaya pada diagram untuk membedah detail artikulasi.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}



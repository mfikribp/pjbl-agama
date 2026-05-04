import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  IconBook, 
  IconHeart, 
  IconScale, 
  IconHistory, 
  IconLanguage,
  IconArrowRight
} from '@tabler/icons-react';

import { materiAgama } from '../data/materi-agama';

const subjectIcons: Record<string, any> = {
  "alquran-hadis": IconBook,
  "aqidah-akhlak": IconHeart,
  "fiqih": IconScale,
  "ski": IconHistory,
  "bahasa-arab": IconLanguage,
};

export default function Home() {
  const subjects = Object.values(materiAgama);

  return (
    <div className="relative min-h-screen bg-[#fafbfc] overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-sky-200/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] bg-indigo-200/20 rounded-full blur-[100px]" 
        />
        <div className="absolute bottom-0 right-0 w-full h-[50%] bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-40">
        {/* Hero Section */}
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-sky-100 text-sky-600 rounded-full text-xs font-bold uppercase tracking-widest mb-10 shadow-sm"
          >
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
            Media Pembelajaran PAI & Bahasa Arab Modern
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-9xl font-black mb-10 text-slate-900 tracking-tight leading-[0.9]"
          >
            Materi Agama <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">
              Kelas 7.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Eksplorasi kurikulum PAI MTs/SMP dengan visualisasi interaktif, 
            rangkuman cerdas, dan simulator ibadah dalam satu genggaman.
          </motion.p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, idx) => {
            const Icon = subjectIcons[subject.id] || IconBook;
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <Link
                  to={`/${subject.id}`}
                  className="group relative block p-10 rounded-[3.5rem] bg-white/60 backdrop-blur-xl border border-white hover:border-sky-200 transition-all duration-500 h-full overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(14,165,233,0.15)] hover:-translate-y-2"
                >
                  {/* Card Background Glow */}
                  <div className="absolute -top-[20%] -right-[20%] w-40 h-40 bg-sky-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-10 flex justify-between items-start">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-xl shadow-sky-100 group-hover:rotate-6 transition-transform duration-500">
                        <Icon size={32} stroke={2} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-sky-400 transition-colors">
                        Bab {idx + 1}
                      </span>
                    </div>

                    <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-sky-600 transition-colors tracking-tight">
                      {subject.subject}
                    </h3>
                    
                    <p className="text-slate-500 leading-relaxed mb-10 flex-grow">
                      {subject.description}
                    </p>

                    <div className="flex items-center gap-2 text-sky-500 font-bold group/btn">
                      <span className="text-sm uppercase tracking-widest">Mulai Eksplorasi</span>
                      <IconArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

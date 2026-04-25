import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { materiAgama } from '../data/materi-agama';
import RolledTextButton from '../components/RolledTextButton';

export default function SubjectPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [selectedChapter, setSelectedChapter] = useState<any>(null);

  const subjectData = subjectId ? materiAgama[subjectId] : null;

  if (!subjectData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Materi Tidak Ditemukan</h1>
          <Link to="/" className="text-sky-500 font-bold">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 px-6">
      <div className="max-w-7xl mx-auto py-20">
        <header className="mb-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sky-600 font-bold tracking-[0.2em] uppercase text-xs mb-4"
          >
            Mata Pelajaran
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
            {subjectData.subject}
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            {subjectData.description}
          </p>
          {subjectData.pdfUrl && (
            <div className="mt-8">
              <a 
                href={subjectData.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-sky-50 text-sky-600 font-bold rounded-2xl border border-sky-100 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Baca Buku (PDF)
              </a>
            </div>
          )}
        </header>

        {/* Special Buttons for Al-Quran Hadis */}
        {subjectId === 'alquran-hadis' && (
          <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/alquran-hadis/tajwid" className="group p-8 rounded-3xl bg-sky-500 text-white shadow-xl shadow-sky-100 hover:scale-[1.02] transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center font-black text-xl">
                  ✨
                </div>
                <h3 className="text-2xl font-bold text-white">Materi Tajwid</h3>
              </div>
              <p className="text-sky-50 opacity-90 leading-relaxed">
                Visualisasi hukum tajwid modern.
              </p>
            </Link>
            <Link to="/alquran-hadis/makhraj" className="group p-8 rounded-3xl bg-white border-2 border-sky-500 text-sky-600 shadow-xl shadow-sky-100 hover:scale-[1.02] transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-black text-xl">
                  🗣️
                </div>
                <h3 className="text-2xl font-bold">Makhraj</h3>
              </div>
              <p className="text-slate-500 leading-relaxed text-sm">
                Cara pengucapan huruf hijaiyah.
              </p>
            </Link>
          </div>
        )}

        {/* Special Button for SKI */}
        {subjectId === 'ski' && (
          <div className="mb-20">
            <Link to="/ski/timeline" className="group p-8 rounded-3xl bg-amber-500 text-white shadow-xl shadow-amber-100 hover:scale-[1.02] transition-all flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center font-black text-3xl">
                ⏳
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Garis Waktu Peradaban</h3>
                <p className="text-amber-50 opacity-90 leading-relaxed">
                  Jelajahi sejarah perjuangan Islam secara kronologis.
                </p>
              </div>
            </Link>
          </div>
        )}

        {/* Special Button for Fiqih */}
        {subjectId === 'fiqih' && (
          <div className="mb-20">
            <Link to="/fiqih/wudhu-simulator" className="group p-8 rounded-3xl bg-emerald-500 text-white shadow-xl shadow-emerald-100 hover:scale-[1.02] transition-all flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center font-black text-3xl">
                💧
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Simulator Tata Cara Wudhu</h3>
                <p className="text-emerald-50 opacity-90 leading-relaxed">
                  Panduan interaktif langkah-demi-langkah berwudhu yang benar.
                </p>
              </div>
            </Link>
          </div>
        )}

        {/* Quiz Button for All Subjects */}
        <div className="mb-20">
          <Link to={`/quiz?subject=${subjectId}`} className="group p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-100 hover:scale-[1.02] transition-all flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center font-black text-xl">
                📝
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Kuis {subjectData.subject}</h3>
                <p className="text-blue-50 opacity-90 leading-relaxed text-sm">
                  Uji kemampuanmu dalam materi {subjectData.subject}.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <svg className="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjectData.chapters.map((chapter, idx) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-sky-200 hover:bg-white hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500 flex flex-col justify-between h-[380px]"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-sky-100">
                    {idx + 1}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-sky-300">
                    BAB {idx + 1}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">
                  {chapter.title}
                </h3>
              </div>
              
              <RolledTextButton 
                text="Mulai Belajar" 
                variant="outline"
                onClick={() => setSelectedChapter(chapter)}
                className="w-full h-14 rounded-2xl border-slate-200 text-slate-600 hover:bg-sky-500 hover:text-white hover:border-sky-500 font-bold"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal Materi */}
        <AnimatePresence>
          {selectedChapter && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedChapter(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
              >
                <div className="p-8 md:p-12 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <div>
                    <div className="text-sky-600 font-bold text-xs uppercase tracking-widest mb-2">RINGKASAN MATERI</div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900">{selectedChapter.title}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedChapter(null)}
                    className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-all shadow-sm"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-8 md:p-12 overflow-y-auto flex-grow custom-scrollbar">
                  {selectedChapter.arabicContent && (
                    <div className="p-10 mb-8 bg-sky-50 rounded-[2.5rem] text-center border border-sky-100">
                      <p className="text-5xl font-serif text-slate-900 leading-[1.8] mb-4" dir="rtl">
                        {selectedChapter.arabicContent}
                      </p>
                    </div>
                  )}
                  <div className="prose prose-slate max-w-none 
                    [&_p]:text-lg [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-6
                    [&_strong]:text-slate-900 [&_strong]:font-bold
                  ">
                    <p>{selectedChapter.content}</p>
                  </div>
                </div>

                <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex justify-end items-center">
                  <button 
                    onClick={() => setSelectedChapter(null)}
                    className="px-10 py-4 bg-sky-500 text-white rounded-2xl font-bold hover:bg-sky-600 transition-colors shadow-lg shadow-sky-100"
                  >
                    Selesai Membaca
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  IconBook, 
  IconEar, 
  IconTimeline, 
  IconBrain, 
  IconDownload,
  IconArrowRight,
  IconX,
  IconVocabulary
} from '@tabler/icons-react';
import RolledTextButton from '../components/RolledTextButton';
import { materiAgama } from '../data/materi-agama';

export default function SubjectPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [selectedChapter, setSelectedChapter] = useState<any>(null);

  const subjectData = subjectId ? materiAgama[subjectId] : null;

  if (!subjectData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafbfc]">
        <div className="text-center">
          <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-8">
            <IconX size={48} className="text-red-400" />
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-4">Materi Tidak Ditemukan</h1>
          <Link to="/" className="text-sky-500 font-bold hover:underline">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#fafbfc] overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-sky-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <header className="mb-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
            Mata Pelajaran
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-slate-900 mb-10 leading-[0.95] tracking-tight"
          >
            {subjectData.subject}<span className="text-sky-500">.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl"
          >
            {subjectData.description}
          </motion.p>

          {subjectData.pdfUrl && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <a 
                href={subjectData.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-8 py-4 bg-white border border-slate-100 text-slate-700 font-bold rounded-[2rem] hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all shadow-xl shadow-slate-200/40"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <IconDownload size={20} />
                </div>
                Baca Buku Digital (PDF)
              </a>
            </motion.div>
          )}
        </header>

        {/* Dynamic Navigation Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          {/* Main Action Tile (Quiz) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-8 group"
          >
            <Link to={`/quiz?subject=${subjectId}`} className="relative block h-full p-10 rounded-[3.5rem] bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 text-white shadow-2xl shadow-blue-200 overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <IconBrain size={180} stroke={1.5} />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white/20 backdrop-blur-md flex items-center justify-center mb-10">
                    <IconBrain size={32} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Kuis Pintar</h3>
                  <p className="text-blue-50/80 text-lg max-w-md leading-relaxed">
                    Uji pemahamanmu mengenai {subjectData.subject} dengan kuis interaktif yang dirancang khusus untuk kurikulum kelas 7.
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-3 font-bold group/btn">
                  <span className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-2xl group-hover/btn:bg-white group-hover/btn:text-blue-600 transition-all">
                    Mulai Ujian Sekarang
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Side Tiles */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {subjectId === 'alquran-hadis' && (
              <>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                  <Link to="/alquran-hadis/tajwid" className="block p-8 rounded-[3rem] bg-white border border-white shadow-xl shadow-slate-200/30 hover:border-sky-200 transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                        <IconEar size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Materi Tajwid</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">Visualisasi interaktif hukum bacaan.</p>
                  </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                  <Link to="/alquran-hadis/makhraj" className="block p-8 rounded-[3rem] bg-white border border-white shadow-xl shadow-slate-200/30 hover:border-sky-200 transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                        <IconVocabulary size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Makhraj</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">Panduan pengucapan huruf hijaiyah.</p>
                  </Link>
                </motion.div>
              </>
            )}

            {subjectId === 'ski' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="h-full">
                <Link to="/ski/timeline" className="h-full block p-10 rounded-[3rem] bg-amber-500 text-white shadow-xl shadow-amber-200 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                    <IconTimeline size={120} />
                  </div>
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                      <IconTimeline size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-2">Timeline Sejarah</h3>
                      <p className="text-amber-50/80 text-sm">Garis waktu peradaban Islam.</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {subjectId === 'fiqih' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="h-full">
                <Link to="/fiqih/wudhu-simulator" className="h-full block p-10 rounded-[3rem] bg-emerald-500 text-white shadow-xl shadow-emerald-200 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                    <IconBook size={120} />
                  </div>
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                      <IconBook size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-2">Simulasi Wudhu</h3>
                      <p className="text-emerald-50/80 text-sm">Praktik wudhu interaktif.</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {subjectId !== 'alquran-hadis' && subjectId !== 'ski' && subjectId !== 'fiqih' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="h-full">
                <div className="h-full p-10 rounded-[3rem] bg-slate-900 text-white shadow-xl flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center mb-6">
                    <IconBook size={32} className="text-sky-400" />
                  </div>
                  <h3 className="text-xl font-black mb-2">Kurikulum Merdeka</h3>
                  <p className="text-slate-400 text-sm">Materi disusun sesuai standar terbaru Kemendikbud.</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Chapters Section */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Daftar Materi Pembelajaran</h2>
          <div className="h-px flex-grow mx-8 bg-slate-200 hidden md:block" />
          <span className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">{subjectData.chapters.length} BAB</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjectData.chapters.map((chapter, idx) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-10 rounded-[3.5rem] bg-white border border-white hover:border-sky-200 transition-all duration-500 flex flex-col justify-between h-[420px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_-15px_rgba(14,165,233,0.12)] hover:-translate-y-2"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 rounded-[1.25rem] bg-sky-50 text-sky-600 flex items-center justify-center font-black text-xl shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                    {idx + 1}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-sky-400">
                    Materi Inti
                  </span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-sky-600 transition-colors tracking-tight leading-tight">
                  {chapter.title}
                </h3>
                <p className="text-slate-500 line-clamp-3 leading-relaxed">
                  Pelajari konsep mendalam mengenai {chapter.title} dengan ringkasan yang telah disederhanakan.
                </p>
              </div>
              
              <button 
                onClick={() => setSelectedChapter(chapter)}
                className="w-full h-16 rounded-2xl border-2 border-slate-100 text-slate-600 font-bold hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all flex items-center justify-center gap-3 group/btn"
              >
                Mulai Belajar
                <IconArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal Materi */}
        <AnimatePresence>
          {selectedChapter && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedChapter(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col"
              >
                <div className="p-10 md:p-14 border-b border-slate-100 flex justify-between items-start bg-slate-50/30">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 text-sky-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                      Ringkasan Materi
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">{selectedChapter.title}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedChapter(null)}
                    className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-400 transition-all shadow-sm group"
                  >
                    <IconX size={24} className="group-hover:rotate-90 transition-transform" />
                  </button>
                </div>
                
                <div className="p-10 md:p-14 overflow-y-auto flex-grow custom-scrollbar bg-white">
                  {selectedChapter.arabicContent && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-12 mb-12 bg-sky-50/50 rounded-[3rem] text-center border border-sky-100 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 p-8 opacity-5 text-sky-600">
                        <IconBook size={120} />
                      </div>
                      <p className="relative z-10 text-5xl md:text-6xl font-serif text-slate-900 leading-[1.8] mb-4" dir="rtl">
                        {selectedChapter.arabicContent}
                      </p>
                    </motion.div>
                  )}
                  <div className="prose prose-slate max-w-none 
                    [&_p]:text-xl [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-8
                    [&_strong]:text-slate-900 [&_strong]:font-black
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8
                    [&_li]:text-lg [&_li]:text-slate-500 [&_li]:mb-4
                  ">
                    <p>{selectedChapter.content}</p>
                  </div>
                </div>

                <div className="p-10 border-t border-slate-100 bg-slate-50/50 flex justify-end items-center">
                  <button 
                    onClick={() => setSelectedChapter(null)}
                    className="px-12 py-5 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-[2rem] font-bold hover:shadow-2xl hover:shadow-sky-200 transition-all"
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

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { MATERI } from '../data/materiData';
import RolledTextButton from '../components/RolledTextButton';

export default function Materi() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const location = useLocation();

  const currentAudioRef = React.useRef<HTMLAudioElement | null>(null);
  const activeBtnRef = React.useRef<HTMLElement | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const babId = params.get('bab');
    if (babId) {
      const item = MATERI.find(m => m.id === babId);
      if (item) {
        setSelectedItem(item);
      }
    }

    const playIcon = '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
    const stopIcon = '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h12v12H6z"/></svg>';

    const resetActiveButton = () => {
      if (activeBtnRef.current) {
        activeBtnRef.current.innerHTML = playIcon;
        activeBtnRef.current = null;
      }
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current = null;
      }
    };

    // Global listener for audio buttons in innerHTML
    const handleAudioClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const btn = target.closest('.audio-play-btn') as HTMLElement;
      
      if (btn) {
        const audioId = btn.getAttribute('data-audio-id');
        if (!audioId) return;

        // If clicking the same button that is currently playing, stop it
        if (activeBtnRef.current === btn) {
          resetActiveButton();
          return;
        }

        // If another audio is playing, stop it first
        resetActiveButton();

        const audio = new Audio(`https://cdn.islamic.network/quran/audio/64/ar.alafasy/${audioId}.mp3`);
        currentAudioRef.current = audio;
        activeBtnRef.current = btn;
        
        btn.innerHTML = stopIcon;

        audio.play().catch(err => {
          console.error("Audio play failed:", err);
          resetActiveButton();
        });

        audio.onended = () => {
          resetActiveButton();
        };
      }
    };

    document.addEventListener('click', handleAudioClick);
    return () => {
      document.removeEventListener('click', handleAudioClick);
      resetActiveButton();
    };
  }, [location.search]);

  return (
    <div className="min-h-screen pb-20 px-6">
      <div className="max-w-7xl mx-auto py-20">
        <header className="mb-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sky-600 font-bold tracking-[0.2em] uppercase text-xs mb-4"
          >
            Kurikulum Tajwid
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
            Pelajari <span className="text-sky-500">14 Bab</span> <br/> 
            Tajwid Lengkap.
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Eksplorasi materi tajwid dengan visualisasi modern dan penjelasan yang mudah dipahami.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MATERI.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-sky-200 hover:bg-white hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500 flex flex-col justify-between h-[420px]"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-sky-100">
                    {idx + 1}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-sky-300">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed line-clamp-3">
                  Klik mulai belajar untuk melihat penjelasan lengkap mengenai {item.title}.
                </p>
              </div>
              
              <RolledTextButton 
                text="Mulai Belajar" 
                variant="outline"
                onClick={() => setSelectedItem(item)}
                className="w-full h-14 rounded-2xl border-slate-200 text-slate-600 hover:bg-sky-500 hover:text-white hover:border-sky-500 font-bold"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal Materi */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
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
                    <div className="text-sky-600 font-bold text-xs uppercase tracking-widest mb-2">{selectedItem.label}</div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900">{selectedItem.title}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-all shadow-sm"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-8 md:p-12 overflow-y-auto flex-grow custom-scrollbar">
                  <div 
                    className="prose prose-slate max-w-none 
                      [&_p]:text-lg [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-6
                      [&_strong]:text-slate-900 [&_strong]:font-bold
                      [&_table]:w-full [&_table]:mb-8 [&_table]:border-collapse
                      [&_th]:bg-slate-50 [&_th]:p-4 [&_th]:text-left [&_th]:text-sm [&_th]:font-bold [&_th]:text-slate-900 [&_th]:border [&_th]:border-slate-100
                      [&_td]:p-4 [&_td]:text-slate-600 [&_td]:border [&_td]:border-slate-100
                      [&_.materi-row]:flex [&_.materi-row]:flex-wrap [&_.materi-row]:gap-4 [&_.materi-row]:mb-8 [&_.materi-row]:items-center
                      [&_.huruf-chip]:px-6 [&_.huruf-chip]:py-3 [&_.huruf-chip]:bg-sky-50 [&_.huruf-chip]:text-sky-600 [&_.huruf-chip]:rounded-2xl [&_.huruf-chip]:font-bold [&_.huruf-chip]:text-2xl [&_.huruf-chip]:border [&_.huruf-chip]:border-sky-100
                      [&_.arab]:text-4xl [&_.arab]:font-serif [&_.arab]:text-slate-900 [&_.arab]:mr-4
                      [&_.arab-sm]:text-2xl [&_.arab-sm]:font-serif [&_.arab-sm]:text-slate-900
                      [&_.verse-ref]:text-[10px] [&_.verse-ref]:font-bold [&_.verse-ref]:text-sky-400 [&_.verse-ref]:uppercase [&_.verse-ref]:tracking-wider [&_.verse-ref]:mt-1 [&_.verse-ref]:inline-flex [&_.verse-ref]:items-center
                      [&_.audio-play-btn]:ml-2 [&_.audio-play-btn]:w-6 [&_.audio-play-btn]:h-6 [&_.audio-play-btn]:bg-sky-100 [&_.audio-play-btn]:text-sky-500 [&_.audio-play-btn]:rounded-full [&_.audio-play-btn]:flex [&_.audio-play-btn]:items-center [&_.audio-play-btn]:justify-center [&_.audio-play-btn]:hover:bg-sky-200 [&_.audio-play-btn]:transition-all [&_.audio-play-btn]:cursor-pointer [&_.audio-play-btn]:border-none [&_.audio-play-btn]:shadow-sm
                      [&_.sub-card]:p-8 [&_.sub-card]:bg-slate-50 [&_.sub-card]:rounded-3xl [&_.sub-card]:mb-8
                      [&_.sub-card_h4]:text-xl [&_.sub-card_h4]:font-bold [&_.sub-card_h4]:mb-4 [&_.sub-card_h4]:text-slate-900
                      [&_audio]:w-full [&_audio]:mt-4
                    "
                    dangerouslySetInnerHTML={{ __html: selectedItem.html }} 
                  />
                </div>

                <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex justify-end">
                  <button 
                    onClick={() => setSelectedItem(null)}
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

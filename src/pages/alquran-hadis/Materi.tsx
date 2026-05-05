import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { IconArrowRight, IconX, IconBook, IconPlayerPlay, IconPlayerStop } from '@tabler/icons-react';
import { MATERI } from '../../data/agama/alquran-hadis/materi-tajwid';
import { replaceVerseRefs } from '../../utils/quranUtils';

const renderEnhancedHtml = (html: string) => {
  let content = replaceVerseRefs(html);
  content = content.replace(
    /<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"\/><\/svg>/g,
    `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8a5 5 0 0 1 0 8" /><path d="M17.7 5a9 9 0 0 1 0 14" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg><span style="font-family: 'Inter', sans-serif;" class="font-bold text-xs capitalize tracking-wide mt-0.5">Dengarkan</span>`
  );
  return content;
};

export default function Materi() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const location = useLocation();

  const currentAudioRef = React.useRef<HTMLAudioElement | null>(null);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  // Use a ref so the event listener always sees the latest value without re-registering
  const playingAudioIdRef = React.useRef<string | null>(null);

  const stopAudio = React.useCallback(() => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current = null;
    }
    playingAudioIdRef.current = null;
    setPlayingAudioId(null);
  }, []);

  // Handle URL param to open a specific bab
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const babId = params.get('bab');
    if (babId) {
      const item = MATERI.find(m => m.id === babId);
      if (item) setSelectedItem(item);
    }
  }, [location.search]);

  // Register audio click listener once — uses ref to avoid stale closure
  useEffect(() => {
    const handleAudioClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const btn = target.closest('.audio-play-btn') as HTMLElement;

      if (btn) {
        const audioId = btn.getAttribute('data-audio-id');
        if (!audioId) return;

        if (playingAudioIdRef.current === audioId) {
          stopAudio();
          return;
        }

        // Stop any currently playing audio first
        if (currentAudioRef.current) {
          currentAudioRef.current.pause();
          currentAudioRef.current = null;
        }

        const audio = new Audio(`https://cdn.islamic.network/quran/audio/64/ar.alafasy/${audioId}.mp3`);
        currentAudioRef.current = audio;
        playingAudioIdRef.current = audioId;
        setPlayingAudioId(audioId);

        audio.play().catch(() => stopAudio());
        audio.onended = () => stopAudio();
      }
    };

    document.addEventListener('click', handleAudioClick);
    return () => {
      document.removeEventListener('click', handleAudioClick);
      stopAudio();
    };
  }, [stopAudio]);

  return (
    <div className="relative min-h-screen bg-[#fafbfc] overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-sky-100/50 rounded-full blur-[120px]" />
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
            Kurikulum Tajwid
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-slate-900 mb-10 leading-[0.95] tracking-tight"
          >
            Eksplorasi <span className="text-sky-500">14 Bab</span> <br/> 
            Tajwid Lengkap<span className="text-sky-500">.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl"
          >
            Pelajari setiap hukum bacaan Al-Qur'an dengan visualisasi modern, 
            contoh audio, dan penjelasan yang mudah dipahami.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MATERI.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-10 rounded-[3.5rem] bg-white border border-white hover:border-sky-200 transition-all duration-500 flex flex-col justify-between h-[420px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_-15px_rgba(14,165,233,0.12)] hover:-translate-y-2"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-sky-50 text-sky-600 flex items-center justify-center font-black text-2xl shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                    {idx + 1}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-sky-400">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-sky-600 transition-colors tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed line-clamp-3">
                  Klik mulai belajar untuk mengeksplorasi penjelasan mendalam, contoh ayat, dan audio interaktif mengenai {item.title}.
                </p>
              </div>
              
              <button 
                onClick={() => setSelectedItem(item)}
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
          {selectedItem && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
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
                      Materi: {selectedItem.label}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">{selectedItem.title}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-400 transition-all shadow-sm group"
                  >
                    <IconX size={24} className="group-hover:rotate-90 transition-transform" />
                  </button>
                </div>
                
                <div className="p-10 md:p-14 overflow-y-auto flex-grow custom-scrollbar bg-white">
                  <div 
                    className="prose prose-slate max-w-none 
                      [&_p]:text-xl [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-8
                      [&_strong]:text-slate-900 [&_strong]:font-black
                      [&_table]:w-full [&_table]:mb-12 [&_table]:border-collapse [&_table]:rounded-[2rem] [&_table]:overflow-hidden
                      [&_th]:bg-slate-50 [&_th]:p-6 [&_th]:text-left [&_th]:text-xs [&_th]:font-black [&_th]:uppercase [&_th]:tracking-widest [&_th]:text-slate-400 [&_th]:border-b [&_th]:border-slate-100
                      [&_td]:p-6 [&_td]:text-slate-600 [&_td]:border-b [&_td]:border-slate-50
                      [&_.materi-row]:flex [&_.materi-row]:flex-wrap [&_.materi-row]:gap-4 [&_.materi-row]:mb-10 [&_.materi-row]:items-center
                      [&_.huruf-chip]:w-16 [&_.huruf-chip]:h-16 [&_.huruf-chip]:bg-white [&_.huruf-chip]:text-slate-700 [&_.huruf-chip]:rounded-2xl [&_.huruf-chip]:font-bold [&_.huruf-chip]:text-3xl [&_.huruf-chip]:border [&_.huruf-chip]:border-slate-100 [&_.huruf-chip]:shadow-sm [&_.huruf-chip]:flex [&_.huruf-chip]:items-center [&_.huruf-chip]:justify-center [&_.huruf-chip]:font-serif
                      [&_.arab]:text-5xl [&_.arab]:font-serif [&_.arab]:text-slate-900 [&_.arab]:mr-4 [&_.arab]:leading-loose
                      [&_.arab-sm]:text-3xl [&_.arab-sm]:font-serif [&_.arab-sm]:text-slate-900 [&_.arab-sm]:leading-loose
                      [&_.verse-ref]:text-[10px] [&_.verse-ref]:font-black [&_.verse-ref]:text-sky-400 [&_.verse-ref]:uppercase [&_.verse-ref]:tracking-[0.2em] [&_.verse-ref]:inline-flex [&_.verse-ref]:items-center [&_.verse-ref]:gap-3
                      [&_.audio-play-btn]:w-auto [&_.audio-play-btn]:px-4 [&_.audio-play-btn]:py-2 [&_.audio-play-btn]:h-10 [&_.audio-play-btn]:bg-sky-100 [&_.audio-play-btn]:text-sky-600 [&_.audio-play-btn]:rounded-full [&_.audio-play-btn]:flex [&_.audio-play-btn]:items-center [&_.audio-play-btn]:gap-2 [&_.audio-play-btn]:justify-center [&_.audio-play-btn]:hover:bg-sky-500 [&_.audio-play-btn]:hover:text-white [&_.audio-play-btn]:transition-all [&_.audio-play-btn]:cursor-pointer [&_.audio-play-btn]:border [&_.audio-play-btn]:border-sky-200 [&_.audio-play-btn]:shadow-md [&_.audio-play-btn]:hover:shadow-lg [&_.audio-play-btn]:hover:-translate-y-0.5
                      [&_.sub-card]:p-10 [&_.sub-card]:bg-slate-50/50 [&_.sub-card]:rounded-[2.5rem] [&_.sub-card]:mb-10 [&_.sub-card]:border [&_.sub-card]:border-slate-100
                      [&_.sub-card_h4]:text-2xl [&_.sub-card_h4]:font-black [&_.sub-card_h4]:mb-6 [&_.sub-card_h4]:text-slate-900 [&_.sub-card_h4]:tracking-tight
                      [&_audio]:hidden
                    "
                    dangerouslySetInnerHTML={{ __html: renderEnhancedHtml(selectedItem.html) }} 
                  />
                </div>

                <div className="p-10 border-t border-slate-100 bg-slate-50/50 flex justify-end items-center">
                  <button 
                    onClick={() => setSelectedItem(null)}
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

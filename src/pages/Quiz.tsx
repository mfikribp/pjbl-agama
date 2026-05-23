import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { IconChevronRight, IconRefresh, IconHome, IconCheck, IconX, IconTrophy, IconBrain, IconBulb } from '@tabler/icons-react';
import { materiAgama } from '../data/materi-agama';
import { shuffleArray } from '../utils/quizUtils';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function Quiz() {
  const [searchParams] = useSearchParams();
  const subjectId = searchParams.get('subject') || 'alquran-hadis';
  const subjectData = materiAgama[subjectId];
  const initialQuizData = subjectData?.quizzes || [];

  const [questions, setQuestions] = useState(() => shuffleArray(initialQuizData).slice(0, 20));
  const [idx, setIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  
  // Re-shuffle when subject changes
  useEffect(() => {
    setQuestions(shuffleArray(initialQuizData).slice(0, 20));
    setIdx(0);
    setAnswered(false);
    setSelected(null);
    setCorrect(0);
    setDone(false);
  }, [subjectId]);

  if (questions.length === 0) {
    return (
      <div className="relative min-h-screen bg-[#fafbfc] flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="w-24 h-24 bg-white rounded-[2rem] shadow-xl flex items-center justify-center mx-auto mb-10">
            <IconBrain size={48} className="text-slate-300" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Kuis Belum Tersedia</h2>
          <p className="text-slate-500 text-lg mb-12 leading-relaxed">
            Maaf, kuis untuk mata pelajaran {subjectData?.subject || subjectId} sedang dalam proses penyusunan oleh tim pengajar.
          </p>
          <Link to="/" className="inline-flex items-center gap-3 px-8 py-4 bg-sky-500 text-white rounded-[2rem] font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-100">
            <IconHome size={20} />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const q = questions[idx];
  const progress = ((idx + (answered ? 1 : 0)) / questions.length) * 100;

  const handleAnswer = (i: number) => {
    if (answered) return;
    setAnswered(true);
    setSelected(i);
    if (i === q.jawaban) setCorrect(c => c + 1);
  };

  if (done) return (
    <div className="relative min-h-screen bg-[#fafbfc] flex items-center justify-center px-6 overflow-hidden">
       {/* Decorative BG */}
       <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-100/30 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 max-w-2xl w-full bg-white/80 backdrop-blur-2xl p-12 md:p-20 rounded-[4rem] border border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] text-center"
      >
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-amber-200"
        >
          <IconTrophy size={48} className="text-white" />
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">Kuis Selesai!</h2>
        <p className="text-slate-500 mb-12">Berikut adalah ringkasan performa belajarmu.</p>
        
        <div className="relative inline-flex items-center justify-center mb-12">
          <svg className="w-48 h-48 transform -rotate-90">
            <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
            <motion.circle 
              cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" 
              strokeDasharray={2 * Math.PI * 88}
              initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
              animate={{ strokeDashoffset: (2 * Math.PI * 88) * (1 - (correct / questions.length)) }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-sky-500" 
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-6xl font-black text-slate-900">{Math.round((correct / questions.length) * 100)}</span>
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Skor Akhir</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <div className="text-3xl font-black text-slate-900">{correct}</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Benar</div>
          </div>
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <div className="text-3xl font-black text-slate-900">{questions.length - correct}</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Salah</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => { setIdx(0); setDone(false); setCorrect(0); setQuestions(shuffleArray(initialQuizData)); }} 
            className="flex-1 px-8 py-5 bg-sky-500 text-white rounded-[2rem] font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-100 flex items-center justify-center gap-3"
          >
            <IconRefresh size={20} />
            Ulangi Kuis
          </button>
          <Link 
            to="/" 
            className="flex-1 px-8 py-5 bg-slate-100 text-slate-600 rounded-[2rem] font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-3"
          >
            <IconHome size={20} />
            Beranda
          </Link>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-[#fafbfc] overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-sky-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[30%] h-[30%] bg-indigo-50/40 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 lg:py-32">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 text-sky-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4"
              >
                Evaluasi Mandiri
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Kuis {subjectData?.subject}</h2>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Progress Belajar</span>
              <span className="text-2xl font-black text-sky-600 leading-none">
                {idx + 1} <span className="text-slate-300 text-lg">/ {questions.length}</span>
              </span>
            </div>
          </div>
          
          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-white shadow-inner">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }} 
              transition={{ duration: 0.8, ease: "circOut" }}
              className="h-full bg-gradient-to-r from-sky-400 to-blue-600" 
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white/80 backdrop-blur-2xl p-10 md:p-16 rounded-[4rem] border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
              <IconBrain size={200} stroke={1} />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-16 text-center leading-[1.4] max-w-3xl mx-auto tracking-tight">
                {q.soal}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                {q.pilihan.map((opt, i) => {
                  const isCorrect = i === q.jawaban;
                  const isSelected = i === selected;
                  
                  let buttonClass = "bg-white border-slate-100 hover:border-sky-200 hover:bg-sky-50/30";
                  if (answered) {
                    if (isCorrect) buttonClass = "bg-green-50 border-green-500 text-green-700 shadow-lg shadow-green-100";
                    else if (isSelected) buttonClass = "bg-red-50 border-red-500 text-red-700";
                    else buttonClass = "bg-slate-50 border-slate-100 opacity-40 text-slate-400";
                  }

                  return (
                    <motion.button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      disabled={answered}
                      whileHover={!answered ? { scale: 1.02, y: -2 } : {}}
                      whileTap={!answered ? { scale: 0.98 } : {}}
                      className={`group relative p-6 rounded-[2.5rem] text-left border-2 transition-all duration-300 flex items-center gap-6 ${buttonClass}`}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg flex-shrink-0 transition-colors
                        ${answered && isCorrect ? 'bg-green-500 text-white' : answered && isSelected ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-sky-100 group-hover:text-sky-600'}
                      `}>
                        {answered && isCorrect ? <IconCheck size={24} /> : answered && isSelected ? <IconX size={24} /> : LETTERS[i]}
                      </div>
                      <span className="font-bold text-lg leading-tight">{opt}</span>
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence>
                {answered && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pt-10 border-t border-slate-100"
                  >
                    <div className="bg-sky-50/50 p-10 rounded-[3rem] mb-10 border border-sky-100/50 relative overflow-hidden">
                      <div className="relative z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100 text-sky-600 font-black uppercase tracking-widest text-[9px] rounded-lg mb-4">
                          <IconBulb size={12} className="text-sky-500 animate-pulse" />
                          Penjelasan Jawaban
                        </span>
                        <p className="text-slate-600 text-lg leading-relaxed">{q.penjelasan}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => { 
                        if (idx < questions.length - 1) { 
                          setIdx(idx + 1); 
                          setAnswered(false); 
                          setSelected(null); 
                        } else {
                          setDone(true);
                        }
                      }}
                      className="w-full py-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-[2.5rem] font-bold text-xl hover:shadow-2xl hover:shadow-sky-200 transition-all flex items-center justify-center gap-3 group"
                    >
                      {idx === questions.length - 1 ? "Lihat Hasil Akhir" : "Lanjut ke Soal Berikutnya"}
                      <IconChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

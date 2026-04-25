import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useSearchParams, Link } from 'react-router-dom';
import RolledTextButton from '../components/RolledTextButton';
import { materiAgama } from '../data/materi-agama';
import { shuffleArray } from '../utils/quizUtils';
import { generateAIQuestions } from '../services/aiService';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function Quiz() {
  const [searchParams] = useSearchParams();
  const subjectId = searchParams.get('subject') || 'alquran-hadis';
  const subjectData = materiAgama[subjectId];
  const initialQuizData = subjectData?.quizzes || [];

  const [questions, setQuestions] = useState(() => shuffleArray(initialQuizData));
  const [idx, setIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const feedbackRef = useRef<HTMLDivElement>(null);

  // Re-shuffle when subject changes
  useEffect(() => {
    setQuestions(shuffleArray(initialQuizData));
    setIdx(0);
    setAnswered(false);
    setSelected(null);
    setCorrect(0);
    setDone(false);
  }, [subjectId]);

  if (questions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-6">Kuis Belum Tersedia</h2>
        <p className="text-slate-500 text-xl mb-12">Maaf, kuis untuk mata pelajaran {subjectData?.subject || subjectId} sedang dalam proses pembuatan.</p>
        <Link to="/" className="inline-block px-8 py-4 bg-sky-500 text-white rounded-2xl font-bold hover:bg-sky-600 transition-colors">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  const q = questions[idx];
  const progress = Math.round((idx / questions.length) * 100);

  const startAIQuiz = async () => {
    setLoading(true);
    try {
      const newQuestions = await generateAIQuestions(subjectData?.subject || 'Agama Islam');
      if (newQuestions && newQuestions.length > 0) {
        setQuestions(newQuestions);
        setIdx(0); setAnswered(false); setSelected(null); setCorrect(0); setDone(false);
      }
    } catch (err) {
      alert('Gagal mengambil soal AI.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (i: number) => {
    if (answered) return;
    setAnswered(true);
    setSelected(i);
    if (i === q.jawaban) setCorrect(c => c + 1);
    if (feedbackRef.current) {
      gsap.fromTo(feedbackRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <div className="w-16 h-16 border-4 border-sky-200 border-t-sky-500 rounded-full animate-spin"></div>
      <p className="text-xl font-bold text-sky-600 animate-pulse">Meracik Soal AI...</p>
    </div>
  );

  if (done) return (
    <div className="max-w-4xl mx-auto py-24 px-6 text-center">
      <h2 className="text-6xl font-black text-slate-900 mb-4">Hasil Kuis</h2>
      <div className="text-8xl font-black text-sky-500 mb-8">{Math.round((correct/questions.length)*100)}</div>
      <p className="text-slate-500 text-xl mb-12">Bagus! Kamu menjawab {correct} dari {questions.length} soal dengan benar.</p>
      <div className="flex justify-center gap-6">
        <RolledTextButton text="Ulangi Kuis" onClick={() => { setIdx(0); setDone(false); setCorrect(0); }} className="bg-sky-500 text-white rounded-2xl h-16 px-12" />
        <RolledTextButton text="AI Quiz" onClick={startAIQuiz} variant="outline" className="border-slate-200 text-slate-600 rounded-2xl h-16 px-12" />
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-16">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-4xl font-black text-slate-900">Kuis {subjectData?.subject}</h2>
          <span className="text-sky-600 font-bold uppercase tracking-widest text-xs">Soal {idx + 1} / {questions.length}</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div animate={{ width: `${progress}%` }} className="h-full bg-sky-500" />
        </div>
      </div>

      <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-12 md:p-20 rounded-[4rem] border border-slate-100 shadow-2xl shadow-slate-100">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12 text-center leading-relaxed">{q.soal}</h3>
        
        <div className="grid gap-4 mb-12">
          {q.pilihan.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={answered}
              className={`p-6 rounded-3xl text-left border-2 transition-all font-bold ${
                answered 
                  ? i === q.jawaban ? 'bg-sky-50 border-sky-500 text-sky-700' : i === selected ? 'bg-red-50 border-red-200 text-red-600' : 'bg-slate-50 border-transparent opacity-50 text-slate-400'
                  : 'bg-white border-slate-100 hover:border-sky-300 hover:bg-sky-50/30'
              }`}
            >
              <span className="inline-block w-8 text-sky-300 mr-2">{LETTERS[i]}.</span>
              {opt}
            </button>
          ))}
        </div>

        {answered && (
          <div ref={feedbackRef} className="pt-10 border-t border-slate-100">
            <div className="bg-sky-50/50 p-8 rounded-3xl mb-10 border border-sky-100 text-slate-600 leading-relaxed">
              <span className="block font-black text-sky-600 uppercase tracking-widest text-[10px] mb-2">Penjelasan:</span>
              {q.penjelasan}
            </div>
            <RolledTextButton 
              text={idx === questions.length - 1 ? "Lihat Hasil" : "Lanjut ke Soal Berikutnya"} 
              onClick={() => { if (idx < questions.length - 1) { setIdx(idx + 1); setAnswered(false); setSelected(null); } else setDone(true); }}
              className="w-full bg-sky-500 text-white rounded-2xl h-16"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}

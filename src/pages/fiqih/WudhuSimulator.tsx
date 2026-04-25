import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface WudhuStep {
  id: number;
  title: string;
  arabic?: string;
  desc: string;
  isRukun: boolean;
  image?: string;
}

const wudhuSteps: WudhuStep[] = [
  { 
    id: 1, 
    title: "Niat & Basmalah", 
    arabic: "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ الْأَصْغERِ فَرْضًا لِلّٰهِ تَعَالَى", 
    desc: "Membaca Bismillah dan berniat dalam hati untuk menghilangkan hadas kecil.", 
    isRukun: true, 
    image: "/assets/images/wudhu/step1-clean.png" 
  },
  { 
    id: 2, 
    title: "Mencuci Telapak Tangan", 
    desc: "Mencuci kedua telapak tangan sebanyak tiga kali hingga sela-sela jari.", 
    isRukun: false, 
    image: "/assets/images/wudhu/step1-clean.png" 
  },
  { 
    id: 3, 
    title: "Berkumur-kumur", 
    desc: "Memasukkan air ke dalam mulut dan mengeluarkannya sebanyak tiga kali.", 
    isRukun: false, 
    image: "/assets/images/wudhu/step3-4.png" 
  },
  { 
    id: 4, 
    title: "Menghirup Air ke Hidung", 
    desc: "Menghirup air ke lubang hidung (Istinsyaq) dan menyemprotkannya (Istintsar) sebanyak tiga kali.", 
    isRukun: false, 
    image: "/assets/images/wudhu/step3-4.png" 
  },
  { 
    id: 5, 
    title: "Membasuh Muka", 
    desc: "Membasuh seluruh permukaan wajah mulai dari batas rambut hingga dagu sebanyak tiga kali.", 
    isRukun: true, 
    image: "/assets/images/wudhu/step5.png" 
  },
  { 
    id: 6, 
    title: "Membasuh Tangan hingga Siku", 
    desc: "Membasuh tangan kanan lalu kiri, dari ujung jari hingga melewati siku sebanyak tiga kali.", 
    isRukun: true, 
    image: "/assets/images/wudhu/step6-7.png" 
  },
  { 
    id: 7, 
    title: "Mengusap Kepala", 
    desc: "Mengusap sebagian atau seluruh kulit kepala/rambut dengan air satu kali.", 
    isRukun: true, 
    image: "/assets/images/wudhu/step6-7.png" 
  },
  { 
    id: 8, 
    title: "Mengusap Telinga", 
    desc: "Membersihkan telinga bagian dalam dan luar dengan air sebanyak satu kali.", 
    isRukun: false, 
    image: "/assets/images/wudhu/step6-7.png" 
  },
  { 
    id: 9, 
    title: "Mencuci Kaki", 
    desc: "Mencuci kaki kanan lalu kiri hingga melewati mata kaki sebanyak tiga kali.", 
    isRukun: true, 
    image: "/assets/images/wudhu/step9.png" 
  },
  { 
    id: 10, 
    title: "Tertib & Doa", 
    desc: "Melaksanakan semua rukun secara berurutan, lalu membaca doa selesai wudhu.", 
    isRukun: true, 
    image: "/assets/images/wudhu/step9.png" 
  }
];

export default function WudhuSimulator() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < wudhuSteps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const step = wudhuSteps[currentStep];
  const progress = ((currentStep + 1) / wudhuSteps.length) * 100;

  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 flex justify-between items-end">
          <div>
            <div className="text-sky-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">Simulator Interaktif</div>
            <h1 className="text-4xl md:text-6xl font-black">Tata Cara <span className="text-sky-400">Wudhu.</span></h1>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-slate-500 font-bold mb-1">Progress Belajar</div>
            <div className="text-2xl font-black text-sky-400">{Math.round(progress)}%</div>
          </div>
        </header>

        {/* Simulator Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Display */}
          <div className="relative aspect-square bg-slate-800 rounded-[3rem] border border-slate-700 flex items-center justify-center overflow-hidden shadow-2xl shadow-sky-900/20">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="w-full h-full flex flex-col items-center justify-center relative p-12"
              >
                {step.image ? (
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-contain rounded-3xl"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-48 h-48 bg-slate-700/50 rounded-full border-4 border-sky-500/30 flex items-center justify-center mb-8 mx-auto relative">
                      <span className="text-7xl font-black text-sky-400 opacity-20">{step.id}</span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-24 h-24 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-10 left-0 w-full text-center px-10">
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-md text-white">{step.title}</h3>
                  {step.isRukun && (
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest rounded-full backdrop-blur-sm">
                      Rukun Wudhu
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls & Description */}
          <div className="bg-slate-800/50 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-slate-700">
            <div className="mb-12">
              <div className="text-sky-400 font-bold mb-4">Langkah {step.id} dari {wudhuSteps.length}</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {step.arabic && (
                    <div className="text-4xl font-serif text-right mb-8 leading-relaxed text-sky-100">
                      {step.arabic}
                    </div>
                  )}
                  <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex-1 py-5 bg-slate-700 hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed rounded-2xl font-bold transition-all border border-slate-600 text-white"
              >
                Kembali
              </button>
              <button 
                onClick={nextStep}
                className={`flex-[2] py-5 rounded-2xl font-black transition-all shadow-lg text-white ${
                  currentStep === wudhuSteps.length - 1 
                    ? 'bg-emerald-500 hover:bg-emerald-600' 
                    : 'bg-sky-500 hover:bg-sky-600 shadow-sky-500/20'
                }`}
              >
                {currentStep === wudhuSteps.length - 1 ? 'Selesai' : 'Langkah Berikutnya'}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/fiqih" className="text-slate-500 hover:text-sky-400 font-bold transition-colors">
            ← Kembali ke Materi Fiqih
          </Link>
        </div>
      </div>
    </div>
  );
}

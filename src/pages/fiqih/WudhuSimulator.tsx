import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconChevronLeft, IconChevronRight, IconCheck, IconDroplets, IconArrowLeft } from '@tabler/icons-react';

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
    desc: "Membaca Bismillah dan berniat dalam hati untuk menghilangkan hadas kecil demi mengharap ridha Allah SWT.", 
    isRukun: true, 
    image: "/assets/images/wudhu/step1-clean.png" 
  },
  { 
    id: 2, 
    title: "Mencuci Telapak Tangan", 
    desc: "Mencuci kedua telapak tangan sebanyak tiga kali hingga bersih ke sela-sela jari.", 
    isRukun: false, 
    image: "/assets/images/wudhu/step1-clean.png" 
  },
  { 
    id: 3, 
    title: "Berkumur-kumur", 
    desc: "Memasukkan air ke dalam mulut dan menggerakkannya lalu mengeluarkannya sebanyak tiga kali.", 
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
    desc: "Membasuh seluruh permukaan wajah secara merata, mulai dari batas tumbuhnya rambut kepala hingga dagu.", 
    isRukun: true, 
    image: "/assets/images/wudhu/step5.png" 
  },
  { 
    id: 6, 
    title: "Membasuh Tangan hingga Siku", 
    desc: "Membasuh tangan kanan lalu tangan kiri, mulai dari ujung jari hingga melewati siku sebanyak tiga kali.", 
    isRukun: true, 
    image: "/assets/images/wudhu/step6-7.png" 
  },
  { 
    id: 7, 
    title: "Mengusap Kepala", 
    desc: "Mengusap sebagian atau seluruh kulit kepala atau rambut dengan air sebanyak satu kali.", 
    isRukun: true, 
    image: "/assets/images/wudhu/step6-7.png" 
  },
  { 
    id: 8, 
    title: "Mengusap Telinga", 
    desc: "Membersihkan telinga bagian dalam dan luar menggunakan air sebanyak satu kali.", 
    isRukun: false, 
    image: "/assets/images/wudhu/step6-7.png" 
  },
  { 
    id: 9, 
    title: "Mencuci Kaki", 
    desc: "Mencuci kaki kanan lalu kaki kiri hingga melewati mata kaki, pastikan sela-sela jari terkena air.", 
    isRukun: true, 
    image: "/assets/images/wudhu/step9.png" 
  },
  { 
    id: 10, 
    title: "Tertib & Doa", 
    desc: "Melaksanakan semua rukun wudhu secara berurutan tanpa mendahulukan yang seharusnya diakhirkan.", 
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
    <div className="relative min-h-screen bg-[#fafbfc] overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-sky-100/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            >
              <IconDroplets size={14} className="animate-bounce" />
              Simulator Interaktif PAI
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tight">
              Tata Cara <span className="text-sky-500">Wudhu.</span>
            </h1>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Langkah Penyelesaian</div>
            <div className="text-3xl font-black text-sky-600 leading-none">{Math.round(progress)}%</div>
          </div>
        </header>

        {/* Simulator Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Visual Display */}
          <div className="lg:col-span-7 relative aspect-square lg:aspect-auto min-h-[500px] bg-white rounded-[4rem] border border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="w-full h-full flex flex-col items-center justify-center relative p-12"
              >
                {step.image ? (
                  <motion.img 
                    layoutId={`wudhu-img-${step.id}`}
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-64 h-64 bg-slate-50 rounded-full border-2 border-dashed border-sky-200 flex items-center justify-center mb-8 mx-auto relative group">
                      <span className="text-[12rem] font-black text-sky-100 group-hover:text-sky-200 transition-colors leading-none">{step.id}</span>
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-12 left-0 w-full text-center px-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block"
                  >
                    <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">{step.title}</h3>
                    {step.isRukun && (
                      <span className="px-5 py-2 bg-amber-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-amber-200">
                        Rukun Wudhu
                      </span>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls & Description */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex-grow bg-white/70 backdrop-blur-2xl p-10 md:p-14 rounded-[4rem] border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)] flex flex-col">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-sky-100">
                    {step.id}
                  </div>
                  <div className="h-px flex-grow bg-slate-100" />
                  <div className="text-slate-300 font-bold text-sm tracking-widest uppercase">Langkah {step.id} / 10</div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    {step.arabic && (
                      <div className="p-10 bg-sky-50/50 rounded-[3rem] border border-sky-100/50">
                        <div className="text-4xl md:text-5xl font-serif text-slate-900 leading-[1.8] text-center" dir="rtl">
                          {step.arabic}
                        </div>
                      </div>
                    )}
                    <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex-1 py-6 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed rounded-[2rem] font-bold transition-all border border-slate-100 flex items-center justify-center gap-2"
                >
                  <IconChevronLeft size={20} />
                  Sebelumnya
                </button>
                <button 
                  onClick={nextStep}
                  className={`flex-[1.5] py-6 rounded-[2rem] font-black transition-all shadow-xl flex items-center justify-center gap-3 text-lg ${
                    currentStep === wudhuSteps.length - 1 
                      ? 'bg-emerald-500 text-white hover:shadow-emerald-200' 
                      : 'bg-sky-500 text-white hover:bg-sky-600 shadow-sky-100'
                  }`}
                >
                  {currentStep === wudhuSteps.length - 1 ? (
                    <>
                      <IconCheck size={24} />
                      Selesai
                    </>
                  ) : (
                    <>
                      Lanjutkan
                      <IconChevronRight size={24} />
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <Link 
              to="/fiqih" 
              className="p-8 bg-white/40 backdrop-blur-md rounded-[3rem] border border-white flex items-center justify-center gap-3 text-slate-400 hover:text-sky-500 transition-all group"
            >
              <IconArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold">Kembali ke Materi Fiqih</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

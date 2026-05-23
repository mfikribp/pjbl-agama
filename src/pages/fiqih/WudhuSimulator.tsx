import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconChevronLeft, IconChevronRight, IconCheck, IconDroplets, IconArrowLeft, IconBook } from '@tabler/icons-react';

interface WudhuStep {
  id: number;
  title: string;
  arabic?: string;
  desc: string;
  isRukun: boolean;
  image?: string;
  reference?: {
    hukum: string;
    dalil: string;
    terjemah: string;
    sumber: string;
  };
}

const wudhuSteps: WudhuStep[] = [
  {
    id: 1,
    title: "Niat & Basmalah",
    arabic: "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ الْأَصْغَرِ فَرْضًا لِلّٰهِ تَعَالَى",
    desc: "Membaca Bismillah dan berniat di dalam hati untuk menghilangkan hadas kecil semata-mata karena mengharap ridha Allah SWT.",
    isRukun: true,
    image: "/assets/images/wudhu/step1_niat.png",
    reference: {
      hukum: "Rukun (Niat) & Sunnah (Basmalah)",
      dalil: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
      terjemah: "Sesungguhnya setiap amal itu bergantung pada niatnya, dan setiap orang hanya mendapatkan apa yang dia niatkan.",
      sumber: "HR. Bukhari no. 1 & Muslim no. 1907"
    }
  },
  {
    id: 2,
    title: "Mencuci Telapak Tangan",
    desc: "Mencuci kedua telapak tangan sebanyak tiga kali hingga bersih serta menyela jari-jemari tangan dengan air mengalir.",
    isRukun: false,
    image: "/assets/images/wudhu/step2_tangan.png",
    reference: {
      hukum: "Sunnah",
      dalil: "أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ غَسَلَ كَفَّيْهِ ثَلَاثًا",
      terjemah: "Bahwa Nabi SAW membasuh kedua telapak tangannya sebanyak tiga kali saat berwudhu.",
      sumber: "HR. Ahmad & An-Nasa'i"
    }
  },
  {
    id: 3,
    title: "Berkumur-kumur",
    desc: "Memasukkan air ke dalam mulut, memutarnya di dalam mulut, kemudian mengeluarkannya sebanyak tiga kali.",
    isRukun: false,
    image: "/assets/images/wudhu/step3_kumur.png",
    reference: {
      hukum: "Sunnah",
      dalil: "إِذَا تَوَضَّأْتَ فَمَضْمِضْ",
      terjemah: "Jika engkau melakukan wudhu, maka berkumurlah.",
      sumber: "HR. Abu Dawud no. 144"
    }
  },
  {
    id: 4,
    title: "Menghirup Air ke Hidung (Istinsyaq)",
    desc: "Menghirup air ke dalam lubang hidung secara perlahan (Istinsyaq) kemudian menyemburkannya keluar (Istintsar) sebanyak tiga kali.",
    isRukun: false,
    image: "/assets/images/wudhu/step4_hidung.png",
    reference: {
      hukum: "Sunnah",
      dalil: "مَنْ تَوَضَّأَ فَلْيَسْتَنْشِقْ بِمَاءٍ ثُمَّ لِيَنْتَثِرْ",
      terjemah: "Barangsiapa yang berwudhu, hendaklah ia menghirup air ke hidungnya lalu mengeluarkannya.",
      sumber: "HR. Bukhari no. 162 & Muslim no. 237"
    }
  },
  {
    id: 5,
    title: "Membasuh Muka",
    desc: "Membasuh seluruh permukaan wajah secara merata, dari batas tumbuhnya rambut kepala atas hingga bawah dagu, dan telinga kanan hingga telinga kiri.",
    isRukun: true,
    image: "/assets/images/wudhu/step5_muka.png",
    reference: {
      hukum: "Rukun (Wajib)",
      dalil: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ",
      terjemah: "Wahai orang-orang yang beriman! Apabila kamu hendak melaksanakan shalat, maka basuhlah wajahmu...",
      sumber: "QS. Al-Ma'idah: 6"
    }
  },
  {
    id: 6,
    title: "Membasuh Tangan hingga Siku",
    desc: "Membasuh tangan kanan lalu tangan kiri mulai dari ujung jari hingga melewati siku secara merata sebanyak tiga kali.",
    isRukun: true,
    image: "/assets/images/wudhu/step6_siku.png",
    reference: {
      hukum: "Rukun (Wajib)",
      dalil: "وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ",
      terjemah: "...dan (basuhlah) tanganmu sampai ke siku...",
      sumber: "QS. Al-Ma'idah: 6"
    }
  },
  {
    id: 7,
    title: "Mengusap Sebagian Kepala",
    desc: "Mengusap sebagian kulit kepala atau rambut kepala dengan tangan yang basah sebanyak satu kali.",
    isRukun: true,
    image: "/assets/images/wudhu/step7_kepala.png",
    reference: {
      hukum: "Rukun (Wajib)",
      dalil: "وَامْسَحُوا بِرُءُوسِكُمْ",
      terjemah: "...dan usaplah kepalamu...",
      sumber: "QS. Al-Ma'idah: 6"
    }
  },
  {
    id: 8,
    title: "Mengusap Kedua Telinga",
    desc: "Membersihkan telinga luar dengan ibu jari dan telinga dalam dengan jari telunjuk menggunakan air bersih sebanyak satu kali.",
    isRukun: false,
    image: "/assets/images/wudhu/step8_telinga.png",
    reference: {
      hukum: "Sunnah",
      dalil: "أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَسَحَ بِرَأْسِهِ وَأُذُنَيْهِ ظَاهِرِهِمَا وَبَاطِنِهِمَا",
      terjemah: "Bahwa Nabi SAW mengusap kepala dan kedua telinganya, baik bagian luar maupun bagian dalam.",
      sumber: "HR. Tirmidzi no. 36 (Hadits Hasan Shahih)"
    }
  },
  {
    id: 9,
    title: "Mencuci Kaki hingga Mata Kaki",
    desc: "Mencuci kaki kanan lalu kaki kiri hingga melewati mata kaki sebanyak tiga kali, serta memastikan sela-sela jari kaki dibasuh dengan bersih.",
    isRukun: true,
    image: "/assets/images/wudhu/step9_kaki.png",
    reference: {
      hukum: "Rukun (Wajib)",
      dalil: "وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ",
      terjemah: "...dan (basuhlah) kakimu sampai ke kedua mata kaki.",
      sumber: "QS. Al-Ma'idah: 6"
    }
  },
  {
    id: 10,
    title: "Tertib & Membaca Doa setelah Wudhu",
    arabic: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
    desc: "Melaksanakan semua rukun wudhu secara berurutan (Tertib), dilanjutkan dengan berdiri menghadap kiblat dan membaca doa setelah wudhu.",
    isRukun: true,
    image: "/assets/images/wudhu/step10_doa.png",
    reference: {
      hukum: "Rukun (Tertib) & Sunnah (Doa)",
      dalil: "مَا مِنْكُمْ مِنْ أَحَدٍ يَتَوَضَّأُ فَيُبْلِغُ الْوُضُوءَ ثُمَّ يَقُولُ: أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ... إِلَّا فُتِحَتْ لَهُ أَبْوَابُ الْجَنَّةِ الثَّمَانِيَةِ",
      terjemah: "Tidaklah salah seorang di antara kalian berwudhu secara sempurna kemudian membaca doa bersaksi... kecuali dibukakan baginya delapan pintu surga.",
      sumber: "HR. Muslim no. 234"
    }
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
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
          <div className="lg:col-span-6 relative aspect-square lg:aspect-auto min-h-[550px] bg-white rounded-[4rem] border border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-5/50 to-transparent pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="w-full h-full flex flex-col items-center justify-center relative p-12 pb-24"
              >
                {step.image ? (
                  <motion.img
                    layoutId={`wudhu-img-${step.id}`}
                    src={step.image}
                    alt={step.title}
                    className="w-[85%] h-[85%] object-contain drop-shadow-2xl"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-64 h-64 bg-slate-50 rounded-full border-2 border-dashed border-sky-200 flex items-center justify-center mb-8 mx-auto relative group">
                      <span className="text-[12rem] font-black text-sky-100 group-hover:text-sky-200 transition-colors leading-none">{step.id}</span>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-8 left-0 w-full text-center px-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block"
                  >
                    <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">{step.title}</h3>
                    {step.isRukun ? (
                      <span className="px-5 py-2 bg-amber-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-amber-200">
                        Rukun Wudhu
                      </span>
                    ) : (
                      <span className="px-5 py-2 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-emerald-200">
                        Sunnah Wudhu
                      </span>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls & Description */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex-grow bg-white/70 backdrop-blur-2xl p-10 md:p-14 rounded-[4rem] border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
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
                    className="space-y-8"
                  >
                    {step.arabic && (
                      <div className="p-8 bg-sky-50/50 rounded-[2.5rem] border border-sky-100/50">
                        <div className="text-3xl md:text-4xl font-serif text-slate-900 leading-[1.8] text-center" dir="rtl">
                          {step.arabic}
                        </div>
                      </div>
                    )}
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                      {step.desc}
                    </p>

                    {step.reference && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-8 bg-sky-50/30 rounded-[2.5rem] border border-sky-100/50 space-y-6"
                      >
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100 text-sky-700 text-[10px] font-black uppercase tracking-wider rounded-xl">
                            <IconBook size={14} className="text-sky-700" />
                            Dalil & Rujukan
                          </span>
                          <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${step.reference.hukum.includes("Rukun")
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-emerald-100 text-emerald-700'
                            }`}>
                            Hukum: {step.reference.hukum}
                          </span>
                        </div>
                        <div className="space-y-4">
                          <p className="text-2xl font-serif text-slate-800 text-right leading-relaxed" dir="rtl">
                            {step.reference.dalil}
                          </p>
                          <div className="h-px bg-slate-100 w-full" />
                          <p className="text-sm italic text-slate-600 leading-relaxed">
                            "{step.reference.terjemah}"
                          </p>
                          <p className="text-xs font-bold text-sky-600">
                            — {step.reference.sumber}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
                  className={`flex-[1.5] py-6 rounded-[2rem] font-black transition-all shadow-xl flex items-center justify-center gap-3 text-lg ${currentStep === wudhuSteps.length - 1
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

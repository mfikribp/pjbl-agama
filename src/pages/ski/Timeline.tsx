import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconHistory, IconArrowLeft, IconArrowRight, IconCalendar } from '@tabler/icons-react';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  category: 'Mekah' | 'Madinah' | 'Penyebaran';
}

const events: TimelineEvent[] = [
  {
    id: 1,
    year: "Masa Jahiliyah",
    title: "Kondisi Pra-Islam",
    description: "Masyarakat Arab menyembah berhala, hidup dalam sistem kabilah yang keras, dan mengalami degradasi moral (Jahiliyah).",
    category: "Mekah"
  },
  {
    id: 2,
    year: "610 M",
    title: "Wahyu Pertama",
    description: "Nabi Muhammad SAW menerima wahyu pertama (Surah Al-Alaq 1-5) di Gua Hira, menandai dimulainya era kenabian.",
    category: "Mekah"
  },
  {
    id: 3,
    year: "610 - 613 M",
    title: "Dakwah Sirriyah",
    description: "Dakwah dilakukan secara sembunyi-sembunyi di rumah Al-Arqam bin Abil Arqam kepada keluarga dan sahabat terdekat.",
    category: "Mekah"
  },
  {
    id: 4,
    year: "613 M - Seterusnya",
    title: "Dakwah Jahriyah",
    description: "Perintah dakwah secara terang-terangan di Bukit Shafa, menghadapi tantangan besar dan boikot dari kafir Quraisy.",
    category: "Mekah"
  },
  {
    id: 5,
    year: "621 M",
    title: "Isra Mi'raj",
    description: "Perjalanan spiritual Nabi ke Baitul Maqdis dan Sidratul Muntaha, membawa perintah ibadah shalat lima waktu.",
    category: "Mekah"
  },
  {
    id: 6,
    year: "622 M",
    title: "Hijrah ke Madinah",
    description: "Titik balik sejarah Islam; perpindahan massal umat Islam ke Yatsrib (Madinah) dan awal kalender Hijriyah.",
    category: "Madinah"
  },
  {
    id: 7,
    year: "622 - 623 M",
    title: "Piagam Madinah",
    description: "Pembentukan konstitusi tertulis pertama yang mengatur hak dan kewajiban warga Madinah dalam keberagaman.",
    category: "Madinah"
  },
  {
    id: 8,
    year: "8 H / 630 M",
    title: "Fathu Makkah",
    description: "Penaklukan kota Mekah secara damai, pembersihan Ka'bah dari berhala, dan pengampunan massal bagi penduduknya.",
    category: "Penyebaran"
  }
];

export default function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(1);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setWidth(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fafbfc] overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-50/40 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6"
          >
            <IconHistory size={14} />
            Sejarah Kebudayaan Islam
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight"
          >
            Garis Waktu <span className="text-amber-500">Peradaban.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 leading-relaxed"
          >
            Geser dan jelajahi momen-momen krusial dalam sejarah perjuangan Rasulullah SAW membangun pondasi kejayaan Islam.
          </motion.p>
        </header>

        {/* Timeline Container */}
        <div className="relative mt-40" ref={scrollRef}>
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />
          
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-16 cursor-grab px-4 items-center relative z-10 w-max py-10"
          >
            {events.map((event, idx) => (
              <motion.div
                key={event.id}
                onClick={() => setActiveId(event.id)}
                className={`flex-shrink-0 w-[22rem] p-10 rounded-[3.5rem] transition-all duration-700 border-2 relative group ${
                  activeId === event.id 
                    ? 'bg-white shadow-[0_40px_80px_-15px_rgba(245,158,11,0.15)] border-amber-200 scale-105 z-20' 
                    : 'bg-white/40 backdrop-blur-md opacity-40 border-white scale-95 hover:opacity-60'
                }`}
              >
                <div className="flex justify-between items-start mb-10">
                  <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${
                    event.category === 'Mekah' ? 'bg-amber-100 text-amber-600' :
                    event.category === 'Madinah' ? 'bg-emerald-100 text-emerald-600' :
                    'bg-sky-100 text-sky-600'
                  }`}>
                    {event.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 font-black text-[10px] uppercase tracking-widest">
                    <IconCalendar size={14} />
                    {event.year}
                  </div>
                </div>

                <h3 className={`text-2xl font-black mb-6 tracking-tight leading-tight transition-colors ${activeId === event.id ? 'text-slate-900' : 'text-slate-500'}`}>
                  {event.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed font-medium">
                  {event.description}
                </p>
                
                {/* Visual Connector Dot */}
                <div className={`absolute top-[-4.25rem] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#fafbfc] transition-all duration-500 shadow-xl ${
                  activeId === event.id ? 'bg-amber-500 scale-125' : 'bg-slate-200'
                }`} />
                
                {/* Connector Number */}
                <div className={`absolute top-[-7rem] left-1/2 -translate-x-1/2 font-black text-sm tracking-tighter transition-all duration-500 ${
                  activeId === event.id ? 'text-amber-500 translate-y-0 opacity-100' : 'text-slate-300 translate-y-4 opacity-0'
                }`}>
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-32 flex flex-col items-center gap-12">
          <motion.div 
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-4 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full border border-white shadow-sm"
          >
             <IconArrowLeft size={18} className="text-amber-400" />
             <span className="text-slate-400 font-bold text-sm tracking-tight">Geser untuk navigasi waktu</span>
             <IconArrowRight size={18} className="text-amber-400" />
          </motion.div>
          
          <Link 
            to="/ski"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white border border-white text-slate-600 rounded-[2rem] font-bold hover:bg-amber-500 hover:text-white transition-all shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] hover:shadow-amber-200"
          >
            <IconArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-black">Kembali ke Materi SKI</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

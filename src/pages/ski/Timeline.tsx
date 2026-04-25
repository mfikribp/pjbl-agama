import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      // Calculate the draggable width
      setWidth(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sky-600 font-bold tracking-[0.2em] uppercase text-xs mb-4"
          >
            Sejarah Kebudayaan Islam
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8"
          >
            Garis Waktu <span className="text-sky-500">Peradaban.</span>
          </motion.h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Geser dan jelajahi momen-momen krusial dalam sejarah perjuangan Rasulullah SAW membangun pondasi kejayaan Islam.
          </p>
        </header>

        {/* Timeline Container */}
        <div className="relative mt-32" ref={scrollRef}>
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0" />
          
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-16 cursor-grab px-4 items-center relative z-10 w-max"
          >
            {events.map((event) => (
              <motion.div
                key={event.id}
                onClick={() => setActiveId(event.id)}
                className={`flex-shrink-0 w-80 p-8 rounded-[2.5rem] transition-all duration-500 border relative ${
                  activeId === event.id 
                    ? 'bg-white shadow-2xl shadow-sky-100 border-sky-100 scale-110' 
                    : 'bg-slate-50/50 grayscale opacity-40 border-transparent'
                }`}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    event.category === 'Mekah' ? 'bg-amber-100 text-amber-600' :
                    event.category === 'Madinah' ? 'bg-emerald-100 text-emerald-600' :
                    'bg-sky-100 text-sky-600'
                  }`}>
                    {event.category}
                  </span>
                  <span className="text-slate-400 font-bold text-sm">{event.year}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{event.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {event.description}
                </p>
                
                {/* Visual Connector Dot */}
                <div className={`absolute top-[-4.5rem] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-slate-50 transition-colors ${
                  activeId === event.id ? 'bg-sky-500' : 'bg-slate-300'
                }`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-32 text-center flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 text-slate-400 font-medium">
             <svg className="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
             <span>Geser ke kanan untuk melihat sejarah lebih lanjut</span>
          </div>
          
          <Link 
            to="/ski"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Materi
          </Link>
        </div>
      </div>
    </div>
  );
}

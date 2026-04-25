import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RolledTextButton from '../components/RolledTextButton';

import { materiAgama } from '../data/materi-agama';

export default function Home() {
  const subjects = Object.values(materiAgama);

  return (
    <div className="flex flex-col items-center min-h-screen py-20 px-6 relative">
      {/* Decorative BG Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-sky-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-[100px]" />
      </div>

      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 px-5 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-sm font-bold inline-block shadow-sm"
        >
          Media Pembelajaran PAI & Bahasa Arab
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black mb-8 text-slate-900 tracking-tighter"
        >
          Materi Agama <br />
          <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Kelas 7.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-slate-500 mb-12 text-lg md:text-xl leading-relaxed"
        >
          Portal materi agama Islam terlengkap untuk kelas 7 MTs/SMP.
          Rangkuman materi, tajwid interaktif, dan kuis cerdas dalam satu platform.
        </motion.p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.map((subject, idx) => (
          <motion.div
            key={subject.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link
              to={`/${subject.id}`}
              className="group block p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500 h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-black text-xl mb-8 shadow-lg shadow-sky-100 group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">
                {subject.subject}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {subject.description}
              </p>
              <div className="mt-8 flex items-center text-sky-500 font-bold gap-2">
                Eksplorasi Materi
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

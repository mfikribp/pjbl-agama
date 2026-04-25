import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarDemo from './Navbar';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavbarDemo />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-slate-50 border-t border-slate-100 py-20 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <div className="font-black text-2xl tracking-tighter text-slate-900 uppercase">
              Web Agama<span className="text-sky-500"> Kelas 7</span>
            </div>
            <p className="text-slate-500 text-sm">
              Media pembelajaran materi agama Islam kelas 7 MTs/SMP yang interaktif dan modern.
            </p>
          </div>
          
          <div className="space-y-4 text-slate-500 text-sm">
            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Menu</h4>
            <div className="flex flex-col gap-2">
              <a href="/" className="hover:text-sky-500">Beranda</a>
              <a href="/alquran-hadis" className="hover:text-sky-500">Al-Qur'an Hadis</a>
              <a href="/aqidah-akhlak" className="hover:text-sky-500">Aqidah Akhlak</a>
              <a href="/fiqih" className="hover:text-sky-500">Fiqih</a>
              <a href="/ski" className="hover:text-sky-500">SKI</a>
              <a href="/bahasa-arab" className="hover:text-sky-500">Bahasa Arab</a>
            </div>
          </div>

          <div className="space-y-4 text-slate-500 text-sm">
            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Kontak</h4>
            <p>support@tajwidinteractive.id</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

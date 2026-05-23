import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation, Link } from 'react-router-dom';
import NavbarDemo from './Navbar';
import { IconBrandGithub } from '@tabler/icons-react';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] selection:bg-sky-100 selection:text-sky-900">
      <NavbarDemo />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-white border-t border-slate-100 py-24 px-6 mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[150%] bg-sky-50/50 rounded-full blur-[120px] rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2 space-y-8">
              <Link to="/" className="group flex items-center gap-2">
                <span className="font-black text-2xl tracking-tighter text-slate-900">
                  PAI & Informatika
                </span>
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-100 group-hover:rotate-12 transition-transform">
                  <span className="text-white font-black text-sm">VII</span>
                </div>
              </Link>
              <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
                Media pembelajaran PAI, Bahasa Arab & Informatika modern untuk siswa kelas VII MTs.
                Belajar menjadi lebih menyenangkan dan interaktif.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="font-black text-slate-900 uppercase tracking-[0.2em] text-[10px]">Materi Utama</h4>
              <div className="flex flex-col gap-4 text-slate-500 font-bold text-sm">
                <Link to="/alquran-hadis" className="hover:text-sky-500 transition-colors">Al-Qur'an Hadis</Link>
                <Link to="/aqidah-akhlak" className="hover:text-sky-500 transition-colors">Aqidah Akhlak</Link>
                <Link to="/fiqih" className="hover:text-sky-500 transition-colors">Fiqih</Link>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-black text-slate-900 uppercase tracking-[0.2em] text-[10px]">Eksplorasi</h4>
              <div className="flex flex-col gap-4 text-slate-500 font-bold text-sm">
                <Link to="/ski" className="hover:text-sky-500 transition-colors">SKI</Link>
                <Link to="/bahasa-arab" className="hover:text-sky-500 transition-colors">Bahasa Arab</Link>
                <Link to="/informatika" className="hover:text-sky-500 transition-colors">Informatika</Link>
                <Link to="/quiz" className="hover:text-sky-500 transition-colors">Kuis Interaktif</Link>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-xs font-medium">
              &copy; {new Date().getFullYear()} Media Pembelajaran PAI dan Informatika Kelas VII. Built for Excellence.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-bold text-slate-400">
              <span className="text-slate-300 font-medium tracking-wide uppercase text-[10px]">Tim Pengembang:</span>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a
                  href="https://github.com/mfikribp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-slate-700 transition-colors"
                >
                  <IconBrandGithub size={14} />
                  <span>M Fikri Biban Putra</span>
                </a>
                <a
                  href="https://github.com/luvices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-slate-700 transition-colors"
                >
                  <IconBrandGithub size={14} />
                  <span>Dafa Zahran</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

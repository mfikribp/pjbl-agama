import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './ui/resizable-navbar';

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost' | 'glass';
}

export default function RolledTextButton({ text, onClick, className, variant = 'primary' }: Props) {
  const variants = {
    primary: "bg-sky-500 text-white shadow-[0_20px_40px_-12px_rgba(14,165,233,0.3)] hover:bg-sky-600",
    outline: "border-2 border-slate-100 text-slate-600 hover:border-sky-500 hover:text-sky-500",
    ghost: "bg-transparent text-slate-500 hover:text-sky-500 hover:bg-sky-50",
    glass: "bg-white/40 backdrop-blur-md border border-white text-slate-700 shadow-xl shadow-slate-200/20 hover:bg-white/60"
  };

  return (
    <motion.button
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative px-8 h-14 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center overflow-hidden group",
        variants[variant],
        className
      )}
    >
      <div className="relative z-10 flex flex-col h-full items-center justify-center pointer-events-none">
        <motion.span
          variants={{
            hover: { y: '-150%' }
          }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center justify-center h-full"
        >
          {text}
        </motion.span>
        <motion.span
          variants={{
            initial: { y: '150%' },
            hover: { y: '-50%' }
          }}
          initial="initial"
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center w-full h-full"
        >
          {text}
        </motion.span>
      </div>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </motion.button>
  );
}

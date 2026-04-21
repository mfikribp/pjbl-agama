import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './ui/resizable-navbar';

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
}

export default function RolledTextButton({ text, onClick, className, variant = 'primary' }: Props) {
  const variants = {
    primary: "bg-sky-500 text-white shadow-lg shadow-sky-100",
    outline: "border border-slate-200 text-slate-600 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-600"
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "px-8 py-3 rounded-2xl font-bold text-sm transition-all flex items-center justify-center overflow-hidden",
        variants[variant],
        className
      )}
    >
      {text}
    </motion.button>
  );
}

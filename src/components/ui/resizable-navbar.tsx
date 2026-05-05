"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { clsx, type ClassValue } from "clsx";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = ({ children, className }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) setVisible(true);
    else setVisible(false);
  });

  return (
    <motion.div ref={ref} className={cn("fixed inset-x-0 top-0 z-[100] w-full pt-4 pointer-events-none", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child as any, { visible }) : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: any) => {
  return (
    <motion.div
      initial={false}
      animate={{
        backdropFilter: visible ? "blur(16px)" : "blur(0px)",
        width: visible ? "min(95vw, 1100px)" : "min(95vw, 1280px)",
        y: visible ? 0 : 0,
        backgroundColor: visible ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0)",
        borderColor: visible ? "rgba(226, 232, 240, 0.8)" : "rgba(226, 232, 240, 0)",
        boxShadow: visible ? "0 25px 50px -12px rgba(0, 0, 0, 0.05)" : "none",
      }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between rounded-[2rem] border px-8 py-3 lg:flex pointer-events-auto",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const location = useLocation();

  return (
    <div onMouseLeave={() => setHovered(null)} className={cn("flex flex-row items-center justify-center space-x-1", className)}>
      {items.map((item: any, idx: number) => {
        const isActive = location.pathname === item.link;
        return (
          <Link
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            to={item.link}
            className={cn(
              "relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-xl",
              isActive ? "text-sky-600" : "text-slate-500 hover:text-slate-900"
            )}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hover-nav"
                className="absolute inset-0 bg-sky-50 rounded-xl -z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              />
            )}
            {isActive && !hovered && (
              <motion.div
                layoutId="active-nav"
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sky-500 rounded-full"
              />
            )}
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export const NavbarLogo = () => (
  <Link to="/" className="group flex items-center gap-2 pointer-events-auto">
    <span className="font-black text-2xl tracking-tighter text-slate-900">
      PAI Kelas
    </span>
    <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-100 group-hover:rotate-12 transition-transform duration-500">
      <span className="text-white font-black text-xl">7</span>
    </div>
  </Link>
);

export const MobileNav = ({ children, className, visible }: any) => (
  <motion.div
    animate={{ y: visible ? 10 : 0 }}
    className={cn("relative z-[70] mx-auto flex w-full flex-col lg:hidden px-4 pointer-events-auto", className)}
  >
    {children}
  </motion.div>
);

export const MobileNavHeader = ({ children }: any) => (
  <div className="flex w-full items-center justify-between bg-white/70 backdrop-blur-xl p-4 rounded-[2rem] border border-white shadow-xl shadow-slate-200/40">
    {children}
  </div>
);

export const MobileNavMenu = ({ children, isOpen }: any) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        className="absolute inset-x-4 top-24 z-50 flex flex-col gap-1 rounded-[2.5rem] bg-white/90 backdrop-blur-2xl p-6 shadow-2xl border border-white"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({ isOpen, onClick }: any) => (
  <button onClick={onClick} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-900 border border-slate-100 transition-all active:scale-90">
    {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
  </button>
);

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
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = ({ children, className }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) setVisible(true);
    else setVisible(false);
  });

  return (
    <motion.div ref={ref} className={cn("sticky inset-x-0 top-0 z-40 w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child as any, { visible }) : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: any) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        width: visible ? "min(95vw, 1000px)" : "100%",
        y: visible ? 20 : 0,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between rounded-full bg-transparent px-6 py-3 lg:flex",
        visible && "bg-white/80 border border-slate-200 shadow-xl shadow-slate-200/50",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div onMouseLeave={() => setHovered(null)} className={cn("flex flex-row items-center justify-center space-x-2", className)}>
      {items.map((item: any, idx: number) => (
        <Link
          key={idx}
          onMouseEnter={() => setHovered(idx)}
          to={item.link}
          className="relative px-5 py-2 text-sm font-bold text-slate-600 transition-colors hover:text-sky-600"
        >
          {hovered === idx && (
            <motion.div layoutId="hover-nav" className="absolute inset-0 bg-sky-50 rounded-full -z-10" />
          )}
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export const NavbarLogo = () => (
  <Link to="/" className="font-black text-2xl tracking-tighter text-slate-900">
    Agama
  </Link>
);

export const NavbarButton = ({ to, children, className, variant = "primary" }: any) => {
  const variants: any = {
    primary: "bg-sky-500 text-white shadow-lg shadow-sky-100",
    outline: "border border-slate-200 text-slate-600 hover:bg-slate-50"
  };
  return (
    <Link to={to || "/"} className={cn("px-6 py-2.5 rounded-xl font-bold text-sm transition-all", variants[variant], className)}>
      {children}
    </Link>
  );
};

export const MobileNav = ({ children, className, visible }: any) => (
  <motion.div animate={{ y: visible ? 20 : 0 }} className={cn("relative z-50 mx-auto flex w-full flex-col lg:hidden px-4", className)}>
    {children}
  </motion.div>
);

export const MobileNavHeader = ({ children }: any) => <div className="flex w-full items-center justify-between bg-white/80 backdrop-blur-md p-4 rounded-3xl border border-slate-100">{children}</div>;

export const MobileNavMenu = ({ children, isOpen }: any) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute inset-x-4 top-20 z-50 flex flex-col gap-2 rounded-3xl bg-white p-6 shadow-2xl border border-slate-100">
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({ isOpen, onClick }: any) => (
  <button onClick={onClick} className="p-2">{isOpen ? <IconX /> : <IconMenu2 />}</button>
);

"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";

export default function NavbarDemo() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const items = [
    { name: "Beranda", link: "/" },
    { name: "Materi", link: "/materi" },
    { name: "Kuis", link: "/quiz" },
    { name: "Makhraj", link: "/makhraj" },
  ];

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <div className="absolute inset-x-0 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto">
            <NavItems items={items} />
          </div>
        </div>
        <div className="w-[150px]" /> {/* Spacer pengganti tombol login */}
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isMobileOpen} onClick={() => setIsMobileOpen(!isMobileOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileOpen}>
          {items.map((item, idx) => (
            <Link key={idx} to={item.link} onClick={() => setIsMobileOpen(false)} className="py-4 text-slate-600 font-bold border-b border-slate-50">
              {item.name}
            </Link>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

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
    { name: "Al-Qur'an Hadis", link: "/alquran-hadis" },
    { name: "Aqidah Akhlak", link: "/aqidah-akhlak" },
    { name: "Fiqih", link: "/fiqih" },
    { name: "SKI", link: "/ski" },
    { name: "Bahasa Arab", link: "/bahasa-arab" },
  ];

  return (
    <Navbar>
      <NavBody>
        <div className="flex-shrink-0">
          <NavbarLogo />
        </div>
        
        <div className="flex-grow flex items-center justify-center">
          <NavItems items={items} />
        </div>

        <div className="w-[200px] flex-shrink-0" /> {/* Spacer balanced with logo area */}
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

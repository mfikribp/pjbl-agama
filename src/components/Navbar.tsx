"use client";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  cn,
} from "./ui/resizable-navbar";

export default function NavbarDemo() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const items = [
    { name: "Beranda", link: "/" },
    { name: "Al-Qur'an Hadis", link: "/alquran-hadis" },
    { name: "Aqidah Akhlak", link: "/aqidah-akhlak" },
    { name: "Fiqih", link: "/fiqih" },
    { name: "SKI", link: "/ski" },
    { name: "Bahasa Arab", link: "/bahasa-arab" },
    { name: "Informatika", link: "/informatika" },
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

        <div className="w-[270px] flex-shrink-0" /> {/* Spacer balanced with logo area */}
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isMobileOpen} onClick={() => setIsMobileOpen(!isMobileOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileOpen}>
          <div className="flex flex-col gap-1">
            {items.map((item, idx) => {
              const isActive = location.pathname === item.link;
              return (
                <Link
                  key={idx}
                  to={item.link}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "py-3.5 px-4 font-bold rounded-2xl transition-all duration-200 flex items-center justify-between",
                    isActive
                      ? "text-sky-600 bg-sky-50/60"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/50"
                  )}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

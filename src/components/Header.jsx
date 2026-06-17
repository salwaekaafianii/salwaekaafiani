import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-[#faf9f5]/70 border-b border-stone-200/40">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">

        {/* SISI KIRI: NAMA LENGKAP */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-xs md:text-sm text-stone-800 font-black tracking-widest hover:text-rose-600 transition-colors duration-300"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            SALWA EKA
          </Link>
        </div>

        {/* SISI TENGAH: NAVIGASI AKTIF */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono font-bold tracking-wider text-stone-500">
          <a href="#tentang" className="hover:text-rose-600 transition-colors duration-200">TENTANG</a>
          <a href="#keahlian" className="hover:text-rose-600 transition-colors duration-200">KEAHLIAN</a>
          <a href="#portfolio" className="hover:text-rose-600 transition-colors duration-200">PORTOFOLIO</a>
        </nav>

        {/* SISI KANAN: CONTACT ME */}
        <div>
          <a
            href="mailto:salwaekaafianii@gmail.com"
            className="inline-block px-3 py-1.5 text-[10px] md:text-[11px] font-bold uppercase tracking-widest 
                       text-rose-600 bg-rose-50 border border-rose-200/60 rounded-lg
                       hover:bg-rose-600 hover:text-white hover:border-rose-600 hover:scale-105 
                       transition-all duration-300 shadow-sm"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Contact Me
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-white/30 border-b border-gray-100">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">

        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-sm md:text-base text-stone-400 font-light tracking-widest hover:text-rose-400 transition-colors duration-300"
            style={{ fontFamily: "satoshi-black" }}
          >
            SALWA EKA AFIANI
          </Link>
        </div>

        <div>
  <a
    href="mailto:salwaekaafianii@gmail.com"
    className="inline-block px-3 py-1.5 text-[10px] md:text-[11px] font-black uppercase tracking-widest 
               text-rose-500 bg-rose-50/50 border border-rose-200/60 rounded-lg
               hover:bg-rose-100 hover:border-rose-300 hover:scale-105 
               transition-all duration-300"
    style={{ fontFamily: "satoshi-bold" }}
  >
    Contact Me
  </a>
</div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 py-8 text-center text-stone-500 text-sm border-t border-stone-200/60">
      <p className="mb-2">
        © {new Date().getFullYear()} Salwa Eka Afiani.
      </p>
      <p className="text-xs text-stone-400">
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
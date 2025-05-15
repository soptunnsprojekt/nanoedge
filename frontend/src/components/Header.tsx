import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '../assets/NanoEdge_logotyp2_vit_transparant.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-800 text-white p-6 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="NanoEdge Logo" className="w-28" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden min-[601px]:flex space-x-6">
          <a href="/" className="underline-animation">Hem</a>
          <a href="/produkt" className="underline-animation">Produkter</a>
          <a href="#" className="underline-animation">Kontakta oss</a>
          <a href="#" className="underline-animation">Om oss</a>
        </nav>

        {/* Hamburger Button (Mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="min-[601px]:hidden focus:outline-none"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-[65px] right-0 min-[601px]:hidden mt-2 space-y-2 text-right flex flex-col p-5 bg-black/10 backdrop-blur-md rounded-md shadow-lg">
          <a href="/produkt" className="block underline-animation">Produkter</a>
          <a href="#" className="block underline-animation">Kontakta oss</a>
          <a href="#" className="block underline-animation">Om oss</a>
        </nav>
      )}
    </header>
  );
}

export default Header;

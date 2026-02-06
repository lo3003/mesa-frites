// src/components/layout/Navbar.tsx
"use client"; // Nécessaire pour l'interactivité

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Menu, X, Clock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenStatus, setIsOpenStatus] = useState(false);

  // Vérification des horaires en temps réel
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Dimanche, 1 = Lundi...
      const hour = now.getHours();
      const minute = now.getMinutes();
      const time = hour + minute / 60;

      // Horaires basés sur ton image
      // Lun (1), Mer (3), Jeu (4): 12-14 et 17-21.5
      // Ven (5): 12-14 et 17-22
      // Sam (6), Dim (0): 17-21.5
      // Mar (2): Fermé (supposition car absent de l'image)

      let isOpen = false;

      if ([1, 3, 4].includes(day)) {
        if ((time >= 12 && time < 14) || (time >= 17 && time < 21.5)) isOpen = true;
      } else if (day === 5) {
        if ((time >= 12 && time < 14) || (time >= 17 && time < 22)) isOpen = true;
      } else if ([0, 6].includes(day)) {
        if (time >= 17 && time < 21.5) isOpen = true;
      }

      setIsOpenStatus(isOpen);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Vérifie chaque minute
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className="fixed w-full z-50 glass-effect py-4 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">

          {/* LOGO + BADGE STATUS */}
          <div className="flex items-center gap-3">
            <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-mesaGold tracking-wider hover:opacity-90 transition flex items-center gap-2">
              <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
              </svg>
              <span>MESA<span className="text-white">FRITES</span></span>
            </Link>

            {/* Badge Ouvert/Fermé (Visible desktop & mobile) */}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border-2 ${isOpenStatus ? 'border-green-500 bg-green-500/20 text-green-400' : 'border-red-500 bg-red-500/20 text-red-400'}`}>
              <div className={`w-2 h-2 rounded-full ${isOpenStatus ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              {isOpenStatus ? 'Ouvert' : 'Fermé'}
            </div>
          </div>

          {/* LIENS DESKTOP */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-semibold tracking-widest text-white items-center">
            <Link href="#specialites" className="hover:text-mesaGold transition-colors relative group">
              SPÉCIALITÉS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mesaGold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#horaires" className="hover:text-mesaGold transition-colors relative group">
              HORAIRES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mesaGold group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#infos" className="hover:text-mesaGold transition-colors relative group">
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mesaGold group-hover:w-full transition-all duration-300"></span>
            </Link>

            <a
              href="https://wa.me/32495792014"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:brightness-110 hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle size={18} />
              <span className="hidden lg:inline">WHATSAPP</span>
            </a>

            <a
              href="tel:0495792014"
              className="bg-mesaGold text-black px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-white hover:scale-105 transition-all flex items-center gap-2"
            >
              <Phone size={18} />
              <span className="hidden xl:inline">APPELER</span>
            </a>
          </div>

          {/* BOUTON MOBILE (BURGER) */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </nav>

      {/* MENU MOBILE OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-mesaBlack/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col gap-6 animate-fade-in">
          <Link href="#smash" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-white hover:text-mesaGold">Nos Burgers</Link>
          <Link href="#pitas" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-white hover:text-mesaGold">Nos Pitas</Link>
          <Link href="#snacks" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-white hover:text-mesaGold">Snacks & Frites</Link>
          <Link href="#infos" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-white hover:text-mesaGold">Infos Pratiques</Link>

          <div className="mt-8 flex flex-col gap-4">
            <a href="https://wa.me/32495792014" className="bg-[#25D366] text-black w-full py-4 rounded text-center font-bold text-lg flex justify-center items-center gap-2">
              <MessageCircle /> Commander par WhatsApp
            </a>
            <a href="tel:0495792014" className="bg-mesaGold text-black w-full py-4 rounded text-center font-bold text-lg flex justify-center items-center gap-2">
              <Phone /> Appeler
            </a>
          </div>
        </div>
      )}
    </>
  );
}
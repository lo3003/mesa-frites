import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#121212]/95 backdrop-blur-md border-b border-mesaGold/20 py-4 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-serif font-bold text-mesaGold tracking-wider hover:opacity-90 transition">
          MESA<span className="text-white">FRITES</span>
        </Link>

        {/* LIENS ORDI */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-widest text-white">
          <Link href="#smash" className="hover:text-mesaGold transition">BURGERS</Link>
          <Link href="#snacks" className="hover:text-mesaGold transition">SNACKS</Link>
          <Link href="#infos" className="hover:text-mesaGold transition">INFOS</Link>
        </div>

        {/* BOUTON APPEL */}
        <a 
          href="tel:0495792014" 
          className="bg-mesaGold text-black px-5 py-2 rounded font-bold text-sm hover:bg-white transition flex items-center gap-2 shadow-[0_0_10px_rgba(240,196,80,0.3)]"
        >
          <Phone size={18} />
          <span className="hidden sm:inline">COMMANDER</span>
        </a>

      </div>
    </nav>
  );
}
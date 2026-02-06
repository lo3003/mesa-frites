// src/components/layout/CategoryNav.tsx
"use client";

import Link from 'next/link';

export default function CategoryNav() {
  const categories = [
    { id: 'smash', label: '🍔 Smashs' },
    { id: 'special', label: '⭐ Spécialités' },
    { id: 'pitas', label: '🥙 Pitas' },
    { id: 'pains-ronds', label: '🥯 Burgers' },
    { id: 'snacks', label: '🍗 Snacks' },
    { id: 'drinks', label: '🥤 Boissons' },
  ];

  return (
    <div className="sticky top-[70px] z-40 bg-[#121212]/80 backdrop-blur-md border-y border-white/5 py-3 overflow-x-auto no-scrollbar">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 md:gap-8 min-w-max">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              href={`#${cat.id}`}
              className="text-sm md:text-base font-bold text-gray-400 hover:text-mesaGold hover:bg-white/5 px-4 py-2 rounded-full transition-all whitespace-nowrap active:scale-95"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
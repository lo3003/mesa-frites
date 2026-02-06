// src/components/menu/MenuCard.tsx
import { Product } from '@/types';
import { Flame, Leaf, Star, ArrowRight, UtensilsCrossed } from 'lucide-react';

interface MenuCardProps {
  product: Product;
  index?: number;
}

export default function MenuCard({ product, index = 0 }: MenuCardProps) {
  return (
    <div
      className="group relative bg-gradient-to-br from-mesaDark via-mesaDark to-mesaBlack rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_rgba(240,196,80,0.35)] flex flex-col h-full menu-card-hover ornate-card"
      style={{ animationDelay: `${index * 100}ms` }}
    >

      {/* DECORATIVE HEADER - No Image Design */}
      <div className="relative h-40 bg-gradient-to-br from-mesaGold/5 via-transparent to-transparent border-b border-mesaGold/20 overflow-hidden">
        {/* Decorative Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-2 left-2 w-20 h-20 border-2 border-mesaGold rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-16 h-16 border-2 border-mesaGold rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-mesaGold rotate-45"></div>
        </div>

        {/* Crown Icon Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <svg className="w-16 h-16 text-mesaGold/30 group-hover:text-mesaGold/50 transition-all duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
            </svg>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-mesaGold/10 blur-xl rounded-full scale-150 group-hover:bg-mesaGold/20 transition-all"></div>
          </div>
        </div>

        {/* Price Badge - Top Right */}
        <div className="absolute top-4 right-4">
          <div className="bg-mesaGold text-black px-4 py-2 rounded-lg font-bold text-xl shadow-[0_0_20px_rgba(240,196,80,0.4)] group-hover:scale-110 transition-transform">
            {product.priceSolo.toFixed(2)}€
          </div>
        </div>

        {/* Status Badges - Top Left */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {product.isNew && (
            <span className="bg-mesaGold text-black text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 uppercase tracking-wider animate-pulse">
              <Star size={10} fill="black" /> Nouveau
            </span>
          )}
          {product.isSpicy && (
            <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 uppercase tracking-wider border border-red-500 animate-pulse">
              <Flame size={10} fill="white" /> Épicé
            </span>
          )}
          {product.isVeggie && (
            <span className="bg-green-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 uppercase tracking-wider border border-green-500">
              <Leaf size={10} fill="white" /> Veggie
            </span>
          )}
        </div>

        {/* Decorative line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-mesaGold/50 to-transparent"></div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-2xl font-serif font-bold text-white group-hover:text-mesaGold transition-colors duration-300 mb-3 text-center">
          {product.name}
        </h3>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-px w-8 bg-mesaGold/30"></div>
          <UtensilsCrossed size={14} className="text-mesaGold/50" />
          <div className="h-px w-8 bg-mesaGold/30"></div>
        </div>

        {/* Description */}
        {product.description && (
          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 text-center">
            {product.description}
          </p>
        )}

        {/* Footer with Menu Price */}
        {product.priceMenu && (
          <div className="mt-auto pt-4 border-t border-mesaGold/20">
            <div className="flex items-center justify-between bg-mesaGold/5 rounded-lg p-3 group-hover:bg-mesaGold/10 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-mesaGold rounded-full"></div>
                <span className="text-xs uppercase text-mesaGold/70 font-bold tracking-widest">Formule Menu</span>
              </div>
              <span className="text-mesaGold font-bold text-lg">{product.priceMenu.toFixed(2)}€</span>
            </div>
          </div>
        )}

        {/* Hover Indicator */}
        <div className="mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-xs font-bold text-mesaGold uppercase tracking-widest flex items-center justify-center gap-2">
            <span>Découvrir</span>
            <ArrowRight size={14} className="animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
import { Product } from '@/types';
import { Flame, Leaf } from 'lucide-react';

export default function MenuListItem({ product }: { product: Product }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-mesaGold/10 hover:bg-mesaGold/5 px-4 rounded-lg transition-all group cursor-pointer">
      <div className="flex flex-col pr-4 flex-1">
        <span className="font-semibold text-white group-hover:text-mesaGold transition-colors flex items-center gap-2 text-base">
          {product.name}
          {product.isSpicy && (
            <span className="inline-flex items-center gap-1 text-[9px] text-red-400 bg-red-900/20 border border-red-700/30 px-2 py-0.5 rounded-full uppercase font-bold">
              <Flame size={8} /> Épicé
            </span>
          )}
          {product.isVeggie && (
            <span className="inline-flex items-center gap-1 text-[9px] text-green-400 bg-green-900/20 border border-green-700/30 px-2 py-0.5 rounded-full uppercase font-bold">
              <Leaf size={8} /> Veggie
            </span>
          )}
        </span>
        {product.description && (
          <span className="text-xs text-gray-500 italic mt-1 leading-relaxed">
            {product.description}
          </span>
        )}
      </div>

      <div className="flex flex-col items-end gap-1 text-sm min-w-[100px]">
        <span className="font-bold text-mesaGold text-lg">{product.priceSolo.toFixed(2)}€</span>
        {product.priceMenu && (
          <span className="text-mesaGold/50 text-xs font-medium">
            Menu {product.priceMenu.toFixed(2)}€
          </span>
        )}
      </div>
    </div>
  );
}
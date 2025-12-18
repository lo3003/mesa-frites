import { Product } from '@/types';

interface MenuCardProps {
  product: Product;
}

export default function MenuCard({ product }: MenuCardProps) {
  return (
    <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4 hover:bg-white/5 transition p-3 rounded-lg group">
      <div className="flex-1 pr-4">
        <h4 className="text-lg font-bold text-white group-hover:text-mesaGold transition-colors flex items-center gap-2 flex-wrap">
          {product.name}
          {product.isSpicy && <span className="text-[10px] bg-red-900/50 text-red-200 px-2 py-0.5 rounded border border-red-700">SPICY</span>}
          {product.isVeggie && <span className="text-[10px] bg-green-900/50 text-green-200 px-2 py-0.5 rounded border border-green-700">VEGGIE</span>}
          {product.isNew && <span className="text-[10px] bg-mesaGold text-black px-2 py-0.5 rounded font-bold">NEW</span>}
        </h4>
        {product.description && (
          <p className="text-gray-400 text-sm mt-1 leading-relaxed">
            {product.description}
          </p>
        )}
      </div>
      
      <div className="text-right whitespace-nowrap">
        <div className="flex flex-col items-end">
          <span className="text-mesaGold font-bold text-lg">
            {product.priceSolo.toFixed(2)}€ 
            {product.priceMenu && <span className="text-xs text-white/40 ml-1 font-normal opacity-50"> (S)</span>}
          </span>
          
          {product.priceMenu && (
            <span className="text-mesaGold font-bold text-lg mt-1">
              {product.priceMenu.toFixed(2)}€ 
              <span className="text-xs text-white/40 ml-1 font-normal opacity-50"> (M)</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
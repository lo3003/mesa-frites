// src/types/index.ts
export interface Product {
  id: string;
  name: string;
  description?: string;
  priceSolo: number;
  priceMenu?: number;
  isSpicy?: boolean;
  isVeggie?: boolean;
  isNew?: boolean;
  image?: string; // <--- CETTE LIGNE EST CRUCIALE
}

export interface MenuCategory {
  id: string;
  title: string;
  items: Product[];
  note?: string;
}
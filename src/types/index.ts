export interface Product {
  id: string;
  name: string;
  description?: string;
  priceSolo: number;
  priceMenu?: number; // Prix Mitraillette ou Menu
  isSpicy?: boolean;
  isVeggie?: boolean;
  isNew?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: Product[];
  note?: string; // Ex: "S: Seul / F: Frites"
}
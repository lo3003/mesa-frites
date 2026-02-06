import { MenuCategory } from '@/types';

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'smash',
    title: 'Smash Burgers',
    note: 'S : Seul / F : Avec Frites',
    items: [
      {
        id: 'mesa-smash',
        name: 'Mesa Smash',
        description: '2 smash burgers, salade, tomates, oignons, sauce au choix.',
        priceSolo: 10.00,
        priceMenu: 13.00,
      },
      {
        id: 'monkey',
        name: "Monkey Bob's",
        description: '2 smash burgers, bacon, oignons confits, salade, double cheddar, flambé Jack au miel, BBQ smoky.',
        priceSolo: 12.00,
        priceMenu: 15.00,
        isNew: true
      },
      {
        id: 'baconator',
        name: "Baconator",
        description: "2 smash burgers, bacon, tomates, salade, oignons, cornichons, cheddar, sauce In'n Out.",
        priceSolo: 12.00,
        priceMenu: 15.00,
      }
    ]
  },
  {
    id: 'special',
    title: 'Les Spécialités du Chef',
    items: [
      {
        id: 'philly',
        name: "Le Philly Cheese Steak",
        description: "Le vrai goût des US : Lamelles de bœuf grillées, oignons caramélisés, inondés de fromage fondu.",
        priceSolo: 13.50,
        priceMenu: 16.50,
        isNew: true
      },
      {
        id: 'pitta-poulet',
        name: "Pita Poulet",
        description: "La référence : Poulet mariné aux épices douces, crudités fraîches et notre sauce blanche maison.",
        priceSolo: 9.00,
        priceMenu: 12.00
      },
      {
        id: 'pitta-porc',
        name: "Pita Porc",
        description: "Authentique Gyros de porc grillé, oignons rouges, tomates, tzatziki.",
        priceSolo: 9.00,
        priceMenu: 12.00
      }
    ]
  },
  {
    id: 'frites',
    title: 'Frites Fraîches',
    items: [
      { id: 'f-pet', name: 'Petite', priceSolo: 2.80 },
      { id: 'f-moy', name: 'Moyenne', priceSolo: 3.80 },
      { id: 'f-gde', name: 'Grande', priceSolo: 4.50 },
    ]
  },
  {
    id: 'sauces-maison',
    title: 'Sauces Maison (1,00€)',
    note: 'Nos créations signatures',
    items: [
      { id: 'chipotle', name: 'Chipotle', description: 'Le twist entre les épices et le fumé du Mexique.', priceSolo: 1.00, isSpicy: true },
      { id: 'innout', name: "In'n Out", description: 'Un goût de Californie grâce au sweet relish.', priceSolo: 1.00 },
      { id: 'chimichurri', name: 'Chimichurri', description: "Herbes fraîches, une odeur d'Argentine.", priceSolo: 1.00 },
      { id: 'truffe', name: 'Truffe', description: 'De la truffe, de la truffe et encore de la truffe.', priceSolo: 1.00 },
    ]
  },
  {
    id: 'snacks',
    title: 'Viandes & Snacks',
    note: 'V : Viande seule / M : Mitraillette',
    items: [
      { id: 'fricadelle', name: 'Fricadelle', priceSolo: 2.80, priceMenu: 7.30 },
      { id: 'boulette', name: 'Boulette Maison', priceSolo: 3.50, priceMenu: 8.00 },
      { id: 'viandelle', name: 'Viandelle', priceSolo: 3.30, priceMenu: 7.70 },
      { id: 'mexicano', name: 'Mexicano', priceSolo: 3.30, priceMenu: 7.70, isSpicy: true },
      { id: 'poulycroc', name: 'Poulycroc', priceSolo: 3.50, priceMenu: 8.00 },
      { id: 'lucifer', name: 'Lucifer', priceSolo: 4.50, priceMenu: 9.00, isSpicy: true },
      { id: 'mozza', name: 'Mozzarella Sticks', priceSolo: 4.50, priceMenu: 9.00 },
      { id: 'brochette', name: 'Brochette Tzigane', priceSolo: 3.80, priceMenu: 8.30 },
    ]
  },
  {
    id: 'pains-ronds',
    title: 'Pains Ronds',
    items: [
      { id: 'hamburger', name: 'Hamburger', priceSolo: 4.00 },
      { id: 'mulki', name: 'Mulki', priceSolo: 4.50 },
      { id: 'chicken', name: 'Chicken Burger', priceSolo: 5.50 },
      { id: 'veggie', name: 'Veggie Burger', priceSolo: 5.50, isVeggie: true },
    ]
  },
  {
    id: 'drinks',
    title: 'Boissons',
    items: [
      { id: 'soft', name: 'Coca / Fanta / Sprite / Ice Tea', priceSolo: 2.50 },
      { id: 'eau', name: 'Eau (Plate/Pétillante)', priceSolo: 1.50 },
      { id: 'jupiler', name: 'Jupiler', priceSolo: 2.50 },
      { id: 'leffe', name: 'Leffe (Blonde/Brune)', priceSolo: 4.00 },
      { id: 'paixdieu', name: 'Paix Dieu', priceSolo: 6.00 },
    ]
  }
];
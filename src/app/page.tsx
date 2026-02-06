// src/app/page.tsx
"use client";

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MenuCard from '@/components/menu/MenuCard';
import MenuListItem from '@/components/menu/MenuListItem';
import { MENU_DATA } from '@/data/menu';
import { Clock, ChevronDown, ChevronUp, Sparkles, UtensilsCrossed } from 'lucide-react';
import BackToTop from '@/components/ui/BackToTop';
import { useParallax } from '@/hooks/useParallax';

export default function Home() {
  const [showFullMenu, setShowFullMenu] = useState(false);
  const scrollY = useParallax();

  // Get signature dishes - all items from special category (now has 6 items total)
  const smashBurgers = MENU_DATA.find(cat => cat.id === 'smash');
  const specialties = MENU_DATA.find(cat => cat.id === 'special');

  const signatureDishes = [
    ...(smashBurgers?.items || []),  // Mesa Smash, Monkey Bob's, Baconator
    ...(specialties?.items || [])     // Philly, Pita Poulet, Pita Porc
  ];

  return (
    <main className="min-h-screen bg-mesaBlack selection:bg-mesaGold selection:text-black">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop"
            alt="Burger Mesa Frites"
            className="w-full h-full object-cover opacity-40"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          {/* Crown Icon */}
          <div className="mb-6 inline-flex items-center justify-center">
            <svg className="w-16 h-16 text-mesaGold animate-bounce-slow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
            </svg>
          </div>

          <p className="text-mesaGold text-sm md:text-lg tracking-[0.4em] mb-4 font-bold uppercase animate-slide-down">
            Depuis 2020 • Bray 7130
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white mb-6 leading-tight drop-shadow-2xl animate-slide-up">
            LE GOÛT DU<br />
            <span className="text-mesaGold">VRAI BURGER</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Des smash burgers croustillants, des pitas authentiques et des frites belges dorées à la perfection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#specialites"
              className="group bg-mesaGold text-black px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all transform shadow-[0_0_30px_rgba(240,196,80,0.4)] hover:shadow-[0_0_40px_rgba(240,196,80,0.6)] ornate-border"
            >
              <span className="flex items-center gap-2 justify-center">
                <Sparkles size={20} />
                DÉCOUVRIR NOS SPÉCIALITÉS
              </span>
            </a>
            <a
              href="https://waze.com/ul/hq14757130"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-mesaGold/30 bg-mesaGold/5 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-mesaGold hover:text-black transition-all backdrop-blur-sm"
            >
              NOUS TROUVER
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-mesaGold" size={32} />
        </div>
      </section>

      {/* OPENING HOURS SECTION */}
      <section id="horaires" className="py-20 bg-gradient-to-b from-mesaBlack to-mesaDark relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-mesaGold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-mesaGold/5 rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <Clock className="text-mesaGold" size={32} />
                <h2 className="text-4xl md:text-5xl font-serif text-white font-bold">Nos Horaires</h2>
              </div>
              <p className="text-mesaGold text-sm tracking-[0.3em] uppercase font-bold">Ouvert toute la semaine sauf le mardi</p>
            </div>

            <div className="ornate-card bg-mesaDark/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Weekdays */}
                <div className="space-y-4">
                  <ScheduleItem day="Lundi" hours="12:00-14:00 & 17:00-21:30" isOpen={true} />
                  <ScheduleItem day="Mardi" hours="Fermé" isOpen={false} />
                  <ScheduleItem day="Mercredi" hours="12:00-14:00 & 17:00-21:30" isOpen={true} />
                  <ScheduleItem day="Jeudi" hours="12:00-14:00 & 17:00-21:30" isOpen={true} />
                </div>

                {/* Weekend */}
                <div className="space-y-4">
                  <ScheduleItem day="Vendredi" hours="12:00-14:00 & 17:00-22:00" isOpen={true} />
                  <ScheduleItem day="Samedi" hours="17:00-21:30" isOpen={true} />
                  <ScheduleItem day="Dimanche" hours="17:00-21:30" isOpen={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES SECTION */}
      <section id="specialites" className="py-20 bg-mesaBlack relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-mesaGold text-sm tracking-[0.3em] uppercase font-bold mb-3">Les Incontournables</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">Nos Spécialités</h2>
            <div className="w-24 h-1 bg-mesaGold mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {signatureDishes.map((dish, index) => (
              <MenuCard key={dish.id} product={dish} index={index} />
            ))}
          </div>

          {/* Full Menu Toggle Button */}
          <div className="text-center">
            <button
              onClick={() => setShowFullMenu(!showFullMenu)}
              className="group inline-flex items-center gap-3 bg-mesaDark border-2 border-mesaGold/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-mesaGold hover:text-black transition-all hover:scale-105"
            >
              <UtensilsCrossed size={24} />
              {showFullMenu ? 'MASQUER LE MENU COMPLET' : 'VOIR LE MENU COMPLET'}
              {showFullMenu ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
          </div>
        </div>
      </section>

      {/* FULL MENU SECTION (Collapsible) */}
      {showFullMenu && (
        <section className="py-16 bg-gradient-to-b from-mesaBlack to-mesaDark animate-fade-in">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col gap-20">
              {MENU_DATA.map((category, index) => {
                // Skip smash and special categories as they're shown in signature dishes
                if (category.id === 'smash' || category.id === 'special') return null;

                const isHighlightCategory = category.id === 'pitas';

                return (
                  <div key={category.id} id={category.id} className="scroll-mt-40">
                    <div className="flex items-end justify-between mb-8 border-b-2 border-mesaGold/20 pb-4">
                      <h3 className="text-3xl md:text-4xl font-serif text-white font-bold">{category.title}</h3>
                      {category.note && (
                        <span className="text-xs text-mesaGold font-bold uppercase tracking-wider hidden sm:block">
                          {category.note}
                        </span>
                      )}
                    </div>

                    {isHighlightCategory ? (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.items.map((item) => (
                          <MenuCard key={item.id} product={item} />
                        ))}
                      </div>
                    ) : (
                      <div className="ornate-card bg-mesaDark/30 p-6 md:p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
                          {category.items.map((item) => (
                            <MenuListItem key={item.id} product={item} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ABOUT SECTION */}
      <section className="py-20 bg-mesaDark relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-mesaGold/5 rounded-full blur-3xl transform -translate-y-1/2"></div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">Notre Histoire</h2>
            <div className="w-24 h-1 bg-mesaGold mx-auto rounded-full mb-8"></div>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              Depuis 2020, <span className="text-mesaGold font-bold">Mesa Frites</span> révolutionne la scène des burgers à Bray.
              Notre passion ? Des <span className="text-white font-semibold">smash burgers croustillants</span> préparés avec des ingrédients frais,
              des <span className="text-white font-semibold">pitas authentiques</span> marinés maison, et bien sûr,
              les meilleures <span className="text-white font-semibold">frites belges</span> de la région.
            </p>
            <p className="text-mesaGold text-xl font-serif italic">
              "Le goût du vrai burger, l'authenticité belge"
            </p>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </main>
  );
}

// Schedule Item Component
function ScheduleItem({ day, hours, isOpen }: { day: string; hours: string; isOpen: boolean }) {
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long' });
  const isToday = today.toLowerCase() === day.toLowerCase();

  return (
    <div className={`flex justify-between items-center py-3 px-4 rounded-lg transition-all ${isToday ? 'bg-mesaGold/10 border border-mesaGold/30' : 'border border-white/5'
      }`}>
      <span className={`font-semibold ${isToday ? 'text-mesaGold' : 'text-white'}`}>
        {day}
        {isToday && <span className="ml-2 text-xs">(Aujourd'hui)</span>}
      </span>
      <span className={`${isOpen ? 'text-white' : 'text-red-400 font-bold'}`}>
        {hours}
      </span>
    </div>
  );
}
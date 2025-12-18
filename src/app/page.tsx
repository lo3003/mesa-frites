import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MenuCard from '@/components/menu/MenuCard';
import { MENU_DATA } from '@/data/menu';

export default function Home() {
  return (
    <main className="min-h-screen bg-mesaBlack selection:bg-mesaGold selection:text-black">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Fond Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop" 
            alt="Burger Mesa Frites"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10 animate-fade-in">
          <p className="text-mesaGold text-lg md:text-xl tracking-[0.3em] mb-4 font-semibold uppercase">Est. Bray 7130</p>
          <h1 className="text-5xl md:text-8xl font-serif font-black text-white mb-8 leading-tight drop-shadow-2xl">
            LE GOÛT DU <br/><span className="text-mesaGold">VRAI BURGER</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <a href="#smash" className="bg-mesaGold text-black px-8 py-4 rounded font-bold text-lg hover:scale-105 transition transform shadow-[0_0_20px_rgba(240,196,80,0.3)]">
                VOIR LA CARTE
            </a>
            <a href="https://waze.com/ul/hq14757130" target="_blank" rel="noreferrer" className="border border-white/30 bg-white/5 text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-black transition backdrop-blur-sm">
                Y ALLER
            </a>
          </div>
        </div>
      </section>

      {/* SECTION MENU */}
      <section id="smash" className="py-24 container mx-auto px-4 relative">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-mesaGold mb-4">Notre Carte</h2>
            <div className="h-1 w-24 bg-mesaGold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
          {MENU_DATA.map((category) => (
            <div key={category.id} id={category.id} className="bg-[#1E1E1E]/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5 shadow-xl hover:border-mesaGold/20 transition duration-500">
              <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
                 <h3 className="text-3xl font-serif text-white">{category.title}</h3>
                 {category.note && <span className="text-xs text-mesaGold font-bold uppercase tracking-wider">{category.note}</span>}
              </div>
              
              <div className="space-y-2">
                {category.items.map((item) => (
                  <MenuCard key={item.id} product={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION INFO RAPIDE */}
      <section className="py-24 bg-[#1E1E1E] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-mesaGold/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
           <h2 className="text-3xl font-serif font-bold text-white mb-8">Qualité & Tradition</h2>
           <p className="text-gray-400 text-lg leading-relaxed mb-8">
             Chez <span className="text-mesaGold font-bold">Mesa Frites</span>, nous ne faisons pas de compromis. 
             Nos Smash Burgers sont préparés minute avec de la viande fraîche, nos sauces maisons sont mijotées avec passion 
             et nos frites respectent la cuisson traditionnelle belge.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-bold uppercase tracking-widest text-white/50">
                <div className="border border-white/10 py-4 rounded">Viande Fraîche</div>
                <div className="border border-white/10 py-4 rounded">Sauces Maison</div>
                <div className="border border-white/10 py-4 rounded">Frites Belges</div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
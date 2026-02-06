import { MapPin, Phone, Facebook, Instagram, Clock } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="infos" className="bg-black pt-20 pb-12 border-t-2 border-mesaGold/30 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-mesaGold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mesaGold/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 relative z-10">

                {/* Horaires */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <Clock className="text-mesaGold" />
                        <h3 className="text-xl font-serif text-white">Nos Horaires</h3>
                    </div>
                    {/* La structure de la table doit être collée pour éviter l'erreur d'hydratation */}
                    <table className="w-full text-sm text-gray-400">
                        <tbody>
                            <tr className="border-b border-white/10">
                                <td className="py-2">Lundi</td>
                                <td className="py-2 text-right text-white">12:00-14:00 & 17:00-21:30</td>
                            </tr>
                            <tr className="border-b border-white/10">
                                <td className="py-2">Mardi</td>
                                <td className="py-2 text-right text-red-500 font-bold">Fermé</td>
                            </tr>
                            <tr className="border-b border-white/10">
                                <td className="py-2">Mercredi</td>
                                <td className="py-2 text-right text-white">12:00-14:00 & 17:00-21:30</td>
                            </tr>
                            <tr className="border-b border-white/10">
                                <td className="py-2">Jeudi</td>
                                <td className="py-2 text-right text-white">12:00-14:00 & 17:00-21:30</td>
                            </tr>
                            <tr className="border-b border-white/10">
                                <td className="py-2">Vendredi</td>
                                <td className="py-2 text-right text-white">12:00-14:00 & 17:00-22:00</td>
                            </tr>
                            <tr className="border-b border-white/10">
                                <td className="py-2">Samedi</td>
                                <td className="py-2 text-right text-white">17:00-21:30</td>
                            </tr>
                            <tr className="border-b border-white/10">
                                <td className="py-2">Dimanche</td>
                                <td className="py-2 text-right text-white">17:00-21:30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Contact */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-serif text-mesaGold mb-6">Nous trouver</h3>
                    <p className="text-white mb-2 text-lg font-bold">Mesa Frites</p>
                    <div className="flex items-start gap-3 text-gray-400 mb-4 justify-center md:justify-start">
                        <MapPin className="text-mesaGold shrink-0" size={20} />
                        <p>595 Route de Mons,<br />7130 Bray (Binche)</p>
                    </div>
                    <div className="flex items-center gap-3 text-2xl font-bold text-mesaGold mb-8 justify-center md:justify-start">
                        <Phone size={24} />
                        <a href="tel:0495792014">0495 79 20 14</a>
                    </div>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="https://www.facebook.com/mesarestaurantbray/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition text-white">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E4405F] transition text-white">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>

                {/* Google Map */}
                <div className="h-64 rounded-xl overflow-hidden border border-white/20 shadow-lg relative bg-white/5">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0 grayscale invert contrast-125"
                        frameBorder="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?q=Mesa%20Frites%20Bray&t=&z=13&ie=UTF8&iwloc=&output=embed">
                    </iframe>
                </div>
            </div>
            <div className="text-center mt-12 text-gray-600 text-xs border-t border-white/5 pt-8">
                © 2025 Mesa Frites. Tous droits réservés.
            </div>
        </footer>
    );
}
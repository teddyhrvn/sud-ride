import { MapPin } from 'lucide-react';

const DISTRICTS = [
  'Écusson', 'Place de la Comédie', 'Antigone', 
  'Port Marianne', 'Beaux-Arts', 'Boutonnet', 
  'Prés d’Arènes', 'Odysseum', 'Rives du Lez'
];

export default function MontpellierLocal() {
  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="text-brand-sun font-bold text-xs uppercase tracking-widest">
              Conçu pour le territoire clapasien
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Montpellier, votre ville. Votre terrain de jeu.
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Des ruelles piétonnes de l’Écusson aux grandes avenues de Port Marianne, la trottinette est le moyen le plus rapide d'esquiver la circulation montpelliéraine. Un abonnement pensé pour votre mobilité du quotidien.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {DISTRICTS.map((district, idx) => (
                <span key={idx} className="bg-white/10 text-xs px-3.5 py-1.5 rounded-full font-medium flex items-center gap-1.5 border border-white/10">
                  <MapPin size={12} className="text-brand-sun" /> {district}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 pt-2 italic">
              * Retrait de votre trottinette à notre point de collecte central à Montpellier ou livraison directe sur option.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative">
            <div className="aspect-video bg-neutral-900 rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-white/10">
              <MapPin size={48} className="text-brand-sun mb-2 animate-bounce" />
              <span className="font-bold text-lg">Carte interactive des axes cyclables</span>
              <span className="text-xs text-gray-400 mt-1">Écusson, Lignes Tram & Pistes cyclables du Lez</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
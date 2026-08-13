import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SCOOTERS } from '@/data/products';
import Link from 'next/link';
import { Zap, Gauge, Weight, ArrowRight } from 'lucide-react';

export default function TrottinettesPage() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark mb-4">
              Nos Modèles de Trottinettes
            </h1>
            <p className="text-gray-600 text-lg">
              Une gamme conçue pour s'adapter à la réalité des déplacements quotidiens à Montpellier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {SCOOTERS.map((scooter) => (
              <div 
                key={scooter.id} 
                className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between"
              >
                {/* Badge floqué en absolu en haut à gauche pour ne pas décaler le flux du layout */}
                {scooter.badge ? (
                  <span className="absolute top-4 left-6 bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-full z-10">
                    {scooter.badge}
                  </span>
                ) : null}

                <div>
                  {/* Container image : hauteur fixe + marge haute constante */}
                  <div className="w-full h-52 mt-4 mb-6 bg-brand-surface rounded-2xl flex items-center justify-center p-4 overflow-hidden">
                    <img
                      src={scooter.image}
                      alt={scooter.name}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                  </div>

                  <h2 className="text-2xl font-black text-brand-dark mb-2">{scooter.name}</h2>
                  
                  {/* Hauteur minimale sur le sous-titre pour éviter les décalages si un texte fait 2 lignes */}
                  <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{scooter.tagline}</p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
                      <span className="flex items-center gap-2 text-gray-600"><Zap size={16} className="text-brand-sun" /> Autonomie</span>
                      <span className="font-bold text-brand-dark">{scooter.rangeKm} km</span>
                    </div>
                    <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
                      <span className="flex items-center gap-2 text-gray-600"><Gauge size={16} className="text-brand-sun" /> Vitesse max</span>
                      <span className="font-bold text-brand-dark">{scooter.maxSpeedKmH} km/h</span>
                    </div>
                    <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
                      <span className="flex items-center gap-2 text-gray-600"><Weight size={16} className="text-brand-sun" /> Poids</span>
                      <span className="font-bold text-brand-dark">{scooter.weightKg} kg</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <span className="text-xs text-gray-400 block">À partir de</span>
                    <span className="text-3xl font-black text-brand-dark">{scooter.pricing[12]}€</span>
                    <span className="text-xs text-gray-500"> / mois</span>
                  </div>
                  <Link
                    href={`/reservation?model=${scooter.id}`}
                    className="w-full bg-brand-dark text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-sun transition-colors"
                  >
                    Réserver ce modèle <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
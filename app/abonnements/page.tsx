import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

const DURATION_OFFERS = [
  { duration: '1 mois', label: 'Flexibilité totale', discount: 'Formule standard', recommended: false },
  { duration: '3 mois', label: 'Idéal stage / trimestre', discount: 'Économique', recommended: false },
  { duration: '6 mois', label: 'Le choix le plus populaire', discount: 'Tarif réduit', recommended: true },
  { duration: '12 mois', label: 'Sérénité toute l’année', discount: 'Meilleur prix', recommended: false },
];

export default function AbonnementsPage() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark mb-4">
              Formules & Engagements
            </h1>
            <p className="text-gray-600 text-lg">
              1 mois minimum. Plus vous vous engagez, plus le tarif mensuel diminue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {DURATION_OFFERS.map((offer, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-6 border transition-all ${
                  offer.recommended ? 'border-brand-sun shadow-xl ring-2 ring-brand-sun/20' : 'border-gray-200'
                }`}
              >
                {offer.recommended && (
                  <span className="bg-brand-sun text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider block w-fit mb-3">
                    Recommandé
                  </span>
                )}
                <h2 className="text-2xl font-black text-brand-dark">{offer.duration}</h2>
                <p className="text-xs font-semibold text-brand-sun mb-4">{offer.label}</p>
                <p className="text-gray-500 text-sm mb-6">{offer.discount}</p>

                <ul className="space-y-2 text-xs text-gray-600 mb-6">
                  <li className="flex items-center gap-1.5"><Check size={14} className="text-brand-leaf" /> Trottinette révisée</li>
                  <li className="flex items-center gap-1.5"><Check size={14} className="text-brand-leaf" /> Maintenance & usure</li>
                  <li className="flex items-center gap-1.5"><Check size={14} className="text-brand-leaf" /> Assistance locale</li>
                  <li className="flex items-center gap-1.5"><Check size={14} className="text-brand-leaf" /> Antivol inclus</li>
                </ul>

                <Link
                  href="/reservation"
                  className={`w-full py-3 rounded-xl font-bold text-xs text-center block ${
                    offer.recommended ? 'bg-brand-sun text-white' : 'bg-brand-surface text-brand-dark hover:bg-gray-200'
                  }`}
                >
                  Choisir cette durée
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
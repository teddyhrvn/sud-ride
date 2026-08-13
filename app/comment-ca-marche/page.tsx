import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Choisissez votre véhicule',
    desc: 'Sélectionnez le modèle qui convient le mieux à vos trajets quotidiens (City, City Pro ou Long Range).'
  },
  {
    num: '02',
    title: 'Définissez votre durée',
    desc: 'Optez pour 1, 3, 6 ou 12 mois d’abonnement selon vos besoins d’études ou de travail.'
  },
  {
    num: '03',
    title: 'Souscrivez en 2 minutes',
    desc: 'Validez votre dossier en ligne avec vos coordonnées et votre moyen de paiement sécurisé.'
  },
  {
    num: '04',
    title: 'Récupérez et roulez',
    desc: 'Récupérez votre trottinette à notre point de collecte à Montpellier et profitez de votre liberté.'
  }
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark mb-4">
              Comment ça marche ?
            </h1>
            <p className="text-gray-600 text-lg">
              Un parcours 100 % en ligne et sans contrainte administrative.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {STEPS.map((s, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <span className="text-4xl font-black text-brand-sun bg-amber-50 px-5 py-3 rounded-2xl">
                  {s.num}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-brand-dark mb-1">{s.title}</h2>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 bg-brand-sun text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all"
            >
              Lancer ma réservation <ArrowRight size={20} />
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
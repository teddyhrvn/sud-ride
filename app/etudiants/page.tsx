import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { GraduationCap, ArrowRight, Check } from 'lucide-react';

export default function EtudiantsPage() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-amber-500/10 p-8 sm:p-12 rounded-3xl border border-amber-200 text-center space-y-6 mb-12">
            <div className="w-16 h-16 bg-brand-sun text-white rounded-2xl flex items-center justify-center mx-auto">
              <GraduationCap size={32} />
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-brand-dark">
              Offre Étudiante Montpellier
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Étudiant à Paul-Valéry, Richter, Triolet ou Sup de Co ? Profitez d'un moyen de transport économique, sans engagement annuel.
            </p>
            <div className="inline-block bg-white px-6 py-2 rounded-full font-bold text-brand-dark shadow-sm">
              Formules ajustables à l'année universitaire ou au semestre
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-lg text-brand-dark mb-2">Inclus avec la carte étudiant</h3>
              <p className="text-gray-600 text-sm">Antivol haute sécurité fourni sans supplément pour vos stationnements sur campus.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-lg text-brand-dark mb-2">Flexibilité examens & stages</h3>
              <p className="text-gray-600 text-sm">Suspendez ou ajustez la durée si vous partez en stage hors de Montpellier.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-lg text-brand-dark mb-2">Zéro frais de maintenance</h3>
              <p className="text-gray-600 text-sm">Crevaisons légères et révisions prises en charge à notre point de collecte local.</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-sun transition-all"
            >
              Découvrir les tarifs étudiants <ArrowRight size={20} />
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
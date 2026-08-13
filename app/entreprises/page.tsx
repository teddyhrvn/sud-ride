'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Building2, Shield, Users } from 'lucide-react';

export default function EntreprisesPage() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase mb-4">
              <Building2 size={14} /> Flottes Pro & Collaborateurs
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-dark mb-4">
              Mobilité d'Entreprise à Montpellier
            </h1>
            <p className="text-gray-600 text-lg">
              Equipez vos salariés pour leurs trajets Domicile-Travail ou inter-sites avec une gestion centralisée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-4">
              <Users className="text-brand-sun" size={32} />
              <h2 className="text-xl font-bold text-brand-dark">Gestion de Flotte Simplifiée</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Facturation unique mensuelle pour l'ensemble de vos collaborateurs. Possibilité de remplacer un véhicule en cas d'immobilisation sous 24h.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-4">
              <Shield className="text-brand-sun" size={32} />
              <h2 className="text-xl font-bold text-brand-dark">Démarche RSE & Avantages</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Réduisez votre empreinte carbone locale et offrez un avantage aux salariés très prisé dans la métropole montpelliéraine.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-brand-dark mb-6 text-center">Demander un devis flotte entreprise</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nom de l'entreprise" className="w-full p-3.5 bg-brand-surface rounded-xl text-sm" />
              <input type="email" placeholder="Email professionnel" className="w-full p-3.5 bg-brand-surface rounded-xl text-sm" />
              <input type="text" placeholder="Nombre de trottinettes souhaitées" className="w-full p-3.5 bg-brand-surface rounded-xl text-sm" />
              <textarea placeholder="Votre besoin spécifique..." rows={3} className="w-full p-3.5 bg-brand-surface rounded-xl text-sm" />
              <button type="submit" className="w-full bg-brand-dark text-white py-4 rounded-xl font-bold hover:bg-brand-sun transition-colors">
                Demander une étude personnalisée
              </button>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
import { User, Shield, Wrench, Clock, FileText, AlertTriangle } from 'lucide-react';

export default function EspaceClientPage() {
  return (
    <div className="min-h-screen bg-brand-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-brand-dark">Espace Abonné</h1>
            <p className="text-gray-500 text-sm">Ravi de vous revoir, Thomas.</p>
          </div>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full">
            Abonnement Actif
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Status */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase">Mon véhicule</span>
                <h2 className="text-2xl font-black text-brand-dark">Trottinette CITY PRO</h2>
                <p className="text-xs text-gray-500 mt-0.5">N° Série : MTP-8849-X</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-brand-dark">39,90€</span>
                <span className="text-xs text-gray-500 block">/ mois</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="bg-brand-surface p-4 rounded-2xl">
                <Clock className="text-brand-sun mb-2" size={20} />
                <div className="text-xs text-gray-500">Prochaine échéance</div>
                <div className="font-bold text-sm text-brand-dark">01 Septembre 2026</div>
              </div>
              <div className="bg-brand-surface p-4 rounded-2xl">
                <Shield className="text-brand-sun mb-2" size={20} />
                <div className="text-xs text-gray-500">Engagement</div>
                <div className="font-bold text-sm text-brand-dark">Reste 4 mois</div>
              </div>
              <div className="bg-brand-surface p-4 rounded-2xl">
                <Wrench className="text-brand-sun mb-2" size={20} />
                <div className="text-xs text-gray-500">Dernier contrôle</div>
                <div className="font-bold text-sm text-brand-dark">15 Juin 2026</div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button className="bg-brand-dark text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2">
                <AlertTriangle size={16} /> Signaler un problème / Panne
              </button>
              <button className="border border-gray-300 text-brand-dark px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2">
                <FileText size={16} /> Mes factures
              </button>
            </div>
          </div>

          {/* Quick Support Card */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200 space-y-4">
            <h3 className="font-bold text-lg text-brand-dark">Support & Assistance Montpellier</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Un pneu dégonflé ou un doute technique ? Notre atelier local est ouvert du Lundi au Samedi.
            </p>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-xs text-amber-900 space-y-1">
              <div className="font-bold">Point d'accueil central :</div>
              <div>Place de la Comédie / Gare Saint-Roch</div>
              <div>04 XX XX XX XX</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
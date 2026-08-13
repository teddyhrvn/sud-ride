'use client';

import { useState } from 'react';
import { SCOOTERS, EXTRA_OPTIONS } from '@/data/products';
import { DurationMonths } from '@/types';
import { Check, ShieldCheck, CreditCard, ArrowRight, ArrowLeft } from 'lucide-react';

export default function ReservationPage() {
  const [step, setStep] = useState(1);
  const [selectedScooter, setSelectedScooter] = useState(SCOOTERS[0].id);
  const [duration, setDuration] = useState<DurationMonths>(6);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '' });

  const scooter = SCOOTERS.find(s => s.id === selectedScooter) || SCOOTERS[0];
  const baseMonthlyPrice = scooter.pricing[duration];
  
  const optionsMonthlyTotal = selectedOptions.reduce((acc, optId) => {
    const opt = EXTRA_OPTIONS.find(o => o.id === optId);
    return acc + (opt ? opt.monthlyPrice : 0);
  }, 0);

  const totalMonthly = baseMonthlyPrice + optionsMonthlyTotal;

  const toggleOption = (id: string) => {
    setSelectedOptions(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-brand-bg py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Step Indicator */}
        <div className="flex justify-between items-center mb-8 border-b pb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
          <span className={step >= 1 ? 'text-brand-sun' : ''}>1. Modèle & Durée</span>
          <span className={step >= 2 ? 'text-brand-sun' : ''}>2. Options</span>
          <span className={step >= 3 ? 'text-brand-sun' : ''}>3. Coordonnées</span>
          <span className={step >= 4 ? 'text-brand-sun' : ''}>4. Récapitulatif</span>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
          
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-brand-dark">Choisissez votre trottinette et durée</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SCOOTERS.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => setSelectedScooter(s.id)}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedScooter === s.id ? 'border-brand-sun bg-amber-50/20' : 'border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-black text-lg text-brand-dark">{s.name}</div>
                    <div className="text-xs text-gray-500 mb-4">{s.rangeKm}km d'autonomie</div>
                    <div className="text-xl font-bold">{s.pricing[duration]}€<span className="text-xs font-normal">/mois</span></div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Durée d'engagement</label>
                <div className="grid grid-cols-4 gap-2">
                  {([1, 3, 6, 12] as DurationMonths[]).map((d) => (
                    <button
                      key={d}
                      onClick={() => setDuration(d)}
                      className={`py-3 rounded-xl font-bold text-sm border ${
                        duration === d ? 'bg-brand-dark text-white border-brand-dark' : 'bg-brand-surface text-gray-700'
                      }`}
                    >
                      {d} mois
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => setStep(2)} className="w-full bg-brand-sun text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 mt-6">
                Étape suivante <ArrowRight size={18} />
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-brand-dark">Personnalisez votre formule</h2>
              <div className="space-y-3">
                {EXTRA_OPTIONS.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => toggleOption(opt.id)}
                    className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between ${
                      selectedOptions.includes(opt.id) ? 'border-brand-sun bg-amber-50/20' : 'border-gray-100'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm">{opt.name}</div>
                      <div className="text-xs text-gray-500">{opt.description}</div>
                    </div>
                    <div className="font-bold text-sm">
                      {opt.monthlyPrice > 0 ? `+${opt.monthlyPrice}€/mois` : 'Inclus / Offert'}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <button onClick={() => setStep(1)} className="w-1/3 bg-gray-100 py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                  <ArrowLeft size={18} /> Retour
                </button>
                <button onClick={() => setStep(3)} className="w-2/3 bg-brand-sun text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                  Continuer <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-brand-dark">Vos Informations</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Prénom"
                  value={formData.firstName}
                  onChange={e => setFormData({...formData, firstName: e.target.value})}
                  className="p-3.5 bg-brand-surface rounded-xl text-sm border-none focus:ring-2 focus:ring-brand-sun"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  value={formData.lastName}
                  onChange={e => setFormData({...formData, lastName: e.target.value})}
                  className="p-3.5 bg-brand-surface rounded-xl text-sm border-none focus:ring-2 focus:ring-brand-sun"
                />
              </div>
              <input
                type="email"
                placeholder="Adresse email"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full p-3.5 bg-brand-surface rounded-xl text-sm border-none focus:ring-2 focus:ring-brand-sun"
              />
              <input
                type="tel"
                placeholder="Numéro de téléphone"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="w-full p-3.5 bg-brand-surface rounded-xl text-sm border-none focus:ring-2 focus:ring-brand-sun"
              />
              <input
                type="text"
                placeholder="Adresse à Montpellier"
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
                className="w-full p-3.5 bg-brand-surface rounded-xl text-sm border-none focus:ring-2 focus:ring-brand-sun"
              />

              <div className="flex gap-4 pt-4">
                <button onClick={() => setStep(2)} className="w-1/3 bg-gray-100 py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                  <ArrowLeft size={18} /> Retour
                </button>
                <button onClick={() => setStep(4)} className="w-2/3 bg-brand-sun text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                  Voir le récapitulatif <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 & RECAP */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-brand-dark">Récapitulatif & Paiement</h2>
              
              <div className="bg-brand-surface p-6 rounded-2xl space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Modèle sélectionné :</span>
                  <span className="font-bold">{scooter.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Engagement :</span>
                  <span className="font-bold">{duration} mois</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Options :</span>
                  <span className="font-bold">{selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Aucune'}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-black text-brand-dark">
                  <span>Total mensuel :</span>
                  <span className="text-brand-sun">{totalMonthly.toFixed(2)}€ / mois</span>
                </div>
              </div>

              <div className="p-4 border border-dashed border-gray-300 rounded-xl text-xs text-gray-500">
                Préparation de l'intégration Stripe Checkout sécurisée...
              </div>

              <button
                onClick={() => alert("Redirection vers la passerelle de paiement sécurisée Stripe...")}
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors shadow-lg"
              >
                <CreditCard size={18} /> Valider et payer la 1ère mensualité ({totalMonthly.toFixed(2)}€)
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SCOOTERS } from '@/data/products';
import { DurationMonths } from '@/types';
import { ShieldCheck, Wrench, Lock, ArrowRight, Check } from 'lucide-react';

export default function Hero() {
  const [selectedDuration, setSelectedDuration] = useState<DurationMonths>(6);
  const [selectedScooterId, setSelectedScooterId] = useState<string>('city-pro');

  const activeScooter = SCOOTERS.find(s => s.id === selectedScooterId) || SCOOTERS[1];
  const currentPrice = activeScooter.pricing[selectedDuration];

  return (
    <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Tagline & Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-sun animate-pulse" />
              Mobilité longue durée à Montpellier
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-brand-dark tracking-tight leading-[1.1]">
              La liberté de la trottinette. <span className="text-brand-sun">Sans l'achat.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl">
              Louez votre trottinette électrique à Montpellier à partir d'un mois. Entretien, assistance et tranquillité inclus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="#simulateur" className="bg-brand-sun text-white text-center px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
                Choisir ma trottinette
              </Link>
              <Link href="/abonnements" className="bg-white border border-gray-300 text-brand-dark text-center px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-surface transition-all">
                Voir les abonnements
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              À partir de 24,90€/mois · Sans achat · Entretien inclus
            </p>
          </div>

          {/* Module Simulator Card */}
          <div id="simulateur" className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100 relative">
            <h2 className="text-xl font-bold text-brand-dark mb-6">
              Combien me coûterait ma trottinette ?
            </h2>

            {/* Étape 1 : Durée */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Étape 1 : Choisissez votre durée (min. 1 mois)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {([1, 3, 6, 12] as DurationMonths[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDuration(d)}
                    className={`py-2.5 text-sm font-bold rounded-xl border transition-all ${
                      selectedDuration === d
                        ? 'bg-brand-dark text-white border-brand-dark'
                        : 'bg-brand-surface text-gray-700 border-transparent hover:border-gray-300'
                    }`}
                  >
                    {d} mois
                  </button>
                ))}
              </div>
            </div>

            {/* Étape 2 : Modèle */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Étape 2 : Choisissez votre modèle
              </label>
              <div className="space-y-2">
                {SCOOTERS.map((scooter) => (
                  <div
                    key={scooter.id}
                    onClick={() => setSelectedScooterId(scooter.id)}
                    className={`p-3 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                      selectedScooterId === scooter.id
                        ? 'border-brand-sun bg-amber-50/30'
                        : 'border-gray-100 bg-brand-surface hover:border-gray-300'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-brand-dark">{scooter.name}</div>
                      <div className="text-xs text-gray-500">{scooter.rangeKm} km d'autonomie · {scooter.weightKg} kg</div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-sm text-brand-dark">{scooter.pricing[selectedDuration]}€<span className="text-xs font-normal">/mois</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Dynamic Price Output */}
            <div className="bg-brand-surface p-4 rounded-2xl mb-6 space-y-2">
              <div className="text-xs font-bold text-gray-500 uppercase">Votre abonnement</div>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-black text-brand-dark">{currentPrice.toFixed(2)}€ <span className="text-sm font-normal text-gray-500">/ mois</span></span>
                <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">Engagement {selectedDuration} mois</span>
              </div>
              <hr className="border-gray-200 my-2" />
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div className="flex items-center gap-1.5"><Check size={14} className="text-brand-leaf" /> Entretien inclus</div>
                <div className="flex items-center gap-1.5"><Check size={14} className="text-brand-leaf" /> Assistance incluse</div>
                <div className="flex items-center gap-1.5"><Check size={14} className="text-brand-leaf" /> Antivol inclus</div>
                <div className="flex items-center gap-1.5"><Check size={14} className="text-brand-leaf" /> Modèle {activeScooter.name}</div>
              </div>
            </div>

            <Link
              href={`/reservation?model=${selectedScooterId}&duration=${selectedDuration}`}
              className="w-full bg-brand-dark text-white text-center py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-sun transition-colors shadow-md"
            >
              Commencer ma réservation <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
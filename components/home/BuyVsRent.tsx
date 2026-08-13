'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SCOOTERS } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export default function BuyVsRent() {
  const [selectedScooterId, setSelectedScooterId] = useState<string>('city-pro');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark mb-4">
            Acheter vs Louer
          </h2>
          <p className="text-gray-600">
            Comparez les avantages et choisissez le modèle qui correspond à vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SCOOTERS.map((scooter) => {
            const isSelected = scooter.id === selectedScooterId;

            return (
              <div
                key={scooter.id}
                onClick={() => setSelectedScooterId(scooter.id)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-200 border-2 flex flex-col justify-between ${
                  isSelected
                    ? 'border-brand-orange bg-amber-50/30 shadow-md'
                    : 'border-gray-100 bg-white hover:border-gray-300'
                }`}
              >
                <div>
                  <div className="w-full h-44 mb-6 bg-brand-surface rounded-2xl flex items-center justify-center p-4 overflow-hidden">
                    <img
                      src={scooter.image}
                      alt={scooter.name}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                  </div>

                  <h3 className="text-xl font-black text-brand-dark mb-1">
                    {scooter.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 min-h-[40px]">
                    {scooter.tagline}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-2xl font-black text-brand-dark">
                      {scooter.pricing[12]}€
                    </span>
                    <span className="text-gray-500 text-xs">/ mois</span>
                  </div>
                </div>

                <Link
                  href={`/reservation?model=${scooter.id}`}
                  className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-sm transition-colors ${
                    isSelected
                      ? 'bg-brand-orange text-white hover:bg-opacity-90'
                      : 'bg-gray-100 text-brand-dark hover:bg-gray-200'
                  }`}
                >
                  Choisir ce modèle <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { Wallet, ShieldCheck, Headphones, Repeat } from 'lucide-react';

const VALUES = [
  {
    icon: Wallet,
    title: 'Aucun achat',
    desc: 'Pas besoin de dépenser plusieurs centaines d’euros pour posséder une trottinette. Préservez votre trésorerie.',
  },
  {
    icon: ShieldCheck,
    title: 'Entretien inclus',
    desc: 'Usure naturelle, freins, pneus : nous nous occupons de l’entretien et des réparations prévues par le contrat.',
  },
  {
    icon: Headphones,
    title: 'Assistance dédiée',
    desc: 'Un problème technique à Montpellier ? Notre équipe locale réactive vous répond et résout votre situation.',
  },
  {
    icon: Repeat,
    title: 'Une solution flexible',
    desc: 'Choisissez une durée adaptée à votre besoin réels (stages, semestres, missions), dès un mois minimum.',
  },
];

export default function ValueProps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Pourquoi acheter quand vous pouvez simplement rouler ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-brand-bg p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-100 text-brand-sun rounded-2xl flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
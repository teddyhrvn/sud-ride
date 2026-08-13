import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <span className="text-2xl font-black">SUD<span className="text-brand-sun">RIDE</span></span>
            <p className="text-xs text-gray-400 leading-relaxed">
              Service de location longue durée de trottinettes électriques à Montpellier.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/trottinettes" className="hover:text-white">Nos trottinettes</Link></li>
              <li><Link href="/abonnements" className="hover:text-white">Abonnements</Link></li>
              <li><Link href="/comment-ca-marche" className="hover:text-white">Comment ça marche</Link></li>
              <li><Link href="/etudiants" className="hover:text-white">Offre Étudiants</Link></li>
              <li><Link href="/entreprises" className="hover:text-white">Offre Entreprises</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4">Contact & Support</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>Montpellier, France</li>
              <li>contact@sud-ride-montpellier.fr</li>
              <li>Du Lundi au Samedi: 9h - 19h</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4">Légal</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/mentions-legales" className="hover:text-white">Mentions Légales</Link></li>
              <li><Link href="/cgv" className="hover:text-white">CGV & Conditions d'Abonnement</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Sud Ride Montpellier. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* LOGO + NOM DU SITE */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <Image
              src="/images/icon.png"
              alt="Sud Ride SR"
              width={32}
              height={32}
              className="object-contain rounded-md"
              priority
            />
            <div className="flex items-center text-xl font-extrabold tracking-tight">
              <span className="text-black">SUD</span>
              <span className="text-[#FF5500] ml-1">RIDE</span>
              <span className="ml-2 text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                MTP
              </span>
            </div>
          </Link>

          {/* TOUS LES LIENS DE NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-gray-700 overflow-x-auto">
            <Link href="/" className="hover:text-[#FF5500] transition-colors whitespace-nowrap">
              Accueil
            </Link>
            <Link href="/trottinettes" className="hover:text-[#FF5500] transition-colors whitespace-nowrap">
              Trottinettes
            </Link>
            <Link href="/abonnements" className="hover:text-[#FF5500] transition-colors whitespace-nowrap">
              Abonnements
            </Link>
            <Link href="/comment-ca-marche" className="hover:text-[#FF5500] transition-colors whitespace-nowrap">
              Comment ça marche
            </Link>
            <Link href="/etudiants" className="hover:text-[#FF5500] transition-colors whitespace-nowrap">
              Étudiants
            </Link>
            <Link href="/entreprises" className="hover:text-[#FF5500] transition-colors whitespace-nowrap">
              Entreprises
            </Link>
            <Link href="/faq" className="hover:text-[#FF5500] transition-colors whitespace-nowrap">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-[#FF5500] transition-colors whitespace-nowrap">
              Contact
            </Link>
          </nav>

          {/* ACTIONS (ESPACE CLIENT + RÉSERVATION) */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/espace-client"
              className="text-sm font-semibold text-gray-700 hover:text-[#FF5500] transition-colors hidden sm:block"
            >
              Espace client
            </Link>
            <Link
              href="/reservation"
              className="bg-[#FF5500] hover:bg-[#e04b00] text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors shadow-sm"
            >
              Réserver
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
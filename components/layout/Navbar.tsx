import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO + NOM DU SITE */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Image
                src="/icon.png"
                alt="Sud Ride SR"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center text-xl font-extrabold tracking-tight">
              <span className="text-black">SUD</span>
              <span className="text-[#FF5500] ml-1">RIDE</span>
              <span className="ml-2 text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                MTP
              </span>
            </div>
          </Link>

          {/* LIENS DE NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-[#FF5500] transition-colors">
              Accueil
            </Link>
            <Link href="/reservation" className="hover:text-[#FF5500] transition-colors">
              Nos offres & Réservation
            </Link>
            <Link href="/faq" className="hover:text-[#FF5500] transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-[#FF5500] transition-colors">
              Contact
            </Link>
          </nav>

          {/* BOUTON D'ACTION */}
          <div>
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
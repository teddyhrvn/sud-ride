'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-tight text-brand-dark">
          SUD<span className="text-brand-sun">RIDE</span>
          <span className="text-xs bg-brand-surface text-brand-dark px-2 py-0.5 rounded-full font-semibold border">MTP</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-700">
          <Link href="/trottinettes" className="hover:text-brand-sun transition-colors">Nos Trottinettes</Link>
          <Link href="/abonnements" className="hover:text-brand-sun transition-colors">Abonnements</Link>
          <Link href="/comment-ca-marche" className="hover:text-brand-sun transition-colors">Comment ça marche</Link>
          <Link href="/etudiants" className="hover:text-brand-sun transition-colors">Étudiants</Link>
          <Link href="/entreprises" className="hover:text-brand-sun transition-colors">Entreprises</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/espace-client" className="flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-sun transition-colors">
            <User size={18} /> Espace Client
          </Link>
          <Link href="/reservation" className="bg-brand-dark text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-sun transition-colors shadow-sm">
            Réserver
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-brand-dark">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-bg border-b border-gray-200 px-4 pt-2 pb-6 space-y-4">
          <Link href="/trottinettes" className="block text-lg font-medium text-brand-dark">Nos Trottinettes</Link>
          <Link href="/abonnements" className="block text-lg font-medium text-brand-dark">Abonnements</Link>
          <Link href="/comment-ca-marche" className="block text-lg font-medium text-brand-dark">Comment ça marche</Link>
          <Link href="/etudiants" className="block text-lg font-medium text-brand-dark">Étudiants</Link>
          <Link href="/entreprises" className="block text-lg font-medium text-brand-dark">Entreprises</Link>
          <Link href="/espace-client" className="block text-lg font-medium text-brand-dark">Espace Client</Link>
          <Link href="/reservation" className="block w-full text-center bg-brand-sun text-white py-3 rounded-xl font-bold">
            Choisir ma trottinette
          </Link>
        </div>
      )}
    </header>
  );
}
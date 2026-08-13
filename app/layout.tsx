import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Sud Ride | Location longue durée de trottinettes électriques à Montpellier',
  description: 'Abonnement mensuel de trottinettes électriques à Montpellier dès 24,90€/mois. Entretien, assistance et antivol inclus. Idéal étudiants et professionnels.',
  keywords: [
    'location trottinette electrique Montpellier',
    'location trottinette au mois Montpellier',
    'abonnement trottinette electrique Montpellier',
    'louer trottinette electrique Montpellier',
    'trottinette etudiant Montpellier'
  ],
  openGraph: {
    title: 'Sud Ride — Votre trottinette. Votre liberté. Tous les jours.',
    description: 'Louez votre trottinette à Montpellier à partir d’un mois. Sans achat, sans contrainte.',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-brand-bg text-brand-dark antialiased">
        {children}
      </body>
    </html>
  );
}
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-black text-brand-dark mb-6">
            Mentions Légales
          </h1>
          <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
            <p>
              Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique.
            </p>
            <h2 className="text-xl font-bold text-brand-dark mt-6 mb-2">Éditeur du site</h2>
            <p>
              <strong>SUD RIDE</strong><br />
              Montpellier, France<br />
              Contact : contact@sud-ride.fr
            </p>
            <h2 className="text-xl font-bold text-brand-dark mt-6 mb-2">Hébergement</h2>
            <p>
              Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133 Covina, CA 91723.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
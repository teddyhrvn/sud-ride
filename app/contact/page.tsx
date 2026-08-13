import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-black text-brand-dark mb-6">
            Contactez-nous
          </h1>
          <p className="text-gray-600">
            Page en cours de construction.
          </p>
        </main>
      </div>
      <Footer />
    </div>
  );
}
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import ValueProps from '@/components/home/ValueProps';
import BuyVsRent from '@/components/home/BuyVsRent';
import MontpellierLocal from '@/components/home/MontpellierLocal';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />
      <Hero />
      <ValueProps />
      <BuyVsRent />
      <MontpellierLocal />
    </main>
  );
}
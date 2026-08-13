export interface Scooter {
  id: string;
  name: string;
  tagline: string;
  rangeKm: number;
  maxSpeedKmH: number;
  weightKg: number;
  image: string;
  badge?: string;
  pricing: {
    1: number;
    3: number;
    6: number;
    12: number;
  };
}

export const SCOOTERS: Scooter[] = [
  {
    id: 'city',
    name: 'CITY',
    tagline: 'Légère et maniable pour le centre-ville',
    rangeKm: 40,
    maxSpeedKmH: 25,
    weightKg: 17,
    image: '/images/city.png',
    pricing: {
      1: 39.9,
      3: 34.9,
      6: 29.9,
      12: 24.9,
    },
  },
  {
    id: 'city-pro',
    name: 'CITY PRO',
    tagline: 'Suspensions renforcées et confort optimal',
    rangeKm: 55,
    maxSpeedKmH: 25,
    weightKg: 19,
    image: '/images/city-pro.png',
    badge: 'Plus populaire',
    pricing: {
      1: 49.9,
      3: 44.9,
      6: 39.9,
      12: 34.9,
    },
  },
  {
    id: 'long-range',
    name: 'LONG RANGE',
    tagline: 'Autonomie max et double suspension pour grands trajets',
    rangeKm: 70,
    maxSpeedKmH: 25,
    weightKg: 22,
    image: '/images/long-range.png',
    badge: 'Haut de gamme',
    pricing: {
      1: 59.9,
      3: 54.9,
      6: 49.9,
      12: 44.9,
    },
  },
];
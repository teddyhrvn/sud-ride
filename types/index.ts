export type DurationMonths = 1 | 3 | 6 | 12;

export interface ScooterOption {
  id: string;
  name: string;
  monthlyPrice: number;
  description: string;
}

export interface Scooter {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  badge?: string;
  rangeKm: number;
  maxSpeedKmH: number;
  weightKg: number;
  comfortLevel: 'Standard' | 'Supérieur' | 'Ultra';
  pricing: Record<DurationMonths, number>; // Prix dégressif par mois
  image: string;
  popular?: boolean;
}

export interface ReservationState {
  scooterId: string;
  duration: DurationMonths;
  options: string[];
  step: number;
}
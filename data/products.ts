export interface ExtraOption {
  id: string;
  name: string;
  monthlyPrice: number;
  description: string;
}

export const EXTRA_OPTIONS: ExtraOption[] = [
  {
    id: 'helmet',
    name: 'Casque de protection',
    monthlyPrice: 5,
    description: 'Casque homologué léger et aéré',
  },
  {
    id: 'lock',
    name: 'Antivol U renforcé',
    monthlyPrice: 5,
    description: 'Protection maximale contre le vol',
  },
  {
    id: 'insurance',
    name: 'Assurance casse & vol',
    monthlyPrice: 8,
    description: 'Roulez l\'esprit tranquille sans franchise exubérante',
  },
];
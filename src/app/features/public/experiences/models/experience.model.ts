export interface Experience {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviewsCount: number;
  duration: string; // e.g., '4 horas', '8 horas'
  price: number;
  imageUrl: string;
  imageAlt: string;
  badges?: string[]; // e.g., ['Confirmação Imediata']
}

export interface ExperienceFilter {
  priceMin?: number;
  priceMax?: number;
  durations?: string[]; // e.g., ['Meio Período', 'Dia Inteiro', 'Multi-dias']
  activityLevels?: string[]; // e.g., ['Leve', 'Moderado', 'Intenso']
  locationQuery?: string;
  searchTerm?: string;
}

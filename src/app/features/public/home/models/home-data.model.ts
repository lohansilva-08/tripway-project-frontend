export interface HomeData {
  categories: Category[];
  expeditions: Expedition[];
  testimonials: Testimonial[];
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  imageAlt: string;
}

export interface Expedition {
  id: string;
  title: string;
  badge: string;
  rating: number;
  durationDays: number;
  maxPax: number;
  price: number;
  imageUrl: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  text: string;
  authorName: string;
  authorLocation: string;
  authorImageUrl: string;
  authorImageAlt: string;
}
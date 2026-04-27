import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Experience, ExperienceFilter } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceMockService {
  private mockExperiences: Experience[] = [
    {
      id: '1',
      title: 'Expedição Noturna: Focagem de Jacarés e Sons da Selva',
      location: 'Rio Negro, AM',
      rating: 4.9,
      reviewsCount: 128,
      duration: '4 horas',
      price: 380,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ8AlfEksFCLi49YziLXMyRfq7-rK8m5PPzMsHLEWsL9jXpabU1IB7Hh5QZ5dQo71My3DSAJ7qFXgf5aCiJIKiJ16UdXCScSHy8L-7QuvDwmQEeLyOj1LWlkjuatnryoIfz7i4cXesIDewFmwBrdzLgyFUndF0hXvhPs7oN00RzqAKmiKD_rGde-1mUn2eCFHjQTmREFckQevjukD5tff0C-kb4Sf25Hq-6XwQFkfE18GJNi5pEpzboA4XCNZigQc6uq63QOO3PTg',
      imageAlt: 'wooden canoe on a calm river in the amazon reflecting orange and purple sunset sky colors',
      badges: ['Confirmação Imediata']
    },
    {
      id: '2',
      title: 'Imersão Cultural Dessana: Rituais e Gastronomia',
      location: 'Comunidade Dessana',
      rating: 5.0,
      reviewsCount: 84,
      duration: '8 horas',
      price: 550,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKFdXb_hgALWXrjH3czumd82UAFsbMQRWFCDJMt-W76gaRA_Dkyxb3aR1M0cUTpJsmwCWBKFYmzfAfrFt39DO7kkQ5rPLc3bvqYOqIVQimjlJFkwneHEh9NGaJlPkE3i-FioEFlH2YTcPot4zWWabZUojZMoJ-DxtCvq6MXpj-QmxSyQUJEai2Z_qy_tOFoCMNUiEOmnL77eo23iTHtYegzxceXjiPSjtfJ-eEEz2aQ6If4Pz-9xOUpB_FPBLwo5szXncMgZeEG7Y',
      imageAlt: 'group of indigenous people in traditional attire welcoming visitors in a lush green jungle clearing',
      badges: ['Cancelamento Flexível']
    },
    {
      id: '3',
      title: 'Voo Panorâmico sobre o Arquipélago de Anavilhanas',
      location: 'Novo Airão, AM',
      rating: 4.8,
      reviewsCount: 42,
      duration: '1 hora',
      price: 1200,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBd_drODEJYw_UDwXLw3YsVdkQZx1jeJBwCc4gg2phvql2AkIiVs19myN1-9WOOM1SMQb3bAeB9bDzy0qsoVPkq6wfzOUqESXuRVZgD9ivXlpNz-DvP1qLu2GqrvRmLNS9CWshOD90G9OU56U6-Tvd_SSJFfwIiTIvZz689-5gy82Hv7LH54XSq2g_t6yDjIx-v2EebDSBJi1ZvFYgtAvAXs7zgPDI1E0dO15NQdBKy2EzJGewZseQY04kYO1xS_wvTk1sFFWRXfL4',
      imageAlt: 'aerial view of multiple small islands in a river forming a labyrinth-like archipelago surrounded by forest',
      badges: ['Experiência VIP']
    },
    {
      id: '4',
      title: 'Encontro com os Botos Cor-de-Rosa e Pesca Esportiva',
      location: 'Recanto do Boto',
      rating: 4.7,
      reviewsCount: 210,
      duration: '6 horas',
      price: 290,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPcB9EGPgHe1kfNOl_gwwyMA3mlOczgaRuNqkVVlZvzvvqaZQUVx2PheOxsNoq52s_8-YJAIS-FxRtCp_X3rDdrekrGP_jJtX-JDFPWpF4o3YBWb_Tws8QPIxl3tLBUg9Inv_1XBIe01d7oWbogS4XBIZZG64FmMup9qhoDQEsjhMSAQ3IKTW9GrK8eqqsKa6qqCVw4Q6JoZ6kdBQ9dLXWKbOBpOVvs4O_y3rnCTjW0AQTuVKfgMsP4c92jbp_M54tVhazjNi7ixU',
      imageAlt: 'playful pink river dolphin surfacing in dark fresh water with jungle trees in the background',
      badges: ['Eco-Friendly']
    }
  ];

  constructor() { }

  getExperiences(): Observable<Experience[]> {
    // Simulate network delay
    return of(this.mockExperiences).pipe(delay(800));
  }

  filterExperiences(filters: ExperienceFilter): Observable<Experience[]> {
    let filtered = this.mockExperiences;

    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(exp =>
        exp.title.toLowerCase().includes(term) ||
        exp.location.toLowerCase().includes(term)
      );
    }

    if (filters.locationQuery) {
      const term = filters.locationQuery.toLowerCase();
      filtered = filtered.filter(exp => exp.location.toLowerCase().includes(term));
    }

    if (filters.priceMin !== undefined) {
      filtered = filtered.filter(exp => exp.price >= filters.priceMin!);
    }

    if (filters.priceMax !== undefined) {
      filtered = filtered.filter(exp => exp.price <= filters.priceMax!);
    }

    // Simplified duration and activity filtering as they might need complex mapping to 'duration' string
    // In a real app we would map 'Meio Período' to '<= 4 horas', etc.
    // For now we just implement basic mock filtering

    return of(filtered).pipe(delay(500));
  }
}

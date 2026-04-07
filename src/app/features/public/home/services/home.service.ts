import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HomeData } from '../models/home-data.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  getHomeData(): Observable<HomeData> {
    return this.http.get<HomeData>(`${environment.apiUrl}/public/home`).pipe(
      catchError(() => {
        console.warn('Backend indisponível, retornando dados mockados para a Home.');
        return of(this.getMockHomeData());
      })
    );
  }

  private getMockHomeData(): HomeData {
    return {
      categories: [
        {
          id: '1',
          name: 'Expedições',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAgc1qlyHnIH6jrVN94PODbyFHSWAKnbXw5tTHaa73zuJH9iXOKAb2lNiOEJvM6CzAztEm4488P2SkTtY8AL5JI-8NaFsbm4PIY69rCrFxo6KTYSJiSJQubHU2DOsd5b_sj6-ZCa6HRuu_F8D6pGkVEkbIc8YSIAeWfp0EzobB1Ww1_XWxBjsnio9oO1NW1r55-_Okvrlo5Lp8mdkp5xuLHh-Ks9UFEr7d5isOwUn9P_NMSvdaRp11twvxHtdIw4RQtG4cbpPu3MI',
          imageAlt: 'Caminho denso na selva amazônica'
        },
        {
          id: '2',
          name: 'Passeios de Rio',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9cgop2iBuWlQsnL9JSu_FTBcjCZpJ2i-XlzRN_D6S3fELBF8h-PSuZ0aUIqJ_TqYHoTCjVvjxg0-QJ0GaOr6yL0AXESQ58ScvraK4P922ZUnT3ZB4AuRojkChzyTmSY72HYlxKiq89CmpO3rsuvCrudsIlT3gCwSqq9lyodbqS85rxmeP9cYYbGIka8Oe0pEAeWG8OoXTgRMZFCVX9kQR74ay_UKYQXKIv0EfME5hiuKtkhq3j-n-OT48lmblzH95LpI82a8mWiw',
          imageAlt: 'Rio Amazonas ao entardecer'
        },
        {
          id: '3',
          name: 'Lodges',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoNMiTM5-I-pfssRVwfaDRndbn7dY9C3le4rrqXX8P0tWF8-MC5MR1PO0Nj4VRu0an3scKYIKwEwbcc_lj_INa3-LO6A7MDXNqdwr37YrzL1lJniZ5mZrSKeLwPbFbYFpJPqkVxITvB9aN1DxdXJx2Cb7rtNuTILajukC9RJyslK8LKV7KAx_5SUAacc0ZBgTJx2KUn5W87_Fz2hAJi9l4LK4n_Q1gj7Mwr5TKHe4AgSP-zCKqTdj700sPwnFBHLShavcVXNEwaHs',
          imageAlt: 'Eco-lodge sustentável na floresta'
        },
        {
          id: '4',
          name: 'Cultura',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEuWRJhqhxNTVTzkPuzDWvwLDJam2YvIqd9FmmKx20XaNgm6-7Md_GWXPX2_0AN9n7RNek38m_RrqzpTEoqaZDhGViDRswdwF32gNDmoaeQTjG1FhQBuqoyR4gRBa0jSOVJ7JS36E8EXQjgIOyrq5TY3_3_yeewqfZnHxooQ0cH5f1cabrscunG4AcYz0aNFjoqvcP7fR4xEMXv8CZcv_YktiV-vm76FBdGFXYalkETxkp7kMJYNdIUK65vcTYoR2niFdZuH2PyEA',
          imageAlt: 'Artesanato indígena amazônico'
        }
      ],
      expeditions: [
        {
          id: '1',
          title: 'Arquipélago de Anavilhanas',
          badge: 'Premium',
          rating: 4.9,
          durationDays: 5,
          maxPax: 8,
          price: 4850,
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgm87GRsyJ0YcBUCFQXXsx-atWvZ9GxIhOjuA5LctqXGIl3N7e0IATqnHH7yDZLpUHJoZxaC0_t0CLPYZBrGJvmLPPb3yLJQgT3t2SV-DP4G-h2HECuIXz0wYnn4NKVYLxMMvm2nTsO47eUBs09_qFrqBG7LE1JIxqO7nPwxkD7TFal3-BMu9QhuE1rMyEplKid0aw4ClluTg1el0x99Y3pmvShJGxT0cHFoj8DOL-x49Kw-eN8s1tyIeEJcmfGiRC1a828TfesN4',
          imageAlt: 'Vista aérea do rio sinuoso na floresta'
        },
        {
          id: '2',
          title: 'Imersão Juma Lodge',
          badge: 'Aventura',
          rating: 4.8,
          durationDays: 4,
          maxPax: 12,
          price: 3200,
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWPFga6s0VOkF0mV9Sj2BxoP2TWYn3Zp_tZLLz50dIT66NK0AOiq9iz39zh2IWlOTpzfO36_Z_cY6lgBEpipVEBOVntgcTWpRky8ciIZjI_PostsLLWG6ztd7DWTN7mMSRo0VAu3jx93dKhj8_CvuwQAJzoRbupJ9kbb5It9INz-Qmao9RSLv7mBHnd9-ScQCuuE2qf1tnSzf_qIaeJZvv7UgVJp4jN_Kp915QPLbWyI0PD4yO71AhYsT3kw1UqJRgVpirIgntze8',
          imageAlt: 'Arara colorida na floresta'
        },
        {
          id: '3',
          title: 'Encontro das Águas',
          badge: 'Cultura',
          rating: 5.0,
          durationDays: 1,
          maxPax: 20,
          price: 450,
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC77XAvb7m7a2c4ocdq2GdGD7VqSo46xG-93DK0rxYe0GiGGEk0YbvOsGFdCiZUSLe_dxOMvGuWaleElyTxd_PhaupG5dLnhPN-jPzTII4IqmW3LN7rjC8t18cprWncqIX8m7FRlDLzAll-I8e1-5r0vv9MxGVnS2YK9gyEB46K4YaOxuXMP0g-4QmBhtx9LEURVjRtKgxN1aMzxH5CdVqIiDm6G-Cu59_06KVQU9zFZJLR_VC2nXuBE9RVlhfczLXXroPULEVQsjc',
          imageAlt: 'Amanhecer dourado na paisagem amazônica'
        }
      ],
      testimonials: []
    };
  }
}

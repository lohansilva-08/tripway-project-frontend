import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HomeData } from '../models/home-data.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  getHomeData(): Observable<HomeData> {
    return this.http.get<HomeData>(`${environment.apiUrl}/public/home`);
  }
}

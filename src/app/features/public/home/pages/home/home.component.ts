import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeData } from '../../models/home-data.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeData$!: Observable<HomeData>;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeData$ = this.homeService.getHomeData();
  }
}

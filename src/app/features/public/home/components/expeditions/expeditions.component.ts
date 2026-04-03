import { Component, Input } from '@angular/core';
import { Expedition } from '../../models/home-data.model';

@Component({
  selector: 'app-expeditions',
  templateUrl: './expeditions.component.html',
  styleUrls: ['./expeditions.component.scss']
})
export class ExpeditionsComponent {
  @Input() expeditions: Expedition[] = [];
}

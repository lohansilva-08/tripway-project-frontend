import { Component, EventEmitter, Output } from '@angular/core';
import { ExperienceFilter } from '../../models/experience.model';

@Component({
  selector: 'app-experience-filter',
  templateUrl: './experience-filter.component.html',
  styleUrls: ['./experience-filter.component.scss']
})
export class ExperienceFilterComponent {
  @Output() filterChange = new EventEmitter<ExperienceFilter>();

  currentFilter: ExperienceFilter = {};

  onLocationChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.currentFilter.locationQuery = value;
    this.emitFilter();
  }

  onPriceChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    // Assume input is max price mapping from 200 to 5000+
    this.currentFilter.priceMax = Number(value);
    this.emitFilter();
  }

  // Simply emitting for now to simulate filtering events
  emitFilter() {
    this.filterChange.emit(this.currentFilter);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { ExperienceMockService } from '../../services/experience-mock.service';
import { Experience, ExperienceFilter } from '../../models/experience.model';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.scss']
})
export class ExperiencesListComponent implements OnInit, OnDestroy {
  experiences: Experience[] = [];
  isLoading = false;
  currentFilters: ExperienceFilter = {};
  private destroy$ = new Subject<void>();

  constructor(private experienceMockService: ExperienceMockService) {}

  ngOnInit(): void {
    this.loadExperiences();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadExperiences() {
    this.isLoading = true;
    this.experienceMockService.filterExperiences(this.currentFilters).pipe(
      takeUntil(this.destroy$),
      finalize(() => this.isLoading = false)
    ).subscribe(data => {
      this.experiences = data;
    });
  }

  onFilterChange(filters: ExperienceFilter) {
    this.currentFilters = { ...this.currentFilters, ...filters };
    this.loadExperiences();
  }

  loadMore() {
    // Mock load more action
    console.log('Load more clicked');
  }
}

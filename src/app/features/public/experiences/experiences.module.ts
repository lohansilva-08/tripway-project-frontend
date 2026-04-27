import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { ExperienceFilterComponent } from './components/experience-filter/experience-filter.component';
import { ExperiencesListComponent } from './pages/experiences-list/experiences-list.component';


@NgModule({
  declarations: [
    ExperienceCardComponent,
    ExperienceFilterComponent,
    ExperiencesListComponent
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule,
    SharedModule
  ]
})
export class ExperiencesModule { }

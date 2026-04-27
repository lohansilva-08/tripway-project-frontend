import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperiencesListComponent } from './pages/experiences-list/experiences-list.component';

const routes: Routes = [
  { path: '', component: ExperiencesListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }

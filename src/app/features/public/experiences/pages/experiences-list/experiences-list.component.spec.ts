import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ExperiencesListComponent } from './experiences-list.component';

describe('ExperiencesListComponent', () => {
  let component: ExperiencesListComponent;
  let fixture: ComponentFixture<ExperiencesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesListComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

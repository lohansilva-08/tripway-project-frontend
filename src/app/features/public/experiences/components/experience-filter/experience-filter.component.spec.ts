import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceFilterComponent } from './experience-filter.component';

describe('ExperienceFilterComponent', () => {
  let component: ExperienceFilterComponent;
  let fixture: ComponentFixture<ExperienceFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCardComponent } from './experience-card.component';

describe('ExperienceCardComponent', () => {
  let component: ExperienceCardComponent;
  let fixture: ComponentFixture<ExperienceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceCardComponent);
    component = fixture.componentInstance;
    component.experience = {
      id: '1',
      title: 'Test',
      location: 'Test',
      rating: 5,
      reviewsCount: 1,
      duration: '1h',
      price: 100,
      imageUrl: '',
      imageAlt: 'test'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

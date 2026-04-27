import { TestBed } from '@angular/core/testing';

import { ExperienceMockService } from './experience-mock.service';

describe('ExperienceMockService', () => {
  let service: ExperienceMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

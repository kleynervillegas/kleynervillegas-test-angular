import { TestBed } from '@angular/core/testing';

import { TeacherSectionService } from './teacher-section.service';

describe('TeacherSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherSectionService = TestBed.get(TeacherSectionService);
    expect(service).toBeTruthy();
  });
});

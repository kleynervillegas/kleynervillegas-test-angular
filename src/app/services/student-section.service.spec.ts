import { TestBed } from '@angular/core/testing';

import { StudentSectionService } from './student-section.service';

describe('StudentSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentSectionService = TestBed.get(StudentSectionService);
    expect(service).toBeTruthy();
  });
});

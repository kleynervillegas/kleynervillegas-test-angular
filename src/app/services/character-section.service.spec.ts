import { TestBed } from '@angular/core/testing';

import { CharacterSectionService } from './character-section.service';

describe('CharacterSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterSectionService = TestBed.get(CharacterSectionService);
    expect(service).toBeTruthy();
  });
});

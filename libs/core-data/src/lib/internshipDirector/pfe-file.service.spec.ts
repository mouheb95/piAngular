import { TestBed } from '@angular/core/testing';

import { PfeFileService } from './pfe-file.service';

describe('PfeFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PfeFileService = TestBed.get(PfeFileService);
    expect(service).toBeTruthy();
  });
});

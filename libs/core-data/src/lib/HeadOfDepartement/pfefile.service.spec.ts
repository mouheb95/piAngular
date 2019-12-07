import { TestBed } from '@angular/core/testing';

import { PfefileService } from './pfefile.service';

describe('PfefileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PfefileService = TestBed.get(PfefileService);
    expect(service).toBeTruthy();
  });
});
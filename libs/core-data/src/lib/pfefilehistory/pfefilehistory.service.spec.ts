import { TestBed } from '@angular/core/testing';

import { PfefilehistoryService } from './pfefilehistory.service';

describe('PfefilehistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PfefilehistoryService = TestBed.get(PfefilehistoryService);
    expect(service).toBeTruthy();
  });
});

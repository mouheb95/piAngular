import { TestBed } from '@angular/core/testing';

import { PfeFileCancellingService } from './pfe-file-cancelling.service';

describe('PfeFileCancellingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PfeFileCancellingService = TestBed.get(PfeFileCancellingService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { teacherfileService } from './teacherfile.service';

describe('teacherfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: teacherfileService = TestBed.get(teacherfileService);
    expect(service).toBeTruthy();
  });
});

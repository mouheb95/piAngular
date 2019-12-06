import { async, TestBed } from '@angular/core/testing';
import { UiSignUpModule } from './ui-sign-up.module';

describe('UiSignUpModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiSignUpModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiSignUpModule).toBeDefined();
  });
});

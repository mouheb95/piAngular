import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfeFileComponent } from './pfe-file.component';

describe('PfeFileComponent', () => {
  let component: PfeFileComponent;
  let fixture: ComponentFixture<PfeFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfeFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfeFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

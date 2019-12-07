import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfDepartementComponent } from './head-of-departement.component';

describe('HeadOfDepartementComponent', () => {
  let component: HeadOfDepartementComponent;
  let fixture: ComponentFixture<HeadOfDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadOfDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadOfDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

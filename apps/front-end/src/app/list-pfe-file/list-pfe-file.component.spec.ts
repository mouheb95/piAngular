import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPfeFileComponent } from './list-pfe-file.component';

describe('ListPfeFileComponent', () => {
  let component: ListPfeFileComponent;
  let fixture: ComponentFixture<ListPfeFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPfeFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPfeFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

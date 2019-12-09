import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFileComponent } from './teacher-file.component';

describe('TeacherFileComponent', () => {
  let component: TeacherFileComponent;
  let fixture: ComponentFixture<TeacherFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

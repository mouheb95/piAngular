import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFileViewComponent } from './teacher-file-view.component';

describe('TeacherFileViewComponent', () => {
  let component: TeacherFileViewComponent;
  let fixture: ComponentFixture<TeacherFileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherFileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherFileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

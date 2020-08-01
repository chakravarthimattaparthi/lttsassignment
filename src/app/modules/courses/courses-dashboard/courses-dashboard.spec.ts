import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesDashboardComponent } from '../courses-dashboard/courses-dashboard.component';
import { By } from "@angular/platform-browser";

describe('CoursesComponent', () => {
  let component: CoursesDashboardComponent;
  let fixture: ComponentFixture<CoursesDashboardComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDashboardComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CoursesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

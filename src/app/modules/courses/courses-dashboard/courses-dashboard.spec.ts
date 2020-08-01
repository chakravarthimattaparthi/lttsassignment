import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesDashboardComponent } from '../courses-dashboard/courses-dashboard.component';
import { By } from "@angular/platform-browser";

describe('CoursesComponent', () => {
  let component: CoursesDashboardComponent;
  let fixture: ComponentFixture<CoursesDashboardComponent>;
  let coursesList =  [{
    courseTitle: "PVS800-578",
    courseDes: "Expert Hands On Training",
    coursePrice: 143,
    courseRating: 3,
    courseDuration: "23 July 2020 - 30 July 2020",
    courseImg: "course1.jpg"
  },
  {
    courseTitle: "PVS800-578",
    courseDes: "Expert Hands On Training",
    coursePrice: 210,
    courseRating: 2,
    courseDuration: "10 July 2020 - 15 July 2020",
    courseImg: "course2.jpg"
  },
  {
    courseTitle: "PVS800-578",
    courseDes: "Expert Hands On Training",
    coursePrice: 150,
    courseRating: 4,
    courseDuration: "20 July 2020 - 30 July 2020",
    courseImg: "course3.jpg"
  },
  {
    courseTitle: "PVS800-578",
    courseDes: "Expert Hands On Training",
    coursePrice: 222,
    courseRating: 5,
    courseDuration: "15 July 2020 - 20 July 2020",
    courseImg: "course4.jpg"
  }];
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
  it('first course values',()=>{
    const fixture = TestBed.createComponent(CoursesDashboardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const courses = compiled.querySelector("app-courses")
    const secondRowCells = courses.querySelectorAll(
        'h6'
      );
  })
});

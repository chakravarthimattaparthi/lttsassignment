import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { CoursesDashboardComponent } from '../courses-dashboard/courses-dashboard.component';
import { By } from "@angular/platform-browser";

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let testCoursesList =  [{
    courseTitle: "PVS800-578",
    courseDes: "Expert Hands On Training",
    coursePrice: 123,
    courseRating: 3,
    courseDuration: "23 July 2020 - 30 July 2020",
  }];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDashboardComponent, CoursesComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    component.coursesList = testCoursesList;
    fixture .detectChanges();
})

  it('should create', () => {
    component.coursesList = testCoursesList;
    expect(component).toBeTruthy();
  });
  it('Check For First Course Details',()=>{
    const fixture = TestBed.createComponent(CoursesComponent);
    const courseTile = component.coursesList[0].courseTitle;
    const courseDes = component.coursesList[0].courseDes;
    const coursePrice = component.coursesList[0].coursePrice;
    const courseRating = component.coursesList[0].courseRating;
    const courseDuration = component.coursesList[0].courseDuration;
    const courseImg = component.coursesList[0].courseImg;
    fixture.detectChanges();
    expect(courseTile).toBe(testCoursesList[0].courseTitle);
    expect(courseDes).toBe(testCoursesList[0].courseDes);
    expect(coursePrice).toBe(testCoursesList[0].coursePrice)
    expect(courseRating).toBe(testCoursesList[0].courseRating);
    expect(courseDuration).toBe(testCoursesList[0].courseDuration);

  })
});

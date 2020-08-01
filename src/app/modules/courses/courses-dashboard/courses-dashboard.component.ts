import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-dashboard',
  templateUrl: './courses-dashboard.component.html',
  styleUrls: ['./courses-dashboard.component.scss']
})
export class CoursesDashboardComponent implements OnInit {
  public nearByCourses = [{
    courseTitle: "PVS800-192",
    courseDes: "Expert Hands On Training",
    courseFullDes: "Course 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    coursePrice: 143,
    courseRating: 3,
    courseDuration: "23 July 2020 - 30 July 2020",
    courseImg: "course1.jpg"
  },
  {
    courseTitle: "PVS800-485",
    courseDes: "Expert Hands On Training",
    courseFullDes: "Course 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    coursePrice: 210,
    courseRating: 2,
    courseDuration: "10 July 2020 - 15 July 2020",
    courseImg: "course2.jpg"
  },
  {
    courseTitle: "PVS800-284",
    courseDes: "Expert Hands On Training",
    courseFullDes: "Course 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    coursePrice: 150,
    courseRating: 4,
    courseDuration: "20 July 2020 - 30 July 2020",
    courseImg: "course3.jpg"
  },
  {
    courseTitle: "PVS800-058",
    courseDes: "Expert Hands On Training",
    courseFullDes: "Course 4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    coursePrice: 222,
    courseRating: 5,
    courseDuration: "15 July 2020 - 20 July 2020",
    courseImg: "course4.jpg"
  }];
  public relativeCourses = [{
    courseTitle: "PVS800-475",
    courseDes: "Expert Hands On Training",
    courseFullDes: "Course 5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    coursePrice: 310,
    courseRating: 3,
    courseDuration: "05 July 2020 - 10 July 2020",
    courseImg: "course5.jpg"
  },
  {
    courseTitle: "PVS800-028",
    courseDes: "Expert Hands On Training",
    courseFullDes: "Course 6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    coursePrice: 317,
    courseRating: 4,
    courseDuration: "23 July 2020 - 29 July 2020",
    courseImg: "course6.jpg"
  },
  {
    courseTitle: "PVS800-231",
    courseDes: "Expert Hands On Training",
    courseFullDes: "Course 7 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    coursePrice: 242,
    courseRating: 4,
    courseDuration: "17 July 2020 - 25 July 2020",
    courseImg: "course7.jpg"
  },
  {
    courseTitle: "PVS800-281",
    courseDes: "Expert Hands On Training",
    courseFullDes: "Course 8 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    coursePrice: 220,
    courseRating: 5,
    courseDuration: "12 July 2020 - 20 July 2020",
    courseImg: "course8.jpg"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}

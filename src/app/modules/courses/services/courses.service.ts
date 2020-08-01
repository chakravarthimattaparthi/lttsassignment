import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courseList;
  constructor() { 
   // this.coursesList =new BehaviorSubject<any>(null);
  }
  setCousesList(coursesList:any) {
    this.courseList =  coursesList
  }
  getCoursesList(): any {
    console.log(this.courseList)
    return this.courseList;
  }
}

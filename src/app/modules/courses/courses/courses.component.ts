import { Component, OnInit,Input } from '@angular/core';
import { DialogManagerService } from '@abb/abb-common-ux-angular';
import { CourseDetailModalComponent } from '../course-detail-modal/course-detail-modal.component';
import { CoursesService } from "../services/courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Input() coursesList: any;
  constructor(private dilogService:DialogManagerService,private courserService: CoursesService) { }

  ngOnInit(): void {
     
  }
  showMore(index) {
    this.courserService.setCousesList(this.coursesList[index]);
    console.log(this.coursesList)
    this.dilogService.showDialog(CourseDetailModalComponent,this.getDilogOptions())
  }
  getDilogOptions() {
    const options = {
      className: '',
      closeOnEscape: true,
      closeOnLostFocus: true,
      dimBackground: true,
      hideBackground: false,
      data: this.coursesList
    };
    return options;
  }
}

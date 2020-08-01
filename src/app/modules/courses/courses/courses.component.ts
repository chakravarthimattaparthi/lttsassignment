import { Component, OnInit,Input } from '@angular/core';
import { CourseDetailModalComponent } from '../course-detail-modal/course-detail-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Input() coursesList: any;
  public user = {
    name: 'Izzat Nadiri',
    age: 26
    }
  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
     
  }
  showMore(index) {
    const modalRef = this.modalService.open(CourseDetailModalComponent); 
    modalRef.componentInstance.course = this.coursesList[index];
  }
}

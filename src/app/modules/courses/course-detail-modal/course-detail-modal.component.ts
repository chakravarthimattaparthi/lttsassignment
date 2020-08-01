import { Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'app-course-detail-modal',
  templateUrl: './course-detail-modal.component.html',
  styleUrls: ['./course-detail-modal.component.scss']
})
export class CourseDetailModalComponent implements OnInit {
  @Input() public course;
  constructor() { }

  ngOnInit(): void {
    console.log(this.course)
  }

}

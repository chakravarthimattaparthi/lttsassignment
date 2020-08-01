import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DialogManagerService } from '@abb/abb-common-ux-angular';
@Component({
  selector: 'app-course-detail-modal',
  templateUrl: './course-detail-modal.component.html',
  styleUrls: ['./course-detail-modal.component.scss']
})
export class CourseDetailModalComponent implements OnInit {
  @ViewChild('dialogCreateAddon') coursesDes
  constructor(private dilogService: DialogManagerService) { }

  ngOnInit(): void {
    console.log("test",this.coursesDes)
  }

}

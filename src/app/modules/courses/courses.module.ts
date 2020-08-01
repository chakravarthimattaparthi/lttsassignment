import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule} from './courses.routing.module';
import { CoursesDashboardComponent, } from './courses-dashboard/courses-dashboard.component';
import { CoursesComponent} from './courses/courses.component';
import { CourseDetailModalComponent } from './course-detail-modal/course-detail-modal.component';
import { CoursesService } from './services/courses.service';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {
  AbbCommonUxButtonModule,
  AbbCommonUxDialogModule

} from '@abb/abb-common-ux-angular';
@NgModule({
  declarations: [CoursesDashboardComponent,CoursesComponent,CourseDetailModalComponent],
  imports: [
    CommonModule,
    AbbCommonUxButtonModule,
    AbbCommonUxDialogModule,
    CoursesRoutingModule,
    NgbModule
  ],
  providers:[],
  entryComponents: [CoursesComponent,CourseDetailModalComponent]
})
export class CoursesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule} from './courses.routing.module';
import { CoursesDashboardComponent } from './courses-dashboard/courses-dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailModalComponent } from './course-detail-modal/course-detail-modal.component';
import { CoursesService } from './services/courses.service'
import {
  AbbCommonUxButtonModule,

} from '@abb/abb-common-ux-angular';
import { ModalDialogModule } from 'ngx-modal-dialog';
@NgModule({
  declarations: [CoursesDashboardComponent,CoursesComponent],
  imports: [
    CommonModule,
    AbbCommonUxButtonModule,
    CoursesRoutingModule,
    ModalDialogModule.forRoot()
  ],
  providers:[CoursesService],
  entryComponents: [CourseDetailModalComponent]
})
export class CoursesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesDashboardComponent } from './courses-dashboard/courses-dashboard.component'

const routes: Routes = [
  {
    path: '',
    component: CoursesDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
    constructor() {
        console.log("I am here")
    }
}

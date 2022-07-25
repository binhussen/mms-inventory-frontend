import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import hrmPage from './hrm.page';
import { PageComponent } from '../page/page.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'',component:PageComponent, data: hrmPage},
    ])
  ]
})
export class HrmModule { }

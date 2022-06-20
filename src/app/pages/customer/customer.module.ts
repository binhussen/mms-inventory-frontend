import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MmsCommonModule } from 'src/app/mms-common/mms-common.module';
import { RouterModule } from '@angular/router';
import { PageComponent } from '../page/page.component';
import customerPage from './customer.page';
import { PageModule } from '../page/page.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MmsCommonModule,
    PageModule,
    RouterModule.forChild([
      { path:'',component:PageComponent, data: customerPage}
    ])
    
  ]
})
export class CustomerModule { }

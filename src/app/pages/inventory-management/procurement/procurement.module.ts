import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MmsCommonModule } from 'src/app/mms-common/mms-common.module';
import { RouterModule } from '@angular/router';
import { PageComponent } from '../../page/page.component';
import procurementPage from './procurement.page';
import { PageDetailComponent } from '../../page/page-detail/page-detail.component';
import procurementDetailPage from './procurement-datail.page';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MmsCommonModule,
    RouterModule.forChild([
      { path: '', component: PageComponent, data: procurementPage }, // page
      { path: ':id', component: PageDetailComponent, data: procurementDetailPage }, // page detail
    ]),
  ]
})
export class ProcurementModule { }

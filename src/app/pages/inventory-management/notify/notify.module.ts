import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MmsCommonModule } from 'src/app/mms-common/mms-common.module';
import { RouterModule } from '@angular/router';
import { PageComponent } from '../../page/page.component';
import inventoryNotifyPage from './notifyinventory.page';
import { PageDetailComponent } from '../../page/page-detail/page-detail.component';
import notifyDetailPage from '../../weapon/notify/notify-detail.page';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MmsCommonModule,
    RouterModule.forChild([
      { path: '', component: PageComponent, data: inventoryNotifyPage }, // page
      { path: ':id', component: PageDetailComponent, data: notifyDetailPage }, // page detail
    ])
  ]
})
export class NotifyModule { }

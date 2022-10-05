import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MmsCommonModule } from 'src/app/mms-common/mms-common.module';
import { PageDetailComponent } from '../../page/page-detail/page-detail.component';
import { PageComponent } from '../../page/page.component';
import { TabbedPageComponent } from '../../page/tabbed-page/tabbed-page.component';
import inventoryPageTabs from '../../weapon/inventory/inventory.tabs';
import inventoryRequestPage from './inventoryRequest.page';
import inventoryRequestDetailPage from './inventoryDetailRequest.page';
import inventoryRequestPageTabs from './inventoryRequest.tabs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MmsCommonModule,
    RouterModule.forChild([
      {
        path: '', component: TabbedPageComponent,
        data: inventoryRequestPageTabs,
        children:[
          { path:'',redirectTo:'inventory-request', pathMatch:'full' },
          { path:'inventory-request', component:PageComponent, data:inventoryRequestPage },
          { path:'inventory-request/:id', component:PageDetailComponent, data:inventoryRequestDetailPage},

        ]
      },
    ])
  ]
})
export class RequestModule { }

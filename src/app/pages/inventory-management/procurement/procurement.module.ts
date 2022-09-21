import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MmsCommonModule } from 'src/app/mms-common/mms-common.module';
import { RouterModule } from '@angular/router';
import { PageComponent } from '../../page/page.component';
import procurementPage from './procurement.page';
import { PageDetailComponent } from '../../page/page-detail/page-detail.component';
import { TabbedPageComponent } from '../../page/tabbed-page/tabbed-page.component';
import procurementPageTabs from './procurement.tabs';
import procurementDetailPage from './procurement-datail.page';
import purchaseRequestPage from './purchase/purchase-request.page';
import purchaseRequestDetailPage from './purchase/purchase-request-detail.page';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MmsCommonModule,
    RouterModule.forChild([
      {
        path: '', component: TabbedPageComponent,
        data: procurementPageTabs,
        children:[
          { path:'',redirectTo:'procurement', pathMatch:'full' },
          { path:'procurement', component:PageComponent, data:procurementPage },
          { path:'procurement/:id', component:PageDetailComponent, data:procurementDetailPage},

          { path:'request-for-purchase', component:PageComponent, data:purchaseRequestPage },
          { path:'request-for-purchase/ :id', component:PageComponent, data:purchaseRequestDetailPage },

        ]
      },
    ])
  ]
})
export class ProcurementModule { }

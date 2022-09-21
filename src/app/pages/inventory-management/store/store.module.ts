import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageComponent } from '../../page/page.component';
import insertInventoryPage from './insert-inventory.page';
import insertInventoryDetailPage from './insert-inventory-detail.page';
import { TabbedPageComponent } from '../../page/tabbed-page/tabbed-page.component';
import inventoryStorePageTabs from './store-inventory.tabs';
import { PageDetailComponent } from '../../page/page-detail/page-detail.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: TabbedPageComponent,
        data: inventoryStorePageTabs,
        children:[
          { path:'',redirectTo:'inventory-store', pathMatch:'full' },
          { path:'inventory-store', component:PageComponent, data:insertInventoryPage },
          { path:'inventory-store/:id', component:PageDetailComponent, data:insertInventoryDetailPage}
        ]

      },
    ])
  ]
})
export class StoreModule { }

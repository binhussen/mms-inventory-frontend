import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageComponent } from '../../page/page.component';
import insertInventoryPage from './insert-inventory.page';
import insertInventoryDetailPage from './insert-inventory-detail.page';
import { TabbedPageComponent } from '../../page/tabbed-page/tabbed-page.component';
import inventoryStorePageTabs from './store-inventory.tabs';
import { PageDetailComponent } from '../../page/page-detail/page-detail.component';
import distributeInventoryPage from './distribute/distribute.page';
import allocationProgramPage from './allocation-program/allocation.page';



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
          { path:'inventory-store/:id', component:PageDetailComponent, data:insertInventoryDetailPage},
          { path:'distribute-inventory',component:PageComponent, data:distributeInventoryPage},

          { path: 'set-allocaton-program', component:PageComponent, data:allocationProgramPage}
        ]

      },
    ])
  ]
})
export class StoreModule { }

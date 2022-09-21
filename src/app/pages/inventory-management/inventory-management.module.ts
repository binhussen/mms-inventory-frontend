import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'procurements',
        loadChildren: () =>
          import('./procurement/procurement.module').then((m) => m.ProcurementModule),
      },
      {
        path: 'notify-inventory',
        loadChildren: () =>
          import('./notify/notify.module').then((m) => m.NotifyModule),
      },
      {
        path: 'inventory-store',
        loadChildren: () =>
          import('./store/store.module').then((m) => m.StoreModule),
      }
    ]),
  ],
})
export class InventoryManagementModule { }

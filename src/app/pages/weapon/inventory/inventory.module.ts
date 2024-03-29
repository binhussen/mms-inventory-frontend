import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MmsCommonModule } from 'src/app/mms-common/mms-common.module';
import { MatTabsModule } from '@angular/material/tabs';
import { PageModule } from '../../page/page.module';
import { TabbedPageComponent } from '../../page/tabbed-page/tabbed-page.component';
import { PageComponent } from '../../page/page.component';
import { PageDetailComponent } from '../../page/page-detail/page-detail.component';
import inventoryPageTabs from './inventory.tabs';
import insertWeaponPage from './insert-weapon.page';
import insertWeaponDetailPage from './insert-weapon-detail.page';
import viewWeaponPage from './pages/view-weapon.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    MmsCommonModule,
    PageModule,
    MatTabsModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: TabbedPageComponent,
        data: inventoryPageTabs,
        children: [
          { path: '', redirectTo: 'insert-weapon', pathMatch: 'full' },
          {
            path: 'insert-weapon',
            component: PageComponent,
            data: insertWeaponPage,
          },
          {
            path: 'insert-weapon/:id',
            component: PageDetailComponent,
            data: insertWeaponDetailPage,
          },
          {
            path: 'view-weapon-inventory',
            component: PageComponent,
            data: viewWeaponPage,
          },
          {
            path: 'distribute-weapon',
            loadChildren: () =>
              import('./distribute/distribute.module').then(
                (m) => m.DistributeModule
              ),
          },
          { path: 'distributee-weapon/:id', component: PageDetailComponent },
        ],
      },
    ]),
  ],
})
export class InventoryModule {}

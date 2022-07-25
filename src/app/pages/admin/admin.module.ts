import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MmsCommonModule } from '../../mms-common/mms-common.module';
import { AuthGuard } from 'src/app/Auths/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        //canActivate:[AuthGuard]
      },
      {
        path: 'hrms',
        loadChildren: () =>
          import('../hrm/hrm.module').then(
            (m) => m.HrmModule
          ),
         // canActivate: [AuthGuard]
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('../customer/customer.module').then(
            (m) => m.CustomerModule
          ),
         // canActivate: [AuthGuard]
      },
      {
        path:'user-menu',
        loadChildren: () =>
        import('../user-menu/user-menu.module').then((m) => m.UserMenuModule) ,
        //canActivate:[AuthGuard],
        
      },
      {
        path: 'weapon',
        loadChildren: () =>
          import('../weapon/weapon.module').then((m) => m.WeaponModule),
          //canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
         // canActivate: [AuthGuard]
      },
    ],
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MmsCommonModule],  
})
export class AdminModule {}

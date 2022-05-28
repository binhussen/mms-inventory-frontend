import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { HelpComponent } from './help/help.component';
import { RouterModule } from '@angular/router';
import { MmsCommonModule } from 'src/app/mms-common/mms-common.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ProfileComponent,SettingComponent,HelpComponent
  ],
  imports: [
    CommonModule,
    MmsCommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path:'profile', component:ProfileComponent
      },
      {
        path:'setting', component:SettingComponent
      },
      {
        path:'help', component:HelpComponent
      }
    ])
  ]
})
export class UserMenuModule { }

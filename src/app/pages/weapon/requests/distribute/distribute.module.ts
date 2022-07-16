import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DistributeTableComponent } from './distribute.table/distribute.table.component';
import { DistributeFormComponent } from './distribute.form/distribute.form.component';
import { HttpClientModule } from '@angular/common/http';
import { MmsCommonModule } from 'src/app/mms-common/mms-common.module';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [DistributeFormComponent, DistributeTableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MmsCommonModule,
    MatTableModule,
    CdkTableModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatToolbarModule,
    RouterModule.forChild([
      { path: '', component: DistributeTableComponent },
      { path: ':id', component: DistributeFormComponent },
    ]),
  ],
})
export class DistributeModule {}

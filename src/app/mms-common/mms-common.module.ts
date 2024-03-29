import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
import { SideNavComponent } from './molecules/side-nav/side-nav.component';
import { SideNavItemComponent } from './molecules/side-nav-item/side-nav-item.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LayoutComponent } from './templates/layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardContent, MatCardHeader, MatCardModule, MatCardSubtitle } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserMenuComponent } from './molecules/user-menu/user-menu.component';
import { FormComponent } from './organisms/form/form.component';
import { LoadingButtonComponent } from './atoms/loading-button/loading-button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { TableComponent } from './organisms/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { FormDialogComponent } from './organisms/form-dialog/form-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { FileInputComponent } from './atoms/file-input/file-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DndDirective } from './atoms/file-input/dnd.directive';
import { BasicComponent } from './templates/basic/basic.component';
import { RouterModule } from '@angular/router';
import { TableService } from './organisms/table/table.service';
import { TranslateModule } from '@ngx-translate/core';
import { SideNavHeaderComponent } from './molecules/side-nav-header/side-nav-header.component';
import { MatSnackBarConfig, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const matSnackbarDefaultConfig: MatSnackBarConfig = {
  verticalPosition: 'top',
  horizontalPosition: 'right',
  duration: 4000,
};

@NgModule({
  declarations: [
    SideNavComponent,
    SideNavItemComponent,
    LayoutComponent,
    UserMenuComponent,
    FormComponent,
    LoadingButtonComponent,
    TableComponent,
    FormDialogComponent,
    FileInputComponent,
    DndDirective,
    BasicComponent,
    SideNavHeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    PerfectScrollbarModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    CdkTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTabsModule,
    RouterModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: matSnackbarDefaultConfig,
    }
  ],
  exports: [
    LayoutComponent,
    FormComponent,
    LoadingButtonComponent,
    BasicComponent,
  ],
})
export class MmsCommonModule {}

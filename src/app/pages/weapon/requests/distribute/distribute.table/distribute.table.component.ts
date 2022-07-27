import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { AppState } from 'src/app/store/models/app.state';
import { DistributeFormComponent } from '../distribute.form/distribute.form.component';
interface MatTableColumn {
  columnDef: string;
  header: string;
  cell: (element: any) => string;
}
@Component({
  selector: 'app-distribute.table',
  templateUrl: './distribute.table.component.html',
  styleUrls: ['./distribute.table.component.scss'],
})
export class DistributeTableComponent implements OnInit {
  tables: any = {
    requests: {
      title: 'List Of Approved Weapon Requests',
      dataSource: [],
      actions: [{ name: 'Distribute', type: 'create' }],
      columns: [],
      excludedColumns: ['id', 'requestWeaponApprovals', 'requestWeaponItems'],
      getDisplayedColumns: (columns: Array<MatTableColumn>) =>
        columns.map((c) => c.columnDef),
    },
    distributes: {},
  };
  constructor(
    private httpClient: HttpClient,
    private matDialog: MatDialog,
    private store$: Store<AppState>
  ) {}
  ngOnInit(): void {
    this.getApprovedRequests().subscribe((data) => {
      this.tables.requests.dataSource = data;
      this.tables.requests.columns = this.getColumns(
        data,
        this.tables.requests.excludedColumns
      );
    });
  }

  getApprovedRequests() {
    return this.httpClient.get<Array<any>>(
      'http://localhost:5000/api/approves'
    );
  }

  getColumns(
    data: Array<any>,
    excludedColumns: Array<string>
  ): Array<MatTableColumn> {
    // extract columns from data
    let columns = data?.length > 0 ? Object.keys(data[0]) : [];
    if (excludedColumns) {
      columns = columns.filter((c) => !excludedColumns.includes(c));
    }

    // add additional column for actions and position
    columns = ['No', ...columns, ' '];

    // Describe the columns for <mat-table>.
    const c = columns.map((column: any, index: number) => {
      return {
        columnDef: column,
        header: column.replace(/([^A-Z])([A-Z])/g, '$1 $2'),
        cell: (element: any) =>
          `${
            column === 'No'
              ? ''
              : element && element[column]
              ? element[column]
              : ``
          }`,
      };
    });
    return c;
  }

  async command(action: Action, row: any) {
    const dialogRef = this.matDialog.open(DistributeFormComponent, {
      width: '75%',
      maxWidth: '100vw',
      disableClose: true,
      data: {
        selectedRow: row,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}

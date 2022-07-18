import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TableService } from 'src/app/mms-common/organisms/table/table.service';
import tableActions from '../actions/table.actions';
import tempAction from '../actions/temp.action';
import { TableState } from '../models/table.state';

@Injectable()
export class TableEffect {
  $setTempState = createEffect(() =>
    this.actions$.pipe(
      ofType(tempAction.setTempState.type),
      switchMap((action: { value: Partial<TableState> }) =>
        this.tableService
          .fetchData(0, 999, action.value.links?.getPath ?? '')
          .pipe(
            map((response) =>
              tableActions.updateTableState({
                value: { data: response.data, totalItems: response.count },
              })
            )
          )
      )
    )
  );

  constructor(private actions$: Actions, private tableService: TableService) {}
}

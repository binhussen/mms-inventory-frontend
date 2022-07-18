import { createAction, props } from '@ngrx/store';
import { TempState } from '../models/temp.state';

const setTempState = createAction(
  '[Table] set temp state',
  props<{ value: Partial<TempState> }>()
);

const updateTempState = createAction(
  '[Table] update temp state',
  props<{ value: Partial<TempState> }>()
);

export default { setTempState, updateTempState };

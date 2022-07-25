import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}hrs`;
const actions: Array<Action> = [{ name: 'createNew.edit', type: 'edit' }];

const hrmTableState: TableState = {
  title:'List of HRM ',
  id: 'hrm table',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id', 'hrmId'],
  links: {
    getPath: dataSourceUrl,
    createPath: `${dataSourceUrl}`,
    updatePath: `${dataSourceUrl}/[id]`,
    deletePath: `${dataSourceUrl}/[id]`,
  },
  actions,
  path:"hrs",
  relations: [],
  childOf: {
    notifiesId: 0,
  },
};
export default hrmTableState;

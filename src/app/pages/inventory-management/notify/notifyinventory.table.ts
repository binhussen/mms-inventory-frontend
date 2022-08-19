import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}notifyheaders`;
const actions: Array<Action> = [
  { name: 'createNew.expand', type: 'expand', path: 'notifyheaders' },
  { name: 'createNew.edit', type: 'edit' },
];

const notifyInventoryTableState: TableState = {
  id: 'notify inventory table',
  title: 'List of new inventory that have been notified',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id'],
  links: {
    getPath: dataSourceUrl,
    createPath: `${dataSourceUrl}`,
    updatePath: `${dataSourceUrl}/[id]`,
    deletePath: `${dataSourceUrl}/[id]`,
  },
  actions,
}

export default notifyInventoryTableState;
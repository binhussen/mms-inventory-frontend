import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}notifyheaders`;
const actions: Array<Action> = [{ name: 'createNew.edit', type: 'edit' }];

const notifyItemsTableState: TableState = {
  id: 'notify items table',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id', 'notifiesId'],
  links: {
    getPath: dataSourceUrl,
    createPath: `${dataSourceUrl}`,
    updatePath: `${dataSourceUrl}/[id]`,
    deletePath: `${dataSourceUrl}/[id]`,
  },
  actions,
  path:"items",
  relations: [],
  childOf: {
    notifiesId: 0,
  },
};

// set this state to the store
// effect will fetch the data from the api and set it to the store

export default notifyItemsTableState;

import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}storeheaders`;
const actions: Array<Action> = [{ name: 'createNew.edit', type: 'edit' }];

const insertInventoryItemsTableState: TableState = {
  id: 'store items table',
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
  path:"items",
  relations: [],
  childOf: {
    notifiesId: 0,
  },
};

// set this state to the store
// effect will fetch the data from the api and set it to the store

export default insertInventoryItemsTableState;

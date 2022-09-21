import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}storeheaders`;
const actions: Array<Action> = [
  { name: 'createNew.expand', type: 'expand', path: 'storeheaders' },
  { name: 'createNew.edit', type: 'edit' },
];

const insertInventoryTableState: TableState = {
  id: 'Insert Inventory table',
  title: 'inventory.listOfRecordsInInventory',
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
  actions
};

const insertInventoryItemsTableState: TableState = {
  id: 'Insert Inventory Items table',
  title: 'List of weapon item in store',
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
  actions: actions.slice(1, 2),
  relations: [],
  path:"items",
  childOf: {
    weaponInventoriesId: 0,
  },
};

// set this state to the store
// effect will fetch the data from the api and set it to the store

export default { insertInventoryTableState, insertInventoryItemsTableState };

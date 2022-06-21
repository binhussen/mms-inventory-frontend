import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}storeheaders`;
const actions: Array<Action> = [
  { name: 'Expand', type: 'expand', path: 'storeheaders' },
  { name: 'Edit', type: 'edit' },
];

const inventoryTableState: TableState = {
  id: 'Inventory table',
  title: 'List Of Records In Inventory',
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
  // relations: [
  //   {
  //     type: 'weaponItems',
  //     links: {
  //       getPath: `${baseApiUrl}/weaponItems?weaponInventoriesId=[id]`,
  //       createPath: `${baseApiUrl}/weaponItems`,
  //       updatePath: `${baseApiUrl}/weaponItems/[id]`,
  //       deletePath: `${baseApiUrl}/weaponItems/[id]`,
  //     },
  //     relationType: 'many',
  //   },
  // ],
};

const inventoryItemsTableState: TableState = {
  id: 'Weapon Items table',
  title: 'List of weapons in a record',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id', 'weaponInventoriesId'],
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

export default { inventoryTableState, inventoryItemsTableState };

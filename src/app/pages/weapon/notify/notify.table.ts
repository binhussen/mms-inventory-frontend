import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}notifyheaders`;
const actions: Array<Action> = [
  { name: 'Expand', type: 'expand', path: 'notifyheaders' },
  { name: 'Edit', type: 'edit' },
];

const notifyTableState: TableState = {
  id: 'notify table',
  title: 'List of weapons that have been notified',
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
  //     type: 'notifyItems',
  //     links: {
  //       getPath: `${baseApiUrl}notifyheaders/[id]/notifyitems`,
  //       createPath: `${baseApiUrl}notifyheaders/[id]/notifyitems`,
  //       updatePath: `${baseApiUrl}notifyheaders/[id]/notifyitems/[id]`,
  //       deletePath: `${baseApiUrl}notifyheaders/[id]/notifyitems/[id]`,
  //     },
  //     relationType: 'many',
  //   },
  // ],
};

// set this state to the store
// effect will fetch the data from the api and set it to the store

export default notifyTableState;

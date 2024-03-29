import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}customers`;
const actions: Array<Action> = [
  { name: 'createNew.warranties', type: 'expand', path: 'users' },
  { name: 'createNew.edit', type: 'edit' },
];

const customerTableState: TableState = {
  id: 'user table',
  title: 'customer.listofOrganizationscustomer',
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
};
export default customerTableState;
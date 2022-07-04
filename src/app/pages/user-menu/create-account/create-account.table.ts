import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}users`;
const actions: Array<Action> = [
  //{ name: 'Expand', type: 'expand', path: 'users' },
  { name: 'createNew.edit', type: 'edit' },
  { name: 'createNew.delete', type: 'delete'},
];

const userTableState: TableState = {
  id: 'user table',
  title: 'createAccount.listofsystemuser',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id'],
  links: {
    getPath: dataSourceUrl,
    createPath: `${baseApiUrl}authentications`,
    updatePath: `${dataSourceUrl}/[id]`,
    deletePath: `${dataSourceUrl}/[id]`,
  },
  actions,
};
export default userTableState;
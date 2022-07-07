import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}customers`;
const actions: Array<Action> = [{ name: 'createNew.edit', type: 'edit' }];

const warrantyTableState: TableState = {
  id: 'warranty table',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id', 'customerId'],
  links: {
    getPath: dataSourceUrl,
    createPath: `${dataSourceUrl}`,
    updatePath: `${dataSourceUrl}/[id]`,
    deletePath: `${dataSourceUrl}/[id]`,
  },
  actions,
  path:"warranties",
  relations: [],
  childOf: {
    notifiesId: 0,
  },
};
export default warrantyTableState;

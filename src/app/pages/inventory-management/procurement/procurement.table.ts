import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}procurements`;
const actions: Array<Action> = [
  { name: 'createNew.expand', type: 'expand', path: 'procurements' },
  { name: 'createNew.edit', type: 'edit' },
];

const procurementTableState: TableState = {
  id: 'procurement request table',
  title: 'list of requested item for procurement',
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
export default procurementTableState;





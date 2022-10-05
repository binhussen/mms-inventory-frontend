import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}requests`;
const actions: Array<Action> = [
  { name: 'createNew.expand', type: 'expand', path: 'requests' },
  { name: 'createNew.edit', type: 'edit' },
];

const inventoryRequestDetailTableState: TableState = {
  id: 'inventory request table',
  title: 'requestForWeapon.listofweaponsthathavebeenrequested',
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
export default inventoryRequestDetailTableState;





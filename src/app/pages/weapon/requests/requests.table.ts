import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}requests`;
const actions: Array<Action> = [
  { name: 'createNew.expand', type: 'expand', path: 'requests' },
  { name: 'createNew.edit', type: 'edit' },
];

const requestForWeaponTable: TableState = {
  id: 'request table',
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
  relations: [
    {
      type: 'requestItems',
      links: {
        getPath: `${baseApiUrl}/requestItems?requestsId=[id]`,
        createPath: `${baseApiUrl}/requestItems`,
        updatePath: `${baseApiUrl}/requestItems/[id]`,
        deletePath: `${baseApiUrl}/requestItems/[id]`,
      },
      relationType: 'many',
    },
  ],
};

const requestForReturningWeaponTable: TableState = {
  pageNumber: 0,
  pageSize: 10,
  totalItems: 0,
};

export default { requestForWeaponTable, requestForReturningWeaponTable };

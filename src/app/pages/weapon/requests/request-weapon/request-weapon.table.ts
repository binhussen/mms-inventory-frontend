import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';
import requestWeaponForm from './request-weapon.form';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}requestheaders`;
const actions: Array<Action> = [
  { name: 'Expand', type: 'expand', path: 'request-for-weapon' },
  { name: 'Edit', type: 'edit' },
  {
    name: 'Approve',type: 'approve',
    form: requestWeaponForm.requestApprovalForm,
    submittedUrl: `${baseApiUrl}requestapprove/[id]`,
  },
  {
    name: 'Distribute',type: 'distribute',
    // path:'approves'
  }
];

const requestForWeaponTable: TableState = {
  id: 'request table',
  title: 'List of weapons that have been requested',
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
  actions:actions.slice(0, 2),
  // relations: [
  //   {
  //     type: 'requestWeaponItems',
  //     links: {
  //       getPath: `${baseApiUrl}/requestWeaponItems?requestWeaponsId=[id]`,
  //       createPath: `${baseApiUrl}/requestWeaponItems`,
  //       updatePath: `${baseApiUrl}/requestWeaponItems/[id]`,
  //       deletePath: `${baseApiUrl}/requestWeaponItems/[id]`,
  //     },
  //     relationType: 'many',
  //   },
  // ],
};

const requestItemsForWeaponTable: TableState = {
  id: 'request items table',
  title: 'List of weapons items that are in the request',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id', 'requestWeaponsId'],
  links: {
    getPath: dataSourceUrl,
    createPath: `${dataSourceUrl}`,
    updatePath: `${dataSourceUrl}/[id]`,
    deletePath: `${dataSourceUrl}/[id]`,
  },
  actions : actions.slice(1),
  path:"items",
  relations: [],
  childOf: {
    requestWeaponsId: 0,
  },
};

export default { requestForWeaponTable, requestItemsForWeaponTable };

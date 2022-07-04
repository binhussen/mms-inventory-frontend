import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';

const baseApiUrl = 'http://localhost:3000';
const dataSourceUrl = `${baseApiUrl}/returnWeapons`;
const actions: Array<Action> = [
  { name: 'createNew.expand', type: 'expand', path: 'request-for-return-weapon' },
  { name: 'createNew.edit', type: 'edit' },
];

const requestForReturningWeaponTable: TableState = {
  id: 'request table',
  title: 'requestForWeapon.listofweaponsthathavebeenrequestedtobereturned',
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
      type: 'returnWeaponItems',
      links: {
        getPath: `${baseApiUrl}/returnWeaponItems?returnWeaponsId=[id]`,
        createPath: `${baseApiUrl}/returnWeaponItems`,
        updatePath: `${baseApiUrl}/returnWeaponItems/[id]`,
        deletePath: `${baseApiUrl}/returnWeaponItems/[id]`,
      },
      relationType: 'many',
    },
  ],
};

const requestForReturningWeaponItemsTable: TableState = {
  id: 'return items table',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id', 'returnWeaponId'],
  links: {
    getPath: `${baseApiUrl}/returnWeaponItems?returnWeaponsId=[id]`,
    createPath: `${baseApiUrl}/returnWeaponItems`,
    updatePath: `${baseApiUrl}/returnWeaponItems/[id]`,
    deletePath: `${baseApiUrl}/returnWeaponItems/[id]`,
  },
  actions: actions.slice(1),
  relations: [],
  path:"items",
  childOf: {
    returnWeaponId: 0,
  },
};

export default {
  requestForReturningWeaponTable,
  requestForReturningWeaponItemsTable,
};

import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';
const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}damages`;
const actions: Array<Action> = [
  { name: 'createNew.expand', type: 'expand', path: 'damages' },
  { name: 'createNew.edit', type: 'edit' },
];

const damagesTableState: TableState = {
  id: 'damages table',
  title: 'damagesItem.listofdamagedweapons',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id','damagesId'],
  links: {
    getPath: dataSourceUrl,
    createPath: `${dataSourceUrl}`,
    updatePath: `${dataSourceUrl}/[id]`,
    deletePath: `${dataSourceUrl}/[id]`,
  },
  actions,
  relations: [
    {
      type: 'damagesItems',
      links: {
        getPath: `${baseApiUrl}/damagesItems?damagesId=[id]`,
        createPath: `${baseApiUrl}/damagesItems`,
        updatePath: `${baseApiUrl}/damagesItems/[id]`,
        deletePath: `${baseApiUrl}/damagesItems/[id]`,
      },
      relationType: 'many',
    },
  ],
};
export default damagesTableState;
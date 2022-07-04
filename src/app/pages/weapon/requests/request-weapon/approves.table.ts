import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import { environment } from 'src/environments/environment';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}approves`;
const actions: Array<Action> = [
  {
    name: 'createNew.distribute',type: 'distribute',
    // form: requestWeaponForm.requestApprovalForm,
    // submittedUrl: `${baseApiUrl}requestapprove/[id]`,
  }
];
const approvedTable: TableState = {
  id: 'approved requests table',
  title: 'requestForWeapon.listofApprovedforDistribution',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id'],
  links: {
    getPath: `${dataSourceUrl}`,
    createPath: `${dataSourceUrl}`,
    updatePath: `${dataSourceUrl}/[id]`,
    deletePath: `${dataSourceUrl}/[id]`,
  },
  actions
};

export default  approvedTable;

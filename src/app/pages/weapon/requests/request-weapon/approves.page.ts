import requestWeaponForm from './request-weapon.form';
import approvedTable from './approves.table';
import distributeForm from './approves.form';

const approvePage = {
  title: 'Approved Requests',
  type: 'default page',
  form: distributeForm,
  table: approvedTable,
};

export default approvePage;
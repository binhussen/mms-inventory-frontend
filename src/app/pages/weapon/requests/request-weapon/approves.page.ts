import requestWeaponForm from './request-weapon.form';
import requestForWeaponTable from './request-weapon.table';

const approvepage = {
  title: 'Approved Requests',
  type: 'default page',
  form: requestWeaponForm.requestItemForWeaponForm,
  table: requestForWeaponTable.requestItemsForWeaponTable,
};

export default approvepage;

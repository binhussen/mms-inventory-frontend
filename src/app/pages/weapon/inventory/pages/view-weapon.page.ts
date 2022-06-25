import viewWeaponTable from '../tables/view-weapon.table';

// const viewWeaponPage = {
//   title: 'View Weapon Inventories',
//   link: dataSourceUrl,
//   groupBy: 'weaponModel',
//   aggregate: 'weaponQuantity',
//   table: viewWeaponTable,
// };

const viewWeaponPage = {
  title: 'View Weapon Inventories',
  table: viewWeaponTable,
  type: 'default page',
  // form: requestWeaponForm.requestForWeaponForm,
};
export default viewWeaponPage;

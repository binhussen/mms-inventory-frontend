import { environment } from 'src/environments/environment';
import viewWeaponTable from '../tables/view-weapon.table';

const baseApiUrl = environment.baseApiUrl;
const dataSourceUrl = `${baseApiUrl}items`;
const viewWeaponPage = {
  title: 'View Weapon Inventories',
  link: dataSourceUrl,
  groupBy: 'weaponModel',
  aggregate: 'weaponQuantity',
  table: viewWeaponTable,
};

export default viewWeaponPage;

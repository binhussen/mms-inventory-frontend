import { Menu } from '../models';

export const menus: Array<Menu> = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    link: 'dashboard',
    open: false,
    trans: 'menus.dashboard',
  },
  {
    name: 'inventory',
    icon: 'important_devices',
    open: true,
    trans: 'menus.inventoryManagement',
    sub: [
      {
        name: 'Request for Procurement',
        icon: '',
        link: 'inventory/procurements',
        open: false,
        trans: 'menus.procurement',
      },
      {
        name: 'Notify Inventory',
        icon: '',
        link: 'inventory/notify-inventory',
        open: false,
        trans: 'menus.notifyInventory',
      },
      {
        name: 'Store Inventory',
        icon: '',
        link: 'inventory/inventory-store',
        open: false,
        trans: 'menus.inventoryStore',
      },
      {
        name: 'Request Inventory',
        icon: '',
        link: 'inventory/inventory-request',
        open: false,
        trans: 'menus.inventoryRequest',
      },
    ],
  },
  // {
  //   name: 'Weapon',
  //   icon: 'view_in_ar',
  //   open: true,
  //   trans: 'menus.weapon',
  //   sub: [
  //     {
  //       name: 'Notify Weapon',
  //       icon: '',
  //       link: 'weapon/notifies',
  //       open: false,
  //       trans: 'menus.notifyWeapon',
  //     },
  //     {
  //       name: 'Inventory',
  //       icon: '',
  //       link: 'weapon/inventories',
  //       open: false,
  //       trans: 'menus.inventory',
  //     },
  //     {
  //       name: 'Request',
  //       icon: '',
  //       link: 'weapon/requests',
  //       open: false,
  //       trans: 'menus.request',
  //     },
  //     {
  //       name: 'Report Damages',
  //       icon: '',
  //       link: 'weapon/damages',
  //       open: false,
  //       trans: 'menus.reportDamages',
  //     },
  //   ],
  // },
  {
    name: 'Hrm',
    icon: 'wc',
    link: 'hrms',
    open: false,
    trans: 'menus.hrm',
  },
  {
    name: 'customers',
    icon: 'people',
    link: 'customers',
    open: false,
    trans: 'menus.customer',
  },
  {
    name: 'User Management',
    icon: 'person',
    link: 'user-menu/create-user-account',
    open: false,
    trans: 'menus.userManagement',
  },
];

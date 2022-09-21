import { Form } from 'src/app/mms-common/models/form';

const insertInventoryForm: Form = {
  title: 'inventory.insertWeapon.form.inventory',
  elements: [
    {
      name: 'itemNoInExpenditureRegister',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.itemNoInExpenditureRegister',
      defaultValue: '',
      size: 4,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'noOfEntryInTheRegisterOfIncomingGoods',
      type: 'text',
      placeholder:
      'inventory.insertWeapon.form.noOfEntryInTheRegisterOfIncomingGoods',
      defaultValue: '',
      size: 4,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'donor',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.donor',
      defaultValue: '',
      size: 4,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'storeItems',
      type: 'formArray',
      placeholder: 'inventory.insertWeapon.form.weaponItems',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'type',
          type: 'select',
          placeholder: 'inventory.insertWeapon.form.weaponType',
          defaultValue: '',
          size: 3,
          options: [
            { value: 'electronic', label: 'Electronic Material' },
            { value: 'accessory ', label: 'Accessory Materials' },
            { value: 'furniture ', label: 'Furniture Materials' },
            { value: 'detergent ', label: 'Detergents' },
            { value: 'Other', label: 'Other' },
          ],
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'itemDescription',
          type: 'text',
          placeholder: 'inventory.insertWeapon.form.weaponItemDescription',
          defaultValue: '',
          size: 9,
        },
        {
          name: 'category',
          type: 'select',
          placeholder: 'Category',
          defaultValue: '',
          size: 3,
          options: [
            { value: 'fixed', label: 'Fixed Asset' },
            { value: 'nonfixedFixed ', label: 'Fixed Non Fixed Asset' },
          ],
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'model',
          type: 'text',
          placeholder: 'inventory.insertWeapon.form.weaponModel',
          defaultValue: '',
          size: 3,
          validations: [
            { type: 'required', value: true },
            { type: 'minLength', value: 3 },
          ],
        },
        {
          name: 'serialNo',
          type: 'text',
          placeholder: 'inventory.insertWeapon.form.weaponSerialNo',
          defaultValue: '',
          size: 3,
          validations: [
            { type: 'required', value: true },
            { type: 'minLength', value: 3 },
          ],
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'inventory.insertWeapon.form.weaponQuantity',
          defaultValue: '',
          size: 3,
          validations: [
            { type: 'required', value: true },
            { type: 'min', value: 1 },
          ],
        },
        {
          name: 'unitPrice',
          type: 'number',
          placeholder: 'inventory.insertWeapon.form.weaponUnitPrice',
          defaultValue: '',
          size: 3,
          validations: [
            { type: 'required', value: true },
            { type: 'min', value: 1 },
          ],
        },
        {
          name: 'totalPrice',
          type: 'number',
          placeholder: 'inventory.insertWeapon.form.weaponTotalPrice',
          defaultValue: '',
          computeValueFrom: {
            elements: ['quantity', 'unitPrice'],
            operator: '*',
          },
          size: 3,
          validations: [
            { type: 'required', value: true },
            { type: 'min', value: 1 },
          ],
        },
        {
          name: 'storeNo',
          type: 'text',
          placeholder: 'inventory.insertWeapon.form.storeNo',
          defaultValue: '',
          size: 3,
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'shelfNo',
          type: 'text',
          placeholder: 'inventory.insertWeapon.form.shelfNo',
          defaultValue: '',
          size: 3,
          validations: [{ type: 'required', value: true }],
        },
      ],
    },
  ],
};

const insertInventoryItemForm: Form = {
  title: 'inventory.insertWeapon.form.weaponItems',
  elements: [
    {
      name: 'type',
      type: 'select',
      placeholder: 'inventory.insertWeapon.form.weaponType',
      defaultValue: '',
      size: 3,
      options: [
        { value: 'electronic', label: 'Electronic Material' },
        { value: 'accessory ', label: 'Accessory Materials' },
        { value: 'furniture ', label: 'Furniture Materials' },
        { value: 'detergent ', label: 'Detergents' },
        { value: 'Other', label: 'Other' },
      ],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'itemDescription',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.weaponItemDescription',
      defaultValue: '',
      size: 9,
    },
    {
      name: 'category',
      type: 'select',
      placeholder: 'Category',
      defaultValue: '',
      size: 3,
      options: [
        { value: 'fixed', label: 'Fixed Asset' },
        { value: 'nonfixedFixed ', label: 'Fixed Non Fixed Asset' },
      ],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'model',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.weaponModel',
      defaultValue: '',
      size: 3,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'serialNo',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.weaponSerialNo',
      defaultValue: '',
      size: 3,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'quantity',
      type: 'number',
      placeholder: 'inventory.insertWeapon.form.weaponQuantity',
      defaultValue: '',
      size: 3,
      validations: [
        { type: 'required', value: true },
        { type: 'min', value: 1 },
      ],
    },
    {
      name: 'unitPrice',
      type: 'number',
      placeholder: 'inventory.insertWeapon.form.weaponUnitPrice',
      defaultValue: '',
      size: 3,
      validations: [
        { type: 'required', value: true },
        { type: 'min', value: 1 },
      ],
    },
    {
      name: 'totalPrice',
      type: 'number',
      placeholder: 'inventory.insertWeapon.form.weaponTotalPrice',
      defaultValue: '',
      computeValueFrom: {
        elements: ['quantity', 'unitPrice'],
        operator: '*',
      },
      size: 3,
      validations: [
        { type: 'required', value: true },
        { type: 'min', value: 1 },
      ],
    },
    {
      name: 'storeNo',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.storeNo',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'shelfNo',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.shelfNo',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
  ],
};
export default { insertInventoryForm, insertInventoryItemForm };

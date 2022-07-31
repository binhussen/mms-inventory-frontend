import { Form } from 'src/app/mms-common/models/form';

const inventoryForm: Form = {
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

    // {
    //   name: 'date',
    //   type: 'date',
    //   placeholder: 'Date',
    //   defaultValue: '',
    //   size: 4,
    //   validations: [{ type: 'required', value: true }],
    // },
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
            { value: 'Weapon', label: 'Weapon' },
            { value: 'Bullet', label: 'Bullet' },
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
        // {
        //   name: 'availability',
        //   type: 'hidden',
        //   placeholder: 'Weapon Availability',
        //   defaultValue: '1',
        //   size: 0,
        // },
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

const distributeForm: Form = {
  title: 'distributeWeapon.distributeWeapon',
  elements: [],
};

const inventoryItemForm: Form = {
  title: 'inventory.insertWeapon.form.weaponItems',
  elements: [
    {
      name: 'type',
      type: 'select',
      placeholder: 'inventory.insertWeapon.form.weaponType',
      defaultValue: '',
      size: 2,
      options: [
        { value: 'Weapon', label: 'Weapon' },
        { value: 'Bullet', label: 'Bullet' },
        { value: 'Other', label: 'Other' },
      ],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'itemDescription',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.weaponItemDescription',
      defaultValue: '',
      size: 8,
      validations: [
        { type: 'required', value: true },
        { type: 'maxLength', value: 50 },
      ],
    },
    {
      name: 'model',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.weaponModel',
      defaultValue: '',
      size: 2,
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
      size: 2,
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
      size: 2,
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
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'min', value: 1 },
      ],
    },
    {
      name: 'totalPrice',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.weaponTotalPrice',
      defaultValue: '',
      computeValueFrom: {
        elements: ['quantity', 'unitPrice'],
        operator: '*',
      },
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'min', value: 1 },
      ],
    },
    // {
    //   name: 'availability',
    //   type: 'text',
    //   placeholder: 'Weapon Availability',
    //   defaultValue: '1',
    //   size: 0,
    // },
    {
      name: 'storeNo',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.storeNo',
      defaultValue: '',
      size: 2,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'shelfNo',
      type: 'text',
      placeholder: 'inventory.insertWeapon.form.shelfNo',
      defaultValue: '',
      size: 2,
      validations: [{ type: 'required', value: true }],
    },
  ],
};
export default { inventoryForm, inventoryItemForm, distributeForm };

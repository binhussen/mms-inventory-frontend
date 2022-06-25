import { Form } from 'src/app/mms-common/models/form';

const inventoryForm: Form = {
  title: 'Inventory',
  elements: [
    {
      name: 'itemNoInExpenditureRegister',
      type: 'text',
      placeholder: 'Item No. in Expenditure Register',
      defaultValue: '',
      size: 4,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'noOfEntryInTheRegisterOfIncomingGoods',
      type: 'text',
      placeholder: 'No. of Entry in the Register of Incoming Goods',
      defaultValue: '',
      size: 4,
      validations: [{ type: 'required', value: true }],
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
      placeholder: 'Donor',
      defaultValue: '',
      size: 4,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'storeItems',
      type: 'formArray',
      placeholder: 'Weapon Items',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'type',
          type: 'select',
          placeholder: 'Weapon Type',
          defaultValue: '',
          size: 3,
          options: [
            { value: 'Weapon', label: 'Weapon' },
            { value: 'Bullet', label: 'Bullet' },
            { value: 'Other', label: 'Other' },
          ],
          validations: [{ type: 'required', value: true }],
        },{
          name: 'itemDescription',
          type: 'text',
          placeholder: 'Weapon Item Description',
          defaultValue: '',
          size: 9,
        },
        {
          name: 'model',
          type: 'text',
          placeholder: 'Weapon Model',
          defaultValue: '',
          size: 3,
        },
        {
          name: 'serialNo',
          type: 'text',
          placeholder: 'Weapon Serial No.',
          defaultValue: '',
          size: 3,
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Weapon Quantity',
          defaultValue: '',
          size: 3,
        },
        {
          name: 'unitPrice',
          type: 'number',
          placeholder: 'Weapon Unit Price',
          defaultValue: '',
          size: 3,
        },
        {
          name: 'totalPrice',
          type: 'number',
          placeholder: 'Weapon Total Price',
          defaultValue: '',
          computeValueFrom: {
            elements: ['quantity', 'unitPrice'],
            operator: '*',
          },
          size: 3,
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
          placeholder: 'Store No.',
          defaultValue: '',
          size: 3,
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'shelfNo',
          type: 'text',
          placeholder: 'Shelf No.',
          defaultValue: '',
          size: 3,
          validations: [{ type: 'required', value: true }],
        },
      ],
    },
  ],
};

const distributeForm: Form = {
  title: 'Distribute Weapon',
  elements: [],
};

const inventoryItemForm: Form = {
  title: 'Inventory Item',
  elements: [
    {
      name: 'type',
      type: 'select',
      placeholder: 'Weapon Type',
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
      placeholder: 'Weapon Item Description',
      defaultValue: '',
      size: 8,
    },
    {
      name: 'model',
      type: 'text',
      placeholder: 'Weapon Model',
      defaultValue: '',
      size: 2,
    },
    {
      name: 'serialNo',
      type: 'text',
      placeholder: 'Weapon Serial No.',
      defaultValue: '',
      size: 2,
    },
    {
      name: 'quantity',
      type: 'number',
      placeholder: 'Weapon Quantity',
      defaultValue: '',
      size: 2,
    },
    {
      name: 'unitPrice',
      type: 'number',
      placeholder: 'Weapon Unit Price',
      defaultValue: '',
      size: 2,
    },
    {
      name: 'totalPrice',
      type: 'text',
      placeholder: 'Weapon Total Price',
      defaultValue: '',
      computeValueFrom: {
        elements: ['quantity', 'unitPrice'],
        operator: '*',
      },
      size: 2,
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
      placeholder: 'Store No.',
      defaultValue: '',
      size: 2,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'shelfNo',
      type: 'text',
      placeholder: 'Shelf No.',
      defaultValue: '',
      size: 2,
      validations: [{ type: 'required', value: true }],
    },
  ],
};
export default { inventoryForm, inventoryItemForm, distributeForm };

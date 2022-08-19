import { Form } from 'src/app/mms-common/models/form';

const notifyInventoryForm: Form = {
  title: 'Notify new Inventory',
  elements: [
    {
      name: 'notifyItems',
      type: 'formArray',
      placeholder: 'Notify new Inventory Items',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'type',
          type: 'select',
          placeholder: 'Inventory Type',
          defaultValue: '',
          size: 4,
          options: [
            { value: 'electronic', label: 'Electronic Item' },
            { value: 'accessory ', label: 'Accessory Materials' },
            { value: 'furniture ', label: 'Furniture Materials' },
            { value: 'detergent ', label: 'Detergents' },
            { value: 'Other', label: 'Other' },
          ],
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'name',
          type: 'text',
          placeholder: 'Inventory Name',
          defaultValue: '',
          size: 4,
          validations: [
            { type: 'required', value: true },
            { type: 'minLength', value: 3 },
          ],
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Quantity',
          defaultValue: '',
          size: 4,
          validations: [
            { type: 'required', value: true },
            { type: 'min', value: 1 },
          ],
        },
      ],
    },
    {
      name: 'itemDescription',
      type: 'text',
      placeholder: 'Description',
      defaultValue: '',
      size: 12,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'attachments',
      type: 'file',
      placeholder: 'Attachements',
      defaultValue: '',
    }
  ],
};

const notifyInventoryItemForm: Form = {
  title: 'Notify new Inventory Items',
  elements: [
    {
      name: 'type',
      type: 'select',
      placeholder: 'Inventory Type',
      defaultValue: '',
      size: 4,
      options: [
        { value: 'electronic', label: 'Electronic Item' },
        { value: 'accessory ', label: 'Accessory Materials' },
        { value: 'furniture ', label: 'Furniture Materials' },
        { value: 'detergent ', label: 'Detergents' },
        { value: 'Other', label: 'Other' },
      ],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'name',
      type: 'text',
      placeholder: 'Inventory Name',
      defaultValue: '',
      size: 4,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'quantity',
      type: 'number',
      placeholder: 'Quantity',
      defaultValue: '',
      size: 4,
      validations: [
        { type: 'required', value: true },
        { type: 'min', value: 1 },
      ],
    },
    {
      name: 'unitMeasure',
      type: 'select',
      placeholder: 'Unit Of Measurement',
      defaultValue: '',
      size: 4,
      options: [
        { value: 'inNumber', label: 'Number' },
        { value: 'pcs ', label: 'Packet' },
        { value: 'kilo ', label: 'Kilogram' },
        { value: 'meter ', label: 'Meter' },
        { value: 'box', label: 'Box' },
      ],
      validations: [{ type: 'required', value: true }],
    },
  ],
};
export default { notifyInventoryForm, notifyInventoryItemForm };

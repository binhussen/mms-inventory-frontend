import { Form } from "src/app/mms-common/models/form";
const purchaseRequestForm: Form = {
  title: 'requestForWeapon.form.requestForWeapon',
  elements: [
    {
      name: 'requestItems',
      type: 'formArray',
      placeholder: 'requestForWeapon.requestItemForWeapon.form.requestItems',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'type',
          type: 'select',
          placeholder: 'procurement.form.type',
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
          placeholder: 'requestForWeapon.form.name',
          defaultValue: '',
          size: 3,
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'model',
          type: 'text',
          placeholder: 'requestForWeapon.form.model',
          defaultValue: '',
          size: 3,
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'requestedQuantity',
          type: 'number',
          placeholder: 'requestForWeapon.form.quantity',
          defaultValue: '',
          size: 3,
          validations: [{ type: 'required', value: true }],
        },
      ],
    },
    {
      name: 'description',
      type: 'text',
      placeholder: 'requestForWeapon.form.description',
      defaultValue: '',
      size: 6,
      validations: [{ type: 'required', value: true }],
    },

    {
      name: 'attachments',
      type: 'file',
      placeholder: 'requestForWeapon.form.attachments',
      defaultValue: '',
    },
  ],
};

const purchaseRequestItemForm: Form = {
  title: 'requestForWeapon.requestItemForWeapon.form.requestItems',
  elements:
    (
      purchaseRequestForm.elements.find(
        (element) => element.name === 'requestItems'
      ) ?? { formArrayItems: [] }
    ).formArrayItems ?? [],
};
  
  export default {purchaseRequestForm, purchaseRequestItemForm}
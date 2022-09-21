import { Form } from 'src/app/mms-common/models/form';

const notifyInventoryForm: Form = {
  title: 'notifyWeapon.form.notifyItems',
  elements: [
    {
      name: 'notifyItems',
      type: 'formArray',
      placeholder: 'notifyWeapon.form.notifyItems',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'type',
          type: 'select',
          placeholder: 'notifyItem.form.weaponType',
          defaultValue: '',
          size: 4,
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
          name: 'name',
          type: 'text',
          placeholder: 'notifyItem.form.weaponName',
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
          placeholder: 'notifyItem.form.quantity',
          defaultValue: '',
          size: 4,
          validations: [
            { type: 'required', value: true },
            { type: 'min', value: 1 },
          ],
        }
      ],
    },
    {
      name: 'itemDescription',
      type: 'text',
      placeholder: 'notifyWeapon.form.weaponDescription',
      defaultValue: '',
      size: 12,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'attachments',
      type: 'file',
      placeholder: 'notifyWeapon.form.attachments',
      defaultValue: '',
    }
  ],
};

const notifyInventoryItemForm: Form = {
  title: 'notifyWeapon.form.notifyItems',
  elements: [
    {
      name: 'type',
      type: 'select',
      placeholder: 'notifyItem.form.weaponType',
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
      placeholder: 'notifyItem.form.weaponName',
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
      placeholder: 'notifyItem.form.quantity',
      defaultValue: '',
      size: 4,
      validations: [
        { type: 'required', value: true },
        { type: 'min', value: 1 },
      ],
    },
  ],
};
export default { notifyInventoryForm, notifyInventoryItemForm };

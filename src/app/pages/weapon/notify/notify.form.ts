import { Form } from 'src/app/mms-common/models/form';
const notifyItemForm: Form = {
  title: 'notifyWeapon.form.notifyItems',
  elements: [
    {
      name: 'type',
      type: 'select',
      placeholder: 'notifyItem.form.weaponType',
      defaultValue: '',
      size: 4,
      options: [
        { value: 'Weapon', label: 'Weapon' },
        { value: 'Bullet', label: 'Bullet' },
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

const notifyForm: Form = {
  title: 'notifyWeapon.form.notifyItems',
  elements: [
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
    },
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
            { value: 'Weapon', label: 'Weapon' },
            { value: 'Bullet', label: 'Bullet' },
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
    },
  ],
};

export default { notifyItemForm, notifyForm };

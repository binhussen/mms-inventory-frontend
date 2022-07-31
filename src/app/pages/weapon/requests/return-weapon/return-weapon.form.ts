import { Form } from 'src/app/mms-common/models/form';

const requestForReturningWeaponForm: Form = {
  title:
    'requestForWeapon.requestForReturningWeapon.form.requestForReturningWeapon',
  elements: [
    {
      name: 'returnWeaponsItems',
      type: 'formArray',
      placeholder:
        'requestForWeapon.requestForReturningWeapon.form.returnItems',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'type',
          type: 'select',
          placeholder: 'requestForWeapon.requestForReturningWeapon.form.type',
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
          placeholder: 'requestForWeapon.requestForReturningWeapon.form.name',
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
          placeholder:
            'requestForWeapon.requestForReturningWeapon.form.quantity',
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
      name: 'returnStatus',
      type: 'hidden',
      placeholder: 'Request Status',
      defaultValue: 'PENDING',
    },
    {
      name: 'description',
      type: 'text',
      placeholder:
        'requestForWeapon.requestForReturningWeapon.form.description',
      defaultValue: '',
      size: 12,
      validations: [
        { type: 'required', value: true },
        { type: 'maxLength', value: 50 },
      ],
    },
    {
      name: 'attachments',
      type: 'file',
      placeholder:
        'requestForWeapon.requestForReturningWeapon.form.attachments',
      defaultValue: '',
    },
  ],
};

const requestForReturningWeaponItemsForm: Form = {
  title: 'requestForWeapon.requestForReturningWeapon.form.returnItems',
  elements: [
    {
      name: 'type',
      type: 'select',
      placeholder: 'requestForWeapon.requestForReturningWeapon.form.type',
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
      placeholder: 'requestForWeapon.requestForReturningWeapon.form.name',
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
      placeholder: 'requestForWeapon.requestForReturningWeapon.form.quantity',
      defaultValue: '',
      size: 4,
      validations: [
        { type: 'required', value: true },
        { type: 'min', value: 1 },
      ],
    },
  ],
};

export default {
  requestForReturningWeaponForm,
  requestForReturningWeaponItemsForm,
};

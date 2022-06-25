import { Form } from 'src/app/mms-common/models/form';
const notifyItemForm: Form = {
  title: 'Notify Item',
  elements: [
    {
      name: 'type',
      type: 'select',
      placeholder: 'Weapon Type',
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
      placeholder: 'Weapon Name',
      defaultValue: '',
      size: 4,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'quantity',
      type: 'number',
      placeholder: 'Quantity',
      defaultValue: '',
      size: 4,
      validations: [{ type: 'required', value: true }],
    },
  ],
};
const notifyForm: Form = {
  title: 'Notify Weapon',
  elements: [
    {
      name: 'itemDescription',
      type: 'text',
      placeholder: 'Weapon Description',
      defaultValue: '',
      size: 12,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'attachments',
      type: 'file',
      placeholder: 'Attachments',
      defaultValue: '',
    },
    {
      name: 'notifyItems',
      type: 'formArray',
      placeholder: 'Notify Items',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'type',
          type: 'select',
          placeholder: 'Weapon Type',
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
          placeholder: 'Weapon Name',
          defaultValue: '',
          size: 4,
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Quantity',
          defaultValue: '',
          size: 4,
          validations: [{ type: 'required', value: true }],
        },
      ],
    }
  ],
};

export default { notifyItemForm, notifyForm };

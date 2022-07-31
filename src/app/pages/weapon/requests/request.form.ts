import { Form } from 'src/app/mms-common/models/form';

const requestForWeaponForm: Form = {
  title: 'Request For Weapon',
  elements: [
    {
      name: 'requestItems',
      type: 'formArray',
      placeholder: 'Request Items',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'type',
          type: 'select',
          placeholder: 'Type',
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
          placeholder: 'Name',
          defaultValue: '',
          size: 4,
          validations: [
            { type: 'required', value: true },
            { type: 'minLength', value: 3 },
          ],
        },
        {
          name: 'model',
          type: 'text',
          placeholder: 'Model',
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
      name: 'requestStatus',
      type: 'hidden',
      placeholder: 'Request Status',
      defaultValue: 'PENDING',
    },
    {
      name: 'description',
      type: 'text',
      placeholder: 'Request Description',
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
      placeholder: 'Request Attachments',
      defaultValue: '',
    },
  ],
};

const requestItemForWeaponForm: Form = {
  title: 'Request Item For Weapon',
  elements: [
    {
      name: 'type',
      type: 'select',
      placeholder: 'Type',
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
      placeholder: 'Name',
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
};

const requestForReturningWeaponForm: Form = {
  title: 'Request For Returning Weapon',
  elements: [
    {
      name: 'returnItems',
      type: 'formArray',
      placeholder: 'REturn Items',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'type',
          type: 'select',
          placeholder: 'Type',
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
          placeholder: 'Name',
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
      name: 'returnStatus',
      type: 'hidden',
      placeholder: 'Request Status',
      defaultValue: 'PENDING',
    },
    {
      name: 'description',
      type: 'text',
      placeholder: 'Return Description',
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
      placeholder: 'Return Attachments',
      defaultValue: '',
    },
  ],
};

const requestApprovalForm = {
  title: 'Request Approval Form',
  elements: requestForWeaponForm.elements.map((element) => {
    if (element.name === 'requestStatus') {
      return { ...element, defaultValue: 'APPROVED' };
    }
    return element;
  }),
};

export default {
  requestApprovalForm,
  requestForReturningWeaponForm,
  requestForWeaponForm,
  requestItemForWeaponForm,
};

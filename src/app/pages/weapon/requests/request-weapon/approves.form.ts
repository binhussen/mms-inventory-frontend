import { Form } from 'src/app/mms-common/models/form';

const distributeForm: Form = {
  title: 'requestForWeapon.ditribute.distributeForm',
  elements: [
    {
      name: 'hrId',
      type: 'select',
      placeholder: 'Select Fp',
      defaultValue: '',
      size: 6,
      options: [],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'fpId',
      type: 'text',
      placeholder: 'Select Name',
      defaultValue: '',
      size: 6,
      validations: [{ type: 'required', value: true }],
    },
  ],
};

export default distributeForm;

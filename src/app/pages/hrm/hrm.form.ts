import { Form } from 'src/app/mms-common/models/form';

const hrmForm: Form = {
  title: 'Hrm Registeration Form',
  elements: [
    {
      name: 'fpId',
      type: 'text',
      placeholder: 'Fp Id',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'fp', value: true },
      ],
    },
    {
      name: 'name',
      type: 'text',
      placeholder: 'First Name',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'middleName',
      type: 'text',
      placeholder: 'Middle Name',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'gender',
      type: 'select',
      placeholder: 'Gender',
      defaultValue: '',
      size: 3,
      options: [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
      ],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'birthDate',
      type: 'date',
      placeholder: 'Birth Date',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'higherDate',
      type: 'date',
      placeholder: 'Hired Date',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'occpation',
      type: 'text',
      placeholder: 'Occupation',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'rank',
      type: 'text',
      placeholder: 'Rank',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
    {
      name: 'reponsibilty',
      type: 'text',
      placeholder: 'Responsibility',
      defaultValue: '',
      size: 2,
      validations: [
        { type: 'required', value: true },
        { type: 'minLength', value: 3 },
      ],
    },
  ],
};

export default { hrmForm };

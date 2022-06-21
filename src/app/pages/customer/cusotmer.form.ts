import { Form } from 'src/app/mms-common/models/form';
const customerForm: Form = {
  title: 'Register Warranty',
  elements: [
    {
      name: 'name',
      type: 'text',
      placeholder: 'name',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'region',
      type: 'text',
      placeholder: 'Region',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'subCity',
      type: 'text',
      placeholder: 'Sub City',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },   
  {
      name: 'woreda',
      type: 'text',
      placeholder: 'Woreda',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'sex',
      type: 'select',
      placeholder: 'sex',
      defaultValue: '',
      size: 3,
      options: [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
      ],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'phoneNumber',
      type: 'text',
      placeholder: 'Phone Number',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'birthPlace',
      type: 'text',
      placeholder: 'Birth Place',
      defaultValue: '',
      size: 3,
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
      name: 'occupation',
      type: 'text',
      placeholder: 'Occupation',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'homeNumber',
      type: 'text',
      placeholder: 'Home Number',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
{
  name: 'timeLimit',
  type: 'date',
  placeholder: 'Time Limit',
  defaultValue: '',
  size: 3,
  validations: [{ type: 'required', value: true }],
},
    {
      name: 'customerWarranties',
      type: 'formArray',
      placeholder: 'Warrainter Information',
      defaultValue: '',
      formArrayItems: [
    {
      name: 'warantiyname',
      type: 'text',
      placeholder: 'Warrantier Name',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'warantiyAddress',
      type: 'text',
      placeholder: 'Warrantier Address',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    }, 
    {
      name: 'warantiyRegion',
      type: 'text',
      placeholder: 'Warrantier Region',
      defaultValue: '',
      size: 2,
      validations: [{ type: 'required', value: true }],
    },  
  {
      name: 'warantiySubCity',
      type: 'text',
      placeholder: 'Warrantier Sub City',
      defaultValue: '',
      size: 2,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'warantiyWoreda',
      type: 'text',
      placeholder: 'Warrantier Woreda',
      defaultValue: '',
      size: 2,
      validations: [{ type: 'required', value: true }],
    },
    
  ]
}  
  ]
};

const warrantyForm: Form = {
  title: 'Register Warranty',
  elements: [
  {
    name: 'warantiyname',
    type: 'text',
    placeholder: 'Warrantier Name',
    defaultValue: '',
    size: 3,
    validations: [{ type: 'required', value: true }],
  },
  {
    name: 'warantiyAddress',
    type: 'text',
    placeholder: 'Warrantier Address',
    defaultValue: '',
    size: 3,
    validations: [{ type: 'required', value: true }],
  }, 
  {
    name: 'warantiyRegion',
    type: 'text',
    placeholder: 'Warrantier Region',
    defaultValue: '',
    size: 2,
    validations: [{ type: 'required', value: true }],
  },  
{
    name: 'warantiySubCity',
    type: 'text',
    placeholder: 'Warrantier Sub City',
    defaultValue: '',
    size: 2,
    validations: [{ type: 'required', value: true }],
  },
  {
    name: 'warantiyWoreda',
    type: 'text',
    placeholder: 'Warrantier Woreda',
    defaultValue: '',
    size: 2,
    validations: [{ type: 'required', value: true }],
  }
]};

export default {customerForm,warrantyForm};


import { Form } from 'src/app/mms-common/models/form';
const customerForm: Form = {
  title: 'customer.form.registerWarranty',
  elements: [
    {
      name: 'name',
      type: 'text',
      placeholder: 'customer.form.name',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'region',
      type: 'text',
      placeholder: 'customer.form.region',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'subCity',
      type: 'text',
      placeholder: 'customer.form.subCity',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },   
  {
      name: 'woreda',
      type: 'text',
      placeholder: 'customer.form.woreda',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'sex',
      type: 'select',
      placeholder: 'customer.form.sex',
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
      placeholder: 'customer.form.phoneNumber',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'birthPlace',
      type: 'text',
      placeholder: 'customer.form.birthPlace',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'birthDate',
      type: 'date',
      placeholder: 'customer.form.birthDate',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },   
  {
      name: 'occupation',
      type: 'text',
      placeholder: 'customer.form.occupation',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'homeNumber',
      type: 'text',
      placeholder: 'customer.form.homeNumber',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
{
  name: 'timeLimit',
  type: 'date',
  placeholder: 'customer.form.timeLimit',
  defaultValue: '',
  size: 3,
  validations: [{ type: 'required', value: true }],
},
    {
      name: 'customerWarranties',
      type: 'formArray',
      placeholder: 'customer.customerWarranties.warrantierInformation',
      defaultValue: '',
      formArrayItems: [
    {
      name: 'warantiyname',
      type: 'text',
      placeholder: 'customer.customerWarranties.warrantierName',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'warantiyAddress',
      type: 'text',
      placeholder: 'customer.customerWarranties.warrantierAddress',
      defaultValue: '',
      size: 3,
      validations: [{ type: 'required', value: true }],
    }, 
    {
      name: 'warantiyRegion',
      type: 'text',
      placeholder: 'customer.customerWarranties.warrantierRegion',
      defaultValue: '',
      size: 2,
      validations: [{ type: 'required', value: true }],
    },  
  {
      name: 'warantiySubCity',
      type: 'text',
      placeholder: 'customer.customerWarranties.warrantierSubCity',
      defaultValue: '',
      size: 2,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'warantiyWoreda',
      type: 'text',
      placeholder: 'customer.customerWarranties.warrantierWoreda',
      defaultValue: '',
      size: 2,
      validations: [{ type: 'required', value: true }],
    },
    
  ]
}  
  ]
};

const warrantyForm: Form = {
  title: 'customer.customerWarranties.warrantierInformation',
  elements: [
  {
    name: 'warantiyname',
    type: 'text',
    placeholder: 'customer.customerWarranties.warrantierName',
    defaultValue: '',
    size: 2,
    validations: [{ type: 'required', value: true }],
  },
  {
    name: 'warantiyAddress',
    type: 'text',
    placeholder: 'customer.customerWarranties.warrantierAddress',
    defaultValue: '',
    size: 2,
    validations: [{ type: 'required', value: true }],
  }, 
  {
    name: 'warantiyRegion',
    type: 'text',
    placeholder: 'customer.customerWarranties.warrantierRegion',
    defaultValue: '',
    size: 2,
    validations: [{ type: 'required', value: true }],
  },  
{
    name: 'warantiySubCity',
    type: 'text',
    placeholder: 'customer.customerWarranties.warrantierSubCity',
    defaultValue: '',
    size: 2,
    validations: [{ type: 'required', value: true }],
  },
  {
    name: 'warantiyWoreda',
    type: 'text',
    placeholder: 'customer.customerWarranties.warrantierWoreda',
    defaultValue: '',
    size: 2,
    validations: [{ type: 'required', value: true }],
  }
]};

export default {customerForm,warrantyForm};


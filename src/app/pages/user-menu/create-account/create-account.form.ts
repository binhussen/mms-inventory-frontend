import { Form } from 'src/app/mms-common/models/form';
const userForm: Form = {
  title: 'Create user Account',
  elements: [
    {
      name: 'firstName',
      type: 'text',
      placeholder: 'first name',
      defaultValue: '',
      size: 5,
      validations: [{ type: 'required', value: true }],
    },
    {
        name: 'lastName',
        type: 'text',
        placeholder: 'last name',
        defaultValue: '',
        size: 5,
        validations: [{ type: 'required', value: true }],
      },
      {
        name: 'userName',
        type: 'text',
        placeholder: 'user name',
        defaultValue: '',
        size: 5,
        validations: [{ type: 'required', value: true }],
      },   
    {
        name: 'password',
        type: 'text',
        placeholder: 'password',
        defaultValue: '',
        size: 5,
        validations: [{ type: 'required', value: true }],
      },
      {
        name: 'picture',
        type: 'file',
        placeholder: 'Profile Picture',
        defaultValue: '',
      },
  ],
};

export default {userForm };


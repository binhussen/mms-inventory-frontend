import { Form } from 'src/app/mms-common/models/form';
const userForm: Form = {
  title: 'createAccount.form.createuserAccount',
  elements: [
    {
      name: 'firstName',
      type: 'text',
      placeholder: 'createAccount.form.firstName',
      defaultValue: '',
      size: 5,
      validations: [{ type: 'required', value: true }],
    },
    {
        name: 'lastName',
        type: 'text',
        placeholder: 'createAccount.form.lastName',
        defaultValue: '',
        size: 5,
        validations: [{ type: 'required', value: true }],
      },
      {
        name: 'userName',
        type: 'text',
        placeholder: 'createAccount.form.userName',
        defaultValue: '',
        size: 5,
        validations: [{ type: 'required', value: true }],
      },   
    {
        name: 'password',
        type: 'text',
        placeholder: 'createAccount.form.password',
        defaultValue: '',
        size: 5,
        validations: [{ type: 'required', value: true }],
      },
      {
        name: 'picture',
        type: 'file',
        placeholder: 'createAccount.form.profilePicture',
        defaultValue: '',
      },
  ],
};

export default {userForm };


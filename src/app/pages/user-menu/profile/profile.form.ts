import { Form } from "src/app/mms-common/models/form";

const profileForm: Form = {
    title: 'Profile Picture',
    elements: [
      {
        name: 'username',
        type: 'text',
        placeholder: 'User Name',
        defaultValue: '',
        validations: [
          {type: 'required', value: true}
        ]
      },
      {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        defaultValue: '',
        validations: [
          {type: 'required', value: true}
        ]
      },
      {
        name: 'email',
        type: 'email',
        placeholder: 'Email Address',
        defaultValue: '',
        validations: [
          {type: 'required', value: true}
        ]
      },
      
    ]
  }
  
  export default profileForm;
  
import {Form} from "../../mms-common/models/form";

const loginForm: Form = {
  title: 'Login',
  elements: [
    {
      name: 'username',
      type: 'text',
      placeholder: 'login.form.username',
      defaultValue: '',
      validations: [
        {type: 'required', value: true}
      ]
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'login.form.password',
      defaultValue: '',
      validations: [
        {type: 'required', value: true}
      ]
    },
  ]
}

export default loginForm;

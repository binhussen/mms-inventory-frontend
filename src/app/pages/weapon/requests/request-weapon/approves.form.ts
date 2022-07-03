import { Form } from 'src/app/mms-common/models/form';

const distributeForm: Form = {
  title: 'Distribute Form',
  elements: [{
          name: 'fpId',
          type: 'select',
          placeholder: 'Select Fp',
          defaultValue: '',
          size: 3,
          options: [
          ],
        },
        {
          name: 'name',
          type: 'select',
          placeholder: 'Select Name',
          defaultValue: '',
          size: 3,
          options: [
          ],
          validations: [{ type: 'required', value: true }],
        }
  ],

};

export default distributeForm;
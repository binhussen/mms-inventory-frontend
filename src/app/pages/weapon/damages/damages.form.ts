import { Form } from "src/app/mms-common/models/form";

const damagesItemForm: Form = {
  title: 'damagesItem.damagesWeapon.form.damagesItems',
  elements: [
      {
        name: 'weaponType',
        type: 'select',
        placeholder: 'damagesItem.damagesWeapon.form.weaponType',
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
        name: 'weaponName',
        type: 'text',
        placeholder: 'damagesItem.damagesWeapon.form.weaponName',
        defaultValue: '',
        size: 4,
        validations: [{ type: 'required', value: true }],
      },
      {
        name: 'quantity',
        type: 'number',
        placeholder: 'damagesItem.damagesWeapon.form.quantity',
        defaultValue: '',
        size: 4,
        validations: [{ type: 'required', value: true }],
      },
    ],
  };
  
  const damagesForm: Form = {
    title: 'damagesItem.damagesWeapon.form.damagesWeapon',
    elements: [
      {
        name: 'damagesItems',
        type: 'formArray',
        placeholder: 'damagesItem.damagesWeapon.form.damagesItems',
        defaultValue: '',
        formArrayItems: [
          {
            name: 'weaponType',
            type: 'select',
            placeholder: 'damagesItem.damagesWeapon.form.weaponType',
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
            name: 'weaponName',
            type: 'text',
            placeholder: 'damagesItem.damagesWeapon.form.weaponName',
            defaultValue: '',
            size: 4,
            validations: [{ type: 'required', value: true }],
          },
          {
            name: 'quantity',
            type: 'number',
            placeholder: 'damagesItem.damagesWeapon.form.quantity',
            defaultValue: '',
            size: 4,
            validations: [{ type: 'required', value: true }],
          },
        ],
      },
      {
        name: 'reason',
        type: 'text',
        placeholder: 'damagesItem.damagesWeapon.form.reason',
        defaultValue: '',
        size: 12,
        validations: [{ type: 'required', value: true }],
      },
      {
        name: 'weaponDescription',
        type: 'text',
        placeholder: 'damagesItem.damagesWeapon.form.weaponDescription',
        defaultValue: '',
        size: 12,
        validations: [{ type: 'required', value: true }],
      },
      {
        name: 'attachments',
        type: 'file',
        placeholder: 'damagesItem.damagesWeapon.form.attachments',
        defaultValue: '',
      },
    ],
  };
  export default {damagesForm, damagesItemForm}
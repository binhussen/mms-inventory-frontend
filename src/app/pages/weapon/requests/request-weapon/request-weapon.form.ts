import { Form, FormElement } from 'src/app/mms-common/models/form';

const requestForWeaponForm: Form = {
  title: 'requestForWeapon.form.requestForWeapon',
  elements: [
    //   {
    //   name: 'requestStatus',
    //   type: 'hidden',
    //   placeholder: 'Request Status',
    //   defaultValue: 'PENDING',
    // },
    {
      name: 'description',
      type: 'text',
      placeholder: 'requestForWeapon.form.description',
      defaultValue: '',
      size: 6,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'hrId',
      type: 'select',
      placeholder: 'who is armed',
      defaultValue: 'Please Select Employee',
      size: 6,
      options: [],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'attachments',
      type: 'file',
      placeholder: 'requestForWeapon.form.attachments',
      defaultValue: '',
    },
    {
      name: 'requestItems',
      type: 'formArray',
      placeholder: 'requestForWeapon.requestItemForWeapon.form.requestItems',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'type',
          type: 'select',
          placeholder: 'requestForWeapon.form.type',
          defaultValue: '',
          size: 3,
          options: [
            { value: 'Weapon', label: 'Weapon' },
            { value: 'Bullet', label: 'Bullet' },
            { value: 'Other', label: 'Other' },
          ],
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'name',
          type: 'text',
          placeholder: 'requestForWeapon.form.name',
          defaultValue: '',
          size: 3,
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'model',
          type: 'text',
          placeholder: 'requestForWeapon.form.model',
          defaultValue: '',
          size: 3,
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'requestedQuantity',
          type: 'number',
          placeholder: 'requestForWeapon.form.quantity',
          defaultValue: '',
          size: 3,
          validations: [{ type: 'required', value: true }],
        },
      ],
    },
  ],
};

const requestItemForWeaponForm: Form = {
  title: 'requestForWeapon.requestItemForWeapon.form.requestItems',
  elements:
    (
      requestForWeaponForm.elements.find(
        (element) => element.name === 'requestItems'
      ) ?? { formArrayItems: [] }
    ).formArrayItems ?? [],
};

const requestApprovalElements = requestForWeaponForm.elements.map(
  (element: FormElement) => {
    if (element.name === 'requestStatus') {
      return { ...element, defaultValue: 'APPROVED' };
    }
    if (element.name === 'requestItems') {
      return {
        ...element,
        placeholder: 'Requested Items',
        name: 'requestApprovedWeaponItems',
      };
    }
    if (element.name === 'attachments') {
      return { ...element, placeholder: 'Request Approval Attachments' };
    }
    if (element.name === 'description') {
      return {
        ...element,
        placeholder: 'Request Approval Description',
        name: 'requestApprovalDescription',
      };
    }
    return element;
  }
);
requestApprovalElements.push({
  name: 'requestWeaponsId',
  type: 'hidden',
  placeholder: 'Request Weapons Id',
  defaultValue: '',
});
const requestApprovalForm: Form = {
  title: 'requestForWeapon.requestApprovalForm',
  // elements: requestApprovalElements,
  elements: [
    {
      name: 'status',
      type: 'select',
      placeholder: 'requestForWeapon.form.status',
      defaultValue: 'Pending',
      size: 6,
      options: [
        { value: 'Pending', label: 'Pending' },
        { value: 'Approve', label: 'Approve' },
        { value: 'Reject', label: 'Reject' },
      ],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'approvedQuantity',
      type: 'number',
      placeholder: 'requestForWeapon.form.approvedQuantity',
      defaultValue: 0,
      size: 6,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'attachments',
      type: 'file',
      placeholder: 'requestForWeapon.form.attachments',
      defaultValue: '',
    },
  ],
};

export default {
  requestForWeaponForm,
  requestItemForWeaponForm,
  requestApprovalForm,
};

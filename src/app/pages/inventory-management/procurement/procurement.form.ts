import { Form } from "src/app/mms-common/models/form";

  const procurementForm: Form = {
    title: 'request for procurement',
    elements: [
      {
        name: 'procurmentItems',
        type: 'formArray',
        placeholder: 'Requested Procurement Item',
        defaultValue: '',
        formArrayItems: [
          {
            name: 'type',
            type: 'select',
            placeholder: 'Inventory Type',
            defaultValue: '',
            size: 4,
            options: [
              { value: 'electronic', label: 'Electronic Item' },
              { value: 'accessory ', label: 'Accessory Materials' },
              { value: 'furniture ', label: 'Furniture Materials' },
              { value: 'detergent ', label: 'Detergents' },
              { value: 'Other', label: 'Other' },
            ],
            validations: [{ type: 'required', value: true }],
          },
          {
            name: 'category',
            type: 'select',
            placeholder: 'Category',
            defaultValue: '',
            size: 4,
            options: [
              { value: 'fixed', label: 'Fixed Asset' },
              { value: 'nonfixedFixed ', label: 'Fixed Non Fixed Asset' },
            ],
            validations: [{ type: 'required', value: true }],
          },
          {
            name: 'name',
            type: 'text',
            placeholder: 'Inventory Name',
            defaultValue: '',
            size: 4,
            validations: [{ type: 'required', value: true }],
          },
          {
            name: 'quantity',
            type: 'number',
            placeholder: 'Quantity',
            defaultValue: '',
            size: 4,
            validations: [{ type: 'required', value: true }],
          },
          {
            name: 'unitMeasure',
            type: 'select',
            placeholder: 'Unit Of Measurement',
            defaultValue: '',
            size: 4,
            options: [
              { value: 'inNumber', label: 'Number' },
              { value: 'pcs ', label: 'Packet' },
              { value: 'kilo ', label: 'Kilogram' },
              { value: 'meter ', label: 'Meter' },
              { value: 'box', label: 'Box' },
            ],
            validations: [{ type: 'required', value: true }],
          },
        ],
      },
      {
        name: 'description',
        type: 'text',
        placeholder: 'Description',
        defaultValue: '',
        size: 12,
        validations: [{ type: 'required', value: true }],
      },
      {
        name: 'attachments',
        type: 'file',
        placeholder: 'Attachements',
        defaultValue: '',
      },
    ],
  };


  const procurementItemForm: Form = {
    title: 'Requested Procurement Item',
    elements: [
        {
          name: 'type',
          type: 'select',
          placeholder: 'Inventory Type',
          defaultValue: '',
          size: 4,
          options: [
            { value: 'electronic', label: 'Electronic Item' },
            { value: 'accessory ', label: 'Accessory Materials' },
            { value: 'furniture ', label: 'Furniture Materials' },
            { value: 'detergent ', label: 'Detergents' },
            { value: 'Other', label: 'Other' },
          ],
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'category',
          type: 'select',
          placeholder: 'Category',
          defaultValue: '',
          size: 4,
          options: [
            { value: 'fixed', label: 'Fixed Asset' },
            { value: 'nonfixedFixed ', label: 'Fixed Non Fixed Asset' },
          ],
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'name',
          type: 'text',
          placeholder: 'Inventory Name',
          defaultValue: '',
          size: 4,
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Quantity',
          defaultValue: '',
          size: 4,
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'unitMeasure',
          type: 'select',
          placeholder: 'Unit Of Measurement',
          defaultValue: '',
          size: 4,
          options: [
            { value: 'inNumber', label: 'Number' },
            { value: 'pcs ', label: 'Packet' },
            { value: 'kilo ', label: 'Kilogram' },
            { value: 'meter ', label: 'Meter' },
            { value: 'box', label: 'Box' },
          ],
          validations: [{ type: 'required', value: true }],
        },
      ],
    };
  export default {procurementForm, procurementItemForm}
import { Form } from "src/app/mms-common/models/form";

  const procurementForm: Form = {
    title: 'procurement.requestforprocurement',
    elements: [
      {
        name: 'procurmentItems',
        type: 'formArray',
        placeholder: 'procurement.form.procurementitem',
        defaultValue: '',
        formArrayItems: [
          {
            name: 'type',
            type: 'select',
            placeholder: 'procurement.form.type',
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
            placeholder: 'procurement.form.category',
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
            placeholder: 'procurement.form.name',
            defaultValue: '',
            size: 4,
            validations: [{ type: 'required', value: true }],
          },
          {
            name: 'quantity',
            type: 'number',
            placeholder: 'procurement.form.quantity',
            defaultValue: '',
            size: 4,
            validations: [{ type: 'required', value: true }],
          },
          {
            name: 'unitMeasure',
            type: 'select',
            placeholder: 'procurement.form.unitMeasure',
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
        placeholder: 'procurement.form.description',
        defaultValue: '',
        size: 12,
        validations: [{ type: 'required', value: true }],
      },
      {
        name: 'attachments',
        type: 'file',
        placeholder: 'procurement.form.attachments',
        defaultValue: '',
      },
    ],
  };


  const procurementItemForm: Form = {
    title: 'procurement.form.procurementitem',
    elements: [
        {
          name: 'type',
          type: 'select',
          placeholder: 'procurement.form.type',
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
          placeholder: 'procurement.form.category',
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
          placeholder: 'procurement.form.name',
          defaultValue: '',
          size: 4,
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'procurement.form.quantity',
          defaultValue: '',
          size: 4,
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'unitMeasure',
          type: 'select',
          placeholder: 'procurement.form.unitMeasure',
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
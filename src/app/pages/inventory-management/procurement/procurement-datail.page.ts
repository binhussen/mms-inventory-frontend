import procurementItemsTableState from "./procurement-detail.table";
import procurementForm from "./procurement.form";

const procurementDetailPage = {
    title: 'Procurement',
    type: 'default page',
    form: procurementForm.procurementItemForm,
    table: procurementItemsTableState,
  };
  
  export default procurementDetailPage;
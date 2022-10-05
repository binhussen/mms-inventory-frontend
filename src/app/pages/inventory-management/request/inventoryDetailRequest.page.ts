import inventoryRequestDetailTableState from "./inventoryDetailRequest.table";
import inventoryRequestForm from "./inventoryRequest.form";

const inventoryRequestDetailPage = {
    title: 'Inventory Request',
    type: 'default page',
    form: inventoryRequestForm.inventoryRequestItemForm,
    table: inventoryRequestDetailTableState,
  };
  
  export default inventoryRequestDetailPage;
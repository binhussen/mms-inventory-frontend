import insertInventoryItemsTableState from "./insert-inventory-detail.table";
import insertInventoryForm from "./insert-inventory.form";

const insertInventoryDetailPage = {
    title: 'Insert Inventory',
    type: 'default page',
    form: insertInventoryForm.insertInventoryItemForm,
    table: insertInventoryItemsTableState,
  };
  
  export default insertInventoryDetailPage;
import purchaseRequestDetailTableState from "./purchase-request-detail.table";
import purchaseRequestForm from "./purchase-request.form";
import purchaseRequestTableState from "./purchase-request.table";

const purchaseRequestDetailPage = {
    title: 'Purchase Request',
    type: 'default page',
    form: purchaseRequestForm.purchaseRequestItemForm,
    table: purchaseRequestDetailTableState,
  };
  
  export default purchaseRequestDetailPage;
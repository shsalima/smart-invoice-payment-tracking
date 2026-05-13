import { InvoiceHeader } from "../components/InvoicesComponents/invoiceHeader";
import InvoiceTable from "./components/InvoicesComponents/InvoicesTable";
import { NewInvoiceModal } from "./components/InvoicesComponents/NewInvoiceModal";

export function InvoicePage() {
  return (
    <div>
      <InvoiceHeader />
      <InvoiceTable />
      <NewInvoiceModal />
    </div>
  );
}

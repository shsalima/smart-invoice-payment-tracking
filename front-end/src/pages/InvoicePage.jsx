import { InvoiceHeader } from "../components/InvoicesComponents/invoiceHeader";
import InvoiceTable from "../components/InvoicesComponents/InvoicesTable";

export function InvoicePage() {
  return (
    <div>
      <InvoiceHeader />
      <InvoiceTable />
    </div>
  );
}

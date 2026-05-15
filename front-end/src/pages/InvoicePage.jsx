import { useContext } from "react";
import { InvoiceHeader } from "../components/InvoicesComponents/invoiceHeader";
import InvoiceTable from "../components/InvoicesComponents/InvoicesTable";
import { UserContext } from "../contexts/UserContext";

export function InvoicePage() {
  const { accessToken } = useContext(UserContext);

  console.log(accessToken);

  return (
    <div>
      <InvoiceHeader />
      <InvoiceTable />
    </div>
  );
}

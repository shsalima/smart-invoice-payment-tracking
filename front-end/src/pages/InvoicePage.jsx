import { InvoiceHeader } from "../components/InvoicesComponents/invoiceHeader";
import InvoiceTable from "../components/InvoicesComponents/InvoicesTable";

export function InvoicePage() {
  // const [data, setData]= useStatep([])
  // const getData = async()=>{
  //   const response = await axios.get("http://localhost:5000")
  // }

  return (
    <div>
      <InvoiceHeader />
      <InvoiceTable />
    </div>
  );
}

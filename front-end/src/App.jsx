import InvoiceTable from "./components/InvoicesComponents/InvoicesTable";
import { NewInvoiceModal } from "./components/InvoicesComponents/NewInvoiceModal";
import { InvoicePage } from "./pages/InvoicePage";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <InvoicePage />
      <InvoiceTable />
      <NewInvoiceModal />
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageDashboard from "./pages/PageDashboard";
import PageInvoices from "./components/PageInvoices";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageDashboard />} />
          <Route path="/invoices" element={<PageInvoices />} />
        </Routes>
      </BrowserRouter>
      {/* <h1>Hello World!</h1> */}
    </>
  );
}

export default App;

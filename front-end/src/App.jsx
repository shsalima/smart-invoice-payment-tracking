import { Routes, Route } from "react-router";
import SideBar from "./components/layout/SideBar";
import AppHeader from "./components/layout/AppHeader";
import HomePage from "./pages/HomePage";
import { InvoicePage } from "./pages/InvoicePage";

function App() {
  return (
    <div className="flex">
      <SideBar />

      <div className="flex-1">
        <AppHeader />
        <div className="container py-6">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/invoices" element={<InvoicePage />} />
            <Route path="/invoices/:id" element={</>}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

import { Routes, Route, useLocation, useNavigate } from "react-router";
import SideBar from "./components/layout/SideBar";
import AppHeader from "./components/layout/AppHeader";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { UserContext } from "./contexts/UserContext";
import { useEffect } from "react";
import SupplierPage from "./pages/SupplierPage";
import SupplierDetailPage from "./pages/SupplierDetailPage";
import { InvoicePage } from "./pages/InvoicePage";
import InvoiceDetailsPage from "./pages/InvoiceDetailsPage";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const authPagesCheck = pathname == "/register" || pathname == "/login";

  const accessToken = localStorage.getItem("accessToken") || null;

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  return (
    <UserContext.Provider value={{ accessToken: accessToken }}>
      <div className="flex">
        {authPagesCheck != true && <SideBar />}

                <div className="flex-1">
                    {authPagesCheck != true && <AppHeader />}
                    <div className="container py-6">
                        <Routes>
                            <Route path="/register" element={<RegisterPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/suppliers" element={<SupplierPage/>}/>
                            <Route path="/suppliers/:supplierId" element={<SupplierDetailPage/>}/>
                           
                            
                        </Routes>
                    </div>
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default App;

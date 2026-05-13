import { Routes, Route } from "react-router";
import SideBar from "./components/layout/SideBar";
import AppHeader from "./components/layout/AppHeader";
import HomePage from "./pages/HomePage";
import SupplierPage from "./pages/SupplierPage";
import SupplierDetailPage from "./pages/SupplierDetailPage";

function App() {
    return (
        <div className="flex">
            <SideBar />

            <div className="flex-1">
                <AppHeader />
                <div className="container py-6">
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/suppliers" element={<SupplierPage/>}/>
                        <Route path="/suppliers/:id" element={<SupplierDetailPage/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;

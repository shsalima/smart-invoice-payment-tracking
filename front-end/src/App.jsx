import { Routes, Route, useLocation } from "react-router";
import SideBar from "./components/layout/SideBar";
import AppHeader from "./components/layout/AppHeader";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
    const { pathname } = useLocation();

    const authPagesCheck = pathname == "/register" || pathname == "/login";

    return (
        <div className="flex">
            {authPagesCheck != true && <SideBar />}

            <div className="flex-1">
                {authPagesCheck != true && <AppHeader />}
                <div className="container py-6">
                    <Routes>
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;

import {
    RiBillLine,
    RiDashboardLine,
    RiHome9Line,
    RiUserFill,
} from "@remixicon/react";
import { Link } from "react-router";

export default function SideBar() {
    function handleLogout() {
        localStorage.removeItem("accessToken");
    }

    return (
        <aside className="w-[250px]">
            <div className="fixed w-[250px] h-screen bg-white border-r border-[#E2DDD8] relative">
                <div className="flex items-center gap-1 p-6 border-b border-[#E2DDD8]">
                    <div className="bg-[#2D6A4F] w-fit p-2 rounded-md">
                        <img src="/logo.png" alt="Logo" className="w-[20px]" />
                    </div>
                    <h1 className="secondary-font text-xl text-[#2D6A4F]">
                        InvoiceFlow
                    </h1>
                </div>
                <div className="p-6">
                    <div className="mb-4">
                        <h2 className="text-[12px] text-[#9E9893] uppercase mb-2">
                            Overview
                        </h2>
                        <Link
                            to="/dashboard"
                            className="bg-[#E8F4ED] text-[#2D6A4F] w-full text-start px-4 py-2 rounded-md flex items-center gap-1 cursor-pointer main-transition"
                        >
                            <RiDashboardLine className="w-[20px]" />
                            <span>Dashboard</span>
                        </Link>
                    </div>
                    <div>
                        <h2 className="text-[12px] text-[#9E9893] uppercase mb-2">
                            Management
                        </h2>
                        <Link
                            to="/suppliers"
                            className="text-[#6B6560] hover:bg-[#F0EDE8] hover:text-[#6B6560] w-full text-start px-4 py-2 rounded-md flex items-center gap-1 cursor-pointer main-transition"
                        >
                            <RiHome9Line className="w-[20px]" />
                            <span>Suppliers</span>
                        </Link>
                        <Link
                            to="/invoices"
                            className="text-[#6B6560] hover:bg-[#F0EDE8] hover:text-[#6B6560] w-full text-start px-4 py-2 rounded-md flex items-center gap-1 cursor-pointer main-transition"
                        >
                            <RiBillLine className="w-[20px]" />
                            <span>Invoices</span>
                        </Link>
                    </div>
                </div>
                <div className="p-6 border-t border-[#E2DDD8] absolute left-0 bottom-0 w-full">
                    <Link to="/login" onClick={handleLogout}>
                        <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#F0EDE8] main-transition">
                            <div className="w-[32px] h-[32px] bg-[#2D6A4F] text-white font-bold rounded-[50%] flex justify-center items-center">
                                <RiUserFill className="w-[18px]" />
                            </div>
                            <div>
                                <h3 className="text-sm">Log out</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </aside>
    );
}

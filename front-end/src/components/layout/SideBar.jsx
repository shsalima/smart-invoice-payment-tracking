import { RiBillLine, RiDashboardLine, RiHome9Line } from "@remixicon/react";
import { Link } from "react-router";

export default function SideBar() {
    return (
        <aside className="bg-white w-[250px] h-screen border-r border-[#E2DDD8] relative">
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
                    <button className="bg-[#E8F4ED] text-[#2D6A4F] w-full text-start px-4 py-2 rounded-md flex items-center gap-1 cursor-pointer main-transition">
                        <RiDashboardLine className="w-[20px]" />
                        <span>Dashboard</span>
                    </button>
                </div>
                <div>
                    <h2 className="text-[12px] text-[#9E9893] uppercase mb-2">
                        Management
                    </h2>
                    <button className="text-[#6B6560] hover:bg-[#F0EDE8] hover:text-[#6B6560] w-full text-start px-4 py-2 rounded-md flex items-center gap-1 cursor-pointer main-transition">
                        <RiHome9Line className="w-[20px]" />
                        <span>Suppliers</span>
                    </button>
                    <button className="text-[#6B6560] hover:bg-[#F0EDE8] hover:text-[#6B6560] w-full text-start px-4 py-2 rounded-md flex items-center gap-1 cursor-pointer main-transition">
                        <RiBillLine className="w-[20px]" />
                        <span>Invoices</span>
                    </button>
                </div>
            </div>
            <div className="p-6 border-t border-[#E2DDD8] absolute left-0 bottom-0 w-full">
                <Link to="/">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#F0EDE8] main-transition">
                        <div className="w-[32px] h-[32px] bg-[#2D6A4F] text-white font-bold rounded-[50%] flex justify-center items-center">
                            JD
                        </div>
                        <div>
                            <h3 className="text-sm leading-[1]">John Doe</h3>
                            <span className="text-[13px] text-[#9E9893]">
                                User
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </aside>
    );
}

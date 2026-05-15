import { Link } from "react-router";

export default function RegisterPage() {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-[#fff] border border-[#E2DDD8] rounded-[20px] p-[40px] w-[420px] [box-shadow:0_1px_3px_rgba(0,0,0,0.06),_0_4px_16px_rgba(0,0,0,0.04)]">
                <h1 className="secondary-font text-[28px] text-center text-[#2D6A4F] mb-2">
                    InvoiceFlow
                </h1>
                <h2 className="text-[14px] text-[#9E9893] text-center mb-4">
                    Supplier & Invoice Management
                </h2>
                <div className="flex border mb-6 border-[#E2DDD8] rounded-md overflow-hidden">
                    <Link
                        to="/login"
                        className="bg-transparent text-[#6B6560] flex-1 p-2.5 text-center text-[14px] cursor-pointer"
                    >
                        Log in
                    </Link>
                    <Link
                        to="/register"
                        className="bg-[#2D6A4F] text-white flex-1 p-2.5 text-center text-[14px] cursor-pointer"
                    >
                        Register
                    </Link>
                </div>

                <form>
                    <div className="mb-6">
                        <label
                            htmlFor="full-name"
                            className="block mb-2.5 text-sm font-medium text-heading"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="full-name"
                            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2.5 text-sm font-medium text-heading"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                            placeholder="john.doe@company.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block mb-2.5 text-sm font-medium text-heading"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                            placeholder="•••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="block w-full bg-[#2D6A4F] text-white text-[14px] px-4 py-2 rounded-md cursor-pointer"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}

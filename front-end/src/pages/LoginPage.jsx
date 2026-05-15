import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function LoginPage() {
    const { VITE_API_URL } = import.meta.env;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const body = { email: formData.email, password: formData.password };

        console.log(`${VITE_API_URL}/auth/login`);

        try {
            const response = await axios.post(
                `${VITE_API_URL}/auth/login`,
                body
            );

            localStorage.setItem("accessToken", response.data.accessToken);
            navigate("/dashboard", { replace: true });
        } catch (error) {
            console.log(
                `Status: ${error.response.status}, error: ${error.response.data.message}`
            );
            setErrorMessage(error.response.data.message);
        }

        console.log(formData);
    }

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
                        className="bg-[#2D6A4F] text-white flex-1 p-2.5 text-center text-[14px] cursor-pointer"
                    >
                        Log in
                    </Link>
                    <Link
                        to="/register"
                        className="bg-transparent text-[#6B6560] flex-1 p-2.5 text-center text-[14px] cursor-pointer"
                    >
                        Register
                    </Link>
                </div>

                <form onSubmit={handleSubmit}>
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
                            name="email"
                            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                            placeholder="john.doe@company.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block mb-2.5 text-sm font-medium text-heading"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-md focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                            placeholder="•••••••••"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    {errorMessage && (
                        <p className="text-red-500 mb-4">*{errorMessage}</p>
                    )}
                    <button
                        type="submit"
                        className="block w-full bg-[#2D6A4F] text-white text-[14px] px-4 py-2 rounded-md cursor-pointer"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

import { useNavigate } from "react-router";

export default function SupplierCart({ supplier }) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/suppliers/${supplier._id}`)}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all flex flex-col justify-between h-full"
        >
            <div>
                <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-lg flex items-center justify-center font-bold text-lg mb-6">
                    {supplier.name
                        ? supplier.name.substring(0, 2).toUpperCase()
                        : ""}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {supplier.name}
                </h3>
                <p className="text-sm text-gray-400 mb-8">
                    Category Placeholder
                </p>

                <hr className="mb-6 border-gray-100" />

                <div className="grid grid-cols-2 gap-4 "></div>
            </div>
        </div>
    );
}

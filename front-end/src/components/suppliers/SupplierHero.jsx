export default function SupplierHero({ openModel }) {
    return (
        <div className=" bg-[#F9F9F8] p-8">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Suppliers
                    </h1>
                    <p className="text-gray-500">
                        Manage your supplier relationships and view statistics.
                    </p>
                </div>
                <button
                    onClick={openModel}
                    className="bg-[#2D6A4F] hover:bg-[#1B4332] text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors cursor-pointer"
                >
                    <span className="text-xl">+ Add Supplier</span>
                </button>
            </div>
        </div>
    );
}


import { useNavigate } from "react-router";

export default function SupplierCart({supplier}){
        console.log(supplier)

    const navigate=useNavigate()

    return(
        <div 
        onClick={()=>navigate(`/suppliers/${supplier._id}`)}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shaduow-md transition-shadow  "
        >
            <div className="flex items-start justify-between mb-4">
                {/* <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-lg flex items-center justify-center font-bold text-lg">

                {supplier.initials}
                </div> */}
            </div>
            <h3 className="text-lg font-bold text-gray-900">{supplier.name}</h3>
            {/* <p className="text-sm text-gray-500 mb-6">{supplier.category}</p> */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Invoices</p>
                    {/* <p className="text-xl font-bold text-gray-800">{supplier.invoiceCount}</p> */}
                </div>
            </div>

            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                className="bg-emerald-600 h-full rounded-full"
               
                ></div>


            </div>
            {/* <p className="text-[10px] mt-2 text-gray-400 font-medium">{supplier.paidPercentage}% Paid</p> */}
        </div>
    )
}
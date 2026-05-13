import { useParams, useNavigate } from 'react-router';



export default function DetailSupplier(){

    const{supplierId}=useParams()
    const navigate=useNavigate()




    return(
        <div className="min-h-screen bg-[#F9F9F8] p-8">
      
      <button 
        onClick={() => navigate('/suppliers')}
        className="flex items-center text-gray-400 hover:text-gray-600 mb-8 transition-colors"
      >
        <span className="text-2xl mr-2">‹</span> Back to Suppliers
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center font-bold text-2xl">
                {/* {supplier.name.substring(0, 2).toUpperCase()} */}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">name hna kayn</h1>
                <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-md text-xs font-medium">Technology</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-6 border-t border-gray-50 pt-8">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Email</p>
                <p className="text-gray-700 font-medium">email hna ykon</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Phone</p>
                <p className="text-gray-700 font-medium">hna kayn phone</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Address</p>
                <p className="text-gray-700 font-medium">hna kayn  adress</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Partner Since</p>
                <p className="text-gray-700 font-medium">15 Mar 2021</p>
              </div>
            </div>
          </div>

        
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 flex justify-between items-center border-b border-gray-50">
              <h3 className="font-bold text-gray-900">Invoices from dyal smit fournisseur</h3>
              <button className="bg-[#2D6A4F] text-white px-4 py-2 rounded-lg text-sm font-medium">+ Invoice</button>
            </div>
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-[10px] uppercase text-gray-400 font-bold">
                <tr>
                  <th className="px-6 py-4">Ref</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Due</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-800 text-sm">INV-2024-001</p>
                    <p className="text-[10px] text-gray-400">Server components Q1</p>
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-800 text-sm">8 500,00 €</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">15 May 2024</td>
                  <td className="px-6 py-4">
                    <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold">Paid</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 font-medium mb-6">Statistics</h3>
            <div className="text-center mb-8">
              <p className="text-4xl font-serif font-bold text-gray-900">20 500,00 €</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">Total Invoiced</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-emerald-50 p-4 rounded-xl text-center">
                <p className="text-emerald-700 font-bold">8 500,00 €</p>
                <p className="text-[10px] text-emerald-600 font-medium">Paid</p>
              </div>
              <div className="bg-red-50 p-4 rounded-xl text-center">
                <p className="text-red-700 font-bold">12 000,00 €</p>
                <p className="text-[10px] text-red-600 font-medium">Outstanding</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] font-bold mb-2">
                  <span className="text-gray-400 uppercase">Payment rate</span>
                  <span className="text-gray-900">41%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full w-[41%]"></div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[10px] text-gray-400 font-bold uppercase">Overdue invoices</span>
                <span className="text-red-600 font-bold">1</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    )
}
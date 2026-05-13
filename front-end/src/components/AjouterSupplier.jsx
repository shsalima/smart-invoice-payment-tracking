

export default function AjouterSupplier({isOpen,onClose}){
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-2xl p-8 shadow-2-xl relative">
                <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 bg-gray-100 p-1 rounded-md">
                  <span className="text-xl px-1">×</span>
                </button>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">New Supplier</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-grap-700 mb-2">Company Name</label>
                            <input 
                              type="text"
                              placeholder="ACME Corp"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                              required
                              />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                            <input 
                                type="text"
                                placeholder="Technology"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <input 
                            type="email"
                            placeholder="billing@supplier.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                        <input 
                            type="text"
                            placeholder="+33..."
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                        />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Partner Since</label>
                            <input 
                                type="date"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                            />
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button
                                type="submit"
                                className="bg-[#2D6A4F] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1B4332] transition-colors"
                                >
                                Save
                                </button>
                                <button 
                                type="button"
                                onClick={onClose}
                                className="border border-gray-200 text-gray-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors"
                                >
                                Cancel
                                </button>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )

}
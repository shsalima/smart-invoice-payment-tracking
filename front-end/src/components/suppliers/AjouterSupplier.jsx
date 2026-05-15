import  axios  from 'axios';
import { useContext ,useState} from 'react';
import { UserContext } from '../../contexts/UserContext';


export default function AjouterSupplier({isOpen,onClose,onSupplierAdded}){
    const {VITE_API_URL}= import.meta.env
    const [formData,setFormData]=useState({name:"" })
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const {accessToken}=useContext(UserContext)

    if(!isOpen) return null;
    function handleChange(e){
        setFormData({name:e.target.value})

    }
    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        setErrorMessage(null);
        try{
            
            const response=await axios.post(`${VITE_API_URL}/suppliers`,formData,{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            if(onSupplierAdded){
                onSupplierAdded(response.data);
            }
            onClose();
        } catch (error) {
            console.error("Error adding supplier:", error);
            setErrorMessage(error.response?.data?.message || "Erreur lors de l'ajout.");

        }finally{
            setLoading(false);
        }
    }
    return(
        <div className="fixed inset-0 bg-[#00000078] bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-2xl p-8 shadow-2-xl relative">
                <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 bg-gray-100 p-1 rounded-md">
                  <span className="text-xl px-1">×</span>
                </button>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">New Supplier</h2>
                {errorMessage && (
                    <p className="text-red-500 mb-4 text-sm">*{errorMessage}</p>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                            <input 
                             type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="ACME Corp"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50"
                            required
                              />
                        </div>
                        {/* <div>
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
                            </div> */}
                            <div className="flex gap-4 pt-4 justify-end">
                        <button 
                            type="button"
                            onClick={onClose}
                            className="border border-gray-200 text-gray-600 px-6 py-2.5 rounded-xl font-bold hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#2D6A4F] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#1B4332] transition-colors disabled:bg-gray-400"
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>
                    </div>
                        {/* </div>
                    </div> */}

                </form>

            </div>
        </div>
    )

}
import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';
import SupplierStats from './SupplierStats';

export default function DetailSupplier() {
    const { supplierId } = useParams();
    const navigate = useNavigate();
    const { VITE_API_URL } = import.meta.env;

    const [supplier, setSupplier] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    

    const { accessToken } = useContext(UserContext);

    useEffect(() => {
        async function fetchSupplierDetail() {
            try {
                const response = await axios.get(`${VITE_API_URL}/suppliers/${supplierId}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                setSupplier(response.data);
            } catch (error) {
                console.error("Error fetching supplier details:", error);
                setErrorMessage("Impossible de charger les détails du fournisseur.");
            } finally {
                setLoading(false);
            }
        }

        if (supplierId && accessToken) {
            fetchSupplierDetail();
        }
    }, [supplierId, accessToken, VITE_API_URL]);

    if (loading) {
        return <div className="min-h-screen bg-[#F9F9F8] flex items-center justify-center">Chargement en cours...</div>;
    }

    if (errorMessage || !supplier) {
        return (
            <div className="min-h-screen bg-[#F9F9F8] p-8 text-center text-red-500">
                <p>*{errorMessage || "Fournisseur introuvable."}</p>
                <button onClick={() => navigate('/suppliers')} className="mt-4 bg-[#2D6A4F] text-white px-4 py-2 rounded-lg">
                    Back to Suppliers
                </button>
            </div>
        );
    }
    console.log(supplier);
    
    const formatDate = (dateString) => {
        if (!dateString) return "Not available";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

  

    return (
        <div className="min-h-screen w-full overflow-x-hidden p-8 bg-[#F9F9F8]">
            
          
            <button 
                onClick={() => navigate('/suppliers')}
                className="flex items-center text-gray-400 hover:text-gray-600 mb-4 transition-colors"
            >
                <span className="text-2xl mr-2">‹</span> Back to Suppliers
            </button>

            <div className="w-full space-y-8">
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center font-bold text-2xl">
                            {supplier.name ? supplier.name.substring(0, 2).toUpperCase() : ""}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{supplier.name}</h1>
                            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-md text-xs font-medium">Technology</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-y-6 border-t border-gray-50 pt-8">
                        <div>
                            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Partner Since</p>
                            <p className="text-gray-700 font-medium">{formatDate(supplier.createdAt)}</p>
                        </div>
                    </div>
                </div>
                <SupplierStats/>

      






            </div>
        </div>
    );
}
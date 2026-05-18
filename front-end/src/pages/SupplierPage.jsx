import AjouterSupplier from "../components/suppliers/AjouterSupplier";
import SupplierCart from "../components/suppliers/SupplierCart";
import SupplierHero from "../components/suppliers/SupplierHero";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

export default function SupplierPage() {
    const { VITE_API_URL } = import.meta.env;

    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const { accessToken } = useContext(UserContext);
    // console.log(accessToken,"fff")

    useEffect(() => {
        async function fetchSuppliers() {
            try {
                const response = await axios.get(`${VITE_API_URL}/suppliers`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setSuppliers(response.data.suppliers);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching suppliers:", error);
                setErrorMessage("Impossibe de charger les fournisseurs.");
            } finally {
                setLoading(false);
            }
        }
        fetchSuppliers();
    }, []);

    return (
        <div className="min-h-screen bg-[#F9F9F8] p-8">
            <SupplierHero
                loading={loading}
                openModel={() => setIsModalOpen(true)}
            />
            {errorMessage && (
                <p className="text-red-500 mt-4 text-center">*{errorMessage}</p>
            )}
            {loading ? (
                <p className="text-center mt-8 text-gray-500">
                    Chargement en cours...
                </p>
            ) : (
                <div className="flex max-xl:justify-center flex-wrap gap-8 mt-8">
                    {suppliers.length ? (
                        suppliers.map((supplier) => (
                            <SupplierCart
                                key={supplier._id}
                                supplier={supplier}
                            />
                        ))
                    ) : (
                        <p>rah makayn 7ta supplier</p>
                    )}
                </div>
            )}

            {isModalOpen && (
                <AjouterSupplier
                    onClose={() => setIsModalOpen(false)}
                    isOpen={isModalOpen}
                    onSupplierAdded={(newSupplier) =>
                        setSuppliers((prev) => [newSupplier, ...prev])
                    }
                />
            )}
        </div>
    );
}

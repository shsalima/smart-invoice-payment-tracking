import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { UserContext } from "../../contexts/UserContext";

export default function SupplierStats() {
    const { supplierId } = useParams();
    const navigate = useNavigate();
    const { VITE_API_URL } = import.meta.env;

    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const { accessToken } = useContext(UserContext);

    useEffect(() => {
        async function fetchSupplierStats() {
            try {
                const response = await axios.get(
                    `${VITE_API_URL}/suppliers/${supplierId}/stats`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                setStats(response.data);
            } catch (error) {
                console.error("Error fetching supplier stats:", error);
                setErrorMessage("Impossible de charger les statistiques.");
            } finally {
                setLoading(false);
            }
        }

        if (supplierId && accessToken) {
            fetchSupplierStats();
        }
    }, []);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
        }).format(value);
    };

    const hasInvoices = stats && stats.invoices && stats.invoices.length > 0;

    let totalPaid = 0;
    let totalOutstanding = 0;
    let totalInvoiced = 0;
    let paymentRate = 0;

    if (hasInvoices) {
        totalPaid = stats.invoices
            .filter((inv) => inv.status && inv.status.toLowerCase() === "paid")
            .reduce((sum, inv) => sum + inv.amount, 0);

        totalOutstanding = stats.invoices
            .filter((inv) => inv.status && inv.status.toLowerCase() !== "paid")
            .reduce((sum, inv) => sum + inv.amount, 0);

        totalInvoiced = totalPaid + totalOutstanding;
        paymentRate =
            totalInvoiced > 0
                ? Math.round((totalPaid / totalInvoiced) * 100)
                : 0;
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F9F9F8] flex items-center justify-center">
                Chargement en cours...
            </div>
        );
    }

    if (errorMessage || !stats) {
        return (
            <div className="min-h-screen bg-[#F9F9F8] p-8 text-center text-red-500">
                <p>*{errorMessage || "Statistiques indisponibles."}</p>
                <button
                    onClick={() => navigate("/suppliers")}
                    className="mt-4 bg-[#2D6A4F] text-white px-4 py-2 rounded-lg"
                >
                    Back to Suppliers
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full">
            <h3 className="text-gray-500 font-medium mb-6">Statistics</h3>

            {hasInvoices ? (
                <>
                    <div className="text-center mb-8">
                        <p className="text-4xl font-serif font-bold text-gray-900">
                            {formatCurrency(totalInvoiced)}
                        </p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">
                            Total Invoiced
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-emerald-50 p-4 rounded-xl text-center">
                            <p className="text-emerald-700 font-bold">
                                {formatCurrency(totalPaid)}
                            </p>
                            <p className="text-[10px] text-emerald-600 font-medium">
                                Paid
                            </p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-xl text-center">
                            <p className="text-red-700 font-bold">
                                {formatCurrency(totalOutstanding)}
                            </p>
                            <p className="text-[10px] text-red-600 font-medium">
                                Outstanding
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-[10px] font-bold mb-2">
                                <span className="text-gray-400 uppercase">
                                    Payment rate
                                </span>
                                <span className="text-gray-900">
                                    {paymentRate}%
                                </span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-emerald-600 h-full transition-all duration-300"
                                    style={{ width: `${paymentRate}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center py-8 text-gray-400 text-sm italic border-t border-gray-50">
                    Aucune donnée statistique disponible pour ce fournisseur
                    (Pas de factures).
                </div>
            )}
        </div>
    );
}

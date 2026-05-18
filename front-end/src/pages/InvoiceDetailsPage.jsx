import { useParams } from "react-router";
import InvoiceInfo from "../components/InvoicesComponents/InvoiceInfo";
import PaymentHistory from "../components/InvoicesComponents/PaymentHistory";
import SupplierInfoCard from "../components/InvoicesComponents/SupplierInfoCard";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const oneInvoiceContext = createContext();
export default function InvoiceDetailsPage() {
    const { id } = useParams();
    const token = localStorage.getItem("accessToken");
    const [oneInvoiceData, setOneInvoiceData] = useState(null);

    function mappedInvoice(oneInvoiceData) {
        const mappedInvoice = {
            ref: `INV-${new Date().getFullYear()}-${oneInvoiceData._id
                .slice(-3)
                .toUpperCase()}`,
            supplierName: oneInvoiceData.supplierId || "Unknown Supplier",
            description: oneInvoiceData.description || "No description",
            amount: oneInvoiceData.amount || 0,
            paid: oneInvoiceData.currentAmount || 0,
            date: oneInvoiceData.createdAt?.split("T")[0] || "No date",
            status: oneInvoiceData.status || "unpaid",
            supplier: oneInvoiceData.supplierDetails[0],
        };
        return mappedInvoice;
    }

    async function fetchInvoiceData() {
        try {
            const res = await axios.get(
                `http://localhost:3000/api/invoices/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setOneInvoiceData(mappedInvoice(res.data[0]));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchInvoiceData();
    }, []);

    if (!oneInvoiceData) {
        return <p>Loading...</p>;
    }

    const supplierData = oneInvoiceData.supplier;

    return (
        <oneInvoiceContext.Provider
            value={{ oneInvoiceData, fetchInvoiceData }}
        >
            <div>
                <InvoiceInfo />
                <div className="detail-page-layout">
                    <PaymentHistory />
                    <SupplierInfoCard supplierData={supplierData} />
                </div>
            </div>
        </oneInvoiceContext.Provider>
    );
}

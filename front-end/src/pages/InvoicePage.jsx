import { useContext, useEffect, useState } from "react";
import { InvoiceHeader } from "../components/InvoicesComponents/invoiceHeader";
import InvoiceTable from "../components/InvoicesComponents/InvoicesTable";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { InvoiceContext } from "../contexts/InvoiceContext";

export function InvoicePage() {
    const { accessToken } = useContext(UserContext);

    const [invoiceData, setInvoiceData] = useState(null);
    useEffect(() => {
        async function fetchInvoiceData() {
            try {
                const res = await axios.get(
                    `http://localhost:3000/api/invoices`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                setInvoiceData(res.data.invoice);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        fetchInvoiceData();
    }, []);

    return (
        <InvoiceContext.Provider
            value={{
                invoiceData,
                setInvoiceData,
            }}
        >
            <div>
                <InvoiceHeader />
                <InvoiceTable />
            </div>
        </InvoiceContext.Provider>
    );
}

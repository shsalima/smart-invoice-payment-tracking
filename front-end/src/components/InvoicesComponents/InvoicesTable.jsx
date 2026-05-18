import { useContext } from "react";
import "../../css/style.css";
import { InvoiceContext } from "../../contexts/InvoiceContext";
import { useNavigate } from "react-router";

export default function InvoiceTable() {
    const { invoiceData } = useContext(InvoiceContext);
    const navigate = useNavigate();

    if (!invoiceData) {
        return <p>Loading...</p>;
    }

    console.log("Rendering data...", invoiceData);

    return (
        <div className="invoice-wrapper">
            <table className="invoice-table">
                <thead>
                    <tr>
                        <th>Supplier ID</th>
                        <th>Amount</th>
                        <th>Paid</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceData.map((inv) => (
                        <tr
                            key={inv._id}
                            onClick={() => navigate(`/invoices/${inv._id}`)}
                        >
                            <td className="td-supplier">{inv.supplierId}</td>
                            <td className="td-amount">{inv.amount} DH</td>
                            <td className="td-paid">
                                {!inv.paid ? "0.00 DH" : `${inv.paid} DH`}
                            </td>
                            <td>
                                <span
                                    className={`badge badge-${inv.status.toLowerCase()}`}
                                >
                                    {inv.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

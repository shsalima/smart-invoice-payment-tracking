import { useContext, useState } from "react";
import "../../css/style.css";
import { InvoiceContext } from "../../pages/InvoicePage";
import { useNavigate } from "react-router-dom";

// const invoices = [
//   {
//     ref: "INV-2026-007",
//     supplier: "TechParts SARL",
//     description: "ss",
//     amount: 24536,
//     paid: 0,
//     dueDate: "12 Jun 2026",
//     status: "Unpaid",
//   },
//   {
//     ref: "INV-2026-008",
//     supplier: "Logistix Pro",
//     description: "—",
//     amount: 44445,
//     paid: 444,
//     dueDate: "12 Jun 2026",
//     status: "Partial",
//   },
//   {
//     ref: "INV-2024-006",
//     supplier: "Logistix Pro",
//     description: "Shipping June batch",
//     amount: 1800,
//     paid: 1800,
//     dueDate: "01 Jul 2024",
//     status: "Paid",
//   },
//   {
//     ref: "INV-2024-002",
//     supplier: "Logistix Pro",
//     description: "Warehouse handling April",
//     amount: 3200,
//     paid: 3200,
//     dueDate: "01 Jun 2024",
//     status: "Paid",
//   },
//   {
//     ref: "INV-2024-004",
//     supplier: "Bureau Équip.",
//     description: "Office stationery bulk",
//     amount: 640,
//     paid: 640,
//     dueDate: "30 May 2024",
//     status: "Paid",
//   },
//   {
//     ref: "INV-2024-005",
//     supplier: "CloudInfra SAS",
//     description: "Cloud hosting May",
//     amount: 4200,
//     paid: 4200,
//     dueDate: "10 May 2024",
//     status: "Paid",
//   },
//   {
//     ref: "INV-2024-001",
//     supplier: "TechParts SARL",
//     description: "Server components Q1",
//     amount: 8500,
//     paid: 8500,
//     dueDate: "15 May 2024",
//     status: "Paid",
//   },
//   {
//     ref: "INV-2024-003",
//     supplier: "TechParts SARL",
//     description: "Network equipment upgrade",
//     amount: 12000,
//     paid: 12000,
//     dueDate: "20 Apr 2024",
//     status: "Unpaid",
//   },
// ];

export default function InvoiceTable() {
  const [hovered, setHovered] = useState(null);
  const { invoiceData } = useContext(InvoiceContext);
  console.log("invoice data: ", invoiceData);
  const navigate = useNavigate();

  return (
    <div className="invoice-wrapper">
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Reference</th>
            <th>Supplier</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Paid</th>
            {/* <th>Due Date</th> */}
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.map((inv, i) => (
            <tr
              key={inv.ref}
              className={hovered === i ? "row-hovered" : ""}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate(`/invoices/${inv._id}`)}
            >
              <td className="td-ref">{inv.ref}</td>
              <td className="td-supplier">{inv.supplier}</td>
              <td className="td-description">{inv.description}</td>
              <td className="td-amount">{inv.amount} DH</td>
              <td className="td-paid">
                {!inv.paid ? "0.00 DH" : `${inv.paid} DH`}
              </td>
              {/* <td className="td-date">{inv.dueDate} </td> */}
              <td>
                <span className={`badge badge-${inv.status.toLowerCase()}`}>
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

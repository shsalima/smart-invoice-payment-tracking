import { useContext } from "react";
import "../../css/style.css";
import { oneInvoiceContext } from "../../pages/InvoiceDetailsPage";

export default function InvoiceInfo() {
  const { oneInvoiceData } = useContext(oneInvoiceContext);

  console.log("invoice data", oneInvoiceData);

  if (!oneInvoiceData) return <p>Loading...</p>;

  return (
    <div className="card">
      <div className="header-info-card">
        <div>
          <div className="supplier-name">{oneInvoiceData.supplierName}</div>

          <p className="supplier-des">{oneInvoiceData.description}</p>
        </div>

        <span className={`badge badge-${oneInvoiceData.status?.toLowerCase()}`}>
          {oneInvoiceData.status}
        </span>
      </div>

      <div className="divider"></div>

      <div className="details-flex">
        <div className="detail-field">
          <span className="label">Supplier</span>
          <span className="value">{oneInvoiceData.supplierName}</span>
        </div>

        <div className="detail-field">
          <span className="label">Invoice date</span>
          <span className="value">{oneInvoiceData.date}</span>
        </div>

        <div className="detail-field">
          <span className="label">Amount</span>
          <span className="value">{oneInvoiceData.amount} DH</span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="grid-status">
        <div className="amount-status">
          <span className="status-value">{oneInvoiceData.amount} DH</span>

          <span className="status-label">Invoice</span>
        </div>

        <div className="amount-status green">
          <span className="status-value">{oneInvoiceData.paid} DH</span>

          <span className="status-label">Paid</span>
        </div>

        <div
          className={`amount-status ${
            oneInvoiceData.paid === oneInvoiceData.amount ? "green" : "red"
          }`}
        >
          <span className="status-value">
            {oneInvoiceData.amount - oneInvoiceData.paid} DH
          </span>
          <span className="status-label">Remain</span>
        </div>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${(oneInvoiceData.paid / oneInvoiceData.amount) * 100}%`,
          }}
        ></div>
      </div>

      <div className="collected">
        ({Math.round((oneInvoiceData.paid / oneInvoiceData.amount) * 100)}
        %) collected
      </div>
    </div>
  );
}

import "../../css/style.css";
export default function InvoiceInfo() {
  const invoices = [
    {
      ref: "INV-2026-007",
      supplier: "TechParts SARL",
      description: "test test tsedf",
      amount: 24536,
      paid: 24536,
      date: "12 Jun 2026",
      status: "Unpaid",
    },
  ];
  return (
    <div>
      {invoices.map((inv) => (
        <div className="info-card">
          <div className="header-info-card">
            <div>
              <div className="supplier-name">{inv.supplier}</div>
              <p className="supplier-des">{inv.description}</p>
            </div>
            <span className={`badge badge-${inv.status.toLocaleLowerCase()}`}>
              {inv.status}
            </span>
          </div>
          <div className="divider"></div>
          <div className="details-flex">
            <div className="detail-field">
              <span className="label">Supplier</span>
              <span className="value">{inv.supplier}</span>
            </div>
            <div className="detail-field">
              <span className="label">Invoice date</span>
              <span className="value">{inv.date}</span>
            </div>
            <div className="detail-field">
              <span className="label">Amount</span>
              <span className="value">{inv.amount} DH</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid-status">
            <div className="amount-status">
              <span className="status-value">{inv.amount} DH</span>
              <span className="status-label">Invoice</span>
            </div>
            <div
              className={`amount-status ${inv.paid === inv.amount ? "green" : "green"}`}
            >
              <span className="status-value">{inv.paid} DH</span>
              <span className="status-label">Paid</span>
            </div>
            <div
              className={`amount-status ${inv.paid === inv.amount ? "green" : "red"}`}
            >
              <span className="status-value">{inv.amount - inv.paid} DH</span>
              <span className="status-label">Remain</span>
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <div className="collected"> (0%) collected</div>
        </div>
      ))}
    </div>
  );
}

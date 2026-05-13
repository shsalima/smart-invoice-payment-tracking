import "../../css/style.css";

export function InvoiceHeader() {
  return (
    <div className="content">
      <h1>Invoices</h1>
      <p>Track, filter and manage all supplier invoices.</p>
      <div className="header-container">
        <div className="filter-buttons">
          <button>All (6)</button>
          <button>Paid (4)</button>
          <button>Partial (1)</button>
          <button>Unpaid (1)</button>
        </div>
        <button className="new-invoice-btn">+ New Invoice</button>
      </div>
    </div>
  );
}

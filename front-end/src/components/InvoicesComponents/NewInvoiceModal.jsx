import "../../css/style.css";
export function NewInvoiceModal() {
  return (
    <div className="modal">
      <div className="modal-header">
        <span>New Invoice</span>
        <button>&times;</button>
      </div>
      <div className="modal-body">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Reference *</label>
            <input type="text" placeholder="INV-2026-009" />
          </div>
          <div className="form-group">
            <label className="form-label">Reference *</label>
            <input type="text" placeholder="INV-2026-009" />
          </div>
        </div>
      </div>
    </div>
  );
}

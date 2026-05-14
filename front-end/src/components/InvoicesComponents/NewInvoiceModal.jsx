import "../../css/style.css";
export default function NewInvoiceModal({ onClose }) {
  return (
    <div className="overlay-modal">
      <div className="modal">
        <div className="modal-header">
          <span>New Invoice</span>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Reference *</label>
              <input
                className="form-input"
                type="text"
                placeholder="INV-2026-009"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Supplier *</label>
              <select className="form-input" name="" id="">
                <option value="1">TechParts SARL</option>
                <option value="2">Logistix Pro</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <input
              className="form-input"
              type="text"
              placeholder="what is this invoice for?"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Amount (DH) *</label>
              <input className="form-input" type="text" placeholder="0.00" />
            </div>
            <div className="form-group">
              <label className="form-label">Date *</label>
              <input className="form-input" type="date" />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-input"
              rows="2"
              placeholder="Optional notes..."
            ></textarea>
          </div>
        </div>
        <div className="form-action">
          <button className="btn btn-save">Save</button>
          <button onClick={onClose} className="btn btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

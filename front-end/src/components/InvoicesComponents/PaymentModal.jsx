import "../../css/style.css";
export default function PaymentModal({ onClose }) {
  return (
    <div className="overlay-modal ">
      <div className="modal">
        <div className="modal-header">
          <span>New Payment</span>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="form-group">
          <label className="form-label">Amount (DH) *</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">date</label>
            <input type="date" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Payment Method</label>
            <select className="form-input">
              <option value="bank transfer">bank transfer</option>
              <option value="cash">cash</option>
              <option value="Credit card">Credit card</option>
              <option value="check">check</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Note</label>
          <input type="text" className="form-input" placeholder="note..." />
        </div>
        <div className="form-action">
          <button className="btn btn-save">Save</button>
          <button className="btn btn-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

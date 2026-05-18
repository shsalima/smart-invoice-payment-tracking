import "../../css/style.css";
export default function AddPaymentBtn({ onOpen }) {
  return (
    <div>
      <button onClick={onOpen} className="new-invoice-btn btn-sm">
        + Add Payment
      </button>
    </div>
  );
}

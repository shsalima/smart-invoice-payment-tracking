export default function PaymentRow() {
  return (
    <div>
      <div className="payment-item">
        <div className="payment-details">
          <span style={{ fontWeight: 500 }}>5000 DH</span>
          <span className="payment-way">bank transfer</span>
        </div>
        <span className="badge badge-paid">paid</span>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default function PaymentRow({ payment }) {
  console.log("this payment ", payment);
  return (
    <div>
      {payment.map((p) => (
        <div className="payment-item">
          <div className="payment-details">
            <span style={{ fontWeight: 500 }}>{p.amount}</span>
            <span className="payment-way">bank transfer</span>
          </div>
          <span className="badge badge-paid">paid</span>
        </div>
      ))}
      {/* <div className="divider"></div> */}
    </div>
  );
}

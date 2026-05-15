import { useState } from "react";
import "../../css/style.css";
import AddPaymentBtn from "./AddPaymentBtn";
import PaymentRow from "./PaymentRow";
import PaymentModal from "./PaymentModal";

export default function PaymentHistory() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);

  const invoices = [
    {
      ref: "INV-2026-007",
      supplier: "TechParts SARL",
      description: "test test tsedf",
      amount: 333,
      paid: 3,
      date: "12 Jun 2026",
      status: "paid",
    },
  ];

  return (
    <div className="card" style={{ marginTop: "10px" }}>
      {invoices.map((inv) => (
        <div key={inv.ref}>
          <div className="payment-header">
            <div>Payment History</div>

            {inv.paid >= inv.amount ? (
              <span className={`badge badge-${inv.status.toLowerCase()}`}>
                Fully {inv.status}
              </span>
            ) : (
              <AddPaymentBtn onOpen={() => setShowModal(true)} />
            )}

            {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
          </div>
          <PaymentRow />
        </div>
      ))}
    </div>
  );
}

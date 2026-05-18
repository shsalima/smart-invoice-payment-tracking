import { useState } from "react";
import "../../css/style.css";
import { oneInvoiceContext } from "../../pages/InvoiceDetailsPage";
import AddPaymentBtn from "./AddPaymentBtn";
import PaymentRow from "./PaymentRow";
import PaymentModal from "./PaymentModal";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useContext } from "react";

export default function PaymentHistory() {
  const { oneInvoiceData, fetchInvoiceData } = useContext(oneInvoiceContext);
  const token = localStorage.getItem("accessToken");
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [payment, setPayments] = useState([]);
  async function fetchPaymentData() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/invoices/${id}/payments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("payments", response.data.payments);

      setPayments(response.data.payments);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchPaymentData();
  }, [id, token]);
  useEffect(() => {
    fetchInvoiceData();
  }, []);
  const invoices = [oneInvoiceData];

  return (
    <div className="card">
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

            {showModal && (
              <PaymentModal
                onClose={() => setShowModal(false)}
                fetchPaymentData={fetchPaymentData}
                fetchInvoiceData={fetchInvoiceData}
              />
            )}
          </div>
          <PaymentRow payment={payment} />
        </div>
      ))}
    </div>
  );
}

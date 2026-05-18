import { useState } from "react";
import "../../css/style.css";
import axios from "axios";
import { useParams } from "react-router";

export default function PaymentModal({
  onClose,
  fetchPaymentData,
  fetchInvoiceData,
}) {
  const { id } = useParams();

  const [paymentDate, setPaymentDate] = useState({
    amount: "",
    date: new Date().toISOString().split("T")[0],
    paymentMethod: "",
    note: "",
  });

  async function paymentHandler(e) {
    e.preventDefault();

    const newPayment = {
      ...paymentDate,
      amount: Number(paymentDate.amount),
    };

    try {
      const token = localStorage.getItem("accessToken");

      const res = await axios.post(
        `http://localhost:3000/api/invoices/${id}/payments`,
        newPayment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("payment sent", res.data);

      // refresh data instantly
      await fetchPaymentData();
      await fetchInvoiceData();

      onClose();
    } catch (error) {
      console.error("payment error: ", error);
    }
  }

  function onChangeHandler(e) {
    const { name, value } = e.target;

    setPaymentDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="overlay-modal">
      <form onSubmit={paymentHandler} className="modal">
        <div className="modal-header">
          <span>New Payment</span>

          <button type="button" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="form-group">
          <label className="form-label">Amount (DH) *</label>

          <input
            type="text"
            className="form-input"
            name="amount"
            value={paymentDate.amount}
            onChange={onChangeHandler}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Date</label>

            <input
              type="date"
              className="form-input"
              name="date"
              value={paymentDate.date}
              onChange={onChangeHandler}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Payment Method</label>

            <select
              className="form-input"
              name="paymentMethod"
              value={paymentDate.paymentMethod}
              onChange={onChangeHandler}
            >
              <option value="" disabled>
                Select payment method
              </option>

              <option value="bank transfer">
                bank transfer
              </option>

              <option value="cash">cash</option>

              <option value="Credit card">
                Credit card
              </option>

              <option value="check">check</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Note</label>

          <input
            type="text"
            className="form-input"
            placeholder="note..."
            name="note"
            value={paymentDate.note}
            onChange={onChangeHandler}
          />
        </div>

        <div className="form-action">
          <button type="submit" className="btn btn-save">
            Save
          </button>

          <button
            type="button"
            className="btn btn-cancel"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../../css/style.css";
import { InvoiceContext } from "../../contexts/InvoiceContext";

export default function NewInvoiceModal({ onClose }) {
  const token = localStorage.getItem("accessToken");
  const [supplier, setSupplier] = useState([]);
  const { invoiceData, setInvoiceData } = useContext(InvoiceContext);
  const [newInvoicesData, setNewInvoicesData] = useState({
    supplierId: "",
    // supplier: "",
    description: "",
    amount: "",
    date: "",
    note: "",
  });
  useEffect(() => {
    async function fetchSupplierData() {
      try {
        const res = await axios.get("http://localhost:3000/api/suppliers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSupplier(res.data.suppliers);
      } catch (error) {
        console.log("Error fetching supplier:", error);
      }
    }
    fetchSupplierData();
  }, [token]);
  console.log(supplier);

  async function submitHandler(e) {
    e.preventDefault();
    const newInvoice = { ...newInvoicesData };

    try {
      const token = localStorage.getItem("accessToken");
      const res = await axios.post(
        "http://localhost:3000/api/invoices",
        newInvoice,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("data sent", res.data);
      setInvoiceData([...invoiceData, res.data]);
      onClose();
    } catch (error) {
      console.error("failed", error.response.data);
    }
    setNewInvoicesData({
      // reference: "",
      supplierId: "",
      description: "",
      amount: "",
      date: "",
      note: "",
    });
  }

  function onChangeHandler(e) {
    const { name, value } = e.target;
    setNewInvoicesData({ ...newInvoicesData, [name]: value });
    console.log(e.target.value);
  }

  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <div className="overlay-modal">
      <div className="modal">
        <div className="modal-header">
          <span>New Invoice</span>
          <button onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={submitHandler} className="modal-body">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Reference *</label>
              <input
                className="form-input"
                type="text"
                placeholder="INV-2026-009"
                value={newInvoicesData.reference}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Supplier *</label>
              <select
                className="form-input"
                name="supplierId"
                value={newInvoicesData.supplierId}
                onChange={(e) => onChangeHandler(e)}
              >
                <option value="">choose the supplier</option>
                {supplier.map((sup) => (
                  <option key={sup._id} value={sup._id}>
                    {sup.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <input
              className="form-input"
              type="text"
              placeholder="what is this invoice for?"
              name="description"
              value={newInvoicesData.description}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Amount (DH) *</label>
              <input
                className="form-input"
                type="text"
                placeholder="0.00"
                name="amount"
                value={newInvoicesData.amount}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Date *</label>
              <input
                className="form-input"
                readOnly
                type="date"
                name="date"
                value={currentDate}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Note</label>
            <textarea
              className="form-input"
              rows="2"
              placeholder="Optional notes..."
              name="note"
              value={newInvoicesData.note}
              onChange={(e) => onChangeHandler(e)}
            ></textarea>
          </div>
          <div className="form-action">
            <button type="submit" className="btn btn-save">
              Save
            </button>
            <button onClick={onClose} className="btn btn-cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

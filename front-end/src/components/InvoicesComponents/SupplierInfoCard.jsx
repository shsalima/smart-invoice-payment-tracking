export default function SupplierInfoCard({ supplierData }) {
  console.log("supplierData", supplierData);

  // Prevent crashing before data loads
  if (!supplierData) {
    return <div className="card">No Supplier Data</div>;
  }

  return (
    <div className="card">
      <h3 className="card-title">Supplier Info</h3>

      <div className="supplier-header">
        <div className="supplier-logo">
          {supplierData.name?.slice(0, 2).toUpperCase()}
        </div>

        <div>
          <h4 className="supplier-name">{supplierData.name}</h4>

          <p className="supplier-category">Supplier</p>
        </div>
      </div>

      <div className="supplier-contact">
        <p>✉ {supplierData.email || "No Email"}</p>

        <p>📞 {supplierData.phone || "No Phone"}</p>
      </div>
    </div>
  );
}

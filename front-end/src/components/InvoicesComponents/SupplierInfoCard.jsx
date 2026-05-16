export default function SupplierInfoCard() {
  return (
    <div className="card">
      <h3 className="card-title">Supplier Info</h3>

      <div className="supplier-header">
        <div className="supplier-logo">LP</div>

        <div>
          <h4 className="supplier-name">Logistix Pro</h4>
          <p className="supplier-category">Logistics</p>
        </div>
      </div>

      <div className="supplier-contact">
        <p>✉ billing@logistixpro.com</p>
        <p>📞 +33 4 56 78 90 12</p>
      </div>
    </div>
  );
}

import InvoiceInfo from "../components/InvoicesComponents/InvoiceInfo";
import PaymentHistory from "../components/InvoicesComponents/PaymentHistory";
import SupplierInfoCard from "../components/InvoicesComponents/SupplierInfoCard";

export default function InvoiceDetailsPage() {
  return (
    <div>
      <InvoiceInfo />
      <div className="detail-page-layout">
        <PaymentHistory />
        <SupplierInfoCard />
      </div>
    </div>
  );
}

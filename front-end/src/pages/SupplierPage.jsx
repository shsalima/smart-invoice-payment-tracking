import AjouterSupplier from "../components/suppliers/AjouterSupplier";
import SupplierCart from "../components/suppliers/SupplierCart";
import SupplierHero from "../components/suppliers/SupplierHero";
import { useEffect, useState } from "react";
import SupplierDetailPage from "./SupplierDetailPage";

export default function SupplierPage() {
  const suppliersData = [
    {
      _id: "69d61ff53a6fce13b876006c",
      name: "supplier 1",
      clientId: "69d3cab25da90a00b6953397",
      createdAt: "2026-04-08T09:29:25.537Z",
      __v: 0,
    },
    {
      _id: "69d9046ce7b87b8b0604c3e3",
      name: "supplier 2",
      clientId: "69d3cab25da90a00b6953397",
      createdAt: "2026-04-10T14:08:44.080Z",
      __v: 0,
    },
    {
      _id: "69d90631e7b87b8b0604c3e4",
      name: "supplier 4",
      clientId: "69d3cab25da90a00b6953397",
      createdAt: "2026-04-10T14:16:17.229Z",
      __v: 0,
    },
    {
      _id: "69d90636e7b87b8b0604c3e5",
      name: "supplier 5",
      clientId: "69d3cab25da90a00b6953397",
      createdAt: "2026-04-10T14:16:22.501Z",
      __v: 0,
    },
    {
      _id: "69d90744af00fa5f477590b3",
      name: "supplier 6",
      clientId: "69d3cab25da90a00b6953397",
      createdAt: "2026-04-10T14:20:52.883Z",
      __v: 0,
    },
  ];

  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setSuppliers(suppliersData);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F8] p-8">
      <SupplierHero loading={loading} openModel={() => setIsModalOpen(true)} />

      {/* Hna fin drna l-grid bach les cartes i-jiw m-stfin fhal image_2c9b34.png */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {suppliers.map((supplier) => (
          <SupplierCart key={supplier._id} supplier={supplier} />
        ))}
      </div>

      {isModalOpen && (
        <AjouterSupplier
          onClose={() => setIsModalOpen(false)}
          isOpen={isModalOpen}
        />
      )}
      {/* <SupplierDetailPage/> */}
    </div>
  );
}

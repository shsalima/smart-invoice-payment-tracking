// import { useEffect, useState } from "react";
// import axios from "axios";
import { statsData, invoicesData, suppliersData } from "../data/dashboardMock";
import "../style/PageDashboard.css";
import LatestInvoices from "../components/dashboard/LatestInvoices";
import StatsCard from "../components/dashboard/StatsCard";
import TopSuppliers from "../components/dashboard/TopSuppliers";

function PageDashboard() {
    // const [statsData, setStatsData] = useState([]);
    // const [invoicesData, setInvoicesData] = useState([]);
    // const [suppliersData, setSuppliersData] = useState([]);

    // useEffect(() => {
    //   // هنا كنجيب data من backend
    //   axios.get("http://localhost:3000/api/dashboard")
    //     .then(res => {
    //       console.log("DATA:", res.data);
    //       console.log(LatestInvoices);

    //       // حسب structure ديال API ديالك
    //       setStatsData(res.data.stats);
    //       setInvoicesData(res.data.invoices);
    //       setSuppliersData(res.data.suppliers);
    //     })
    //     .catch(err => {
    //       console.error(err);
    //     });
    // }, []);

    return (
        <div className="content">
            <div className="page-header">
                <header>
                    <h3>
                        <b>Welcome back, Sophie 👋</b>
                    </h3>
                    <p>Here's your financial overview for today.</p>
                </header>

                <section className="stats">
                    {statsData.map((item, index) => (
                        <StatsCard
                            key={index}
                            title={item.title}
                            value={item.value}
                            subtitle={item.subtitle}
                        />
                    ))}
                </section>

                <div className="grid">
                    <section>
                        <LatestInvoices data={invoicesData} />
                    </section>

                    <section>
                        <TopSuppliers data={suppliersData} />
                    </section>
                </div>
            </div>
        </div>
    );
}
export default PageDashboard;

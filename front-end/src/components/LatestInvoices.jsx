import "../style/LatestInvoices.css"
import {invoicesData} from "../data/dashboardMock";

function LatestInvoices(){
    return(
    <table className="TableInvoices">
    <thead>
    <tr>
        <th>REF</th>
        <th>Supplier</th>
        <th>Amount</th>
        <th>Due</th>
        <th>Status</th>
    </tr>
    </thead>

    <tbody>
        {invoicesData.map((inv, index) => (
    <tr key={index}>
        <td>{inv.ref}</td>
        <td>{inv.supplier}</td>
        <td>{inv.amount}</td>
        <td>{inv.due}</td>
        <td>{inv.status}</td>
        </tr>
        ))}
   
    </tbody>
    </table>
    );
}
export default LatestInvoices;
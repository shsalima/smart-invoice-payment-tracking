import { useContext, useEffect, useState } from "react";
import { InvoiceHeader } from "../components/InvoicesComponents/invoiceHeader";
import InvoiceTable from "../components/InvoicesComponents/InvoicesTable";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
export function InvoicePage() {
  const { accessToken } = useContext(UserContext);

  console.log(accessToken);
  const {invoiceData, setInvoiceData} = useState(null);
useEffect(()=>{
  async function fetchInvoiceData() {
  try {
    const res = await axios.get('http://localhost:3000/api/invoices',{
      headers:{
        "Authorization": `Bearer ${accessToken}`,
      }
    })
    console.log(res.data);
    
    setInvoiceData(res.data)
  } catch (error) {
    console.log("Error fetching data:",error);
    
  }}
  fetchInvoiceData()
},[accessToken])

  return (
    <div>
      <InvoiceHeader />
      <InvoiceTable />
    </div>
  );
}

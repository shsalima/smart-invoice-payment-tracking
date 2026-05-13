import SupplierCart from "../components/suppliers/SupplierCart";
import SupplierHero from "../components/suppliers/SupplierHero";
import { useState } from "react";


export default function SupplierPage(){
    const [loading,setLoading]=useState(true)
    const [suppliers,setSuppliers]=useState([])

    return(
        <div>
            <SupplierHero loading={loading}/>
            {suppliers.map((supplier)=>(

                <SupplierCart key={supplier.id} supplier={supplier}/>
            ))

            }

        </div>
    )
}
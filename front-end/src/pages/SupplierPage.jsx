import SupplierCart from "../components/suppliers/SupplierCart";
import SupplierHero from "../components/suppliers/SupplierHero";
import { useEffect, useState } from "react";


export default function SupplierPage(){
    const suppliersData=[
        {
            "_id": "69d61ff53a6fce13b876006c",
            "name": "supplier 1",
            "clientId": "69d3cab25da90a00b6953397",
            "createdAt": "2026-04-08T09:29:25.537Z",
            "__v": 0
        },
        {
            "_id": "69d9046ce7b87b8b0604c3e3",
            "name": "supplier 2",
            "clientId": "69d3cab25da90a00b6953397",
            "createdAt": "2026-04-10T14:08:44.080Z",
            "__v": 0
        },
        {
            "_id": "69d90631e7b87b8b0604c3e4",
            "name": "supplier 4",
            "clientId": "69d3cab25da90a00b6953397",
            "createdAt": "2026-04-10T14:16:17.229Z",
            "__v": 0
        },
        {
            "_id": "69d90636e7b87b8b0604c3e5",
            "name": "supplier 5",
            "clientId": "69d3cab25da90a00b6953397",
            "createdAt": "2026-04-10T14:16:22.501Z",
            "__v": 0
        },
        {
            "_id": "69d90744af00fa5f477590b3",
            "name": "supplier 6",
            "clientId": "69d3cab25da90a00b6953397",
            "createdAt": "2026-04-10T14:20:52.883Z",
            "__v": 0
        }
    ]
    const [loading,setLoading]=useState(true)
    const [suppliers,setSuppliers]=useState([])

    useEffect(()=>{
        setSuppliers(suppliersData)
        setLoading(false)
    },[])
    
    
    return(
        <div>
            <SupplierHero loading={loading}/>
            {suppliers.map((supplier)=>(

                <SupplierCart key={supplier._id} supplier={supplier}/>
            ))

            }

        </div>
    )
}
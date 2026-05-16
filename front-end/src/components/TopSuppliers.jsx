import "../style/TopSuppliers.css";


function TopSuppliers({data = [] }){
     if (data.length === 0) {
    return <p>Loading...</p>;
  }

    const max = Math.max(...data.map(s => s.amount));    
    return(
    <div className="card-TopSuppliers">
     <h3 className="h3">Top Suppliers by Spend</h3>

     {data.map((s,index) => (
     <div key={index} className="supplier">

     <div className="supplier-header">
        <span className="">{s.name}</span>
        <span>{s.amount}</span>
    </div>   
    
    <div>
        <div className="fill"
        style={{ width: `${(s.amount / max) * 100}%` }}>
        </div>
    </div>
     
    
    </div>
    ))}
    </div>
    );
}
export default TopSuppliers;
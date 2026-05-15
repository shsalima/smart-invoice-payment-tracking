import  "../style/StatsCard.css";


function StatsCard({title,value,subtitle}){
    return(
    <div className="card">
    <h1>{title}</h1>
    <p>{value}</p>
    <p className="subtitle">{subtitle}</p>
    </div>
    );
}
export default StatsCard;
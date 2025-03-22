import "../styles/FilterCard.css"
function FilterCard({card}){
    return (
        <div className="card">
          <div className="card-header">
            <p>{card.title}</p>
            <span className="year">{card.year}</span>

          </div>
          <img src={card.img} alt={card.title} />
          <div className="card-content">
            <p>{card.description || "No description available."}</p>
          </div>
        </div>
      );
}
export default FilterCard;
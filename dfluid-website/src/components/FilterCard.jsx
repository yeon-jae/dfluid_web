function FilterCard({card}){
    return (
        <div className="card">
          <img src={card.img} alt={card.title} />
          <div className="card-content">
            <h3>{card.title}</h3>
            <span className="year">{card.year}</span>
            <p>{card.description || "No description available."}</p>
          </div>
        </div>
      );
}
export default FilterCard;
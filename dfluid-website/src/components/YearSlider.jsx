import "../styles/YearSlider.css";

function YearSlider({ selectedYear, onYearChange }) {
  const handleChange = (e) => {
    const year = parseInt(e.target.value);
    onYearChange(year);
  };

  return (
    <div className="year-slider-container">
      <div className="year-labels">
        <span className={selectedYear >= 1000 ? "active" : ""}>1000</span>
        <span className={selectedYear >= 1300 ? "active" : ""}>1300</span>
        <span className={selectedYear >= 1700 ? "active" : ""}>1700</span>
        <span className={selectedYear >= 2000 ? "active" : ""}>2000</span>
      </div>
      <input
        type="range"
        min="1000"
        max="2000"
        step="1"
        value={selectedYear}
        onChange={handleChange}
        className="year-slider"
      />
    </div>
  );
}

export default YearSlider;

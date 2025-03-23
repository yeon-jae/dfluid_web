import "../styles/YearSlider.css";
import { useEffect, useRef } from "react";

function YearSlider({ selectedYear, onYearChange }) {
  const sliderRef=useRef(null);
  const handleChange = (e) => {
    const year = parseInt(e.target.value);
    onYearChange(year);
  };
  useEffect(() => {
    const slider = sliderRef.current;
    const percentage = ((selectedYear - 1000) / (2000 - 1000)) * 100;

    slider.style.background = `linear-gradient(
      to right,
      black 0%,
      black ${percentage}%,
      #ccc ${percentage}%,
      #ccc 100%
    )`;
  }, [selectedYear]);

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
        ref={sliderRef}
      />
    </div>
  );
}

export default YearSlider;

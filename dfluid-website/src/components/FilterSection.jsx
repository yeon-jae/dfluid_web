import "../styles/FilterSection.css";
import CardData from "../data/CardData";
import FilterCard from "./FilterCard";
import YearSlider from "./YearSlider"; 
import { useState } from "react";

function FilterSection() {
  // 카테고리 & 연도 필터 상태
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState(1300); // ✅ 기본값 설정

  const filteredCards = CardData.filter(
    (card) =>
      (selectedCategory === "All" || card.category === selectedCategory) &&
      card.year <= selectedYear
  );

  return (
    <section className="filter-section">
      <p>Duis tincidunt ut ligula vitae mollis.</p>

      {/* 필터 버튼 영역 */}
      <div className="filter">
        {/* 카테고리 필터 */}
        <div className="category-filter">
          {["All", "Asia", "Europe", "America", "Oceania"].map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 연도 필터 (슬라이더) */}
        <div className="year-filter">
          <YearSlider selectedYear={selectedYear} onYearChange={setSelectedYear} />
        </div>
      </div>

      {/* 카드 목록 */}
      <div className="card-list">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => <FilterCard key={card.id} card={card} />)
        ) : (
          <p>No results found</p>
        )}
      </div>
    </section>
  );
}

export default FilterSection;

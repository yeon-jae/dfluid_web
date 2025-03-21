import './App.css';
import ProfileCardSection from './components/ProfileCardSection';
import FullBleedSection from './components/FullBleedSection';
import FilterSection from './components/FilterSection';


function App() {
  return (
  <div className="Screen">
      <ProfileCardSection/>
      <FullBleedSection/>
      <FilterSection/>
  </div>
  );
}

export default App;

import TimeAttackPage from "./components/TimeAttackPage/TimeAttackPage";
import ForzaPage from "./components/ForzaPage/ForzaPage";
import DriftPage from "./components/DriftPage/DriftPage";
import HomePage from "./components/HomePage/HomePage";
import Menu from "./components/Menu/Menu";
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div className="page">
      <Menu />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
      </Routes>
    </div>
  );
}
import './App.css';
import Companies from './pages/Companies';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="jobs" element={ <Jobs/> } />
        <Route path="companies" element={ <Companies/> } />
      </Routes>
    </div>
  );
}

export default App;

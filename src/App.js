import "./App.css";
import Companies from "./pages/Companies";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import CompanyJobs from "./pages/CompanyJobs";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="companies" element={<Companies />} />
        <Route path="companyJobs/:companyName" element={<CompanyJobs />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Companies from "./pages/Companies";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import About from "./pages/About"
import Contact from "./pages/Contact"
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
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App;

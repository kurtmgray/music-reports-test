import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FilterContext } from "./FilterContext";
import Page from "./components/Page";

function App() {
  const [filters, setFilters] = useState({
    1: { s: "Daft Punk" },
    2: { s: "Nirvana" },
  });
  const [APIData, setAPIData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/1"> Page 1 </Link>
            </li>
            <li>
              <Link to="/2"> Page 2 </Link>
            </li>
          </ul>
        </nav>
        <FilterContext.Provider
          value={{
            filters,
            setFilters,
            APIData,
            setAPIData,
            error,
            setError,
          }}
        >
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/:pageID" element={<Page />} />
            {/* <Route path="/2" element={<PageTwo />} /> */}
          </Routes>
        </FilterContext.Provider>
      </div>
    </Router>
  );
}

export default App;

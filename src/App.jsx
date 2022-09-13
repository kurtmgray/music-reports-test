import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FilterContext } from "./FilterContext";
import Page from "./components/Page";
import Home from "./components/Home";

function App() {
  const [filters, setFilters] = useState({
    1: "Daft Punk",
    2: "Madonna",
  });
  const [data, setData] = useState({});
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
            data,
            setData,
            error,
            setError,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:pageID" element={<Page />} />
          </Routes>
        </FilterContext.Provider>
      </div>
    </Router>
  );
}

export default App;

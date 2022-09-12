import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FilterContext } from "../FilterContext";
import { getData } from "../Utils";

export default function Form() {
  const { filters, setFilters, setAPIData, setError } =
    useContext(FilterContext);
  const params = useParams();

  const handleChange = (e) => {
    setFilters((old) => {
      return {
        ...old,
        [params.pageID]: { s: e.target.value },
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // this is initPage, but need to clean.
    setError("");
    getData(filters, params.pageID).then((data) => {
      setTimeout(() => {
        if (!data) {
          setError("Artist not found...");
        }
      }, 3000);
      setAPIData(data);
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="artist-search">Enter Artist:</label>
        <input
          type="text"
          placeholder="Daft Punk"
          value={filters[params.pageID]["s"]}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

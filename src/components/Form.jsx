import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { FilterContext } from "../FilterContext";

export default function Form() {
  const { filters, setFilters, setError } = useContext(FilterContext);
  const [value, setValue] = useState("");
  const params = useParams();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters((old) => {
      return {
        ...old,
        [params.pageID]: value,
      };
    });
    setError("");
    setValue("");
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="artist-search">Enter Artist:</label>
      <input
        type="text"
        placeholder={filters[params.pageID]}
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

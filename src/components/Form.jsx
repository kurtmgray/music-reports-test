import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { FilterContext } from "../FilterContext";
import { getData } from "../Utils";

export default function Form() {
  const { filters, setFilters, setAPIData, setError } =
    useContext(FilterContext);
  const [value, setValue] = useState("");
  const params = useParams();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // this is initPage, but need to clean.
    setFilters((old) => {
      return {
        ...old,
        [params.pageID]: { s: value },
      };
    });
    setError("");
    //   .then(
    //     getData(filters, params.pageID).then((data) => {
    //       setTimeout(() => {
    //         if (!data) {
    //           setError("Artist not found...");
    //         }
    //       }, 3000);
    //       setAPIData(data);
    //     })
    //  );
    setValue("");
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="artist-search">Enter Artist:</label>
      <input
        type="text"
        placeholder={filters[params.pageID]["s"]}
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

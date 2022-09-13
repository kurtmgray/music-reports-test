import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilterContext } from "../FilterContext";
import Table from "./Table";
import Form from "./Form";
import { getData } from "../Utils";

export default function Page() {
  const { filters, setFilters, APIData, setAPIData, error, setError } =
    useContext(FilterContext);
  const params = useParams();

  useEffect(() => {
    setPageData();
  }, [filters[params.pageID]["s"]]);
  // want to access this s property, but not the data property in dep array
  // reason to split this into two separate pieces of state?
  // APIData: {
  //   1: null,
  //   2: null
  // }
  // initially APIData: {null}

  const setPageData = () => {
    setError("");
    getData(filters, params.pageID).then((data) => {
      setTimeout(() => {
        if (!data) {
          setError("Artist not found.");
        }
      }, 3000);
      setFilters((old) => {
        return {
          ...old,
          [params.pageID]: {
            ...old[params.pageID],
            data: data,
          },
        };
      });
    });
  };

  return (
    <div className="page">
      <h1>
        Page {params.pageID}: {filters[params.pageID]["s"]} Albums
      </h1>

      <div>
        <Form />
      </div>
      {!filters[params.pageID]["data"] ? (
        error ? (
          <div>{error}</div>
        ) : (
          <div>Loading...</div>
        )
      ) : (
        <Table />
      )}
    </div>
  );
}

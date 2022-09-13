import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilterContext } from "../FilterContext";
import Table from "./Table";
import Form from "./Form";
import { getData } from "../Utils";

export default function Page() {
  const { filters, data, setData, error, setError } = useContext(FilterContext);
  const params = useParams();

  const setPageData = () => {
    setError("");

    getData(filters[params.pageID]).then((data) => {
      if (!data) {
        setError("Artist not found.");
      }
      setData((old) => {
        return {
          ...old,
          [filters[params.pageID]]: data,
        };
      });
    });
  };

  useEffect(() => {
    if (!data[filters[params.pageID]]) {
      setPageData();
    }
  }, [filters, params.pageID]);

  return (
    <div className="page">
      <h1>
        Page {params.pageID}: {filters[params.pageID]} Albums
      </h1>

      <div>
        <Form />
      </div>
      {!data[filters[params.pageID]] ? (
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

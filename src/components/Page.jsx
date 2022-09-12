import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilterContext } from "../FilterContext";
import Table from "./Table";
import Form from "./Form";
import { getData } from "../Utils";

export default function Page() {
  const { filters, APIData, setAPIData, error, setError } =
    useContext(FilterContext);
  const params = useParams();

  useEffect(() => {
    initPage();
  }, [params.pageID]);

  const initPage = () => {
    setError("");
    getData(filters, params.pageID).then((data) => {
      setTimeout(() => {
        if (!data) {
          setError("Artist not found.");
        }
      }, 3000);
      setAPIData(data);
    });
  };

  return (
    <div>
      Page {params.pageID}
      <div>
        <Form />
      </div>
      {!APIData ? (
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

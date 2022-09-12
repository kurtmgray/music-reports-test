import * as qs from "query-string";

export const getData = async (filters, activePage) => {
  const searchFilter = filters[activePage];
  const filterQueryString = qs.stringify(searchFilter);

  const url = `https://theaudiodb.p.rapidapi.com/searchalbum.php?${filterQueryString}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d282546f9dmshe334206720dd64fp103e8cjsn470d765f1e21",
      "X-RapidAPI-Host": "theaudiodb.p.rapidapi.com",
    },
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    return data.album;
  } catch (err) {
    console.error(err);
  }
};

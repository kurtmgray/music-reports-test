import { AUDIODB_API_KEY } from "./config";

export const getData = async (searchTerm) => {
  const url = `https://theaudiodb.p.rapidapi.com/searchalbum.php?s=${searchTerm}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": AUDIODB_API_KEY,
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

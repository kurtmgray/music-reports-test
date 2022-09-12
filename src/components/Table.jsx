import React, { useContext } from "react";
import { FilterContext } from "../FilterContext";

export default function Table() {
  const { filters, setFilters, APIData } = useContext(FilterContext);
  return (
    <div className="listContainer">
      <table className="list">
        {/* <thead> */}
        <tr className="list-header">
          <th scope="col" name="artist">
            Artist
          </th>
          <th scope="col" name="cover">
            Cover
          </th>
          <th scope="col" name="album">
            Album Name
          </th>
          <th scope="col" name="released">
            Year Released
          </th>
        </tr>
        {/* </thead> */}
        {APIData !== null &&
          APIData.map((album) => (
            <tr scope="row" key={album.idAlbum}>
              <td className="list-entry">{album.strArtist}</td>
              <td className="list-entry">
                <img
                  className="album-thumb"
                  src={album.strAlbumThumb}
                  alt="album image"
                />
              </td>
              <td className="list-entry">{album.strAlbum}</td>
              <td className="list-entry">{album.intYearReleased}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

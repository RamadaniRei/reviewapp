import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <SearchIcon className="search-icons" />
      <input
        type="text"
        placeholder="Search here"
        onChange={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  );
};

export default Search;

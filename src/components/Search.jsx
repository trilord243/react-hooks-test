import React from "react";

function Search({ search, searchInput, handleSearch }) {
  return (
    <>
      <div className="search">
        <input
          type="text"
          value={search}
          ref={searchInput}
          onChange={handleSearch}
          className="bg-slate-500"
        />
      </div>
    </>
  );
}

export default Search;

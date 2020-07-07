import React from "react"
function SearchBox({ handleSearchChange }) {
    return (
      <div className="searchbox">
        <form className="form-inline">
         {/* this will be the input box for the searchbox */}
         <input
          className="form-inline"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={event => handleSearchChange(event)}
          />
        </form>
      </div>
    );
  }
  export default SearchBox;
  
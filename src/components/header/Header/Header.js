import { useState } from "react";
import React from "react";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // implement dispatch to search here
    setSearchTerm("");
  };
  return (
    <div>
      <h1>
        Reddit <span className="mini">Mini</span>
      </h1>

      <input
        id="search-posts"
        data-testid="search"
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Filter posts"
      />

        <button type="submit" data-testid="searchButton" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Header;

import { useState } from "react";
import React from "react";
import './Header.css';
import CategoriesList from "./CategoriesList/CategoriesList";


function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCatMenu, setShowCatMenu] = useState(false);


  const handleSearch = (e) => {
    e.preventDefault();
    // implement dispatch to search here
    setSearchTerm("");
  };

  // when 'categories' button is clicked, toggles categories menu
  const toggleCategories = () => {
    if (showCatMenu === true) {
      setShowCatMenu(false);
    } else {
      setShowCatMenu(true);
    }
  }  

  return (
    <div>
      <div id="header">
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
        <button className="categories button" onClick={toggleCategories}>Categories</button>
        </div>
        
          <CategoriesList 
          visible={showCatMenu}
          />
        
    </div>
  );
}

export default Header;

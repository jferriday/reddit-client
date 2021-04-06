import { useState } from "react";
import React from "react";
import './Header.css';
import CategoriesList from "./CategoriesList/CategoriesList";
import {updateSearchTerm} from '../../../store/redditSlice';
import { useDispatch } from "react-redux";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCatMenu, setShowCatMenu] = useState(false);
  const dispatch = useDispatch();

  const subreddits = ['askreddit', 'aww', 'funny', 'pics', 'todayilearned', 'news', 'showerthoughts', 'askscience', 'explainlikeimfive', 'dogs']

    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
      // When value in search input changes, update the store with the new search term
      dispatch(updateSearchTerm(e.target.value));
    }

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
          onChange={handleSearchChange}
          value={searchTerm}
          placeholder="Search Reddit..."
        />

          <button type="submit" data-testid="searchButton" onClick={handleSearch}>
          Search
        </button>
        <button className="categories button" onClick={toggleCategories}>Categories</button>
        </div>
        
          <CategoriesList
          categories={subreddits} 
          visible={showCatMenu}
          />
        
    </div>
  );
}

export default Header;

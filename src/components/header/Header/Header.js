import { useState } from "react";
import React from "react";
import "./Header.css";
import CategoriesList from "./CategoriesList/CategoriesList";
import { updateSearchTerm } from "../../../store/redditSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCatMenu, setShowCatMenu] = useState(false);
  const dispatch = useDispatch();

  const subreddits = [
    "askreddit",
    "aww",
    "funny",
    "pics",
    "todayilearned",
    "news",
    "showerthoughts",
    "askscience",
    "explainlikeimfive",
    "dogs",
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // When value in search input changes, update the store with the new search term
    dispatch(updateSearchTerm(e.target.value));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // implement dispatch to search here
    setSearchTerm("");
    toggleCategories();
  };

  // when 'categories' button is clicked, toggles categories menu
  const toggleCategories = () => {
    if (showCatMenu === true) {
      setShowCatMenu(false);
      document.getElementById("sidenav-1").classList.remove('sidenav-open')
      document.getElementById("sidenav-1").style.display = "none";
    } else {
      setShowCatMenu(true);
      document.getElementById("sidenav-1").classList.add('sidenav-open')
      document.getElementById("sidenav-1").style.display = "flex";
    }
  };

  return (
    <div className="header-all">
      <div className="header">
        <div className="flex-spacer" ></div>
        
          <h1> 
            <Link to="/">
            Reddit <span className="mini">Mini</span>
            </Link>
          </h1>
      
        <div className="flex-spacer">
        <button className="button-clear material-icons" onClick={toggleCategories}>
          menu
        </button>
        </div>
      </div>
      <div className="sidenav" id="sidenav-1">
      <button className="close button-clear material-icons" onClick={toggleCategories}>
          close
        </button>
        <div className="search">
          <input
            id="search-posts"
            data-testid="search"
            type="text"
            onChange={handleSearchChange}
            value={searchTerm}
            placeholder="Search Reddit..."
          />
          <button className="search-button button-clear material-icons" type="submit" data-testid="searchButton" onClick={handleSearch}>
          search
          </button>
        </div>
        <div className="subreddit-list">
          <CategoriesList categories={subreddits} visible={showCatMenu} closeNavbar={toggleCategories} />
        </div>      
      </div>
    </div>
  );
}

export default Header;

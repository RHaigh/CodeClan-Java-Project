import React from "react";
import {Link} from "react-router-dom";

const NavBar = (props) => {
  return(
    <div>
    <ul className = "nav-bar">
      <li id="community" onClick={props.handleCategoryClick} >Community</li>
      <li id="health" onClick={props.handleCategoryClick}>Health</li>
      <li id="controversy" onClick={props.handleCategoryClick}>Controversy</li>
      <li id="career news" onClick={props.handleCategoryClick}>Career News</li>
      <li id="education" onClick={props.handleCategoryClick}>Education</li>
      <li id="Add Article" onClick = {props.newArticle }> Add Article </li>
    </ul>
    </div>
  )
}

export default NavBar;

import React from "react";

const NavBar = (props) => {
  return(
    <div className = "navbar">
    <ul>
      <li id="community" onClick={props.handleCategoryClick} >Community</li>
      <li id="health" onClick={props.handleCategoryClick}>Health</li>
      <li id="controversy" onClick={props.handleCategoryClick}>Controversy</li>
      <li id="career news" onClick={props.handleCategoryClick}>Career News</li>
      <li id="education" onClick={props.handleCategoryClick}>Education</li>
    </ul>
    </div>
  )
}

export default NavBar;

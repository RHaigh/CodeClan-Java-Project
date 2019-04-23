import React from "react";

const MainHeader = (props) => {
  return(
    <div onClick = {props.handleHeaderClick}>
    <h1 className = "header" > THE : BOOLEAN </h1>
    </div>
  )
}

export default MainHeader;

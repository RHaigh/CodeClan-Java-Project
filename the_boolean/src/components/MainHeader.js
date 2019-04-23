import React from "react";

const MainHeader = (props) => {

  return(
    <div onClick = {props.handleHeaderClick}>
    <img src="./images/logo.png" width="300px" />
    </div>
  )
}

export default MainHeader;

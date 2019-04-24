import React from "react";

const ArticleSummary = (props) => {
  if (!props.article) {
    return null;
  }

  return(
    <div className="container" >
    {props.article}
    </div>
  )
}

export default ArticleSummary;

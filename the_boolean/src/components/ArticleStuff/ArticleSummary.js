import React from "react";

const ArticleSummary = (props) => {
  if (!props.article) {
    return null;
  }

  return(
    <div>
    <ul>
    {props.article}
    </ul>
    </div>
  )
}

export default ArticleSummary;

import React from "react";

const ArticleSummary = (props) => {
  if (!props.article) {
    return null;
  }

  return(
    <div>
    <h4> CAT FOUND </h4>
    <p> IMAGE </p>
    <p> lil bit of text </p>
    </div>
  )
}

export default ArticleSummary;

import React from "react";

const ArticleItem = (props) => {
  if (!props.article) {
    return null;
  }

  return(
    <p> Hello I am an Article item </p>
  )

}

export default ArticleItem;

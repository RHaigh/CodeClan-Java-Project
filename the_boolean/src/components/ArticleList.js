import React from "react";
import ArticleSummary from './ArticleStuff/ArticleSummary'
// Just to Test. We want eventually to be able to click through to the ArticleItem.
import ArticleItem from './ArticleStuff/ArticleItem'

const ArticleList = (props) => {
  const articles = props.data.map((article) => {

    return (

      <li key = {article.id}>
      <h3> {article.title} </h3>
      <h3> {article.text} </h3>
      <h3> {article. category} </h3>
      <h3> {article.date}</h3>
      </li>
    )
  }
)


  return (
    <div>
    <h3> Rendering from ArticleList </h3>
    <ul>
    <li> <ArticleSummary article = {articles}/> </li>
    </ul>
    </div>
  )
}

export default ArticleList;

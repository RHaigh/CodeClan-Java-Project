import React from "react";
import ArticleSummary from './ArticleStuff/ArticleSummary'

const ArticleList = (props) => {
  // const articles = props.articles.map((article) => {
  //   return (
  //     <li key = {article.id}>
  //     <div className = "component" >
  //     <Article article = {article}/>
  //     </div>
  //     </li>
  //   )
  // }
  return (
    <div>
    <h3> Rendering from ArticleList </h3>
    <ul>
    <li> {props.test} </li>
    <li> <ArticleSummary article = "hello"/> </li>
    </ul>
    </div>
  )
}

export default ArticleList;

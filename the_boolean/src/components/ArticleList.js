import React from "react";
import ArticleSummary from './ArticleStuff/ArticleSummary'
// Just to Test. We want eventually to be able to click through to the ArticleItem.
import ArticleItem from './ArticleStuff/ArticleItem'
import ArticleForm from './ArticleForm';

const ArticleList = (props) => {
  const articles = props.data.data.map((article, index) => {
    // console.log(article.title, index);
    return (
      <div onClick = {(evt) => {props.handleArticleClick(index)}} key = {index} >
      <h3> {article.title} </h3>
      <p> {article.datePublished}</p>
      <img src = {article.image} height = "200px" ></img>
      </div>
    )
  }
)

  if(props.data.selectedArticle != null){
    return (
      <div>
        <ArticleItem article = {props.data.selectedArticle} handleDelete = {props.handleDelete} handleEdit = {props.handleEdit} allProps = {props.data} saveArticle = {props.saveArticle}/>
      </div>
   )
  }

if (props.data.newArticle != false) {
  return (
    <div>
    <ArticleForm newArticle = {props} createArticle = {props.createArticle}/>
    </div>
  )
}

  return (
    <div>
      <ArticleSummary article = {articles} />
    </div>
 )
}

export default ArticleList;

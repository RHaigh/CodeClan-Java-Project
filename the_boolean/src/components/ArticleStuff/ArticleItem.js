import React from "react";
import ArticleHeader from './ArticleHeader'
import ArticleText from './ArticleText'
import ArticleImage from './ArticleImage'
import ArticleDate from './ArticleDate'
import ArticleCategory from './ArticleCategory'
import ArticleJournalist from './ArticleJournalist'
import EditArticle from '../EditArticle'

const ArticleItem = (props) => {

  console.log(props.allProps);
  if (!props.article) {
    return null;
  }

  if (props.allProps.selectedArticle != null && props.allProps.editedArticle != null) {
    console.log("if statement check", props.allProps)
    return (
      <div>
      <EditArticle article = {props.article} saveArticle = {props.saveArticle}/>
      </div>
    )
  }

  return(
    <div>
    <ArticleHeader title = {props.article.title} />
    <ArticleDate date= {props.article.datePublished}/>
    <ArticleImage image = {props.article.image}/>
    <ArticleText text={props.article.text}/>
    <ArticleJournalist journalist = {props.article.journalist}/>
    <button onClick = {(evt) => {props.handleDelete(props.article.id)}}> Delete Article </button>
    <button onClick = {(evt) => {props.handleEdit(props.article.id)}}> Edit Article </button>
    </div>
  )

}

export default ArticleItem;

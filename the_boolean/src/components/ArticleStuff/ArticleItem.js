import React from "react";
import ArticleHeader from './ArticleHeader'
import ArticleText from './ArticleText'
import ArticleImage from './ArticleImage'
import ArticleDate from './ArticleDate'
import ArticleCategory from './ArticleCategory'
import ArticleJournalist from './ArticleJournalist'

const ArticleItem = (props) => {
  if (!props.article) {
    return null;
  }

  return(
    <div>
    <ArticleHeader title = {props.article.title} />
    <ArticleDate date= {props.article.datePublished}/>
    <ArticleImage image = {props.article.image}/>
    <ArticleText text={props.article.text}/>
    <ArticleJournalist journalist = {props.article.journalist}/>
    <button onClick = {(evt) => {props.handleDelete(props.article.id)}}> Delete Article </button>

    </div>
  )

}

export default ArticleItem;

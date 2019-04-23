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
    <ArticleDate date= {props.article.datePublished}/>
    <ArticleCategory category ={props.article.category}/>
    <ArticleJournalist/>
    <ArticleHeader title = {props.article.title} />
    <ArticleImage image = {props.article.image}/>
    <ArticleText text={props.article.text}/>
    </div>
  )

}

export default ArticleItem;

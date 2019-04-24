import React, {Component} from "react";

const ArticleForm = (props) => {


function handleSubmit(evt) {
  evt.preventDefault();
  const article = {
    "title": evt.target.title.value,
    "text": evt.target.text.value,
    "datePublished": evt.target.datePublished.value,
    "image": "",
    "journalist": evt.target.journalist.value,
    "category": evt.target.category.value
  }
  props.createArticle(article);
}
const journalistOptions = props.newArticle.data.journalists.map((journalist, index) => {
  return <option key = {index} value = {journalist.id} > {journalist.name}</option>
});

  return (
    <div>
    <form onSubmit = {handleSubmit} >
    Title:
    <br/>
    <input type = "text" placeholder = "Add a title" name = "title" />
    <br/>
    Text:
    <br/>
    <input type = "text" placeholder = "Add some text" name = "text" />
    <br/>
    Date:
    <br/>
    <input type = "text" placeholder = "Add a date" name = "datePublished" />
    <br/>
    <p> Add a Category </p>
    <select name = "category">
    <option value = "health" > Health </option>
    <option value = "community" > Community </option>
    <option value = "controversy" > Controversy </option>
    <option value = "education" > Education </option>
    <option value = "career-news" > Career News </option>
    </select>
    <br/>
    <p> Select a Journalist </p>
    <select name = "journalist">
    {journalistOptions}
    </select>
    <button type = "submit"> Save </button>
    </form>
    </div>
  )
}

export default ArticleForm;

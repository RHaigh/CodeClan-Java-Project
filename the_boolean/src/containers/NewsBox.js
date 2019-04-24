import React, {Component} from "react";
import MainHeader from '../components/MainHeader.js';
import NavBar from '../components/NavBar.js';
import ArticleList from '../components/ArticleList.js';
import Request from "../helpers/Request.js";

class NewsBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedArticle: null,
      editedArticle: null,
      newArticle: false,
      journalists: []
    };
    this.handleArticleClick = this.handleArticleClick.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.handleEditArticle = this.handleEditArticle.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.newArticle = this.newArticle.bind(this);
    this.getJournalists = this.getJournalists.bind(this);
    this.createArticle = this.createArticle.bind(this);

  }

  componentDidMount() {
    this.pageRefreshToAllArticles();
    this.getJournalists();
    console.log(this.state.data);
  }

  handleArticleClick(articleNumber) {
    this.setState({selectedArticle: this.state.data[articleNumber]})
  }

  handleHeaderClick(evt){
    this.pageRefreshToAllArticles();
    this.setState({selectedArticle: null});
  }

  pageRefreshToAllArticles() {
    let request = new Request()
    const url = "/articles";
    request.get(url)
    .then((data) => {
      this.setState({data: data})
      this.setState({selectedArticle: null});
      this.setState({editedArticle: null});
      this.setState({newArticle: false})
    })
  }

  getJournalists() {
    let request = new Request()
    const url = "/journalists/";
    request.get(url)
    .then((data) => {
      this.setState({journalists: data})
    })
  }

  handleCategoryClick(evt) {
    let request = new Request()
    const url = "articles/category/" + evt.target.id;
    console.log(url)
    request.get(url)
    .then((data) => {
      this.setState({data: data}, () => {
        this.setState({selectedArticle: null});
        this.setState({editedArticle: null});
        this.setState({newArticle: false})
      })
    })
  }

  handleEditArticle(articleNumber) {
    this.setState({editedArticle: this.state.data[articleNumber]})
  }

  saveArticle(article) {
    const request = new Request()
    const url = "articles/" + article.id
    request.patch(url, article)
    .then ((data) => {
      this.pageRefreshToAllArticles();
    })
  }

  newArticle() {
    console.log("log of new article")
    this.setState({newArticle: true})
  }

  createArticle(article) {
    const request = new Request()
    const url = "articles/" + article.journalist
    request.post(url, article)
    .then ((data) => {
      this.pageRefreshToAllArticles();

    })
  }

  deleteArticle(articleId) {
    let request = new Request()
    const url = "articles/" + articleId
    request.delete(url)
    .then ((data) => {
      this.pageRefreshToAllArticles();
      this.setState({selectedArticle: null});
    })
  }

  render() {
    return (
      <div>
      <MainHeader handleHeaderClick={this.handleHeaderClick}/>
      <NavBar handleCategoryClick={this.handleCategoryClick} newArticle = {this.newArticle}/>
      <ArticleList handleArticleClick = {this.handleArticleClick} data = {this.state} handleDelete = {this.deleteArticle} handleEdit = {this.handleEditArticle} saveArticle = {this.saveArticle} newArticle = {this.newArticle} createArticle = {this.createArticle}/>
      </div>
    )
  }
}

export default NewsBox;

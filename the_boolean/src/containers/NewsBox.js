import React, {Component} from "react";
import MainHeader from '../components/MainHeader.js'
import NavBar from '../components/NavBar.js'
import ArticleList from '../components/ArticleList.js'
import Request from "../helpers/Request.js";
class NewsBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedArticle: null
    };
    this.handleArticleClick = this.handleArticleClick.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  componentDidMount() {
    this.pageRefreshToAllArticles();
  }

  handleArticleClick(articleNumber) {
    // console.log(articleNumber);
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
    })
  }

  handleCategoryClick(evt) {
    let request = new Request()
    const url = "articles/category/" + evt.target.id;
    console.log(url)
    request.get(url)
    .then((data) => {
      this.setState({data: data}, () => {
      })
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
      <NavBar handleCategoryClick={this.handleCategoryClick}/>
      <ArticleList test = "renderNewsBox" handleArticleClick = {this.handleArticleClick} data = {this.state} handleDelete = {this.deleteArticle}/>
      </div>
    )
  }
}

export default NewsBox;

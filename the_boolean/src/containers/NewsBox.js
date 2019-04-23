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
  }

  componentDidMount() {
    let request = new Request()
    const url = "/articles";
    request.get(url)
    .then((data) => {
      this.setState({data: data})
      console.log(data);
  })
}

  handleArticleClick(articleNumber) {
    this.loadArticle(articleNumber)
  }

  loadArticle(articleNumber) {
    this.setState({selectedArticle: this.state.data[articleNumber - 1]})
    console.log(this.state);
  }
  render() {
    return (
      <div>
      <h2> News Box </h2>
      <MainHeader/>
      <NavBar/>
      <ArticleList test = "renderNewsBox" handleArticleClick = {this.handleArticleClick} data = {this.state}/>
      </div>
    )
  }
}

export default NewsBox;

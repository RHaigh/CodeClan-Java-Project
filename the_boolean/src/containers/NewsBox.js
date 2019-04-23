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
    console.log(articleNumber);
    this.setState({selectedArticle: this.state.data[articleNumber]})
  }

  handleHeaderClick(evt){
    this.setState({selectedArticle: null});
  }

  handleCategoryClick(evt) {
    let request = new Request()
    const url = "articles/category/" + evt.target.id;
    console.log(url)
    request.get(url)
    .then((data) => {
      this.setState({data: data}, () => {
        console.log("hallo", data);
      })
    })
  }

//   this.setState({ 'updated': 'state'}, () => {
//   console.log(this.state.updated);
// });

  render() {
    return (
      <div>
      <MainHeader handleHeaderClick={this.handleHeaderClick}/>
      <NavBar handleCategoryClick={this.handleCategoryClick}/>
      <ArticleList test = "renderNewsBox" handleArticleClick = {this.handleArticleClick} data = {this.state}/>
      </div>
    )
  }
}

export default NewsBox;

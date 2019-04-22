import React, {Component} from "react";
import MainHeader from '../components/MainHeader.js'
import NavBar from '../components/NavBar.js'
import ArticleList from '../components/ArticleList.js'
class NewsBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data: [{
        title: "Title",
        text: "Some Text here",
        category: "Testing Cat",
        date: "22-04-19"
      }]
    };
  }

  render() {
    return (
      <div>
      <h2> News Box </h2>
      <MainHeader/>
      <NavBar/>
      <ArticleList test = "renderNewsBox" data = {this.state.data}/>
      </div>

    )
  }
}

export default NewsBox;

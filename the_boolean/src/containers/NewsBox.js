import React, {Component} from "react";
import MainHeader from '../components/MainHeader.js'
import NavBar from '../components/NavBar.js'
import ArticleList from '../components/ArticleList.js'

class NewsBox extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <h2> News Box </h2>
      <MainHeader/>
      <NavBar/>
      <ArticleList test = "renderNewsBox" />
      </div>

    )
  }
}

export default NewsBox;

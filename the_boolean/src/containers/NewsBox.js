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
      <MainHeader/>
      <NavBar/>
      <ArticleList test = "renderNewsBox" />
      <h2> Rendering from box test</h2>
      </div>

    )
  }
}

export default NewsBox;

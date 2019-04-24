import React, { Component } from 'react';
import './App.css';
import NewsBox from './containers/NewsBox.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NewsBox/>
      </div>
    );
  }
}

export default App;

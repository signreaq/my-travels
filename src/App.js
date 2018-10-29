import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Yours travels</h1>
        </header>
        <Travels
          country="Barcelona"
          distance="2000km"
          destination="Spain"
          photo="https://i.ytimg.com/vi/k6V6bSdj2VQ/maxresdefault.jpg"
        />
        <Travels
          country="Rome"
          distance="2500km"
          destination="Italie"
          photo="https://www.voyagetips.com/wp-content/uploads/2017/05/colisee-rome.jpg"
        />
      </div>
    );
  }
}

export default App;

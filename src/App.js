import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component'
import './App.css';
     

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
       <Header/>
       

        <HomePage/>


        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//TODO : add Cross-site Scss modules
//scss
//
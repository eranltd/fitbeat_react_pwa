import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

const NavBar = () => (
  <div className="navbar">
    <h3>Under Construction...</h3>
    <Link to="/">Main Link</Link>
    <Link to="/completed">Custom Completed Tasks</Link>
  </div>
);




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <NavBar/>
       
        {/**Insert your code here */}



        </div>
      </BrowserRouter>
    );
  }
}

export default App;
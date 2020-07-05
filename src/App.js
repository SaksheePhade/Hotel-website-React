import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <div className="container">
            <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;

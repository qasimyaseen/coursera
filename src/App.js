import React, { Component } from 'react';

import logo from './logo.svg';
import Menu from './components/MenuComponent';

import {Navbar, NavbarBrand} from "reactstrap";
import './App.css';



function App() {
  return (
    <div >
        <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante ConFusion Appi</NavbarBrand>

                </div>
            </Navbar>
           <Menu/>
        </div>
    </div>

  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter as Nav, Router, Route, Link } from 'react-router-dom'

// import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button'
// import NavbarBrand from 'react-bootstrap/NavbarBrand'
// import NavBar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
import Title from './Components/Title'
import Form from './Components/Form'

import './App.css';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        {/* <Router> */}
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
        {/* </Router> */}





        <Title />

        <Form />

      </div>
    );
  }
}

export default App;

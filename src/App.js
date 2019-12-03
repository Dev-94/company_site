import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRoute as Router } from 'react-router-dom'
import Title from './Components/Title'
import Form from './Components/Form'

import './App.css';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Title />

        <Form />

      </div>
    );
  }
}

export default App;

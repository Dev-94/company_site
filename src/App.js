import React from 'react';
import { loadReCaptcha } from 'react-recaptcha-v3'

import Title from './Components/Title'
import Form from './Components/Form'

import './App.css';

// pretty-operation.surge.sh

class App extends React.Component {

  componentDidMount() {
    loadReCaptcha('6LcNJMYUAAAAAC0y9fEVN3DI-5uD8iSvydiOKxCf');
  }

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

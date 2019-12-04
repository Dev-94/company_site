import React from 'react';

import Title from './Components/Title'
import Form from './Components/Form'

import './App.css';

// pretty-operation.surge.sh

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

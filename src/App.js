import React, { Component } from 'react';
import logo from './logo.svg';
import StudentList from './containers/StudentList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentList />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import contacts from './contacts.json'
import Table from './components/contactsTable'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br /><br />
        <Table />
      </div>
    );
  }
}

export default App;

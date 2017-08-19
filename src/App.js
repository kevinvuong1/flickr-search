import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchView from './components/SearchView';

class App extends Component {
  render() {
    return (
      <div className="container">
          <SearchForm />
          <SearchView />
      </div>
    );
  }
}

export default App;

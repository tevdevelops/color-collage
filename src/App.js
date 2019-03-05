import React, { Component } from 'react';
import Header from './components/Header'
import PhotoCollage from './components/PhotoCollage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PhotoCollage />
      </div>
    );
  }
}

export default App;

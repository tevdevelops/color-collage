import React, { Component } from 'react';
import Header from './components/Header'
import PhotoCollage from './components/PhotoCollage'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PhotoCollage />
        <Footer />
      </div>
    );
  }
}

export default App;

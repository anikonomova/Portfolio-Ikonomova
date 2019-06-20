import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import MyWork from './MyWork';
import Footer from './Footer';
import Navigation from './Navigation';
import './App.css';


function loadedPage() {
    window.loadedPage = true;
  }

class App extends Component {

  componentDidMount() {

    window.loadedPage = loadedPage;
    setTimeout(() => {
      if (!window.loadedPage) {
        this.showError();
   }
 }, 3000);
}

showError = () => {
  alert('Oops!!! Something went wrong! Please try again...!')
}

  render() {
    return (
    <div className="App">
      <Navigation />

      <main className= 'info'>
      <Route exact path="/" render={() => (
        <Home />
          )}
          />
          <Route path="/home" render={() => (
          <Home />
        )} />
        <Route path="/my-work" render={() => (
    <MyWork />
          )} />
  </main>
  <Footer />
    </div>
  );
}
}
export default App;

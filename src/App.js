import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import MyWork from './MyWork';
import Footer from './Footer';
import Navigation from './Navigation';
import './App.css';


function loadPage() {
    window.loadPage = true;
  }

class App extends Component {

  componentDidMount() {

  window.loadPage = loadPage;
    setTimeout(() => {
      if (!window.loadPage) {
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

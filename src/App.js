import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home';
import MyWork from './MyWork';
import Footer from './Footer';
import './App.css';

class App extends Component {

  componentDidMount() {
          console.log("[App componentDidMount]");
      }

  render() {
    return (
      <HashRouter basename="/">
      <div className="App">

      <main className= 'info'>
      <Route exact path="/" render={() => (
        <Home />
          )}
          />
          <Route path="/my-work" render={() => (
          <MyWork />
          )} />
        </main>
          <Footer />
          </div>
          </HashRouter>
  );
}
}
export default App;

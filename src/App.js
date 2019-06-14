import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import MyWork from './MyWork';
import Contact from './Contact';
import logo from './Images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
    <div id= 'menu'>
    <div className='nav'>
    <Link to="/home"><button className='navigation'><i className="fa fa-home w3-xxlarge"></i><span>Home</span></button></Link>
    <Link to="/about"><button className='navigation'><i className="fa fa-user w3-xxlarge"></i><span>About</span></button></Link>
    <Link to="/my-work"><button className='navigation'><i className="fa fa-eye w3-xxlarge"></i><span>Work</span></button></Link>
    <Link to="/contact"><button className='navigation'><i className="fa fa-envelope w3-xxlarge"></i><span>Contact</span></button></Link>
    </div>
    </div>

    <main className= 'info'>
    <Route exact path="/" render={() => (
    <Home />
  )}
  />
  <Route path="/home" render={() => (
    <Home />
  )} />
  <Route path="/about" render={() => (
    <About />
  )} />
  <Route path="/my-work" render={() => (
    <MyWork />
  )} />
  <Route path="/contact" render={() => (
    <Contact />
  )} />
  </main>
      <footer id="footer" tabIndex="0">
        <a href="/" aria-label="Home-page" tabIndex="0"><img src={logo} className="App-logo" alt="logo" /><div className='heading'><h1 className='name'>Anna Ikonomova</h1>
              <h2 className='name'> Junior Front-End Web Developer</h2></div></a>
       </footer>
    </div>
  );
}
}
export default App;

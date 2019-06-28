import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';



class Home extends Component {
  render() {
    return (
      <main className="info">
      <header className='home'>
      <Navigation />
      <div className='col-1'><h1 className='header'>Anna Ikonomova</h1><h2 className="subheader">Junior Front-End Developer</h2></div>
      <Link to="/my-work" tabIndex='-1'><button className='work-btn'>
      <span>View my work <i className="fa fa-angle-double-right"></i></span>
      </button>
      </Link>
      </header>
      <div className='col-2'>
      <About />
      <div className='col-3'>
      <Contact />
      </div>
      </div>
            </main>


    );
  }
}

export default Home;

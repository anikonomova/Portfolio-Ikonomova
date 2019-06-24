import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';



class Home extends Component {
  render() {
    return (
      <div className="info">
      <div className='home'>
      <div className='col-1'><h1 className='header'>hello.</h1></div>
      <div className='col-2'>
<button className='myWork'>
<Link to="/my-work"><span>View my work <i className="fa fa-angle-double-right"></i></span></Link></button>

</div>
</div>
<div className='col-3'>
<About />
<div className='col-4'>
<Contact />
</div>
</div>
      </div>


    );
  }
}

export default Home;

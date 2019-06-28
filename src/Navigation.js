import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logo from './Images/logo.png';



class Navigation extends Component {
  render() {
    return (
    <div id= 'menu'>
    <Link to="/" aria-label="Home-page" tabIndex="0"><img src={logo} className="logo" alt="logo" /></Link>
    <ul className='nav' tabIndex='-1'>
    <Link to="/"><li className='navigation'><i className="fa fa-home w3-xxlarge"></i><span>Home</span></li></Link>
    <Link to="/my-work"><li className='navigation'><i className="fa fa-eye w3-xxlarge"></i><span>Work</span></li></Link>
    </ul>
    </div>
    );
  }
}

export default Navigation;

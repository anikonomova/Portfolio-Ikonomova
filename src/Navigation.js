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
    <li className='navigation'><Link to="/"><i className="fa fa-home w3-xxlarge"></i>Home</Link></li>
    <li className='navigation'><Link to="/my-work"><i className="fa fa-eye w3-xxlarge"></i>Work</Link></li>
    </ul>
    </div>
    );
  }
}

export default Navigation;

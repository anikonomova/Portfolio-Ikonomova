import React, { Component } from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';


class Contact extends Component {
  render() {
    return (
      <div className="info">
      <div className='home'>
      <div className='col-1'><h1 className='header'>hello.</h1></div>
      <div className='col-2'><h1 className='header'><button className='myWork'><Link to="/my-work"><span>View my work <i className="fa fa-angle-double-right"></i></span></Link></button>
</h1>
</div>
</div>
      </div>


    );
  }
}

export default Contact;

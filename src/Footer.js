import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
    <footer id="footer" tabIndex='-1'>
      <Link to="/" aria-label="Home-page" tabIndex="0" className='footer-link'><div id='footer-text' className='col-6'><span className='name'>© 2019 - Anna Ikonomova | Junior Front-End Web Developer</span></div></Link>
     </footer>

    );
  }
}

export default Footer;

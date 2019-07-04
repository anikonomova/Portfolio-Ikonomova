import React, { Component } from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';


class Contact extends Component {
  render() {
    return (
      <div className="box3">
      <div className='contact'>
        <SocialIcon className='social' url="https://www.facebook.com/ani.strandjeva" />
        <SocialIcon className='social' url="https://www.linkedin.com/in/anna-ikonomova-11880361/" />
        <SocialIcon className='social' url="https://github.com/anikonomova" />
        <SocialIcon className='social' url="https://codepen.io/an_iko/#" />
        </div>
    </div>
    );
  }
}

export default Contact;

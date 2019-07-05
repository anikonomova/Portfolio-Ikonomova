import React, { Component } from 'react';
import './App.css';
import ReactContactForm from 'react-mail-form';


class Mailform extends Component {
  render() {
    return (
      <div className="form">
      <ReactContactForm to="ani.strandjeva@gmail.com" />
    </div>
    );
  }
}

export default Mailform;

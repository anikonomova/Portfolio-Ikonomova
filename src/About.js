import React, { Component } from 'react';
import './App.css';
import anIko2 from './Images/anIko1.jpg';

class About extends Component {
  render() {
    return (
      <div className="aboutMe">
      <div className='col-4'>
      <img className='anna' src={anIko2} alt='Anna Ikonomova'></img>
      </div>
      <div className='col-5'><h3>About me</h3>
      <p className='about'>My Name is Anna Ikonomova -Junior Front-End Web Developer.<br></br>
      I love to create, to experiment and to learn.<br></br>
      The first line of code, that I wrote, was when the Google Udacity Scolarship challenge
      course began at the end of 2017. <br></br>
      Now I'm still learning and willing to build a career in the field.
      </p>
      <h3>Skills</h3>
      <p className='about'> Html5, CSS3, JavaScript, React, Git, Git hub, Responsive Design and etc.</p>
      <h3>Soft skills</h3>
      <p  className='about'>Flexibility, Strong work ethic and team spirit.</p>
      </div>
    </div>

    );
  }
}

export default About;

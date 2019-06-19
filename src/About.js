import React, { Component } from 'react';
import './App.css';
import ani1 from './Images/1.jpg';

class About extends Component {
  render() {
    return (
      <div className="aboutMe">
      <div className='box2'>
      <img className='anna' src={ani1} alt='Anna Ikonomova'></img>
      </div>
      <div className='box1'><h3>About me</h3>
      <p className='about'>My Name is Anna Ikonomova and I live in Gummersbach, Germany. I am Junior Front-End Web Developer.
      The first line of code, that I wrote, was when the Google Udacity Scolarship Challenge
      course began at the end of 2017. After 3 months I won the Scolarship and I had the chance to study and graduate the Nanodegree program
      for Front-End Web Developers.
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

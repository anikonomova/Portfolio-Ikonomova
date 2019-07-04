import React, { Component } from 'react';
import './App.css';
import ani1 from './Images/1.jpg';
import HTML5 from './Images/html5.png';
import CSS from './Images/css.png';
import JS from './Images/js.png';


class About extends Component {
  render() {
    return (
      <div className="about-me">
      <div className='box2'>
      <img className='anna' src={ani1} alt='Anna Ikonomova'></img>
      </div>
      <div className='box1'><h3 className='title2'>About me</h3>
      <p className='about'>My Name is Anna Ikonomova and I live in Gummersbach, Germany. I am Junior Front-End Web Developer.
      The first line of code, that I wrote, was when the Google Udacity Scholarship Challenge
      course began at the end of 2017. After 3 months I won the scholarship and I had the chance to study and graduate the Nanodegree program
      for Front-End Web Developers.
      Now I'm still learning and willing to build a career in the field.
      </p>
      <h3 className='title2'>Skills</h3>

      <div className='group-logos'>
      <img className='logos' src={HTML5} alt='HTML5 logo'></img>
      <img className='logos' src={CSS} alt='CSS3 logo'></img>
      <img className='logos' src={JS} alt='JS logo'></img>
      </div>

      <ul className='list'>
      <li className='list-item'>Html</li>
      <li className='list-item'>CSS3</li>
      <li className='list-item'>JavaScript</li>
      <li className='list-item'>React</li>
      <li className='list-item'>Git</li>
      <li className='list-item'>Responsive Design</li>
      <li className='list-item'>and etc.</li>
      </ul>
      <h3 className='title2'>Soft skills</h3>
      <p  className='about'>Flexibility, strong work ethic and team spirit.</p>
      </div>
    </div>

    );
  }
}

export default About;

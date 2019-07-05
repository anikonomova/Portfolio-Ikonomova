import React, { Component } from 'react';
import './App.css';
import theRunner from './Images/theRunner.jpg';
import matchingGame from './Images/matchingGame.jpg';
import plovdiv from './Images/plovdiv.jpg';
import pam from './Images/pam.jpg';
import snail from './Images/snail.jpg';
import myReads from './Images/myReads.jpg';
import Contact from './Contact';
import Navigation from './Navigation';




class MyWork extends Component {
  render() {
    return (
      <main className="info">
      <Navigation />
      <div className='container2'>
      <div className='work'>
      <h1 className='featured-work'>Featured work</h1>
      </div>
      <div className='box myReads'>
      <a href="https://github.com/anikonomova/reactnd-project-myreads-starter" target="_blank" rel="noopener noreferrer" >
      <img className='projects' src={myReads} alt='My  reads'></img>
      <h3 className="project-names">My Reads</h3></a>
      </div>
      <div className='box matchingGame'>
      <a href='https://github.com/anikonomova/Memory-game-project' target="_blank" rel="noopener noreferrer" >
      <img className='projects' src={matchingGame} alt='Memory game'></img>
      <h3 className="project-names">Memory game</h3></a>
      </div>
      <div className='box plovdiv'>
      <a href='https://github.com/anikonomova/Plovdiv-map' target="_blank" rel="noopener noreferrer" >
      <img className='projects' src={plovdiv} alt='Restaurants in Plovdiv'></img>
      <h3 className="project-names">Restaurants in Plovdiv</h3></a>
      </div>
      <div className='box pam'>
      <a href="https://github.com/anikonomova/Pixel-Art-Maker-Udacity" target="_blank" rel="noopener noreferrer" >
      <img className='projects' src={pam} alt='Pixel art maker'></img>
      <h3 className="project-names">Pixel art maker</h3></a>
      </div>
      <div className='box snail'>
      <a href="https://github.com/anikonomova/animal-trading-card" target="_blank" rel="noopener noreferrer" >
      <img className='projects' src={snail} alt='Snail card'></img>
      <h3 className="project-names">Animal trading card</h3></a>
      </div>
      <div className='box theRunner'>
      <a href='https://github.com/anikonomova/Classic-arcade-game-clone' target="_blank" rel="noopener noreferrer" >
      <img className='projects' src={theRunner} alt='The Runner'></img>
      <h3 className="project-names">The Runner game</h3></a>
      </div>
</div>
      <div className='col-3'>
          <Contact />
            </div>
</main>
  );
  }
}

export default MyWork;

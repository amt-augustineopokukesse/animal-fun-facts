import { animals } from './animals';
// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const showBackground = true;
const background = <img src='/images/ocean.jpg' className='background' alt='ocean'/>

const images = [];
for (const animal in animals) {
  images.push(
    <img 
    key={animal} 
    className='animal' 
    alt={animal} 
    src={animals[animal].image} 
    aria-label={animal} 
    role='button' 
    onClick={displayFact} 
    />
  )
}

//event function
function displayFact(e) {
  const animalName = e.target.alt;
  const animalInfo = animals[animalName];
  const randIndex = Math.floor(Math.random() * animalInfo.facts.length); 
  //generate random fact
  const randomFact = animalInfo.facts[randIndex];
  document.getElementById('fact').innerHTML = randomFact;
}

const animalFacts = (
  <div>
    <h1>{title || 'Click an animal for a fun fact'}</h1>
    {showBackground && background}
    <div className='animals'>
      {images}
    </div>
    <p id='fact'></p>
  </div>
  );

//Render JSX
ReactDOM.render(animalFacts, document.getElementById('root'));

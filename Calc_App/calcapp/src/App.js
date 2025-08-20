import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [numDisplay, setDisplayNum] = useState(0);

  return (
    
    // Main DIV that will hold all of the Elements for the 
    <div>
    <h1>Calulator But REACT</h1>
    <p>{numDisplay}</p>

    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>
    <button>8</button>
    <button>0</button>
    </div>

  );
}

export default App;

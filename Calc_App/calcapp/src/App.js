import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [numDisplay, setDisplayNum] = useState(0);
  const [num1, setnum1] = useState(0);
  const [num2, setNum2] = useState(0);
  
  // This is a boolean to check if num1 is set
  const isfirstnumset = false;

  function enterNum (prop) {
    setDisplayNum(prop);

    
  }


  return (
    
    // Main DIV that will hold all of the Elements for the 
    <div>
    <h1>Calulator But REACT</h1>
    <p>{numDisplay}</p>
    
    {/* Div For Buttons 1 - 3 */}
    <div>
    <button onClick={() => enterNum(1)}>1</button> 
    <button onClick={() => enterNum(2)}>2</button>
    <button onClick={() => enterNum(3)}>3</button>
    </div>

    <div>
    <button onClick={() => enterNum(4)}>4</button>
    <button onClick={() => enterNum(5)}>5</button>
    <button onClick={() => enterNum(6)}>6</button>
    </div>

    <div>
    <button onClick={() => enterNum(7)}>7</button>
    <button onClick={() => enterNum(8)}>8</button>
    <button onClick={() => enterNum(9)}>9</button>
    </div>

    </div>
    

  );
}

export default App;

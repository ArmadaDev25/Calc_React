import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [numDisplay, setDisplayNum] = useState(0);
  const [num1, setnum1] = useState(0);
  const [num2, setNum2] = useState(0);
  
  // This is a boolean to check if num1 is set
  const is = false;

  function Num1 () {
    setDisplayNum(1);
  }
  function enterNum2 () {
    setDisplayNum(2);
  }
  function Num3 () {
    setDisplayNum(3);
  }
    function enterNum4 () {
    setDisplayNum(4);
  }
    function enterNum5 () {
    setDisplayNum(5);
  }
    function enterNum6 () {
    setDisplayNum(6);
  }

  return (
    
    // Main DIV that will hold all of the Elements for the 
    <div>
    <h1>Calulator But REACT</h1>
    <p>{numDisplay}</p>
    
    {/* Div For Buttons 1 - 3 */}
    <div>
    <button onClick={Num1}>1</button> 
    <button onClick={enterNum2}>2</button>
    <button onClick={Num3}>3</button>
    </div>

    <div>
    <button onClick={enterNum2}>4</button>
    <button onClick={enterNum2}>5</button>
    <button onClick={enterNum2}>6</button>
    </div>

    <div>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    </div>

    </div>
    

  );
}

export default App;

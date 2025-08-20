import logo from './logo.svg';
import './global.css';
import React, { useState } from 'react';

function App() {
  const [numDisplay, setDisplayNum] = useState(0);
  const [num1, setnum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('');
  


  // This function will set either the first number or the second number in the equation
  // This is depending on whether the first number is already set
  function eqNumSet (prop){
    // If the first number is not set, set it to the prop value
    if (num1 === 0) {
      setnum1(prop);
      
    }else{
      setNum2(prop);
    }
  }

  // This Function is for setting the numbers used in the equation as well as displaying the currently entered number
  function enterNum (prop) {
    setDisplayNum(prop);
    eqNumSet(prop);
  }

  // This function will set the operator for the equation
  function setOperaterFunc (prop){
    setOperator(prop);
  }

  // This function will calculate the result of the equation based on the numbers and operator set
  // Called when the user presses the equals button
  function calculateResult() {
    switch(operator){
      case "+":
        setDisplayNum(num1+num2);
        clearEquation();
        break;
      case "-":
        setDisplayNum(num1-num2);
        clearEquation();
        break;
      case "*":
        setDisplayNum(num1*num2);
        clearEquation();
        break;
      case "/":
        setDisplayNum(num1/num2);
        clearEquation();
        break;
    }
    
  }

  function clearEquation(){
    setnum1(0);
    setNum2(0);
    setOperator('')
  }



  return (
    
    // Main DIV that will hold all of the Elements for the 
    <div>
    <h1>Calulator But REACT</h1>
    <p>Current Equation: {num1} {operator} {num2} </p>
    <p>{numDisplay}</p>

    <div>
      <button onClick={() => setOperaterFunc('+')}>+</button>
      <button onClick={() => setOperaterFunc('-')}>-</button>
      <button onClick={() => setOperaterFunc('*')}>*</button>
      <button onClick={() => setOperaterFunc('/')}>/</button>
      <button onClick={calculateResult}>=</button>
    </div>
    


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

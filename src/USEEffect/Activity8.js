import React, { useState } from 'react';

const Addition = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [sum, setSum] = useState(null);

  const handleAddition = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    
    if (!isNaN(num1) && !isNaN(num2)) {
      setSum(num1 + num2);
    } else {
      setSum('Invalid input');
    }
  };

  return (
    <div style={{display:'flex', flexDirection:'column', width:'50%',alignItems:'center',gap:'20px'}}>
      <h2>Addition Calculator</h2>
      <div>
        <label htmlFor="firstNumber">First Number:</label>
        <input
          type="text"
          id="firstNumber"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="secondNumber">Second Number:</label>
        <input
          type="text"
          id="secondNumber"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
      </div>
      <button onClick={handleAddition}>Add</button>
      {sum !== null && (
        <div>
          <strong>Result: {sum}</strong>
        </div>
      )}
    </div>
  );
};

export default Addition;
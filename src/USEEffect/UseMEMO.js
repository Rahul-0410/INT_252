// // increase the performance is returns a memorized value
// import React,{useMemo,useState} from 'react'

// function UseMEMO() {
//     // const [add,setAdd] = useState(0);
//     // const [minus,setMinus] = useState(100);


//     const [myNum, setMyNum]=useState(0);
//     const [show,setShow] = useState(true);

//     const getValue=()=>{
//         return setMyNum(myNum+1);
//     }
//     const countNumber=(num)=>{
//         console.log('🚀 ~ file:useMemo.js ~ line:16 ~ countnumber ~num ',num);
        
//     }

    
//     // const multi=useMemo( function multip(){
//     //     console.log(1.11111);
        
//     //        return add*10;
//     //      })
//   return (
//     <>
//        {/* <p>{multi}</p>  <br/>
//         <button onClick={()=>setAdd(add+1)}>Addition</button>
//         <span>{add}</span>
//         <br/>
//         <br/>
//         <button onClick={()=>setMinus(minus-1)}>Subtraction</button>
//         <span>{minus}</span> */}
//         <button></button>
//     </>
//   )
// }

// export default UseMEMO;

import React, { useState, useMemo} from 'react';

const Usememo = () => {
  
  // State for number and show toggle
  const [myNum, setMyNum] = useState(0); // Fixed the typo in setMyNum
  const [show, setShow] = useState(true);

  // Function to increment the number
  const getValue = () => {
    setMyNum(myNum + 1); // Corrected the function name to setMyNum
  };

  // Heavy computation simulation
  const countNumber = (num) => {
    console.log(" - file: Memo.jsx ~ line 12 ~ countNumber ~ num");
    for (let i = 0; i <= 100000000; i++) {} // Simulates heavy computation
    return num;
  };

  // Memoized value to avoid re-computation unless myNum changes
  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]); // Fixed the typo from muNum to myNum

  return (
    <>
      {/* Button to increment the count */}
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>

      {/* Displaying the memoized result */}
      <p> My new number: {checkData}</p>

      {/* Button to toggle show/hide state */}
      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me plz"}
      </button>
    </>
  );
}

export default Usememo;
import React, { useEffect, useState, useContext } from 'react'
import { NameContext } from './Context';
import Child from './Child';

function First() {
    const[count,setCount]= useState(0);
    // useEffect(()=>{
        // console.log("document mount");
        
    // })
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        if(count>0){
        setCount(count-1);
        }
    }
useEffect(() => {
    // const timer = setInterval(() => {
    //     setCount(prevCount => prevCount + 1);
    // }, 1000);

    // return () => clearInterval(timer); 
    console.log(`you clicked ${count} times`);
    
}, [count]);

const  {name,setName}  = useContext(NameContext);

return (
    <div>
        <Child/>
        <h2>{count}</h2>
        <h3>{name}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
)
}

export default First;
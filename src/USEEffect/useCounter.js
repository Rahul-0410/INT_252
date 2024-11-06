import React,{useState} from 'react'


function useCounter(initial = 0) {
  const[count,setCount]= useState(initial);
  const increment=()=> setCount((prev)=>prev+1);
  const decrement=()=> setCount((prev)=>prev-1);
  const reset=()=>setCount(initial);

  return {count,increment,decrement,reset};
 
}

export default useCounter;
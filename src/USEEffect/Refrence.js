import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Refrence() {
    const [myData, setData] = useState("");
    // const [count,setCount] = useState(0);

    const count=useRef(10);
    // console.log(count);
    
    const inputRef = useRef(null);
    const but=useRef(null);

    // useEffect(() => {
    //     // setCount(count+1);
    //     // count.current = count.current + 1;
    //     if (inputRef.current) {
    //         inputRef.current.style.backgroundColor = 'red';
    //     }
    //     but.current.style.backgroundColor = 'black';
    //     but.current.style.color="white"
    // }, [myData]);
    const styless=()=>{
        if (inputRef.current) {
            inputRef.current.style.backgroundColor = 'red';
        }
        but.current.style.backgroundColor = 'black';
        but.current.style.color="white"
    }
  return (
    <div>
        <input ref={inputRef} type="text" value={myData} onChange={(e)=>setData(e.target.value)} />
        <butto ref={but} onClick={styless}>Submit</butto>
        {/* <div>{`data rendered for ${count.current}`}</div> */}
    </div>
  )
}

export default Refrence;
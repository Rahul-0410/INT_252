import React, { useRef } from 'react'

function Uncontrolled() {
    const inputRef=useRef(null);
    const handleSUbmit=(e)=>{
        e.preventDefault();
        console.log(`Submitted value: ${inputRef.current.value}`);
        
        alert("form submitted");
    }
  return (
    
        <div>
           <h1> Uncontrolled Form</h1>
        <form onSubmit={handleSUbmit} style={{display:'flex',flexDirection:'column', gap:'20px',
             width:'50%', alignItems:'center',justifyContent:'center'}}>
            <div style={{display:'flex', marginTop:'30px',gap:'10px'}}>

            <label >Name: </label>
            <input type="text" ref={inputRef} />
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Uncontrolled
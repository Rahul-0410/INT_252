import React, { useState } from 'react'

function Controlled() {
    const [inputValue,setInputValue] = useState("");
    const handleSUbmit=(e)=>{
        e.preventDefault();
        console.log(`Submitted value: ${inputValue}`);
        
        alert("form submitted");
    }
  return (
    <div>
        <form onSubmit={handleSUbmit} style={{display:'flex',flexDirection:'column', gap:'20px',
             width:'50%', alignItems:'center',justifyContent:'center'}}>
            <div style={{display:'flex', marginTop:'30px',gap:'10px'}}>

            <label >Name: </label>
            <input type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

// when useref is used for form targetting it becomes uncontolled component 

export default Controlled;
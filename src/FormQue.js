import React from 'react'

function Form() {
    const [name,setName] = React.useState('');
    const [age,setAge] = React.useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Age: ${age}`);
    }
  return (
    <div  style={{marginTop: "20px"}}>
        <form onSubmit={handleSubmit} style={{display:"flex",
        flexDirection:"column",
        width:"30%",
        margin:"auto",
    }}>
            <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input type='number' name='age' value={age} onChange={(e)=>setAge(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
// import React, { useContext, useEffect, useRef, useState } from 'react'
// import { ThemeContext } from './ThemeContext';

// function Activity5() {
//     const [count,setCount] = useState(0);
//     const increment = () => {
//         setCount(count+1);
//     }
//     const decrement = () => {
//         setCount(count-1);
//     }
//     useEffect(()=>{
//         console.log(`you clicked ${count} times`);
        
//     },[count]);

    
//     const {theme,setTheme} = useContext(ThemeContext);
//     const fon=useRef(null);
//     const changeBC=()=>{
//         fon.current.style.color="white";
//         setTheme(theme=='dark'? 'light':'dark');
//     }
//   return (
//     <div>
//         <h1 ref={fon}>Counter: {count}</h1>
//         <button  onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>

//         <button onClick={changeBC}>Switch To dark mode</button>
//     </div>
//   )
// }

// export default Activity5

import React, { useState, useContext, useEffect, createContext } from "react";


const ThemeContext = createContext();

const Activity = () => {
    const [counter, setCounter] = useState(0); 
    const [theme, setTheme] = useState("light");


    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

 
    useEffect(() => {
        console.log(`Counter value is now: ${counter}`);
    }, [counter]);


    const appStyle = {
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        textAlign: "center",
        minHeight: "100vh",
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div style={appStyle}>
                <h1>Counter: {counter}</h1>
                <button onClick={() => setCounter(counter + 1)}>Increase</button>
                <button onClick={() => setCounter(counter - 1)}>Decrease</button>
                <br />
                <button onClick={toggleTheme}>
                    Switch to {theme === "light" ? "Dark" : "Light"} Theme
                </button>
            </div>
        </ThemeContext.Provider>
    );
};

export default Activity;
import React, { useState } from 'react';

function Time() {
    const [currentTime, setCurrentTime] = useState('');

    const getTime = () => {
        const date = new Date();
        const time = date.toLocaleTimeString();
        setCurrentTime(time);
    };

    return (
        <div style={{marginTop:"20px"}}>
            <button onClick={getTime}>Get Time</button>
            <p>{currentTime}</p>
        </div>
    );
}


export default Time;
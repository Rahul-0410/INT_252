import React, { useRef } from 'react';


const Focus = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    const handleBlur = () => {
        inputRef.current.blur();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Click buttons to focus/blur" />
            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleBlur}>Blur</button>
        </div>
    );
};

export default Focus;
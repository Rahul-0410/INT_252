import React from 'react';

export const NameContext = React.createContext();

export const Context = ({ children }) => {
    const [name, setName] = React.useState('John');
    return (
        <NameContext.Provider value={{name}}>
            {children}
        </NameContext.Provider>
    );
};
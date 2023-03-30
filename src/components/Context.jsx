import React, { createContext, useState } from 'react';

export const ContextValue = createContext();

const Context = ({ children }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  console.log('name', name);
  return (
    <ContextValue.Provider
      value={{
        nameValue: name,
        addName: setName,
        numberValue: number,
        addNumder: setNumber,
      }}
    >
      {children}
    </ContextValue.Provider>
  );
};

export default Context;

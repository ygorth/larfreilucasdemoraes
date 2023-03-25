import React, { useState, createContext } from 'react';

export const MobileContext = createContext({});

export function MobileProvider({ children }) {
  const [mobile, setMobile] = useState(true);

  return (
    <MobileContext.Provider value={{ mobile, setMobile }}>

      {children}
      
    </MobileContext.Provider>
  )

}

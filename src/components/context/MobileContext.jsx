import React, { useState, createContext, useEffect } from 'react';

export const MobileContext = createContext({});

export function MobileProvider({ children }) {
  const [mobile, setMobile] = useState(true);
  const [screen, setScreen] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={{ mobile, setMobile, screen }}>

      {children}
      
    </MobileContext.Provider>
  )

}

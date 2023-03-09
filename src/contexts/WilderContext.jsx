import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const WilderContext = createContext();
export { WilderContext };

export function WilderContextProvider({ children }) {
  const [wilders, setWilders] = useState([]);

  const getWilders = async () => {
    const results = await axios.get("http://localhost:5000/api/wilder")
    setWilders(results.data)
   }
  useEffect(() => {    
       getWilders();
  }, []);

  return (
    <WilderContext.Provider value={{ wilders, setWilders, getWilders }}>
      {children}
    </WilderContext.Provider>
  );
}

export const useWilderContext = () => useContext(WilderContext);


